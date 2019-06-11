const { pipe, keys, reduce, is, replace } = require('ramda')

const getFieldType = field => {
  if (is(String, field)) {
    return 'VARCHAR'
  }

  if (is(Number, field)) {
    return 'NUMERIC'
  }

  if (field === null) {
    return null
  }

  if (typeof field === 'object') {
    const innerKeys = keys(field)
    if (innerKeys.length === 1) {
      switch (innerKeys[0]) {
        case '$oid':
          return 'VARCHAR'
        case '$numberLong':
          return 'BIGINT'
        default:
          return 'JSON'
      }
    } else {
      return 'JSON'
    }
  }

  return typeof field
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

  if (field === null) {
    return 'NULL'
  }

  if (typeof field === 'object') {
    const innerKeys = keys(field)
    if (innerKeys.length === 1) {
      switch (innerKeys[0]) {
        case '$oid':
          return `'${field[innerKeys[0]]}'`
        case '$numberLong':
          return field[innerKeys[0]]
        default:
          return `'${JSON.stringify(field)}'`
      }
    } else {
      return `'${JSON.stringify(field)}'`
    }
  }

  return field
}

const escapeString = replace(/'/g, "''")

module.exports = {
  getFieldTypes,
  getFieldValue
}
