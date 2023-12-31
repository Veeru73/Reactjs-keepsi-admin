import React from "react";
import { useNavigate} from "react-router-dom";
import { AuthContext } from "../states/AuthContext";
import { useContext } from "react";

const Header = (props) => {
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogoutHandler = (e) => {
    setLoggedIn(false);
    localStorage.clear();
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
                onLogoutHandler();
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
