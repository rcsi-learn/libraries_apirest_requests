import { request } from "../models/request";
import {
  useGetAllPostsQuery,
  usePostCreatePostMutation,
  useGetPostByIdQuery,
  usePutUpdatePostMutation,
  usePatchUpdatePostMutation,
  useDeletePostByIdMutation,
} from "../rdx_tlk_query/apiSlice";

export const ReduxToolkitQueryMethods = async (request: request) => {
  switch (request.method) {
    case "get_all":
      const { data: getAllPostsData } = await useGetAllPostsQuery("");
      return getAllPostsData;
    case "get_by_id":
      const { data: getPostByIdData } = await useGetPostByIdQuery(request.id);
      return getPostByIdData;
    case "post":
      const [createPost] = usePostCreatePostMutation();
      const responsePost = await createPost(JSON.parse(request.data));
      if ("data" in responsePost) {
        return responsePost.data;
      } else {
        throw new Error("Error al crear el post");
      }
    case "put":
      const [putUpdatePost] = usePutUpdatePostMutation();
      const responsePut = await putUpdatePost([request.id, request.data]);
      if ("data" in responsePut) {
        return responsePut.data;
      } else {
        throw new Error("Error al actualizar el post");
      }
    case "patch":
      const [patchUpdatePost] = usePatchUpdatePostMutation();
      const responsePatch = await patchUpdatePost([request.id, request.data]);
      if ("data" in responsePatch) {
        return responsePatch.data;
      } else {
        throw new Error("Error al actualizar el post");
      }
    case "delete":
      const [deletePostById] = useDeletePostByIdMutation();
      const responseDelete = await deletePostById(request.id);
      if ("data" in responseDelete) {
        return responseDelete.data;
      } else {
        throw new Error("Error al eliminar el post");
      }
  }
};
