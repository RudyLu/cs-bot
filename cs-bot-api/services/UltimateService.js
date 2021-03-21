const fetch = require('node-fetch');
const BASE_URL = 'https://chat.ultimate.ai/api';

exports.getIntents = async function (input) {
  try {
    var inputBody = {
      botId: '5f74865056d7bb000fcd39ff',
      message: input,
      conversationId: '1234567890',
    };
    console.log(inputBody);

    var res = await fetch(`${BASE_URL}/intents`, {
      method: 'POST',
      body: JSON.stringify(inputBody),
      headers: {
        'Content-Type': 'application/json',
        authorization: '825765d4-7f8d-4d83-bb03-9d45ac9c27c0', // TODO
      },
    });

    resultJson = await res.json();
    return resultJson.intents;
  } catch (e) {
    // Log Errors
    throw Error('Error while getting intents.');
  }
};
