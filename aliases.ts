type User {
    name: string,
    email: string
}

const createUser = (user: User = {name: 'df', email:"dff"}): User => {

    return user
}