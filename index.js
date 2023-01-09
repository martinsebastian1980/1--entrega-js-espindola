// martin sebastian espindola
var suma=0,total=0,resta=0,multi=0,div=0;
let numero = Number(prompt("\nCALCULADORA \n1- SUMAR\n2- RESTA\n3- MULTIPLICAR\n4- DIVIDIR\n5- SALIR\n "));



while (numero != 5) {
    
    switch (numero) {
        case 1:
            function suma() {
                let numeroSuma = Number(prompt("\nIngresar dos valores a sumar\n1- valor\n"));
                let numeroSuma1 = Number(prompt("\n2- valor\n"));
                suma=(numeroSuma+numeroSuma1);
                alert("La suma es : \n"+ suma); 
            }
                suma();       
            break;
        case 2:
            let numeroResta = Number(prompt("\nIngresar dos valores a restar\n1- valor\n"));
            let numeroResta1 = Number(prompt("\n2- valor\n"));
            resta=(numeroResta-numeroResta1);
            alert("La resta es : \n"+ resta);
            break;
        case 3:
            let numeroMulti = Number(prompt("\nIngresar dos valores a multiplicar\n1- valor\n"));
            let numeroMulti1 = Number(prompt("\n2- valor\n"));
            multi=(numeroMulti*numeroMulti1);
            alert("La multiplicacion es : \n"+ multi);
            break;
        case 4:
            let numeroDiv = Number(prompt("\nIngresar dos valores a dividir\n1- valor\n"));
            let numeroDiv1 = Number(prompt("\n2- valor\n"));
            div=(numeroDiv / numeroDiv1);
            alert("La divicion es : \n"+ div);
            break;
    
        default:
            break;
    }   
numero = Number(prompt("\nCALCULADORA \n1- SUMAR\n2- RESTA\n3- MULTIPLICAR\n4- DIVIDIR\n5- SALIR\n "));     
}
alert("probando mi primer proyecto js");



