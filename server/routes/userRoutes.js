const express = require('express');
const router = express.Router();
const userRoutes = require('../controller/userContoller');
router.get('/', userRoutes.getUser);
router.post('/', userRoutes.postUser);
module.exports = router;