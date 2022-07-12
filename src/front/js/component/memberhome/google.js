import React, { useState, useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import { ProtectedPath, TokenIssued } from "../../layout";
import { UserProfile } from "../../layout";


function Google() {
  const { approved, setApproved} = useContext(ProtectedPath);
  const {user, setUser} = useContext(UserProfile);
  const {token, setToken } = useContext(TokenIssued);
const history = useHistory();
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    setApproved(true);
    const jwt = {'idtoken': response.credential};
    postGoogle(jwt);
  

    
  }
async function postGoogle(id) {
  
    
    const response = await fetch(
        process.env.BACKEND_URL + "/google", {
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(id)
        } 
        );
        const payload = await response.json();
        console.log(payload);
        return setToken(payload.token), setTimeout(()=> history.push('/version1'),4000 );
    }
  useEffect(() => {
    /* global google*/
    google.accounts.id.initialize({
      client_id:
        "396032578158-dv3petmhr394s7fsdcot1aui3g3a363c.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "medium",
    });
    google.accounts.id.prompt();
  }, []);

  const signOut = () => {
    return setUser({}), (document.getElementById("signInDiv").hidden = false);
  };

  return (
    <>
      <div id="signInDiv" style={{width:"270px"}}></div>
      <div>
        {Object.keys(user).length != 0 && (
          <button onClick={() => signOut()}> Sign Out </button>
        )}
      </div>

    </>
  );
}

export default Google;
