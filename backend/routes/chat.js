const express = require('express');
const router = express.Router();
const ChatController = require('../app/HTTP/Controllers/ChatController');
const auth = require('../app/Middleware/Authenticated');

router.get('/chat', auth, ChatController.getMessage);
router.post('/chat', auth, ChatController.sendMessage);
module.exports = router;