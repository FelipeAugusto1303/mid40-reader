import { api } from "./api";

export const getLastTag = async () => {
  return await api.get("api/tags/lastTag");
};

export const getAllTags = async () => {
  return await api.get("api/tags");
};

export const removeAllTags = async () => {
  return await api.post("api/tags/removeAll");
};
