export async function getDinner() {
	const response = await fetch(
		"https://3001-sharpsight4-dinnerdated-n4tqr0p5vrp.ws-us46.gitpod.io/api/dinner"
		);
		const payload = await response.json();
		
		return payload
	}
export async function getFridate() {
        const response = await fetch(
            "https://3001-sharpsight4-dinnerdated-n4tqr0p5vrp.ws-us46.gitpod.io/api/fridate"
            );
            const payload = await response.json();
            
            return payload
        }
        export async function getDessert() {
            const response = await fetch(
                "https://3001-sharpsight4-dinnerdated-n4tqr0p5vrp.ws-us46.gitpod.io/api/dessert"
                );
                const payload = await response.json();
                
                return payload
            }