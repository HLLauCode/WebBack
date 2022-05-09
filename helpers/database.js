const { Sequelize, QueryTypes } = require('sequelize')
const info = require('../config')

exports.run_query = async function run_query (query, values) {
  try {
    const sequelize = new Sequelize(`postgres://${info.config.user}:${info.config.password}@${info.config.host}:${info.config.port}/${info.config.database}`)
    await sequelize.authenticate()
    const data = await sequelize.query(query, {
      replacements: values,
      type: QueryTypes.SELECT
    })
    await sequelize.close()
    return data
  } catch (error) {
    console.error(error, query, values)
    throw ('Database query error', error)
  }
}

exports.run_insert = async function run_insert (sql, values) {
  try {
    const sequelize = new Sequelize(`postgres://${info.config.user}:${info.config.password}@${info.config.host}:${info.config.port}/${info.config.database}`)
    await sequelize.authenticate()

    console.log('start ' + values)

    const data = await sequelize.query(sql, {
      replacements: values,
      type: QueryTypes.INSERT
    })
    console.log('end')
    await sequelize.close()
    console.log('return')
    return data
  } catch (error) {
    console.error(error, query, values)
    throw ('Database query error', error)
  }
}

exports.run_update = async function run_update (sql, values) {
  try {
    const sequelize = new Sequelize(`postgres://${info.config.user}:${info.config.password}@${info.config.host}:${info.config.port}/${info.config.database}`)
    await sequelize.authenticate()
    console.log('start updating ' + values)
    const data = await sequelize.query(sql, {
      replacements: values,
      type: QueryTypes.UPDATE
    })
    console.log('end')
    await sequelize.close()
    console.log('return')
    return data
  } catch (error) {
    console.error(error, query, values)
    throw ('Database query error', error)
  }
}
