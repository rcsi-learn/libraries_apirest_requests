import { useGetAllPostsQuery, useGetPostByIdQuery, usePostCreatePostMutation, usePutUpdatePostMutation, usePatchUpdatePostMutation, useDeletePostByIdMutation  } from "../app/rdx_tlk_query/apiSlice";
import { request } from "../app/models/request";

export const RdxTlkQueryRequest = ({ request }: { request: request | undefined }) => {
  const getAllPostsQuery = useGetAllPostsQuery("");
  const getPostByIdQuery = useGetPostByIdQuery(request?.id || "");
  const [createPostMutation] = usePostCreatePostMutation();
  const [putUpdatePostMutation] = usePutUpdatePostMutation();
  const [patchUpdatePostMutation] = usePatchUpdatePostMutation();
  const [deletePostByIdMutation] = useDeletePostByIdMutation();

  if (request === undefined) {
    return null;
  }

  switch (request.method) {
    case "get_all":
      if (getAllPostsQuery.data) {
        return <div>{JSON.stringify(getAllPostsQuery.data)}</div>;
      }
      return <div>Loading...</div>;
    case "get_by_id":
      if (getPostByIdQuery.data) {
        return <div>{JSON.stringify(getPostByIdQuery.data)}</div>;
      }
      return <div>Loading...</div>;
    case "post":
      const handleCreatePost = async () => {
        console.log("create");
        await createPostMutation(JSON.parse(request.data));
      };
      return (
        <div>
          <button onClick={handleCreatePost}>Create Post</button>
        </div>
      );
    case "put":
      const handleUpdatePost = async () => {
        await putUpdatePostMutation([request.id || "", request.data]);
      };
      return (
        <div>
          <button onClick={handleUpdatePost}>Update Post</button>
        </div>
      );
    case "patch":
      const handlePatchPost = async () => {
        await patchUpdatePostMutation([request.id || "", request.data]);
      };
      return (
        <div>
          <button onClick={handlePatchPost}>Patch Post</button>
        </div>
      );
    case "delete":
      const handleDeletePost = async () => {
        await deletePostByIdMutation(request.id || "");
      };
      return (
        <div>
          <button onClick={handleDeletePost}>Delete Post</button>
        </div>
      );
    default:
      return null;
  }
};