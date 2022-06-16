import React, {useContext} from "react";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AccountMenu from "./mui/accountMenu";
import { UserProfile } from "../layout";

export const MemberNavbar = () => {
  const {user, setUser} = useContext(UserProfile);

  const history = useHistory();

  const exeLogOut = ()=>{
   return history.push('/')


  };
  const logOut =()=>{

    return history.push('/goodbye'), setTimeout(()=> exeLogOut(), 8000);

  };
  return (
    <nav className="navbar navbar-success bg-success">
      <div className="container-fluid">
        <Link to="/account">
          <span className="navbar-brand mb-0 h1">Account</span>
        </Link>
        <div className="ml-auto">
          <Link to="/tailor">
            <button className="btn btn-dark">Preferences</button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/desires">
            <button className="btn btn-dark">Desires</button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/memories">
            <button className="btn btn-dark">Memories</button>
          </Link>
          
        </div>
        <div className="ml-auto">
            <Link to="/upcomingoutings">
              <button className="btn btn-dark">Upcoming Outings</button>
            </Link>
          </div>
          <div className="ml-auto">

              <button onClick={()=> logOut()} className="btn btn-dark">Log Off</button>
           
          </div>
          <div className="ml-auto">
            <AccountMenu/>
          </div>

      </div>
    </nav>
  );
};
