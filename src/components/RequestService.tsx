import { request } from "../app/models/request";
import { FetchMethods } from "../app/api/fetch";
import { AxiosMethods } from "../app/api/axios";
import { ReduxToolkitQueryMethods } from "../app/api/rdx_tlk_query";

export const RequestService = (request: request|undefined) => {
  if (request == undefined) return null;
  switch (request.library) {
    case "fetch":
      return FetchMethods(request);
    case "axios":
      return AxiosMethods(request);
    case "rtk_query":
      return ReduxToolkitQueryMethods(request);
    case "tanstack_query":
      return FetchMethods(request);
    default:
      return null;
  }
};
