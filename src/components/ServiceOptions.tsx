import React, { useState, useContext } from "react";
import { RequestService } from "./RequestService";
import { RequestData } from "./RequestData";
import { ResponseContainer } from "./ResponseContainer";
import { RequestContext } from "../app/context/RequestContext";
import { RdxTlkQueryRequest } from "./RdxTlkQueryRequest";
import { TanStackQueryRequest } from "./TanStackQueryRequest";

export const ServicesOptions = () => {
  const { request: requestValue, updateRequestValue } =
    useContext(RequestContext);

  const [JSonResponse, setJSonResponse] = useState("");

  const handleExecution = async () => {
    let requestResponse = await RequestService(requestValue);
    setJSonResponse(JSON.stringify(requestResponse, null, 2));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setJSonResponse("");
    const { name, value } = e.target;
    updateRequestValue({ ...requestValue, [name]: value });
  };

  return (
    <div>
      <div>
        <label className="font-bold">Library: </label>
        <select
          name="library"
          value={requestValue.library}
          onChange={(e) => handleSelectChange(e)}
        >
          <option value="fetch">fetch javascript</option>
          <option value="axios">axios</option>
          <option value="rtk_query">redux toolkit query</option>
          <option value="tanstack_query">tanstack query</option>
        </select>
        <label className="font-bold" style={{ paddingLeft: "10px" }}>
          Method:{" "}
        </label>
        <select
          name="method"
          value={requestValue.method}
          onChange={(e) => handleSelectChange(e)}
        >
          <option value="get_all"> Get All</option>
          <option value="get_by_id">Get by id</option>
          <option value="post">Post create</option>
          <option value="put">Put</option>
          <option value="patch">Patch</option>
          <option value="delete">Delete</option>
        </select>
        <button onClick={() => handleExecution()}>EXECUTE</button>
        <div>
          <RequestData method={requestValue.method} />
        </div>
      </div>
      <div>
        {<ResponseContainer ReqResponse={JSonResponse}/>}
        {requestValue.library === "rtk_query" ? (
          <RdxTlkQueryRequest request={requestValue} />
        ) : requestValue.library === "tanstack_query" ? (
          <TanStackQueryRequest request={requestValue} />
        ) : (
          <ResponseContainer ReqResponse={JSonResponse} />
        )}
      </div>
    </div>
  );
};
