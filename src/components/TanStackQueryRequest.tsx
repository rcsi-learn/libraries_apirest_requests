import { TanStackQuery_Methods } from "../app/api/tanstack_query";
import { request } from "../app/models/request";

export const TanStackQueryRequest = ({ request, }: { request: request | undefined; }) => {
  const Response = TanStackQuery_Methods(request);
  if (Response == null) {
    return null;
  }
  if (Response.data) {
    return null;
  }
  return <div>{JSON.stringify(Response.data)}</div>;
};
