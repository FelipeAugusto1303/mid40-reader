const tagModel = require("../models/tagModel");

const getAllTags = () => {
  return tagModel.getAllTags();
};

const getLastTag = () => {
  return tagModel.getLastTag();
};

const addTag = (tag) => {
  return tagModel.addTag(tag);
};

module.exports = {
  getAllTags,
  getLastTag,
  addTag,
};
