const Koa = require('koa')
const static = require('koa-static-router')
const cors = require('@koa/cors')

const app = new Koa()

const options = {
  origins: '*'
}

const special = require('./routes/special')
const dogs = require('./routes/dogs')
const users = require('./routes/users')

app.use(cors());
app.use(special.routes())
app.use(dogs.routes())
app.use(users.routes())
app.use(static({dir:'docs', router:'/doc/'}))

let port = process.env.PORT || 10889;
app.listen(port)
console.log('API is ready')