const {Validator, ValidationError} = require('jsonschema')
const schemaDog = require('../schemas/dog.schema.js')
const schemaUser = require('../schemas/users.schema.js')
const vD = new Validator()
const vU = new Validator()

exports.validateDog = async (ctx, next) => {
  const validationOptions = {
    throwError: true,
    allowUnknownAttributes: false
  }
  
  const body = ctx.request.body;
  try {
    vD.validate(body, schemaDog, validationOptions)
    console.log('dog')
    await next()
  } catch (error) {
    if (error instanceof ValidationError) {
      ctx.body = error
      ctx.status = 400
    } else {
      throw error
    }
  }
}

exports.validateUser = async (ctx, next) => {
  const validationOptions = {
    throwError: true,
    allowUnknownAttributes: false
  }
  
  const body = ctx.request.body;
  try {
    vU.validate(body, schemaUser, validationOptions)
    await next()
  } catch (error) {
    if (error instanceof ValidationError) {
      ctx.body = error
      ctx.status = 400
    } else {
      throw error
    }
  }
}

