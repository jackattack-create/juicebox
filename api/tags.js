const express = require('express');
const tagsRouter = express.Router();

usersRouter.use((req, res, next) => {
    console.log("A request is being made to /tags");
  
    next(); 
});

const { getAllTags } = require('../db');


usersRouter.get('/', async (req, res) => {
  const tags = await getAllTags();

  res.send({
    tags
  });
});

module.exports = tagsRouter;