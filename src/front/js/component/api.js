
export async function getYelpp() {
	const response = await fetch(
		process.env.BACKEND_URL + "/api/leo"
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
				