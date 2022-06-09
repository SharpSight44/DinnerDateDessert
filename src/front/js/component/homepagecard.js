import React from "react";

export const HomePageCard = () => {
    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="https://media.istockphoto.com/photos/romantic-evening-picture-id649672132?k=20&m=649672132&s=612x612&w=0&h=8-BY5q_zcMdkvgYi0kY2d1rDgO6MwrGdJ08pEpCsPTQ=" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dinner</h5>
                                <p className="card-text">Cut out the middle man. Dinner Date Dessert will provide you with open reservations at the best restaurants in your area, based on your own needs, prefereances, and specifications. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://t3.ftcdn.net/jpg/03/16/15/72/360_F_316157216_5naUgMIsN0HJwzcUFDVIyJQHciI5aNkV.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Date</h5>
                                <p className="card-text">Your tailored outing will also include events and activities perfect for you and your sweetie. Bring on the fun, say goodbye to hours of browsing the web for ideas! </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://image.shutterstock.com/image-photo/couple-restaurant-on-valentines-day-260nw-595702199.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dessert</h5>
                                <p className="card-text">Finally, we'll find the best nightcap in your area for the perfect ending to your perfect outing. A candle lit bistro? Maybe a bustling nighttime cafe for a quick espresso? Whe'll provide you with the right romantic nightcap.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}