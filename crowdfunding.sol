pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;


contract Micromecenazgo {
    /* INFORMACIÓN BÁSICA DEL PROYECTO */
    string public nombreProyecto = "No definido";
    string public descProyecto = "Descripción no definida.";
    int public dineroObjetivo = 0; // Meta ecónomica a llegar
    bool public proyectoCreado = false; // El proyecto no está creado

    // Fecha límite para alcanzar la meta (día, mes, año)
    int public dia = 0;
    int public mes = 0; // Inicializados a 0 para "jugar" con JavaScript
    int public ano = 0;

    /* GESTIÓN DE RECOMPENSAS DEL PROYECTO */
    string [] public recompensas; // Lista con los nombres de cada recompensa añadida.
    string [] public valoresRecompensa; // Lista con los valores de cada recompensa añadida.
    int public contadorRecompensas;

    /* GESTIÓN DEL PROYECTO */
    // Patrocinadores
    string [] public patrocinadores;
    int [] public dineroPatrocinadores;
    uint public contadorPatrocinadores;

    int public dineroRecaudado = 0; // Dinero total recaudado con los patrocinadores
    // Control de la barra de progreso
    int public porcentaje = 0; // A medida que el dinero recaudado aumenta, el porcentaje cambia


    /* ======= FUNCIONES DEL PROYECTO ======= */
    // Función que crea un proyecto con los datos aportados
    function crearProyecto(string memory _nombre, string memory _descripcion, int _objetivo, int _dia, int _mes, int _ano) public {
      nombreProyecto = _nombre;
      descProyecto = _descripcion;
      dineroObjetivo = _objetivo;

      dia = _dia;
      mes = _mes;
      ano = _ano;
      proyectoCreado = true;

    }

    function estadoProyecto() public view returns (bool) {
        return proyectoCreado;
    }

    function mostrarNombreProyecto() public view returns (string memory) {
        return nombreProyecto;
    }
    function mostrarDescripcion() public view returns (string memory) {
        return descProyecto;
    }
    function mostrarMeta() public view returns (int) {
        return dineroObjetivo;
    }
    // Mostrar el dinero recaudado del proyecto a partir de los patrocinadores
    function mostrarDineroRecaudado() public view returns (int){
        return dineroRecaudado;
    }

    // Mostrar el dinero recaudado del proyecto a partir de los patrocinadores
    function mostrarDia() public view returns (int){
        return dia;
    }

    // Mostrar el dinero recaudado del proyecto a partir de los patrocinadores
    function mostrarMes() public view returns (int){
        return mes;
    }

    // Mostrar el dinero recaudado del proyecto a partir de los patrocinadores
    function mostrarAno() public view returns (int){
        return ano;
    }

    function mostrarFecha() public view returns (int, int, int) {
        return (ano, mes, dia);
    }

    /* ======= FUNCIONES DE PATROCINADORES ======= */
    // Añade a un usuario patrocinador junto a la cantidad de dinero que aporta
    function Patrocinar(string memory _username, int _cantidad) public {
        bool repetidor = false;
        uint ID_Patrocinador = 0;

        // Busca si el patrocinador ya existe.
        for (uint i = 0; i < contadorPatrocinadores; i++) {
            if (keccak256(abi.encodePacked(_username)) == keccak256(abi.encodePacked(patrocinadores[i]))) {
                repetidor = true;
                ID_Patrocinador = i; // Guarda al patrocinador repetido
            }
        }

        // Si el patrocinador es el mismo, no se crea un nuevo patrocinador sino que se incrementa la cantidad de uno existente.
        if (repetidor == true) {
            dineroPatrocinadores[ID_Patrocinador] = dineroPatrocinadores[ID_Patrocinador] + _cantidad;
            dineroRecaudado = dineroRecaudado + _cantidad;

            // Actualización del porcentaje
            if (dineroRecaudado != 0 && dineroObjetivo != 0) {
                porcentaje = (dineroRecaudado * 100) / dineroObjetivo;
                if (porcentaje > 100) {
                    porcentaje = 100;
                }
            }


        } else {
            // TODO: Controlar el dinero que mete mediante JavaScript
            patrocinadores.push(_username);
            dineroPatrocinadores.push(_cantidad);

            contadorPatrocinadores = contadorPatrocinadores + 1;
            dineroRecaudado = dineroRecaudado + _cantidad;

            // Actualización del porcentaje
            if (dineroRecaudado != 0 && dineroObjetivo != 0) {
                porcentaje = (dineroRecaudado * 100) / dineroObjetivo;
                if (porcentaje > 100) {
                    porcentaje = 100;
                }
            }

        }
    }
    // Muestra la lista de usuarios patrocinadores
    function mostrarPatrocinadores() public view returns (string [] memory) {
        return patrocinadores;
    }
    // Muestra la lista de el dinero aportado por cada patrocinador
    function mostrarDineroPatrocinador() public view returns (int [] memory) {
        return dineroPatrocinadores;
    }

    // Busca a un patrocinador EXISTENTE y observa lo que ha aportado (Nota: No sé si lo usaré)
    function buscarDineroPatrocinador(string memory _username) public view returns (int) {
        bool found = false;
        uint ID_Patrocinador;
        for (uint i = 0; i < contadorPatrocinadores; i++) {
            if (keccak256(abi.encodePacked(_username)) == keccak256(abi.encodePacked(patrocinadores[i]))) {
                found = true;
                ID_Patrocinador = i; // Guarda al patrocinador repetido
            }
        }
        if (found == true) {
            return dineroPatrocinadores[ID_Patrocinador];
        }else {
            return 0; // Un patrocinador SIEMPRE aporta, si devuelvo '0' puedo jugar con esa valor.
        }

    }

    /* ======= FUNCIONES DE RECOMPENSAS ======= */
    // Añade un nombre y un objetivo (€) a la recompensa
    function crearRecompensa(string memory _nombre, string memory _objetivo) public {
        // Forma de añadir en JavaScript: Nombre,Valor
        recompensas.push(_nombre);
        valoresRecompensa.push(_objetivo);
        contadorRecompensas = contadorRecompensas + 1;
    }
    // Muestra la lista de nombres de las recompensas
    function mostrarRecompensas() public view returns (string [] memory, string [] memory) {
        return (recompensas, valoresRecompensa);
    }

    /* ======= INTERFAZ ======= */
    // Intento de controlar la barra de progreso
    function Porcentaje() public view returns (int) {
        return porcentaje;
    }


    // Intento humilde de reiniciar todo para poder reutilizarlo
    function Reiniciar() public {
        // Elimina a los Patrocinadores, el dinero recaudado y las recompensas
        nombreProyecto = "No definido";
        descProyecto = "Descripción no definida.";
        dineroObjetivo = 0;
        proyectoCreado = false;

        dia = 0;
        mes = 0;
        ano = 0;

        delete recompensas;
        delete valoresRecompensa;

        delete patrocinadores;
        delete dineroPatrocinadores;

        contadorRecompensas = 0;
        dineroRecaudado = 0;
        contadorPatrocinadores = 0;

        porcentaje = 0;
    }


}
