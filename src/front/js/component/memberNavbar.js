import React, {useContext} from "react";
import { Link, Redirect, useHistory} from "react-router-dom";
import AccountMenu from "./mui/accountMenu";
import { UserProfile } from "../layout";
import logosize300x268 from "../../img/logosize300x268.jpg";

export const MemberNavbar = () => {
  const {user, setUser} = useContext(UserProfile);

  
  return (
    <nav className="navbar navbar-success bg-success">
      <div className="container-fluid">
    
          <span className="navbar-brand mb-0 h1">
            <img src={logosize300x268} height={80} width={170} alt="logo" />
          </span>
        <div >
          <Link to="/questionnaire">
            <button className="btn btn-dark">Preferences</button>
          </Link>
        </div>
        <div >
          <Link to="/version1">
            <button className="btn btn-dark">Plan Outing</button>
          </Link>
        </div>
        <div >
          <Link to="/desires">
            <button className="btn btn-dark">Desires</button>
          </Link>
        </div>
        <div >
          <Link to="/memories">
            <button className="btn btn-dark">Memories</button>
          </Link>
          
        </div>
        <div >
            <Link to="/upcomingoutings">
              <button className="btn btn-dark">Upcoming Outings</button>
            </Link>
          </div>
          <div >
            <AccountMenu/>
          </div>

      </div>
    </nav>
  );
};
