const { Schema, model } = require('mongoose');
const Thought = require('./Thought');
const reactions = require('./Reactions');

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      reactions: [reactions],
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
);

thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;