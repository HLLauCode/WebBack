const request = require('supertest')
const app = require ('./app.test')

const expectedGet = {
    "id": 20,
    "name": "friday",
    "gender": "F",
    "age": 2.2,
    "breed": "Labrador Retriever",
    "imageurl": "https://petkeen.com/wp-content/uploads/2021/05/labrador-retriever-standing-on-green-meadow-760x507.jpg",
    "summary": "Good girl",
    "datecreated": "2022-05-07T10:30:50.769Z",
    "height": 39,
    "weight": 29
}

const postTest = {
        "name": "sunday",
        "age": 1.7,
        "breed": "Labrador Retriever",
        "weight": 24,
        "height": 37.5,
        "gender": "M",
        "imageurl": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F06%2F25%2Flabrador-retriever-yellow-sitting-275580695-2000.jpg",
        "summary": "Good Dog"
}

const putTest = {
        "name": "thursday",
        "age": 1.9,
        "breed": "Golden Retriever",
        "weight": 24,
        "height": 37.5,
        "gender": "M",
        "imageurl": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F06%2F25%2Flabrador-retriever-yellow-sitting-275580695-2000.jpg",
        "summary": "Good Dog"
}

describe('Get all dogs', ()=> {
  it('Return all dogs', async() => {
    const resGetAll = await request(app.callback())
    .get('/api/v1/dogs')
    .send({})
    expect(resGetAll.statusCode).toEqual(200)
    expect(resGetAll.type).toEqual("application/json")
    expect(resGetAll.body).toContainEqual(expectedGet)
  }, 10000)
})

describe('Get dog by ID', () => {
  it('Return a dog with ID 20', async() => {
    const resGetID = await request(app.callback())
    .get('/api/v1/dogs/20')
    .send({})
    expect(resGetID.statusCode).toEqual(200)
    expect(resGetID.type).toEqual("application/json")
    expect(JSON.stringify(resGetID.body)).toEqual(JSON.stringify(expectedGet))
  }, 10000)
})

describe('Create dog', () => {
  it('Return status code 201', async() => {
    const resCreate = await request(app.callback())
    .post('/api/v1/dogs')
    .set('Authorization', 'Basic YWRtaW46YWRtaW4=')
    .send(postTest)
    expect(resCreate.statusCode).toEqual(201)
  }, 10000)
})

describe('Update dog by ID', () => {
  it('Return status code 201', async() => {
    const resPut = await request(app.callback())
    .put('/api/v1/dogs/20')
    .set('Authorization', 'Basic YWRtaW46YWRtaW4=')
    .send(putTest)
    expect(resPut.statusCode).toEqual(200)
  }, 10000)
})

describe('Delete dog by ID', () => {
  it('Return status code 200', async() => {
    const resDelete = await request(app.callback())
    .delete('/api/v1/dogs/35')
    .set('Authorization', 'Basic YWRtaW46YWRtaW4=')
    .send({})
    expect(resDelete.statusCode).toEqual(200)
  }, 10000)
})

