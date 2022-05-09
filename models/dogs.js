const db = require('../helpers/database')

// get a single dog by its id
exports.getById = async function getById (id) {
  const query = 'SELECT * FROM dogs WHERE ID = ?'
  const values = [id]
  const data = await db.run_query(query, values)
  return data
}

// list all the dogs in the database
exports.getAll = async function getAll (page, limit, order) {
  // TODO: use page, limit, order to give pagination
  const query = 'SELECT * FROM dogs;'
  const data = await db.run_query(query)
  return data
}

// create a new dog in the database
exports.add = async function add (dog) {
  let keys = Object.keys(dog)
  const values = Object.values(dog)
  keys = keys.join(',')
  let parm = ''
  for (i = 0; i < values.length; i++) { parm += '?,' }
  parm = parm.slice(0, -1)
  const query = `INSERT INTO dogs (${keys}) VALUES (${parm})`
  try {
    await db.run_insert(query, values)
    return { status: 201 }
  } catch (error) {
    return error
  }
}

// updating exsiting dog in the database
exports.updateById = async function updateById (dogID, dog) {
  const sql = `UPDATE dogs SET name = '${dog.name}', gender = '${dog.gender}', age = ${dog.age}, breed = '${dog.breed}', height = ${dog.height}, weight = ${dog.weight}, imageurl = '${dog.imageurl}', summary = '${dog.summary}' WHERE id = ${dogID}`
  const values = Object.values(dog)
  try {
    await db.run_update(sql, values)
    return { status: 201 }
  } catch (error) {
    return error
  }
}

exports.deleteById = async function deleteById (id) {
  const query = 'DELETE FROM dogs WHERE ID = ?'
  const values = [id]
  const data = await db.run_query(query, values)
  return data
}
