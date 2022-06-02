export async function getDinner() {
	const response = await fetch(
		"https://3001-sharpsight4-dinnerdated-n4tqr0p5vrp.ws-us46.gitpod.io/api/dinner"
		);
		const payload = await response.json();
		
		return payload
	}

