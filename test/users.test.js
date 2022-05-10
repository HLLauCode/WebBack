const request = require('supertest')
const app = require ('./app.test')

const expectedGet = {
        "id": 2,
        "firstname": "bob",
        "lastname": "cheung",
        "username": "bob",
        "about": null,
        "dateregistered": "2022-04-24T16:20:13.568Z",
        "password": "456",
        "passwordsalt": null,
        "email": "bob@example.com",
        "avatarurl": null,
        "role": "user"
    }

const postUser = {
  "email": "jesttest4@example.com",
  "username": "jesttest4",
  "password": "123"
}

describe('Get all users', ()=> {
  it('Return all users', async() => {
    const resGetAll = await request(app.callback())
    .get('/api/v1/users')
    .set('Authorization', 'Basic YWRtaW46YWRtaW4=')
    .send({})
    expect(resGetAll.statusCode).toEqual(200)
    expect(resGetAll.type).toEqual("application/json")
    expect(resGetAll.body).toContainEqual(expectedGet)
  }, 10000)
})

describe('Create user', () => {
  it('Return status code 201', async() => {
    const resCreate = await request(app.callback())
    .post('/api/v1/users')
    .send(postUser)
    expect(resCreate.statusCode).toEqual(201)
  }, 10000)
})