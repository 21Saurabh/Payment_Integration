import React from "react";
import { NavLink } from "react-router-dom";
const Errorpage = () => {
  return (
    <>
    <div className="container mt-5">
        <div className="d-flex flex-column d-flex align-items-center">
                <h1>WE ARE SORRY, PAGE NOT FOUND</h1>
                <p>
                    THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
                    CHANGED IT IS TEMPORARILY UNAVAILABLE
                </p>
                <NavLink className="btn btn-warning ms-3" to="/" role="button">
                    Back To Home
                </NavLink>
                </div>
            </div>      
    </>
  );
};

export default Errorpage;
