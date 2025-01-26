import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {routerConfig} from "./src/Utils/routes/routerConfig.js";
import {Provider} from "react-redux";
import store from "./src/Rduex/store.js";
import {Toaster} from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={routerConfig} />
    <Toaster position='top-center' />
  </Provider>,
);
