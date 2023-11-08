import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/posts",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "/",
    }),
    getPostById: builder.query({
      query: (id: string) => `/${id}`,
    }),
    postCreatePost: builder.mutation({
      query: (post: object) => ({
        url: "/",
        method: "POST",
        body: post,
      }),
    }),
    putUpdatePost: builder.mutation({
      query: ([id, post]) => ({
        url: `/${id}`,
        method: "PUT",
        body: post,
      }),
    }),
    patchUpdatePost: builder.mutation({
      query: ([id, post]) => ({
        url: `/${id}`,
        method: "PATCH",
        body: post,
      }),
    }),
    deletePostById: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      })
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostByIdQuery,
  usePostCreatePostMutation,
  usePutUpdatePostMutation,
  usePatchUpdatePostMutation,
  useDeletePostByIdMutation
} = apiSlice;
