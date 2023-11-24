const tagService = require("../services/tagService");

const getAllTags = (req, res) => {
  const tags = tagService.getAllTags();
  res.status(200).json(tags);
};

const getLastTag = (req, res) => {
  const tag = tagService.getLastTag();
  if (typeof tag === "undefined") {
    res.status(200).json({});
  } else {
    res.status(200).json(tag);
  }
};

const addTag = (req, res) => {
  const tags = req.body;
  const response = [];

  tags.forEach((element) => {
    console.log("element --- ", element);
    const upcomingTag = {
      epc: element.reading_epc_hex,
      timestamp: element.reading_timestamp,
    };
    response.push(tagService.addTag(upcomingTag));
  });

  res.status(201).json(response);
};

const serverRunning = (req, res) => {
  res.status(200).send("Server is running on port 4000");
};

module.exports = {
  getAllTags,
  getLastTag,
  addTag,
  serverRunning,
};
