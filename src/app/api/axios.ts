import { Post } from "../models/post";
import { request } from "../models/request";
import axios, { AxiosResponse } from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts/";

export const AxiosMethods = (request: request) => {
  switch (request.method) {
    case "get_all":
      return AxiosAPI(API_URL, "GET");
    case "get_by_id":
      return AxiosAPI(API_URL + request.id, "GET");
    case "post":
      return AxiosAPI(API_URL, "POST", request.data);
    case "put":
      return AxiosAPI(API_URL + request.id, "PUT", request.data);
    case "patch":
      return AxiosAPI(API_URL + request.id, "PATCH", request.data);
    case "delete":
      return AxiosAPI(API_URL + request.id, "DELETE");
  }
};

const AxiosAPI = async (
  ApiURL: string,
  Method: string,
  Data?: string
): Promise<Post[]> => {
  let response: AxiosResponse<any, any>;
  try {
    if (Method == "GET" || Method == "DELETE") {
      response = await axios.get(ApiURL);
    } else if (Method == "POST" || Method == "PUT" || Method == "PATCH") {
      response =  await axios.post(API_URL, Data);
    } else {
      return [];
    }
    let res = response?.data as Post[];
    return res;
  } catch (error) {
    console.error(error);
    return [];
  }
};
