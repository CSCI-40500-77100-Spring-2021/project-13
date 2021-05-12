const mongoose = require('mongoose');

const querySchema = mongoose.Schema(
  {
    uid: { type: String, default: '' },
    postId: { type: Number, default: 0 },
    userName: { type: String, default: '' },
    userEmail: { type: String, default: '' },
    title: { type: String, default: '' },
    body: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now() },
    modifiedAt: { type: Date, default: Date.now() },
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

module.exports = mongoose.model('querie', querySchema);
