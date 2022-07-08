export async function getUpcomingList() {
	const response = await fetch(
		process.env.BACKEND_URL + "/api/upcominglist" 
		);
		const payload = await response.json();
		
		return payload
	}
    
    export async function postUpcoming(data) {
        const response = await fetch(
            process.env.BACKEND_URL + "/api/upcoming", {
                method:"POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(data)
            } 
            );
            const payload = await response.json();
            
            return payload
        }

        export async function postMemories(data) {
            const response = await fetch(
                process.env.BACKEND_URL + "/api/memories", {
                    method:"POST",
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify(data)
                } 
                );
                const payload = await response.json();
                
                return payload
            }

            export async function getMemories() {
                const response = await fetch(
                    process.env.BACKEND_URL + "/api/memorieslist" 
                    );
                    const payload = await response.json();
                    
                    return payload
                }
                export async function removeStack(i) {
                    const response = await fetch(
                        process.env.BACKEND_URL + "/api/deletestack/" + i, {
                            method:"DELETE"
                        }
                        );
                        const payload = await response.json();
                        
                        return payload
                    }

                    export async function postGoogle(data) {
                        const response = await fetch(
                            process.env.BACKEND_URL + "/api/google", {
                                method:"POST",
                                headers: { "Content-Type": "application/json"},
                                body: JSON.stringify(data)
                            } 
                            );
                            const payload = await response.json();
                            
                            return payload
                        }