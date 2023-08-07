import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../src/states/reducers/auth";
import { useNavigate, Link } from "react-router-dom";

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogoutHandler = (e) => {
    localStorage.clear();
    dispatch(authActions.setLoginState(false));

    navigate("/", { replace: true });
  };

  return (
    <>
      <nav className="navbar navbar-static-top white-bg" role="navigation">
        <div className="navbar-header">
          <form
            role="search"
            className="navbar-form-custom"
            method="post"
            action="javascript:void(0)"
          >
            <div className="form-group">
              <input
                type="text"
                placeholder="Search for something..."
                className="form-control"
                name="top-search"
                id="top-search"
              />
            </div>
          </form>
        </div>
        <ul className="nav navbar-top-links navbar-right">
          <li>
            <a
              onClick={() => {
                localStorage.clear();
                this.props.history.push("/");
              }}
            >
              <i className="fa fa-sign-out"></i> Log out
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
