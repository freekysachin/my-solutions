const asyncHandler = require('express-async-handler')
const Client = require('../models/modelClient')

const listClients = asyncHandler(async (req, res) => {
  const projects = await Client.find().sort({ createdAt: -1 });
  res.json(projects);
});

module.exports = {
  listClients
};