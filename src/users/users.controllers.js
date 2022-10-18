const uuid = require ('uuid')

const userDB = [{
    id: '6cc6d042-3a04-4076-b290-bfcc3cb055b7',
    first_name: 'Admin',
    last_name: 'Admin',
    email: 'admin@users.com',
    password: "Lucy2016",
    birthday: '1986/09/26'
},{
    id: '6b5b457d-e504-4c15-ad8e-d5b6b4329c21',
    first_name: 'Jorge',
    last_name: 'Monterrosa',
    email: 'jmonterrosa@users.com',
    password: "Lucy1108",
    birthday: '1986/09/26'
},{
    id: '68838614-6ecc-43d8-b42a-82ecdc700ea5',
    first_name: 'Luciana',
    last_name: 'Monterrosa',
    email: 'lmonterrosa@users.com',
    password: "Papy0926",
    birthday: '2016/11/08'
},
{
    id: '240051a7-1967-40e2-b002-89fdf9cdd519',
    first_name: 'Kelly',
    last_name: 'Vanegas',
    email: 'kvanegas@users.com',
    password: "Lucy2016",
    birthday: '2016/11/08'
}]

const getAllUsers = () => {
    return userDB
}
const getUsersById = (id) => {
    const data = userDB.find(user => user.id === id)
    return data
}

const createNewUser = (data) =>{
    const newUser = {
        id: uuid.v4(),
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        birthday: data.birthday
    }
    userDB.push(newUser)
    return newUser
}


module.exports = {
    getAllUsers,
    getUsersById,
    createNewUser
}