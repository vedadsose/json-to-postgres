const {
  pipe,
  keys,
  reduce,
  is,
  replace,
  filter,
  split,
  path,
  join,
  map
} = require('ramda')

const getFieldType = field => {
  if (is(String, field)) {
    return 'VARCHAR'
  }

  if (is(Number, field)) {
    return 'NUMERIC'
  }

  if (is(Boolean, field)) {
    return 'BOOLEAN'
  }

  if (is(Array, field) && is(String, field[0])) {
    return 'VARCHAR'
  }

  if (field === null) {
    return null
  }

  if (typeof field === 'object') {
    return 'JSON'
  }

  throw new Error(`Missing definition for ${typeof field}`)
}

const getFieldName = (prefix, key) => {
  if (!prefix) {
    return key
  } else {
    return [prefix, key].join('__')
  }
}

const getFieldTypes = (body, prefix = '') =>
  pipe(
    keys,
    reduce((acc, key) => {
      const fieldName = getFieldName(prefix, key)
      const type =
        fieldName === 'track__availablemarkets' ||
        fieldName === 'track__album__availablemarkets'
          ? 'VARCHAR'
          : getFieldType(body[key])
      console.log({ fieldName, type })
      // Skip null types
      if (!type) return acc

      // Split out JSON fields
      if (type === 'JSON' && !is(Array, body[key])) {
        return { ...acc, ...getFieldTypes(body[key], fieldName) }
      } else {
        return { ...acc, [fieldName]: type }
      }
    }, {})
  )(body)

const getFieldValue = field => {
  if (is(String, field)) {
    return `'${escapeString(field)}'`
  }

  if (is(Number, field)) {
    return field
  }

  if (is(Boolean, field)) {
    return field ? 'TRUE' : 'FALSE'
  }

  if (is(Array, field)) {
    if (is(String, field[0])) {
      return `'${field.join(';')}'`
    }
  }

  if (field === null) {
    return 'NULL'
  }

  if (typeof field === 'object') {
    return `'${escapeString(JSON.stringify(field))}'`
  }

  return field
}

const parseEntry = (tableName, schema) => entry => {
  const filledKeys = pipe(
    keys,
    filter(key => {
      const field = path(split('__', key), entry)
      return !!field && field.length > 0
    })
  )(schema)

  return `INSERT INTO ${tableName} (${join(', ', filledKeys)}) VALUES (${map(
    key => getFieldValue(path(split('__', key), entry)),
    filledKeys
  )});`
}

const escapeString = replace(/'/g, "''")

module.exports = {
  getFieldTypes,
  getFieldValue,
  parseEntry
}
