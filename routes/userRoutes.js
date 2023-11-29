const express = require('express');
const router = express.Router();
const { getGoals, addGoals, updateGoals, deleteGoals } = require('../controllers/usersController');

// router.get('/', getGoals)
// router.post('/', addGoals)
// router.put('/:id', updateGoals)
// router.delete('/:id', deleteGoals)

router.route('/').get(getGoals).post(addGoals);
router.route('/:id').put(updateGoals).delete(deleteGoals);

module.exports = router;