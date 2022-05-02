const router = require('express').Router();
const { getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriends, deleteFriends } = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/
router.route('/:userId/friends/').post(addFriends);

// Delete Friend
router.route('/:userId/friends/:friendId').delete(deleteFriends);

module.exports = router;