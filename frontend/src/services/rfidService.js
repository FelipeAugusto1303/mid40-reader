import { api } from "./api";

export const getLastTag = async () => {
  return await api.get("api/tags/lastTag");
};

export const getAllTags = async () => {
  return await api.get("api/tags");
};
