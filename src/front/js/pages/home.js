import React, { useContext } from "react";
import { Context } from "../store/appContext";
import dinnerImageUrl from "../../img/dinner-date.png";
import "../../styles/home.css";
import ReactPlayer from "react-player";
// import Video from "../../Videos/boatvid.mp4";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h5 style={{color:"white"}}> White Text  </h5>
		<div style={{display:"flex"}}>
			<div style={{position:"relative", marginRight:"30px"}} ><ReactPlayer  url="https://www.youtube.com/watch?v=EEPxKrO4-7g" controls={false} playing={true} muted={true} width="1000px"/> </div>
				<div  style={{position:"absolute", left:"40%", zIndex:"2", top:"10%"}}><img src={dinnerImageUrl} /></div>
				<div ><ReactPlayer  url="https://www.youtube.com/watch?v=EEPxKrO4-7g" controls={false} playing={true} muted={true} width="1000px"/> </div>
			</div>
			<div style={{width:"50px", height:"100px"}} >
			</div>
			<div className="alert alert-info mt-5">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p>
			<div> Hello there Leo</div>
			<div> 

			</div>
			<div>
				Space please
			</div>
		</div>
	);
};
