const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtResponse,
  removeThoughtResponse,
} = require('../../controllers/thoughtController');

// /api/Thought
router.route('/').get(getThought).post(createThought);

// /api/Thought/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thought/:thoughtId/responses
router.route('/:thoughtId/responses').post(addThoughtResponse);

// /api/Thought/:thoughtId/responses/:responseId
router.route('/:thoughtId/responses/:responseId').delete(removeThoughtResponse);

module.exports = router;