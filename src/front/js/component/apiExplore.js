

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
export async function postDinner(data,token) {
    const response = await fetch(
        process.env.BACKEND_URL + "/api/desires/dinner", {
            method:"POST",
            headers: { "Content-Type": "application/json", "Authorization": "Bearer "+ token},
            body: JSON.stringify(data)
        } 
        );
        const payload = await response.json();
        
        return payload
    }
    export async function postDate(data,token) {
        const response = await fetch(
            process.env.BACKEND_URL + "/api/desires/date", {
                method:"POST",
                headers: { "Content-Type": "application/json", "Authorization": "Bearer "+ token},
                body: JSON.stringify(data)
            } 
            );
            const payload = await response.json();
            
            return payload
        }


        export async function postDessert(data,token) {
            const response = await fetch(
                process.env.BACKEND_URL + "/api/desires/dessert", {
                    method:"POST",
                    headers: { "Content-Type": "application/json", "Authorization": "Bearer "+ token},
                    body: JSON.stringify(data)
                } 
                );
                const payload = await response.json();
                
                return payload
            }
    export async function getDinnerList(token) {
        const response = await fetch(
            process.env.BACKEND_URL + "/api/dinnerlist",{
                method:"GET",
                headers: { "Authorization": "Bearer "+ token },
                
            }   
            );
            const payload = await response.json();
            
            return payload
        }

        export async function getDateList(token) {
            const response = await fetch(
                process.env.BACKEND_URL + "/api/datelist",{
                    method:"GET",
                    headers: { "Authorization": "Bearer "+ token },
                    
                }   
                );
                const payload = await response.json();
                
                return payload
            }

            export async function getDessertList(token) {
                const response = await fetch(
                    process.env.BACKEND_URL + "/api/dessertlist",{
                        method:"GET",
                        headers: { "Authorization": "Bearer "+ token },
                        
                    }   
                    );
                    const payload = await response.json();
                    
                    return payload
                }