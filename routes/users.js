const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const model = require('../models/users')
const auth = require('../controllers/auth')
const can = require('../permissions/users')
const router = Router({prefix:'/api/v1/users'})
const {validateUser} = require('../controllers/validation')

router.get('/', auth, getAll)
router.post('/', bodyParser(), validateUser, createUser)

async function getAll(ctx) {
  const permission = can.readAll(ctx.state.user)
  if(!permission.granted) {
    ctx.status = 403
  } else {
    const result = await model.getAll()
    if(result.length) {
      ctx.body = result
    }
  }
}

async function createUser(ctx) {
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

module.exports = router