const router = require('express').Router();
const { getUsers, getSingleUser, createUser, updateUser, deleteUser, getFriends, deleteFriends } = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(getFriends).delete(deleteFriends);

module.exports = router;