
export async function getYelpp() {
	const response = await fetch(
		"https://3001-sharpsight4-dinnerdated-xy563w5g3v9.ws-us47.gitpod.io/api/leo"
		);
		const payload = await response.json();
		
		return payload
	}


	export async function getKarin() {
		const response = await fetch(
			process.env.BACKEND_URL + "/api/karin"
			);
			const payload = await response.json();
			
			return payload
		}
		export async function getErin() {
			const response = await fetch(
				process.env.BACKEND_URL + "/api/erin"
				);
				const payload = await response.json();
				
				return payload
			}
			export async function getEvent1() {
				const response = await fetch(
					process.env.BACKEND_URL + "/api/event1"
					);
					const payload = await response.json();
					
					return payload
				}
				