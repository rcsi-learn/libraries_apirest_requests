import { createContext } from "react";
import { request } from "../models/request";

export const RequestContext = createContext<{ request: request; updateRequestValue: (newRequest: request) => void; }>({
  request: { library: "", method: "", id: "", data: "" },
  updateRequestValue: () => {},
});
