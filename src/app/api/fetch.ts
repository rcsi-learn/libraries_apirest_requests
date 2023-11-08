import { Post } from "../models/post";
import { request } from "../models/request";

const API_URL = "https://jsonplaceholder.typicode.com/posts/";

export const FetchMethods = (request: request) => {
  switch (request.method) {
    case "get_all":
      return FetchApi(API_URL, "GET");
    case "get_by_id":
      return FetchApi(API_URL + request.id, "GET");
    case "post":
      return FetchApi(API_URL, "POST", request.data);
    case "put":
      return FetchApi(API_URL + request.id, "PUT", request.data);
    case "patch":
      return FetchApi(API_URL + request.id, "PATCH", request.data);
    case "delete":
      return FetchApi(API_URL + request.id, "DELETE");
  }
};

const FetchApi = async (
  ApiURL: string,
  Method: string,
  Data?: string
): Promise<Post[]> => {
  let response: Response | undefined;
  try {
    if (Method == "GET" || Method == "DELETE") {
      response = await fetch(ApiURL);
    } else if (Method == "POST" || Method == "PUT" || Method == "PATCH") {
      response = await fetch(ApiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: Data,
      });
    } else {
      return [];
    }
    if (!response.ok) {
      console.error("error fetching api.");
      return [];
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
