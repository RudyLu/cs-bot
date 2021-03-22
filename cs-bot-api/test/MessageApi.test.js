const { expect } = require('chai');

const supertest = require('supertest');
const app = require('../app.js');

// This test would require both ultimate.ai's service and a local translation
// service.
describe('Testing chat API', () => {
  it('should get message', async () => {
    var res = await supertest(app).post('/messages').send({ input: 'test' });
    expect(res.statusCode).to.be.equal(200);
    expect(res.body.result).to.be.equal('Not found');
  });
});
