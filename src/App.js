import React from "react";
import Main from "./component/Main";
import Login from "./component/Login";
import NotFoundPage from "./component/404";
import { Route, Routes, BrowserRouter } from "react-router-dom"
import "./style/style.css";

function App() {
  const token = sessionStorage.getItem("token");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={token ? <Main /> : <Login />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
