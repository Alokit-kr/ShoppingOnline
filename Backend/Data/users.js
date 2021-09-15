import bcrypt from 'bcryptjs'

const users=[
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('12345',10),
        isAdmin: true
    },
    {
        name:'Alokit',
        email:'alokit@example.com',
        password:bcrypt.hashSync('12345',10),
        
        
    },
    {
        name:'Alok',
        email:'alok@example.com',
        password:bcrypt.hashSync('12345',10),
       
       
    },
    {
        name:'Alok1',
        email:'alok1@example.com',
        password:bcrypt.hashSync('12345',10),
       
       
    },
]
export default users