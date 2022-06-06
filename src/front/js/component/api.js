
export async function getYelpp() {
	const response = await fetch(
		"https://3001-sharpsight4-dinnerdated-qwx34bf30wb.ws-us46.gitpod.io/api/leo"
		);
		const payload = await response.json();
		
		return payload
	}


	export async function getKarin() {
		const response = await fetch(
			"https://3001-sharpsight4-dinnerdated-qwx34bf30wb.ws-us46.gitpod.io/api/karin"
			);
			const payload = await response.json();
			
			return payload
		}
		export async function getErin() {
			const response = await fetch(
				"https://3001-sharpsight4-dinnerdated-qwx34bf30wb.ws-us46.gitpod.io/api/erin"
				);
				const payload = await response.json();
				
				return payload
			}
	