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

const removeTags = () => {
  return tagModel.removeTags();
};

module.exports = {
  getAllTags,
  getLastTag,
  addTag,
  removeTags,
};
