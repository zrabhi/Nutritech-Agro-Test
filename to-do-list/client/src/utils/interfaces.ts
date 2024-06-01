export interface SignUp {
    email: string
    fullName: string
    password: string
}

export interface Login {
    email: string
    password: string
}

export interface TaskProp {
    id: string
    task: string
    status:string
}
export interface HeaderProp{
    name: string
}


export interface User {
    fullName: string
}