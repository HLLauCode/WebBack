const db = require('../helpers/database')

exports.findByUsername = async function getByUsername (username) {
  const query = 'SELECT * FROM users WHERE username = ?'
  const values = [username]
  const user = await db.run_query(query, values)
  return user
}

exports.getAll = async function getAll (page, limit, order) {
  // TODO: use page, limit, order to give pagination
  const query = 'SELECT * FROM users;'
  const data = await db.run_query(query)
  return data
}

exports.add = async function add (user) {
  let keys = Object.keys(user)
  const values = Object.values(user)
  keys = keys.join(',')
  let parm = ''
  for (i = 0; i < values.length; i++) { parm += '?,' }
  parm = parm.slice(0, -1)
  const query = `INSERT INTO users (${keys}) VALUES (${parm})`
  try {
    await db.run_insert(query, values)
    return { status: 201 }
  } catch (error) {
    return { status: 400 , error }
  }
}
