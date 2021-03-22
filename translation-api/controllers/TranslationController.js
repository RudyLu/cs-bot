class TranslationController {
  constructor(MessageModel) {
    this.Message = MessageModel;
  }

  async query(req, res, next) {
    // Validate request parameters, queries using express-validator
    try {
      var message = await this.Message.find({ intent: req.query.intent });

      if (message.length == 0) {
        return res.status(404).json({
          status: 404,
          result: 'Not found',
        });
      }

      var resMsg = message[0].messageContent;

      return res.status(200).json({
        status: 200,
        result: resMsg,
      });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  }

  async create(req, res, next) {
    // Validate request parameters, queries using express-validator
    try {
      const message = new this.Message(req.body);
      await message.save();

      return res.status(200).json({
        status: 200,
        result: message,
      });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  }

  async delete(req, res, next) {
    // Validate request parameters, queries using express-validator
    try {
      var result = await this.Message.deleteOne({ intent: req.body.intent });
      return res.status(200).json({
        status: 200,
        result: result,
      });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  }
}

module.exports = TranslationController;
