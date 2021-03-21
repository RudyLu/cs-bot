class MessageController {
  // For dependency injection
  constructor(messageService, translationService) {
    this.messageService = messageService;
    this.translationService = translationService;
  }

  async getMessage(req, res, next) {
    // Validate request parameters, queries using express-validator
    try {
      console.log(req.body);

      var input = req.body.input;

      var intents = await this.messageService.getIntents(input);
      console.log(Array.isArray(intents));
      console.log(intents);
      // sort by confidence
      intents.sort((a, b) => a.confidence - b.condidence);
      var message = await this.translationService.getMessage(intents[0].name);

      return res.status(200).json({
        status: 200,
        result: message,
      });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  }
}

module.exports = MessageController;
