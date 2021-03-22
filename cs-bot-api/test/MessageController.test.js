const { expect } = require('chai');
const sinon = require('sinon');

const MessageController = require('../controllers/MessageController');
const IntentService = require('../services/FakeIntentService');
const TranslationService = require('../services/FakeTranslationService');

describe('Testing chat API', () => {
  let req, status, json, res;
  beforeEach(() => {
    status = sinon.stub();
    json = sinon.stub();

    res = { status: status, json: json };
    status.returns(res);
    json.returns(res);
  });

  it('should get message', async () => {
    var messageController = new MessageController(
      IntentService,
      TranslationService
    );

    await messageController.getMessage({ body: { input: 'hi' } }, res);

    sinon.assert.calledWith(status, 200);
    sinon.assert.calledWith(json, {
      status: 200,
      result: 'What can I ask you?',
    });
  });

  it('should return failure', async () => {
    var messageController = new MessageController(
      IntentService,
      TranslationService
    );

    await messageController.getMessage({ body: { input: '' } }, res);

    sinon.assert.calledWith(status, 404);
    sinon.assert.calledWith(json, {
      status: 404,
      result: 'no intent',
    });
  });
});
