function addTwo(num : number): number{
    // num.toUpperCase()
     return num + 2
    // return "hello"
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name : string, email: string, isSubscribed: boolean){
              
}

function loginUser(name: string, email: string, deviceToken: string = ""){
     
}

function getValue(value: number): number|string{
    if(value > 5){
        return value
    }else{
        return "200k"
    }
}

const getHello = (s: string): string => {
       return ""
}

const consoleError = (err: string): void => {
    console.log("Here comes the error")
}

const handleError = (err : string) : never => {
    throw new Error(err)
}

const pandavs = ["arjun", "bheem","nakul"]

pandavs.map((pan) => {
     return `Here is a ${pan}`
})


addTwo(3);
getUpper("abc")
signUpUser("Guri", "gurwinder7735@gmail.com", false);
loginUser("Guri", "gurwinder7735@gmail.com")

export {}