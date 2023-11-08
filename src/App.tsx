import "./App.css";
import { ServicesOptions } from "./components/ServiceOptions";
import { RequestContext } from "./app/context/RequestContext";
import { useState } from "react";
import { request } from "./app/models/request";
import { Provider } from "react-redux";
import store from "./app/rdx_tlk_query/store";

function App() {
  const initialRequest: request = {
    library: "fetch",
    method: "get_all",
    id: "",
    data: "",
  };
  const [requestValue, setRequestValue] = useState<request>(initialRequest);

  const updateRequestValue = (newRequest: request) => {
    setRequestValue(newRequest);
  };

  return (
    <>
      <RequestContext.Provider value={{ request: requestValue, updateRequestValue }} >
        <Provider store={store}>
          <ServicesOptions />
        </Provider>
      </RequestContext.Provider>
    </>
  );
}

export default App;
{
  /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
}
