export async function getEngineDinner(zip) {
	const response = await fetch(
		process.env.BACKEND_URL + "/api/dinner/" + zip
		);
		const payload = await response.json();
		
		return payload.businesses
	}
    
    export async function getEngineDate(zip) {
        const response = await fetch(
            process.env.BACKEND_URL +  "/api/date/" + zip
            );
            const payload = await response.json();
            
            return payload.events
        }
        export async function getEngineDessert(zip) {
            const response = await fetch(
                process.env.BACKEND_URL + "/api/dessert/" + zip

                );
                const payload = await response.json();
                
                return payload.businesses
            }
           