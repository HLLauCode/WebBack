const db = require('../helpers/database')

//get a single dog by its id  
exports.getById = async function getById (id) {
  let query = "SELECT * FROM dogs WHERE ID = ?"
  let values = [id]
  let data = await db.run_query(query, values)
  return data
}

//list all the dogs in the database
exports.getAll = async function getAll (page, limit, order) {
  // TODO: use page, limit, order to give pagination
  let query = "SELECT * FROM dogs;"
  let data = await db.run_query(query)  
  return data
}

//create a new dog in the database
exports.add = async function add (dog) {  
  let keys = Object.keys(dog)
  let values = Object.values(dog)  
  keys = keys.join(',')   
  let parm = ''
  for(i=0; i<values.length; i++){ parm +='?,'}
  parm=parm.slice(0,-1)
  let query = `INSERT INTO dogs (${keys}) VALUES (${parm})`
  try{
    await db.run_insert(query, values)  
    return {"status": 201}
  } catch(error) {
    return error
  }
}

//updating exsiting dog in the database
exports.updateById = async function updateById (dogID, dog) {
  let sql = `UPDATE dogs SET name = '${dog.name}', gender = '${dog.gender}', age = ${dog.age}, breed = '${dog.breed}', imageurl = '${dog.imageurl}', status = ${dog.status}, summary = '${dog.summary}' WHERE id = ${dogID}`
  let values = Object.values(dog)
  try {
    await db.run_update(sql, values)
    return {"status": 201}
  } catch(error) {
    return error
  }
}

exports.deleteById = async function deleteById (id) {
  let query = "DELETE FROM dogs WHERE ID = ?"
  let values = [id]
  let data = await db.run_query(query, values)
  return data
}