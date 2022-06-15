import React from "react";
import friends from "../../img/friends.jpg";


export const Goodbye = () => {
  return (
    <>
    <h1 style={{fontSize:"100px", color:"white", marginLeft:"35%", marginTop:"5%"}}> See You Soon</h1>
    <div style={{marginLeft:"27%", display:"flex", marginTop:"2%"}}>
        
         <img style={{width:"720px"}} src="https://www.myjourney.rocks/wp-content/uploads/2019/02/fun-with-friends.jpg" />
     <div>
        <img style={{width:"400px"}} src={friends}/></div>

      </div>
    </>
  );
};
