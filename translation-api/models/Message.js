var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema(
  {
    intent: { type: String, required: true, trim: true, unique: true },
    messageContent: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

//Export model
module.exports = mongoose.model('Message', MessageSchema);
