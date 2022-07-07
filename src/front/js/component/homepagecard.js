import React from "react";

export const HomePageCard = () => {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4 px-5">
                <div className="col justify-content-center">
                    <div className="card border-0 ">
                        <img src="https://cdn.create.vista.com/api/media/medium/234029416/stock-photo-boyfriend-feeding-woman-sweet-dessert?token=" className="card-img-top" alt="..." />
                        <div className="card-body rounded">
                            <h5 className="card-title">Dinner</h5>
                            <p className="card-text">Cut out the middle man. Dinner Date Dessert will provide you with open reservations at the best restaurants in your area, based on your own needs, preferences, and specifications. </p>
                        </div>
                    </div>
                </div>
                <div className="col justify-content-center">
                    <div className="card border-0">
                        <img src="https://images.unsplash.com/photo-1532905943445-e53dfe43dab8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" className="card-img-top" alt="..." />
                        <div className="card-body rounded">
                            <h5 className="card-title">Date</h5>
                            <p className="card-text">Your tailored outing will also include events and activities perfect for you and your sweetie, both indoor and out. Bring on the fun, say goodbye to hours of browsing the web for ideas! </p>
                        </div>
                    </div>
                </div>
                <div className="col justify-content-center">
                    <div className="card border-0">
                        <img src="https://images.unsplash.com/photo-1493843007199-f4397137f7d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="..." />
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