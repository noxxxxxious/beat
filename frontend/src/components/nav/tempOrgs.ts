interface User {
    name: string;
    email: string;
    alias: string;
}

interface Org {
    orgName: string;
    orgId: string;
    users: User[];
}

const startingData = [
    { 
        orgName: 'Verdex', 
        orgId: 'a3c27b70-99e7-495f-9e44-6e444e1a06c1',
        users: ['Noah Johnson',  'Olivia Anderson',  'Ethan Davis',  'Emma Wilson',  'William Martin',  'Isabella Rodriguez',  'Michael Thompson',  'Sophia Hernandez',  'Mason Taylor',  'Avery Martinez',  'Benjamin Mitchell',  'Amelia White',  'Elijah Hall',  'Sofia Lewis',  'Lucas Scott',  'Chloe Green',  'Daniel Baker',  'Aria King',  'Jacob Wright']
    },
    { 
        orgName: 'Synthosoft',
        orgId: '50a7547e-3f87-4d6f-b2f2-7ca15c53a77a',
        users: ["Eva Hansen", "Avery Wilson", "Isaac Lee", "Nina Rodriguez", "Oscar Martinez", "Luna Singh", "Adam Chen", "Maya Gupta", "Ian Anderson", "Riley Davis", "Ethan Wright", "Bella Ramirez", "Miles Cooper", "Sofia Hernandez", "Eliana Kim", "Leo Nguyen", "Aria Patel", "Lucas Brown", "Audrey Taylor"]
    },
    { 
        orgName: 'Nexority',
        orgId: 'e52d8380-6c85-4918-b872-39d56d0b0af8',
        users: ['Emily Wilson', 'Nathan Carter', 'Avery Phillips', 'Oliver Thompson', 'Lila Martin', 'Gavin Brown', 'Isabelle Wright']
    },
    { 
        orgName: 'Oceangrove',
        orgId: 'e5f13b5c-d882-41c8-a04e-e5f1b326e4b4',
        users: ['Oliver Jones', 'Mia Davis', 'William Clark', 'Emma Parker']
    },
    { 
        orgName: 'Trexity',
        orgId: '3b4f2c36-41d4-4cfe-b8e1-527f6fafe7d7',
        users: ["Ella Gonzales", "Noah Johnson", "Avery Martin", "Ethan Wilson", "Lila Rodriguez", "Caleb Thompson", "Levi Taylor", "Sofia Garcia", "Oliver Brown", "Madelyn Perez", "Lucas Adams", "Mia Cooper", "Charlotte Hall"]
    },
    { 
        orgName: 'Novation',
        orgId: '1b7c8b33-317f-4ef1-a05a-7e8f2d2b21e2',
        users: ["Noel Lance", "Emma Wilson", "Liam Garcia", "Sophia Davis", "William Rodriguez", "Isabella Martinez", "Mason Martinez", "Olivia Hernandez", "Ethan Nguyen", "Ava Jackson", "Michael Smith", "Mia Brown", "Alexander Taylor", "Abigail Davis", "Daniel Thomas", "Emily Wilson", "Matthew Lee", "Madison Young", "Elijah Perez", "Elizabeth Moore", "Benjamin Clark", "Ella King", "Nicholas Walker", "Chloe Adams", "Christopher Lewis", "Victoria Johnson", "Anthony Lewis", "Grace Lewis", "Andrew Jackson", "Natalie Lee", "David Lee", "Audrey Garcia", "Joseph Garcia", "Avery Smith", "Jacob Baker", "Sofia Hernandez", "William Wright", "Scarlett Davis", "Daniel Martinez", "Hailey Davis", "Jackson Smith", "Amelia Perez", "Logan Hernandez", "Brianna Smith"]
    },
    { 
        orgName: 'Artivus',
        orgId: 'f70c5961-46d1-4376-bdbb-c07b7c8b90d1',
        users: ["Sophia Martinez","Avery Rodriguez","Landon Hill","Chloe King","Aaliyah Hernandez","Cameron Thompson","Caleb Baker","Jaxon White","Leah Davis","Elijah Flores","Luke Phillips","Victoria Evans","Brooklyn Young","Grayson Morris","Audrey Jackson","Ethan Green","Madelyn Brown","Isaac Perez","Natalie Taylor","Maxwell Hall","Bella Martinez","Adrian Turner"]
    },
    { 
        orgName: 'Cognitron',
        orgId: 'a5a5a32e-8c2d-4f9c-892e-d5a5a10beaf4',
        users: ['Noah Johnson',  'Olivia Anderson',  'Ethan Davis',  'Emma Wilson',  'William Martin',  'Isabella Rodriguez',  'Michael Thompson',  'Sophia Hernandez',  'Mason Taylor',  'Avery Martinez',  'Benjamin Mitchell',  'Amelia White',  'Elijah Hall',  'Sofia Lewis',  'Lucas Scott',  'Chloe Green',  'Daniel Baker',  'Aria King',  'Jacob Wright']
    },
    { 
        orgName: 'Techzenith',
        orgId: '1bf2d211-c3da-4d61-a88c-fa0ecf1f32b8',
        users: ["Eva Hansen", "Avery Wilson", "Isaac Lee", "Nina Rodriguez", "Oscar Martinez", "Luna Singh", "Adam Chen", "Maya Gupta", "Ian Anderson", "Riley Davis", "Ethan Wright", "Bella Ramirez", "Miles Cooper", "Sofia Hernandez", "Eliana Kim", "Leo Nguyen", "Aria Patel", "Lucas Brown", "Audrey Taylor"]
    },
    { 
        orgName: 'Innovatek',
        orgId: '4ad0cf96-4b0d-4b8f-80fa-9c09c0521ca5',
        users: ['Emily Wilson', 'Nathan Carter', 'Avery Phillips', 'Oliver Thompson', 'Lila Martin', 'Gavin Brown', 'Isabelle Wright']
    },
    { 
        orgName: 'Stratosphere',
        orgId: '5df5d5d5-5d5d-5d5d-5d5d-5d5d5d5d5d5d',
        users: ['Oliver Jones', 'Mia Davis', 'William Clark', 'Emma Parker']
    },
    { 
        orgName: 'Synergenix',
        orgId: 'fc6846a8-bdc7-4d05-b1c9-9de70af296df',
        users: ["Ella Gonzales", "Noah Johnson", "Avery Martin", "Ethan Wilson", "Lila Rodriguez", "Caleb Thompson", "Levi Taylor", "Sofia Garcia", "Oliver Brown", "Madelyn Perez", "Lucas Adams", "Mia Cooper", "Charlotte Hall"]
    },
    { 
        orgName: 'Innoventix',
        orgId: 'd0efb695-d3c3-4723-a2c2-1d0b2c9ca44d',
        users: ["Noel Lance", "Emma Wilson", "Liam Garcia", "Sophia Davis", "William Rodriguez", "Isabella Martinez", "Mason Martinez", "Olivia Hernandez", "Ethan Nguyen", "Ava Jackson", "Michael Smith", "Mia Brown", "Alexander Taylor", "Abigail Davis", "Daniel Thomas", "Emily Wilson", "Matthew Lee", "Madison Young", "Elijah Perez", "Elizabeth Moore", "Benjamin Clark", "Ella King", "Nicholas Walker", "Chloe Adams", "Christopher Lewis", "Victoria Johnson", "Anthony Lewis", "Grace Lewis", "Andrew Jackson", "Natalie Lee", "David Lee", "Audrey Garcia", "Joseph Garcia", "Avery Smith", "Jacob Baker", "Sofia Hernandez", "William Wright", "Scarlett Davis", "Daniel Martinez", "Hailey Davis", "Jackson Smith", "Amelia Perez", "Logan Hernandez", "Brianna Smith"]
    },
    { 
        orgName: 'Futurion',
        orgId: 'd747291f-63d7-4c0c-a896-c1d97d63b86e',
        users: ["Sophia Martinez","Avery Rodriguez","Landon Hill","Chloe King","Aaliyah Hernandez","Cameron Thompson","Caleb Baker","Jaxon White","Leah Davis","Elijah Flores","Luke Phillips","Victoria Evans","Brooklyn Young","Grayson Morris","Audrey Jackson","Ethan Green","Madelyn Brown","Isaac Perez","Natalie Taylor","Maxwell Hall","Bella Martinez","Adrian Turner"]
    },
    { 
        orgName: 'Nexentia',
        orgId: '0688b5f1-4e4a-4425-bb6f-5c5cf5ab5f5e',
        users: ['Noah Johnson',  'Olivia Anderson',  'Ethan Davis',  'Emma Wilson',  'William Martin',  'Isabella Rodriguez',  'Michael Thompson',  'Sophia Hernandez',  'Mason Taylor',  'Avery Martinez',  'Benjamin Mitchell',  'Amelia White',  'Elijah Hall',  'Sofia Lewis',  'Lucas Scott',  'Chloe Green',  'Daniel Baker',  'Aria King',  'Jacob Wright']
    },
    { 
        orgName: 'Quantumix',
        orgId: 'fa8a62c2-cf6d-4877-a0e6-21c7c19b76d3',
        users: ["Eva Hansen", "Avery Wilson", "Isaac Lee", "Nina Rodriguez", "Oscar Martinez", "Luna Singh", "Adam Chen", "Maya Gupta", "Ian Anderson", "Riley Davis", "Ethan Wright", "Bella Ramirez", "Miles Cooper", "Sofia Hernandez", "Eliana Kim", "Leo Nguyen", "Aria Patel", "Lucas Brown", "Audrey Taylor"]
    },
    { 
        orgName: 'Innovatech',
        orgId: '3d8fa18a-6d2e-4710-8ebc-6f07c7b853d6',
        users: ['Emily Wilson', 'Nathan Carter', 'Avery Phillips', 'Oliver Thompson', 'Lila Martin', 'Gavin Brown', 'Isabelle Wright']
    },
    { 
        orgName: 'Heliosphere',
        orgId: 'ac41c8fc-fb1b-4e48-b4f2-aa5e5f64c902',
        users: ['Oliver Jones', 'Mia Davis', 'William Clark', 'Emma Parker']
    },
    { 
        orgName: 'Axiomate',
        orgId: 'dab4462f-b1f2-4f28-bbbd-87079ecb03af',
        users: ["Ella Gonzales", "Noah Johnson", "Avery Martin", "Ethan Wilson", "Lila Rodriguez", "Caleb Thompson", "Levi Taylor", "Sofia Garcia", "Oliver Brown", "Madelyn Perez", "Lucas Adams", "Mia Cooper", "Charlotte Hall"]
    },
    { 
        orgName: 'Dynatronix',
        orgId: '1a97e822-86b1-44f8-a03a-92d928efcc21',
        users: ["Noel Lance", "Emma Wilson", "Liam Garcia", "Sophia Davis", "William Rodriguez", "Isabella Martinez", "Mason Martinez", "Olivia Hernandez", "Ethan Nguyen", "Ava Jackson", "Michael Smith", "Mia Brown", "Alexander Taylor", "Abigail Davis", "Daniel Thomas", "Emily Wilson", "Matthew Lee", "Madison Young", "Elijah Perez", "Elizabeth Moore", "Benjamin Clark", "Ella King", "Nicholas Walker", "Chloe Adams", "Christopher Lewis", "Victoria Johnson", "Anthony Lewis", "Grace Lewis", "Andrew Jackson", "Natalie Lee", "David Lee", "Audrey Garcia", "Joseph Garcia", "Avery Smith", "Jacob Baker", "Sofia Hernandez", "William Wright", "Scarlett Davis", "Daniel Martinez", "Hailey Davis", "Jackson Smith", "Amelia Perez", "Logan Hernandez", "Brianna Smith"]
    }
]

const tempOrgs = startingData.map(startingOrg => {
    const users = startingOrg.users.map(user => {
        const name = user
        const [firstname, lastname] = user.split(' ')
        const alias = firstname.charAt(0).toLowerCase() + lastname.toLowerCase()
        const email = alias + '@' + startingOrg.orgName.toLowerCase() + '.com'

        return {
            name,
            email,
            alias
        }
    })
    const org = {
        name: startingOrg.orgName,
        id: startingOrg.orgId,
        users
    }

    return org
})

export default tempOrgs