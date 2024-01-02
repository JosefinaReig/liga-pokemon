

let nombrePkm =['Charmander','Pikachu','Bulbasaur','Squirtle'];

let habilidades=[
    [80,75,97],
    [55,65,60],
    [80,72,90],
    [85,90,75]
];

function calcularPromedio(habilidades){
    let promedios=[]

    for(let i=0;i<habilidades.length;i++){
        let fila= habilidades[i]
        let suma= fila.reduce((total,habilidad)=> total+habilidad,0);
        promedios[i] = suma/fila.length; 
    }

    return promedios;
}

function evaluarAptitud(nombrePkm,promedios){

    for(let i=0;i<promedios.length;i++){
        if(promedios[i]>=70){
            console.log('El Pokemon '+ nombrePkm[i] + ' supera el promedio con: ' + Math.floor(promedios[i]))
        }else{
            console.log('El Pokemon '+ nombrePkm[i] +' No supera el promedio. Su promedio es ' + Math.floor(promedios[i]))
        }        

    }
    

}

let promedios2= calcularPromedio(habilidades) 
evaluarAptitud(nombrePkm,promedios2)


