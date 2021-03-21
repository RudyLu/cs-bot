exports.getMessage = async function (input) {
  try {
    var message = 'test';
    return message;
  } catch (e) {
    // Log Errors
    throw Error('Error while getting message.');
  }
};
