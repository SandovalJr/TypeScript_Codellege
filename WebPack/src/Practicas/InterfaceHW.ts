export interface Alumnos {
    id:number,
    Nombre:string,
    idCarrera:number
}

export interface Carrera{
    idCarrera:number,
    carrera:string,
    idCentroEstudios:number
}

export interface CentroEstudios{
    id:number,
    Nombre:string
}

/*****
ASYNC AWAIT
******/

export interface Persona{
    id: number,
    nombre: string,
    edad: number, 
    sexo: string
}

export interface Salario {
    id:number,
    salario:number
}
