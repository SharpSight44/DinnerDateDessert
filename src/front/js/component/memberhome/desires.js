import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { MemberNavbar } from "../memberNavbar";
import "../../../styles/desires.css";


export const Desires = () => {
    const { store, actions } = useContext(Context);
    console.log(store.desires);

    return (
        <>
            <MemberNavbar />
            <h1 className="page-title text-white text-center">Desires</h1>
            <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card Title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
                {/* {store.desires.length > 0 && store.desires.map((item, index) => {
                    return (
                        <div key={index} className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={item?.image_url} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                    )
                }
                )
                } */}
            </div>
        </>
    );
};