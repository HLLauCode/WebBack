const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const model = require('../models/dogs')
const {validateDog} = require('../controllers/validation')
const auth = require('../controllers/auth')
const router = Router({prefix: '/api/v1/dogs'})
const can = require('../permissions/dogs')

router.get('/', getAll)
router.post('/', auth, bodyParser(), validateDog, createDog)
router.get('/:id([0-9]{1,})', getById)
router.put('/:id([0-9]{1,})', auth, bodyParser(), updateDog)
router.del('/:id([0-9]{1,})', auth, deleteDog)

async function getAll(ctx, next){  
  let dogs = await model.getAll()
  if (dogs.length) {
    ctx.body = dogs
  }
}  

async function getById(ctx) {
  let id = ctx.params.id
  let dog = await model.getById(id)
  if (dog.length) {
    ctx.body = dog[0]
  }
}

async function createDog(ctx) {
  const permission = can.create(ctx.state.user)
  if (!permission.granted) {
    ctx.status = 403
  } else {
  const body = ctx.request.body
  let result = await model.add(body)
  if (result) {
    ctx.status = 201
    ctx.body = result
  } else {
    ctx.status=201
    ctx.body = "{}"
  }
  }
}

async function updateDog(ctx) {
  const permission = can.update(ctx.state.user)
  if (!permission.granted) {
    ctx.status = 403
  } else {
  let id = ctx.params.id
  let body = ctx.request.body
  let result = await model.updateById(id, body)
  if (result) {
    ctx.status = 200
    ctx.body = {
      status: 'success',
      data: body
    }
  } else {
    ctx.status = 404
    ctx.body = {
      status: 'error',
      message: 'That dog does not exist.'
    }
  }
  }
}

async function deleteDog(ctx) {
  const permission = can.delete(ctx.state.user)
  if (!permission.granted) {
    ctx.status = 403
  } else {
  let id = ctx.params.id
  let result = await model.deleteById(id)
  if (result) {
    ctx.status = 200
    ctx.body = {
      status: 'success',
      message: 'deleted'
     }
  }
  }
}

module.exports = router;
