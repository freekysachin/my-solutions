const asyncHandler = require('express-async-handler')
const Project = require('../models/modelProject')

const listProjects = asyncHandler(async (req, res) => {
  
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
});

module.exports = {
  listProjects
};