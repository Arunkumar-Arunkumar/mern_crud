const express = require('express');
const router = express.Router();
const { getusers, addUsers, updateUsers, deleteUsers } = require('../controllers/usersController');

// router.get('/', getGoals)
// router.post('/', addGoals)
// router.put('/:id', updateGoals)
// router.delete('/:id', deleteGoals)

router.route('/').get(getusers).post(addUsers);
router.route('/:id').put(updateUsers).delete(deleteUsers);

module.exports = router;