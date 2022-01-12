import { render } from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

//This will allow the data inside this to be accessible to the rest of the app
import { Provider } from "react-redux";
import "antd/dist/antd.css"
import store from "./app/store";

render(
  <Router>
    <Provider store={store}>
    <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
