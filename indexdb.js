const dbConnection = window.indexedDB.open('Notaria', 3);                                   // version 1
let db;
//on success = El successevent se dispara cuando un IDBRequesttiene éxito.
dbConnection.onsuccess = () => {
    db = dbConnection.result;
    console.log("Base de datos abierta", db);
}
// El upgradeneededevento se activa cuando se intentó abrir una base de datos 
// con un número de versión superior a su versión actual.
dbConnection.onupgradeneeded = (e) => {
    db = e.target.result;//elemento que nos devuelve
    console.log("Crear objetos de DB", db);
    const coleccionObjetos = db.createObjectStore('cliente', {
        keyPath: 'idCliente'
    });
    coleccionObjetos.createIndex("idCliente","idCliente", { unique:false});
    coleccionObjetos.createIndex("nombre","nombre", { unique:false});
    coleccionObjetos.createIndex("apellidoPaterno","apellidoPaterno", { unique:false});
    coleccionObjetos.createIndex("apellidoMaterno","apellidoMaterno", { unique:false});
    coleccionObjetos.createIndex("direccion","direccion", { unique:false});
    
    const objetoTramite = db.createObjectStore('tramites', {
        keyPath: 'idTramite'
    });
    objetoTramite.createIndex("idTramite","idTramite", { unique:false});
    objetoTramite.createIndex("Nrotramite","Nrotramite", { unique:false});
    objetoTramite.createIndex("nombreTramite","nombreTramite", { unique:false});
    objetoTramite.createIndex("tipoTramite","tipoTramite", { unique:false});
    objetoTramite.createIndex("fecha","fecha", { unique:false});
    objetoTramite.createIndex("Solicitante","Solicitante", { unique:false});
    objetoTramite.createIndex("Interesado","Interesado", { unique:false});
    objetoTramite.createIndex("estado","estado", { unique:false});
  
    
    
}
// El errorevento se activa IDBTransactioncuando una solicitud devuelve un error 
// y el evento aparece en el objeto de la transacción.
dbConnection.onerror = (error) =>{
    console.log(error);
}
