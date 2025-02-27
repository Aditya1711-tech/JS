import axios, { AxiosResponse } from "axios";
import { Post } from "../App";

export const getPosts = async (): Promise<AxiosResponse<Post[]>> => {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts");
}