//simulando o banco de dados
let tags = [];

const getAllTags = () => {
  return tags;
};

const getLastTag = () => {
  return tags[tags.length - 1];
};

const addTag = (tag) => {
  const newTag = {
    id: tags.length + 1,
    ...tag,
  };
  tags.push(newTag);
  return newTag;
};

const removeTags = () => {
  tags.splice(0, tags.length - 1);
  return tags;
};

module.exports = {
  getAllTags,
  getLastTag,
  addTag,
  removeTags,
};
