const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
  removeThoughtReaction,
} = require('../../controllers/thoughtController');

// /api/Thought
router.route('/').get(getThought).post(createThought);

// /api/Thought/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thought/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addThoughtReaction);

// /api/Thought/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeThoughtReaction);

module.exports = router;