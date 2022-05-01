const db = require('../helpers/database')

exports.findByUsername = async function getByUsername(username) {
  const query = "SELECT * FROM users WHERE username = ?"
  let values = [username]
  const user = await db.run_query(query, values)
  return user
}

exports.getAll = async function getAll (page, limit, order) {
  // TODO: use page, limit, order to give pagination
  let query = "SELECT * FROM users;"
  let data = await db.run_query(query)  
  return data
}