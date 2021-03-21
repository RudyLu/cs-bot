var express = require('express');
var router = express.Router();

const MessageController = require('../controllers/MessageController');
var UltimateService = require('../services/UltimateService');
var TranslationService = require('../services/FakeTranslationService');
var messageController = new MessageController(UltimateService, TranslationService);

router.post('/', messageController.getMessage.bind(messageController));

module.exports = router;
