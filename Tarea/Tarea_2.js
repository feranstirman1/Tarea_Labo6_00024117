function t2(){
    /*objeto conversor */
    class conversor{

        constructor(){
            this.value
        }

        convertir(medida,unidadInicial,unidadFinal,tipo){
            tipo=tipo.toUpperCase();
            unidadInicial=unidadInicial.toLowerCase();
            unidadFinal=unidadFinal.toLowerCase();
            if(tipo=="L"){
                if(unidadInicial=="cm" && unidadFinal=="m"){
                    return medida*100;
                }else if(unidadInicial=="m" && unidadFinal=="cm"){
                    return medida/100;
                }else if(unidadInicial=="km" && unidadFinal=="m"){
                    return medida*1000;
                }else if(unidadInicial=="m" && unidadFinal=="km"){
                    return medida/1000;
                }else if(unidadInicial=="ft" && unidadFinal=="m"){
                    return medida*0.3048;
                }else if(unidadInicial=="m" && unidadFinal=="ft"){
                    return medida/0.3048;
                }else{
                    return "esa conversion no se puede hacer";
                }
            }else{ /*aqui van las de la temperatura */
                if(unidadInicial=="c" && unidadFinal=="f"){
                    return (medida*(9/5))+32;
                }else if(unidadInicial=="f" && unidadFinal=="c"){
                    return (medida-32)*(5/9);
                }else if(unidadInicial=="k" && unidadFinal=="f"){
                    return ((medida-273)*(9/5))+32;
                }else if(unidadInicial=="f" && unidadFinal=="k"){
                    return ((medida-32)*(5/9))+273;
                }else if(unidadInicial=="k" && unidadFinal=="c"){
                    return medida-273;
                }else if(unidadInicial=="c" && unidadFinal=="k"){
                    return medida+273;
                }else{
                    return "esa conversion no se puede hacer";
                }
            }
        }
    }

    var medida=prompt("Ingrese la medida: ");
    var unidad1=prompt("Ingrese la unidad inical: ");
    var unidad2=prompt("Ingre la unidad final:  ");
    var tipo= prompt("Ingrese el tipo(L O T): ");
    var convertor= new conversor();
    console.log(convertor.convertir(medida,unidad1,unidad2,tipo));
}