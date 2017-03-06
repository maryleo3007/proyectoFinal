var coders = [ { nombre : "Meche", apellido : "Zubieta",  promocion : "1era. promoción", estado : "Trabajando" },
        { nombre : "Arabela", apellido : "Rojas", promocion : "2da. promoción", estado : "Trabajando" },
        { nombre : "Maria", apellido : "Rosán",  promocion : "2da. promoción", estado : "Trabajando" },
        { nombre : "Guadalupe", apellido : "Racio",  promocion : "3era. promoción", estado : "Trabajando" },
			  { nombre : "Sara", apellido : "Casa",  promocion : "3era. promoción", estado : "Trabajando" },
			  { nombre : "Daniella", apellido : "Durán",  promocion : "4ta. promoción", estado : "Trabajando" },
			  { nombre : "Michelle", apellido : "Seguil",  promocion : "5ta. promoción", estado : "Trabajando" },
			  { nombre : "Diana", apellido : "Navarro",  promocion : "5ta. promoción", estado : "Trabajando" } ];

var resultado = "";

persons.forEach(function(elemento){
    resultado += "<div><ul> <li> Nombre: "+elemento.nombre+ "</li>"+
       "<li> Apellido : "+elemento.apellido+"</li> "+
       "<li> Rol"+elemento.promocion+"</li>"+
       "<li> cumpleanios"+elemento.estado+"</li>  </ul></div>";
    });

var mostrar = document.getElementById("mostrarResultado");
mostrar.innerHTML = resultado;
