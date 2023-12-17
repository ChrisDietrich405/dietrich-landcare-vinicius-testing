import React from "react";
import Sidebar from "./sidebar";

const MainPage = ({children}) => {
  return (
    <main className="container-fluid py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <Sidebar />
          </div>
          <div className="col-lg-10 bg-light">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
