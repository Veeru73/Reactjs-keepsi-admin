import React from "react";
import { Link } from "react-router-dom";

function Error_screen() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 m-5">
      <div className="text-center row">
        <div className=" col-md-6">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class=" col-md-6 mt-5">
          <p class="fs-3">
            {" "}
            <span class="text-danger">Opps!</span> Page not found.
          </p>
          <p class="lead">The page you’re looking for doesn’t exist.</p>
          <Link to="/dashboard" class="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error_screen;
