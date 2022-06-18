


export async function getUpComing(unique) {
    const response = await fetch(
        process.env.BACKEND_URL +  "/api/details/" + unique
        );
        const payload = await response.json();
        
        return payload
    }

    export async function getUpComingEvent(unique) {
        const response = await fetch(
            process.env.BACKEND_URL +  "/api/event/" + unique
            );
            const payload = await response.json();
            
            return payload
        }