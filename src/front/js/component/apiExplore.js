

export async function getApiRestaurants() {
	const response = await fetch(
		process.env.BACKEND_URL + "/api/exploredinner"
		);
		const payload = await response.json();
		
		return payload.businesses
	}
    export async function getApiEvents() {
        const response = await fetch(
            process.env.BACKEND_URL +  "/api/date"
            );
            const payload = await response.json();
            
            return payload.events
        }
        export async function getApiDesserts() {
            const response = await fetch(
                process.env.BACKEND_URL + "/api/exploredessert"

                );
                const payload = await response.json();
                
                return payload.businesses
            }
