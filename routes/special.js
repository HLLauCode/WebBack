const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const auth = require('../controllers/auth')

const router = Router({prefix: '/api/v1'})

router.get('/', publicAPI)
router.get('/private', auth, privateAPI)

function publicAPI(ctx) {
  ctx.body = {message:'This is the public page'}
}

function privateAPI(ctx) {
  const user = ctx.state.user
  ctx.body = {
    message:`Hello ${user.username}, this is the private page`, user
  }
}



module.exports = router;
