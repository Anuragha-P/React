const express = require('express');
const router = express.Router();

router.put('/approve/:userId', (req, res) => {
  res.send('Approve User Request');
});

router.delete('/delete/:userId', (req, res) => {
  res.send('Delete User Request');
});

router.put('/update/:userId', (req, res) => {
  res.send('Update User Request');
});

module.exports = router;
