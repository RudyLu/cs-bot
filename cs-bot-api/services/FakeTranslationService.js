exports.getMessage = async function (intent) {
  const DICT = {
    'What can I ask you?': 'What can I ask you?',
  };

  const DEFAULT_MSG = 'Need more info';

  if (!(intent in DICT)) {
    return DEFAULT_MSG;
  }

  return DICT[intent];
};
