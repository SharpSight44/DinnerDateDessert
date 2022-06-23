import React from "react";

export const HomePageCard = () => {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
                <div className="col justify-content-center">
                    <div className="card border-0 ">
                        <img src="https://media.istockphoto.com/photos/romantic-evening-picture-id649672132?k=20&m=649672132&s=612x612&w=0&h=8-BY5q_zcMdkvgYi0kY2d1rDgO6MwrGdJ08pEpCsPTQ=" className="card-img-top" alt="..." />
                        <div className="card-body rounded">
                            <h5 className="card-title">Dinner</h5>
                            <p className="card-text">Cut out the middle man. Dinner Date Dessert will provide you with open reservations at the best restaurants in your area, based on your own needs, preferences, and specifications. </p>
                        </div>
                    </div>
                </div>
                <div className="col justify-content-center">
                    <div className="card border-0">
                        <img src="https://t3.ftcdn.net/jpg/03/16/15/72/360_F_316157216_5naUgMIsN0HJwzcUFDVIyJQHciI5aNkV.jpg" className="card-img-top" alt="..." />
                        <div className="card-body rounded">
                            <h5 className="card-title">Date</h5>
                            <p className="card-text">Your tailored outing will also include events and activities perfect for you and your sweetie, both indoor and out. Bring on the fun, say goodbye to hours of browsing the web for ideas! </p>
                        </div>
                    </div>
                </div>
                <div className="col justify-content-center">
                    <div className="card border-0">
                        <img src="https://cdn.create.vista.com/api/media/medium/234029416/stock-photo-boyfriend-feeding-woman-sweet-dessert?token=" className="card-img-top" alt="..." />
                        <div className="card-body rounded">
                            <h5 className="card-title">Dessert</h5>
                            <p className="card-text">Finally, we'll find the best local nightcap to end your perfect outing. A candle lit bistro? Perhaps a bustling nighttime cafe for a quick espresso? The sky is the limit!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}