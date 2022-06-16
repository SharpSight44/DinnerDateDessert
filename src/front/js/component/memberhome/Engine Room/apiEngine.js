export async function getEngineDinner33130() {
	const response = await fetch(
		process.env.BACKEND_URL + "/api/dinner33130"
		);
		const payload = await response.json();
		
		return payload.businesses
	}
    export async function getEngineDinner33128() {
        const response = await fetch(
            process.env.BACKEND_URL + "/api/dinner33128"
            );
            const payload = await response.json();
            
            return payload.businesses
        }
        export async function getEngineDinner33139() {
            const response = await fetch(
                process.env.BACKEND_URL + "/api/dinner33139"
                );
                const payload = await response.json();
                
                return payload.businesses
            }
    
    
    export async function getEngineDate33130() {
        const response = await fetch(
            process.env.BACKEND_URL +  "/api/date33130"
            );
            const payload = await response.json();
            
            return payload.events
        }
        export async function getEngineDate33128() {
            const response = await fetch(
                process.env.BACKEND_URL +  "/api/date33128"
                );
                const payload = await response.json();
                
                return payload.events
            }
            export async function getEngineDate33139() {
                const response = await fetch(
                    process.env.BACKEND_URL +  "/api/date33139"
                    );
                    const payload = await response.json();
                    
                    return payload.events
                }
        export async function getEngineDess33130() {
            const response = await fetch(
                process.env.BACKEND_URL + "/api/dessert33130"

                );
                const payload = await response.json();
                
                return payload.businesses
            }
            export async function getEngineDess33128() {
                const response = await fetch(
                    process.env.BACKEND_URL + "/api/dessert33128"
    
                    );
                    const payload = await response.json();
                    
                    return payload.businesses
                }
                export async function getEngineDess33139() {
                    const response = await fetch(
                        process.env.BACKEND_URL + "/api/dessert33139"
        
                        );
                        const payload = await response.json();
                        
                        return payload.businesses
                    }