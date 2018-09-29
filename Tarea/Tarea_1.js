function adminTienda(){
    
    function mostrarMenu(){
        console.log("¿Que desea hacer?");
        console.log("1.Agregar producto");
        console.log("2.Modificar Stock");
        console.log("3.Registrar venta y reducir stock");
        console.log("4.Mostrar promedio de ventas realizadas");
        console.log("5.Mostrar productos con stock 0");
        console.log("6.Salir");
    }
    /***********************************************************
    creamos la estructura del objeto producto a utilizar
    ************************************************************/
    class producto{
        constructor(codigo,descripcion,tipo,precio_c,precio_v,stock){
            this.codigo=codigo;
            this.descripcion=descripcion;
            this.tipo=tipo;
            this.precio_c=precio_c;
            this.precio_v=precio_v;
            this.stock=stock;
        }
        /*funciones para munipular el stock*/
        modificarStock(nuevoStock){
            if(nuevoStock<0){
                nuevoStock=0;
            }
            this.stock=nuevoStock;
        }
        reducirStock(cantidad){
            this.stock-=cantidad;
            if(thhis.stock<0){
                this.stock=0;
            }
        }
    }
    
    /******************************************
    estructura del objeto venta
    ******************************************/
   class venta{
       constructor(producto,cantidad){
           this.producto=producto;
           this.cantidad=cantidad;
           this.total= producto.precio_v*cantidad;
       }
   }
    
    /*declarando variables principales*/
    var running=true;
    var productos=[];
    var ventas=[];

    /*codigo principal */
    console.log("¡BIENVENIDO A LA TIENDA!")
    while(running){
        var opcion;
        mostrarMenu();
        opcion=prompt("Escoja lo que desee hacer: ");
        switch(opcion){
            case "1":
                while(true){
                    var codigo= prompt("Ingrese un codigo para el nuevo producto");
                    if(productos.includes(codigo)){
                        console.log("ESE CODIGO YA EXISTE, INTENTE CON OTRO CODIGO");
                    }else{
                        break;
                    }
                }
                var descripcion= prompt("Ingrese una descripcion del producto: ");
                var tipo=prompt("Ingrese el tipo del producto: ");
                var precio_c= parseFloat(prompt("A cuanto compro usted el producto: "));
                var precio_v=parseFloat(prompt("A cuanto quiere vender el producto: "));
                var stock= pasrseInt(prompt("Cantidad de producto nuevo a agregar: "));
                var nuevoProducto= new producto(codigo,descripcion,tipo,precio_c,precio_v,stock);
                productos.push(nuevoProducto);
                break;
            case "2":
                var codigo=prompt("Codigo del producto al que quiere cambiarle el stock: ");
                if(productos.includes(codigo)){
                    var nuevoStock= parseFloat(prompt("Cuanto sera el nuevo stock: "));
                    for(let x in productos){
                        if(codigo==productos[x].codigo){
                            productos[x].modificarStock(nuevoStock);
                        }
                    }
                    break;
                }else{
                    console.log("el prodcuto que desea modificar no existe");
                    break;
                }
            case "3":
                var codigo= prompt("Ingrese el codigo del producto que vendio: ");
                if(productos.includes(codigo)){
                    var cantidad=parseFloat(prompt("Cantidad de producto vendido: "));
                    for(let x in productos){
                        if(productos[x].codigo==codigo){
                            ventas.push(productos[x],cantidad);
                            productos[x].reducirStock(cantidad);
                        }
                    }
                    break;
                }else{
                    console.log("El producto que busca no existe");
                    break;
                }
            case "4":
                var suma=0;
                for(let x in ventas){
                    suma+=ventas[x].total;
                }
                var promedio= suma/ventas.length;
                console.log("El promedio de ventas es de: $"+promedio);
                break;
            case "5":
                for(let x in productos){
                    if(productos[x].stock==0){
                        console.log("codigo: "+productos[x].codigo+" descripcion: "+productos[x].descripcion+" precio: "+productos[x].precio_v+" Stock: "+productos[x].stock);
                    }
                }
                break;
            case "6":
                running=false;
                break;
            default:
                console.log("NO HA ELEGIDO UNA OPCION VALIDA");
                break;
        }
    }
    console.log("HA CERRADO EL PROGRAMA");
    console.log("VISITE NUEVAMENTE!!!!");
}