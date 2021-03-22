exports.getIntents = async function (input) {
  try {
    if (!input) {
      return [];
    }

    var result = {
      intents: [
        {
          confidence: 0.43064412474632263,
          name: 'What can I ask you?',
        },
        {
          confidence: 0.24242892861366272,
          name: 'Affirmative',
        },
        {
          confidence: 0.12692813575267792,
          name: 'Login problems',
        },
        {
          confidence: 0.10716493427753448,
          name: 'Order status',
        },
        {
          confidence: 0.04670083895325661,
          name: 'Arranging collection for order',
        },
      ],
      entities: [],
    };
    return result.intents;
  } catch (e) {
    // Log Errors
    throw Error('Error while getting message.');
  }
};
