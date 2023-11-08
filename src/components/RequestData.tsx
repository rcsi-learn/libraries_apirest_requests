import React, { useContext, useEffect } from "react";
import { RequestContext } from "../app/context/RequestContext";

type Props = {
  method: string;
};
export const RequestData = ({ method }: Props) => {
  const { request, updateRequestValue } = useContext(RequestContext);

function adjustTextareaHeight() {
  const textarea = document.getElementById('textArea');
  if (textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
}

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateRequestValue({ ...request, id: e.target.value });
  };

  const handleDataChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateRequestValue({ ...request, data: e.target.value });
    adjustTextareaHeight();
  };

  useEffect(() => {
    { updateRequestValue({ ...request, id: "", data: "" }); }
    switch (method) {
      case "post":
        {
          updateRequestValue({
            ...request,
            data: JSON.stringify(
              { title: "foo", body: "bar", userId: 1 },
              null,
              2
            ),
          });
        }
        break;
      case "put":
        {
          updateRequestValue({
            ...request,
            data: JSON.stringify(
              { id: 1, title: "foo", body: "bar", userId: 1 },
              null,
              2
            ),
          });
        }
        break;
      case "patch":
        {
          updateRequestValue({
            ...request,
            data: JSON.stringify({ title: "foo" }, null, 2),
          });
        }
        break;
      case "get_all":
      case "get_by_id":
      case "delete":
      default:
        break;
    }
  }, [method]);

  return (
    <div>
      {(() => {
        switch (method) {
          case "get_all":
            return null;
          case "get_by_id":
            return (
              <div>
                <label style={{paddingRight:"5px"}}>Id: </label>
                <input type="text" value={request.id} onChange={handleIdChange} />
              </div>
            );
          case "post":
            return (
              <div>
                <label style={{paddingRight:"5px"}}>Create Post:</label>
                <textarea style={{height:"80px", verticalAlign:"top"}} id="textArea" value={request.data} onChange={handleDataChange} />
              </div>
            );
          case "put":
            return (
              <div>
                <label style={{paddingRight:"5px"}}>Id: </label>
                <input type="text" value={request.id} onChange={handleIdChange} />
                <br />
                <label style={{paddingRight:"5px", verticalAlign:"top"}}>Update Post:</label>
                <textarea style={{height:"100px"}} id="textArea" value={request.data} onChange={handleDataChange} />
              </div>
            );
          case "patch":
            return (
              <div>
                <label style={{paddingRight:"5px"}}>Id: </label>
                <input type="text" value={request.id} onChange={handleIdChange} />
                <br />
                <label style={{paddingRight:"5px", verticalAlign:"top"}}>Patching Post:</label>
                <textarea style={{height:"50px"}} id="textArea" value={request.data} onChange={handleDataChange} />
              </div>
            );
          case "delete":
            return (
              <div>
                <label style={{paddingRight:"5px", verticalAlign:"top"}}>Id: </label>
                <input type="text" value={request.id} onChange={handleIdChange} />
              </div>
            );
          default:
            return null;
        }
      
      })()}
    </div>
  );
};
