const express = require('express');
const router = express.Router();
const userRoutes = require('../controller/userContoller');
router.get('/', userRoutes.getUser);
router.post('/', userRoutes.postUser);
router.delete('/:id', userRoutes.userDelete);
router.put('/', userRoutes.userUpdate);
module.exports = router;