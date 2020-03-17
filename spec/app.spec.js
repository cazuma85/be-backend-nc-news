const request = require('supertest');
const { expect}= require('chai');
const app = require('../app')
describe('/api', () => {
const connection = require('../db/connection');
  // beforeEach, get knex, invoke knex.seed.run()
  // after knex.destroy
  beforeEach(()=>{
    knex.seed.run()
  })
  after(() => {
    connection.destroy();
  })
describe('/topics',()=>{
it('get topics ', () => {
  return request(app)
    .get('/api/topics')
    .expect(200)
    .then(({ body }) => {

      expext(body.topics).to.have.length(11);
    });
});
})
});