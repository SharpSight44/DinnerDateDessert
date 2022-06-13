import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

function Google() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  useEffect(() => {
    /* global google*/
    google.accounts.id.initialize({
      client_id:
        "823617715264-bfu3shvkj57k376fuser2nnd4rv19f2h.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }, []);

  const signOut = () => {
    return setUser({}), (document.getElementById("signInDiv").hidden = false);
  };

  return (
    <>
      <div id="signInDiv"></div>
      <div>
        {Object.keys(user).length != 0 && (
          <button onClick={() => signOut()}> Sign Out </button>
        )}
      </div>

      <div>
        <img src={user.picture}></img>
        <h3>{user.name}</h3>
      </div>
    </>
  );
}

export default Google;
