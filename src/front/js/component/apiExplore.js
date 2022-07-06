

export async function getApiRestaurants(zip) {
	const response = await fetch(
		process.env.BACKEND_URL + "/api/exploredinner/" + zip
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
        export async function getApiDesserts(zip) {
            const response = await fetch(
                process.env.BACKEND_URL + "/api/exploredessert/" + zip

                );
                const payload = await response.json();
                
                return payload.businesses
            }
//POST TO Desires 
export async function postDinner(data) {
    const response = await fetch(
        process.env.BACKEND_URL + "/api/desires/dinner", {
            method:"POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        } 
        );
        const payload = await response.json();
        
        return payload
    }
    export async function postDate(data) {
        const response = await fetch(
            process.env.BACKEND_URL + "/api/desires/date", {
                method:"POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(data)
            } 
            );
            const payload = await response.json();
            
            return payload
        }


        export async function postDessert(data) {
            const response = await fetch(
                process.env.BACKEND_URL + "/api/desires/dessert", {
                    method:"POST",
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify(data)
                } 
                );
                const payload = await response.json();
                
                return payload
            }
    export async function getDinnerList() {
        const response = await fetch(
            process.env.BACKEND_URL + "/api/dinnerlist" 
            );
            const payload = await response.json();
            
            return payload
        }

        export async function getDateList() {
            const response = await fetch(
                process.env.BACKEND_URL + "/api/datelist" 
                );
                const payload = await response.json();
                
                return payload
            }

            export async function getDessertList() {
                const response = await fetch(
                    process.env.BACKEND_URL + "/api/dessertlist" 
                    );
                    const payload = await response.json();
                    
                    return payload
                }