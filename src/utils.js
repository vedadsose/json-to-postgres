const { pipe, keys, reduce, is, replace } = require('ramda')

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

  if (field === null) {
    return null
  }

  if (typeof field === 'object') {
    return 'JSON'
  }

  throw new Error(`Missing definition for ${typeof field}`)
}

const getFieldTypes = body =>
  pipe(
    keys,
    reduce((acc, key) => {
      const type = getFieldType(body[key])

      // Skip null types
      if (!type) return acc

      return { ...acc, [key]: getFieldType(body[key]) }
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

  if (field === null) {
    return 'NULL'
  }

  if (typeof field === 'object') {
    return `'${escapeString(JSON.stringify(field))}'`
  }

  return field
}

const escapeString = replace(/'/g, "''")

module.exports = {
  getFieldTypes,
  getFieldValue
}
