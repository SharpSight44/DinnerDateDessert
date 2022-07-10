export async function getUpcomingList(token) {
	const response = await fetch(
		process.env.BACKEND_URL + "/api/upcominglist", {
            method:"GET",
            headers: { "Authorization": "Bearer "+ token },
            
        }  
		);
		const payload = await response.json();
		
		return payload
	}
    
    export async function postUpcoming(data,token) {
        const response = await fetch(
            process.env.BACKEND_URL + "/api/upcoming", {
                method:"POST",
                headers: { "Content-Type": "application/json", "Authorization": "Bearer "+ token},
                body: JSON.stringify(data)
            } 
            );
            const payload = await response.json();
            
            return payload
        }

        export async function postMemories(data,token) {
            const response = await fetch(
                process.env.BACKEND_URL + "/api/memories", {
                    method:"POST",
                    headers: { "Content-Type": "application/json", "Authorization": "Bearer "+ token},
                    body: JSON.stringify(data)
                } 
                );
                const payload = await response.json();
                
                return payload
            }

            export async function getMemories(token) {
                const response = await fetch(
                    process.env.BACKEND_URL + "/api/memorieslist",{
                        method:"GET",
                        headers: { "Authorization": "Bearer "+ token },
                        
                    }
                    );
                    const payload = await response.json();
                    
                    return payload
                }
                export async function removeStack(i,token) {
                    const response = await fetch(
                        process.env.BACKEND_URL + "/api/deletestack/" + i, {
                            method:"DELETE",
                            headers: { "Authorization": "Bearer "+ token },
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