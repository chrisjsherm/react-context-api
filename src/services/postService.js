import axios from "axios";

const api = axios.create({
  baseURL: "//jsonplaceholder.typicode.com",
});
const getPosts = () => {
  return api.get("/posts");
};

const deletePost = (id) => {
  return api.delete("/posts/" + id);
};

export { getPosts, deletePost };
