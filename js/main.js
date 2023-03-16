let pinUsuario = "123";
let ingreso = false;
let nomUsuario = prompt("Digita tu nombre de usuario");
let opcion = 1;
let saldo = 0;
let servicio = 1;
let Light = 10;
let Medium = 100;
let Heavy = 1000;

function restaSaldo(valorServicio) {
  saldo = saldo - valorServicio;
}

function menuPrincipal(menu){
  opcion=prompt(
"Escoge alguna de las siguientes opciones: \n1- Tarifas por peso. \n2 - Recargar Cuenta. \n3 - Consultar Saldo. \n4 - Contratar servicio.\nPresioná 5 para finalizar.");
}

for (let i = 2; i >= 0; i--) {
  let pinIngresado = prompt("Ingresa tu PIN Tienes " + (i + 1) + " oportunidades");
   if (pinIngresado == pinUsuario) {
    alert("HOLA!"+" "+nomUsuario+" "+ "Bienvenid@ al servicio de mensajeria");
    ingreso = true;
    break;
  } else {
    alert("Error");
  }
}

if (ingreso) {
  menuPrincipal(opcion);
};
   while(opcion != "5"){
      if(opcion == "1"){
        alert("TARIFAS:\n-1kg a 10kg el valor del flete es de :$10\n-11kg a 50kg el valor del flete es de :$100\n-51kg a 100kg el valor del flete es de :$1000 \n>-101kg No esta dentro del alcance");
        menuPrincipal(opcion);
      } else if(opcion == "2"){
        saldo= parseInt(prompt("Ingresa el monto a recargar"))+saldo;           
            alert("Genial! tu saldo actual es de:  $"+ saldo);
            menuPrincipal(opcion);
      } else if(opcion == "3"){
        alert("Tu saldo en la cuenta es de: $"+ saldo);
        menuPrincipal(opcion);
      } else if(opcion == "4"){
  let servicio = prompt("Digite el nUmero correspondiente al servicio:\n1. Light - hasta 10kg\n2. Medium - hasta 50kg\n3. Heavy - hasta 100kg\n4. Ninguno");

  switch (servicio){
  case '1':
    console.log(saldo);
    if (saldo>=Light) {
      restaSaldo(Light)
      //saldo = saldo - 10;
       alert("Gracias por confiar en nosotros, recogeremos su paquete pronto");
       menuPrincipal(opcion);
    }
    else{
            alert("Saldo:$" +saldo+ " insuficiente para el servicio solicitado, recargue su cuenta");
       menuPrincipal(opcion);
    }break;
  case '2':
    if (saldo>=Medium) {
      restaSaldo(Medium);
     alert("Gracias por confiar en nosotros, recogeremos su paquete pronto");
      menuPrincipal(opcion);
    }
    else{
            alert("Saldo:$"+saldo+ " insuficiente para el servicio solicitado, recargue su cuenta");
            menuPrincipal(opcion);
    }break;
  case '3':
    if (saldo>=Heavy) {
      restaSaldo(Heavy);
     alert("Gracias por confiar en nosotros, recogeremos su paquete pronto");
      menuPrincipal(opcion);
    }
    else{
            alert("Saldo:$"+saldo+ " insuficiente para el servicio solicitado, recargue su cuenta");
            menuPrincipal(opcion);
    }break;
  case '4':
    menuPrincipal(opcion);
    break;
    default:
    alert("Opción no válida");
    break;
  }
}
}