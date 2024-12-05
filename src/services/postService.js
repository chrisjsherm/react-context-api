import axios from "axios";

const api = axios.create({
  baseURL: "//jsonplaceholder.typicode.com",
});
const getPosts = () => {
  return api.get("/posts");
};

export { getPosts };
