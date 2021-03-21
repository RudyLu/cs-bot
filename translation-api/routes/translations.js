var express = require('express');
var router = express.Router();

const TranslationController = require('../controllers/TranslationController');
const MessageModel = require('../models/Message');

var translationController = new TranslationController(MessageModel);

router.get('/', translationController.query.bind(translationController));
router.post('/', translationController.create.bind(translationController));
router.delete('/', translationController.delete.bind(translationController));

module.exports = router;
