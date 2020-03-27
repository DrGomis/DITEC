var contract;
$(document).ready(function(){
  web3 = new Web3(web3.currentProvider);
  var address = "0x097aa8b15A41d6a0876c4Bde558B9592543A5F2D";
  var abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_nombre",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_descripcion",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "_objetivo",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "_dia",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "_mes",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "_ano",
				"type": "int256"
			}
		],
		"name": "crearProyecto",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_nombre",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_objetivo",
				"type": "string"
			}
		],
		"name": "crearRecompensa",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "_cantidad",
				"type": "int256"
			}
		],
		"name": "Patrocinar",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Reiniciar",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ano",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			}
		],
		"name": "buscarDineroPatrocinador",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contadorPatrocinadores",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contadorRecompensas",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "descProyecto",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dia",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dineroObjetivo",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "dineroPatrocinadores",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dineroRecaudado",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "estadoProyecto",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mes",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mostrarAno",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mostrarDescripcion",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mostrarDia",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mostrarDineroPatrocinador",
		"outputs": [
			{
				"internalType": "int256[]",
				"name": "",
				"type": "int256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mostrarDineroRecaudado",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mostrarFecha",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mostrarMes",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mostrarMeta",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mostrarNombreProyecto",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mostrarPatrocinadores",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mostrarRecompensas",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nombreProyecto",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "patrocinadores",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "porcentaje",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Porcentaje",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "proyectoCreado",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "recompensas",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "valoresRecompensa",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

  contract = new web3.eth.Contract(abi, address);


// Creación del proyecto
  $("#crear_proyecto").click(function(){
    contract.methods.estadoProyecto().call().then(function(estado){
      if (estado == false) { // No existe un proyecto
        var nombre = $("#nombre_proyecto").val();
        // No me cogía las tildes y he tenido que ir haciendo esto en todos lados.
        nombre = nombre.replace("á", "&aacute;").replace("é", "&eacute;").replace("í", "&iacute;").replace("ó", "&oacute;").replace("ú", "&uacute;").replace("Á", "&Aacute;").replace("É", "&Eacute;").replace("Í", "&Iacute;").replace("Ó", "&Oacute;").replace("Ú", "&Uacute;").replace("ñ", "&ntilde;").replace("Ñ", "&Ntilde;").replace("ü", "&uuml;").replace("Ü", "&Uuml;").replace("¡", "&iexcl;").replace("¿", "&iquest;");
        var desc = $("#desc_proyecto").val();
        desc = desc.replace("á", "&aacute;").replace("é", "&eacute;").replace("í", "&iacute;").replace("ó", "&oacute;").replace("ú", "&uacute;").replace("Á", "&Aacute;").replace("É", "&Eacute;").replace("Í", "&Iacute;").replace("Ó", "&Oacute;").replace("Ú", "&Uacute;").replace("ñ", "&ntilde;").replace("Ñ", "&Ntilde;").replace("ü", "&uuml;").replace("Ü", "&Uuml;").replace("¡", "&iexcl;").replace("¿", "&iquest;");
        var objetivo = parseInt($("#objetivo_proyecto").val());
        var dia = parseInt($("#dia_proyecto").val());
        var mes = parseInt($("#mes_proyecto").val());
        var ano = parseInt($("#ano_proyecto").val());
        console.log(nombre, desc, objetivo, dia, mes, ano);
        if (nombre || desc || objetivo || dia || mes || ano) { // Comprueba si los campos contienen datos
          if (dia > 31 || dia < 1 || mes < 1 || mes > 12 || ano < 2020 || ano.toString().length > 4) {
            alert("Error: Uno o más parámetros son incorrectos.");
          } else {
            window.ethereum.enable(); // Activa conexión con Ethereum
            web3.eth.getAccounts().then(function(accounts) {
              var acc = accounts[0];
              return contract.methods.crearProyecto(nombre,desc,objetivo,dia,mes,ano).send({from: acc});
              })
          }
        } else {
          alert("Error: Uno o más campos están vacíos.");
        }
      } else { // Proyecto existente
        alert("Error: Ya existe un proyecto, si quieres crear otro debes eliminar el anterior.")
      }
    })
  })

// Botón eliminar
$("#matar").click(function(){
  contract.methods.estadoProyecto().call().then(function(estado){
    if (estado == true) { // Si el proyecto existe
      alert("Se va a eliminar el proyecto... ")
      window.ethereum.enable(); // Activa conexión con Ethereum
      web3.eth.getAccounts().then(function(accounts) {
        var acc = accounts[0];
        contract.methods.Reiniciar().send({from: acc}); // Fuente: https://web3js.readthedocs.io/en/v1.2.0/web3-eth-contract.html#id14
      })
    } else {
      alert("Error: No hay ningún proyecto creado.")
    }
  })
})




// Colaborar en el proyecto
  $("#colaborar").click(function(){
    contract.methods.estadoProyecto().call().then(function(estado){
      if (estado == true) { // El proyecto existe
          var usuario = $("#usuario").val();
          usuario = usuario.replace("á", "&aacute;").replace("é", "&eacute;").replace("í", "&iacute;").replace("ó", "&oacute;").replace("ú", "&uacute;").replace("Á", "&Aacute;").replace("É", "&Eacute;").replace("Í", "&Iacute;").replace("Ó", "&Oacute;").replace("Ú", "&Uacute;").replace("ñ", "&ntilde;").replace("Ñ", "&Ntilde;").replace("ü", "&uuml;").replace("Ü", "&Uuml;").replace("¡", "&iexcl;").replace("¿", "&iquest;");
          var cantidad = parseInt($("#cantidad").val());
          if (usuario || cantidad) { // Comprueba si los campos contienen datos
            if (cantidad < 1) { // Cantidad debe ser un número superior a 0
              alert("Error: Cantidad debe ser un valor numérico positivo.");
            } else { // Si todo cuadra, vamos a Ethereum
              window.ethereum.enable();
              web3.eth.getAccounts().then(function(accounts) {
                var acc = accounts[0];
                return contract.methods.Patrocinar(usuario,cantidad).send({from: acc});
              })
            }
          } else {
            alert("Error: Uno o más campos están vacíos o incorrectos.");
          }
        } else { // El proyecto no existe
          alert("Error: No puedes colaborar en proyectos que no existen.");
        }
    })
  })

  // Creación de recompensas
  $("#crear_recompensa").click(function(){
    contract.methods.estadoProyecto().call().then(function(estado){
      if (estado == true) { // Existe un proyecto
        var recompensa = $("#nombre_recompensa").val();
        recompensa = recompensa.replace("á", "&aacute;").replace("é", "&eacute;").replace("í", "&iacute;").replace("ó", "&oacute;").replace("ú", "&uacute;").replace("Á", "&Aacute;").replace("É", "&Eacute;").replace("Í", "&Iacute;").replace("Ó", "&Oacute;").replace("Ú", "&Uacute;").replace("ñ", "&ntilde;").replace("Ñ", "&Ntilde;").replace("ü", "&uuml;").replace("Ü", "&Uuml;").replace("¡", "&iexcl;").replace("¿", "&iquest;");
        var valor = $("#valor_recompensa").val();
        if (recompensa || valor) { // Comprueba si los campos contienen datos
          if (isNaN(valor) == true || valor < 1) { // Las recompensas no pueden ser gratuitas
            alert("Error: Valor debe ser un valor numérico positivo.");
          } else { // Si todo cuadra, vamos a Ethereum
            window.ethereum.enable();
            web3.eth.getAccounts().then(function(accounts) {
              var acc = accounts[0];
              return contract.methods.crearRecompensa(recompensa,valor).send({from: acc});
            })
          }
        } else {
          alert("Error: Uno o más campos están vacíos o incorrectos.");
        }
      } else { // El proyecto no existe
        alert("Error: Primero debes crear un proyecto.");
      }
    })
  })


  // Mostrar dinero a alcanzar
  contract.methods.mostrarMeta().call().then(function(num){
    $("#meta").html(num);
  })

  // Mostrar dinero acumulado
  contract.methods.mostrarDineroRecaudado().call().then(function(num){
    $("#recaudado").html(num);
  })

  // Mostrar nombre del proyecto
  contract.methods.mostrarNombreProyecto().call().then(function(num){
    $("#mostrar_nombre_proyecto").html(num);
  })

  // Mostrar descripción del proyecto
  contract.methods.mostrarDescripcion().call().then(function(num){
    $("#mostrar_desc_proyecto").html(num);
  })

  // Mostrar colaboradores
  contract.methods.mostrarPatrocinadores().call().then(function(num){
    var concat = "<span style='float: left'>";

    for (i = 0; i < num.length; i++) {
      concat += "<strong>" + num[i] + "</strong><br/>";
    }
    concat += "</span>"
    $("#usuario_contribuidor").html(concat);
  })

  // Mostrar dinero aportado por colaborador
  contract.methods.mostrarDineroPatrocinador().call().then(function(num){
    var concat = "<span style='float: right'>";

    for (i = 0; i < num.length; i++) {
      concat += num[i].toString() + " €<br/>";
    }
    concat += "</span>"
    $("#dinero_contribuido").html(concat);
  })

  // Mostrar lista de recompensas
  contract.methods.mostrarRecompensas().call().then(function(num){
    var nombre = num[0];
    var valor = num[1];
    var cambio;
    var n = valor.length - 1;

    do {
        cambio = false;
        for (var i = 0; i < n; i++) {
            if (parseInt(valor[i]) > parseInt(valor[i + 1])) {
               var temp = valor[i];
               var aux = nombre[i];

               valor[i] = valor[i + 1];
               nombre[i] = nombre[i + 1];

               valor[i + 1] = temp;
               nombre[i + 1] = aux;
               cambio = true;
            }
        }
        n--;
      } while (cambio);


    var concat = "<span style='text-align: left'>";
    for (i = 0; i < (nombre.length - 1); i++) {
      concat += "<span style='float: left'>" + nombre[i] + "</span><span style='float: right'>" + valor[i] + "€</span><hr/>";
    }
    concat += "<span style='float: left'>" + nombre[nombre.length - 1] + "</span><span style='float: right'>" + valor[nombre.length - 1] + "€</span></span>";

    $("#lista_recompensas").html(concat);
  })



  // Barra de progreso
  contract.methods.Porcentaje().call().then(function(num){
    var string_progreso = num.toString();
    string_progreso = string_progreso + "%"

    if (num >= 100) { // Si el porcentaje es 100 o superior
      $("#mostrar_porcentaje").html("<font color='green'>Completado</font>");
    } else {
      $("#mostrar_porcentaje").html(string_progreso);
    }

    var progreso = document.getElementById("progreso");
    progreso.style.width = string_progreso; // Modifica la barra de progreso
    console.log("Valor de porcentaje: " + string_progreso);
  })


  // Mostrar cuenta atrás
  contract.methods.mostrarFecha().call().then(function(fecha){
    var ano = fecha[0];
    var mes = fecha[1];
    var dia = fecha[2];
    // Fuente: https://www.w3schools.com/howto/howto_js_countdown.asp

      var countDownDate = new Date(ano, mes, (dia - 31)).getTime(); // Resto 31 porque si no, no me cuadraba.
      // Update the count down every 1 second
      var x = setInterval(function() {
      	// Get today's date and time
      	var now = new Date().getTime();
      	// Find the distance between now and the count down date
      	var distance = countDownDate - now;
      	// Time calculations for days, hours, minutes and seconds
      	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Línea cortesía de la casa
        if (ano == 0 && mes == 0 && dia == 0) {
          document.getElementById('countdown').innerHTML = "NO DEFINIDO"
        } else { // Output the result in an element with id="demo"
          document.getElementById('countdown').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
          // If the count down is over, write some text
          if (distance < 0) {
            clearInterval(x);
            document.getElementById('countdown').innerHTML = "¡FINALIZADO!";
          }
        }
      }, 1000);
    })
})
