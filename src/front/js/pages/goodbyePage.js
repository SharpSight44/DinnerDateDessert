import React from "react";
import "../../styles/goodbye.css"
import { Navbar } from "../component/navbar";


export const Goodbye = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="goodbye text-center">See You Again Soon!</h1>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <img src="https://images.unsplash.com/photo-1562593326-19d00710d9bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80" className="goodbyepic d-flex justify-content-center" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
};
