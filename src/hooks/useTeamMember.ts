import { useState, useEffect } from "react";

export type TeamMember = {
    name: string;
    position: string;
    photo: string;
};

const useTeamMember = () => {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    
    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
            const response = await fetch('https://randomuser.me/api/?results=8');
            const data = await response.json();
            const positions = ['Web Developer', 'Copy Writer', 'UI/UX Designer', 'Marketing Officer', 'Finance Officer', 
            'IT Support', 'Mobile Developer', 'Software Engineer'];
            const members : TeamMember[] = data.results.map((person : any, index : number) => ({
                name: `${person.name.first} ${person.name.last}`,
                position: positions[index],
                photo: person.picture.large,   
            }));
            setTeamMembers(members);
            }
            catch(error){
            console.error('Error fetching user data:', error);
            } 
        }
        
        fetchTeamMembers();
    }, [])

    return teamMembers;
}

export default useTeamMember;