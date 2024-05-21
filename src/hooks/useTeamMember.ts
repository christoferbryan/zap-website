import { useState, useEffect } from "react";

export type TeamMember = {
    photo: string;
    name: string;
    position: string;
};

const useTeamMember = () => {
    const [members, setMembers] = useState<TeamMember[]>([]);
    
    useEffect(() => {
        const fetchMembers = async () => {
            try {
            const response = await fetch('https://randomuser.me/api/?results=8');
            const data = await response.json();
            const positions = ['Web Developer', 'Copy Writer', 'UI/UX Designer', 'Marketing Officer', 'Finance Officer', 
            'IT Support', 'Mobile Developer', 'Software Engineer'];
            const teamMember : TeamMember[] = data.results.map((person : any, index : number) => ({
                photo: person.picture.large,
                name: `${person.name.first} ${person.name.last}`,
                position: positions[index],   
            }));
            setMembers(teamMember);
            }
            catch(error){
            console.error('Error fetching person data:', error);
            } 
        }
        
        fetchMembers();
    }, [])

    return members;
}

export default useTeamMember;