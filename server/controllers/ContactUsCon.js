const express = require('express');
const router2 = express.Router();
const ContactUs = require('../models/ContactUsMod');

router2.post('/save-ContactUs', async (req, res) => {
  const newContact = new ContactUs(req.body);
  try {

    await newContact.save();
    res.status(201).send({ message: 'Contact saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Server error' });
  }
});

module.exports = router2;
