const fetch = require('node-fetch');
const BASE_URL = 'http://localhost:3001';

exports.getMessage = async function (intent) {
  try {
    var res = await fetch(`${BASE_URL}/translations?intent=${intent}`, {
    });

    resultJson = await res.json();
    return resultJson.result;
  } catch (e) {
    // Log Errors
    throw Error('Error while getting intents.');
  }
};
