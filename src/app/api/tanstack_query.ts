import { useQuery, useMutation } from "@tanstack/react-query";
import { AxiosMethods } from "./axios";
import { request } from "../models/request";

export const TanStackQuery_Methods = (request: request | undefined) => {
  if (request === undefined) return null;
  switch (request.method) {
    case "get_all":
      const getAllPostsData = useQuery({
        queryKey: ["get_all"],
        queryFn: async () => await AxiosMethods(request),
      });
      return getAllPostsData;
    case "get_by_id":
      const getPostByIdData = useQuery({
        queryKey: ["get_by_id", request.id],
        queryFn: () => AxiosMethods(request),
      });

      return getPostByIdData;
    case "post":
      const createPostMutation = useMutation({
        mutationKey: ["createPost"],
        onMutate: async (request: request) => {
          const createdPost = await AxiosMethods(request);
          return createdPost;
        },
      });
      return createPostMutation;
    case "put":
      const updatePostMutation = useMutation({
        mutationKey: ["updatePost"],
        onMutate: async (request: request) => {
          const updatedPost = await AxiosMethods(request);
          return updatedPost;
        },
      });
      return updatePostMutation;

    case "patch":
      const patchPostMutation = useMutation({
        mutationKey: ["patchPost"],
        onMutate: async (request: request) => {
          const patchedPost = await AxiosMethods(request);
          return patchedPost;
        },
      });
      return patchPostMutation;

    case "delete":
      const deletePostMutation = useMutation({
        mutationKey: ["deletePost"],
        onMutate: async (request: request) => {
          const deletedPost = await AxiosMethods(request);
          return deletedPost;
        },
      });
      return deletePostMutation;

    default:
      return null;
  }
};
