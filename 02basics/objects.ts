const User = {
    name: "Gurwinder Singh",
    email: "hitesh@lco.dev",
    isActive: true
}



function createUser({name: string, isActive: boolean,}){

}

function createCourse({name: string , isPaid: boolean}):{name: string, isPaid: boolean}{
    return {name: '', isPaid: false}
}

createUser({name: "Hitesh", isActive: false});

let course = {
    name: "MERN Stack",
    isPaid: false,
    email: "gurwinder7735@gmail.com"
}
createCourse(course)

export {}