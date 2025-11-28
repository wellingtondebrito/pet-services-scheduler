import { User } from "@/types/types";

export const generateMockToken = (user: User) => {
    const payload ={
        id: user.id,
        role: user.role,
        exp: Math.floor(Date.now() / 1000) + (60 * 60), 
    }

    const encodedPayload = btoa(JSON.stringify(payload))
    return `Bearer ${encodedPayload}`

}