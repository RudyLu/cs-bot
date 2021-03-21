const { expect } = require('chai');

const supertest = require('supertest');
const app = require('../app.js');

describe('Testing chat API', () => {
  it('should get message', (done) => {
    supertest(app)
      .post('/messages')
      .send({input: 'test'})
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.result).to.be.equal('What can I ask you?');
        done();
      });
  });
});
