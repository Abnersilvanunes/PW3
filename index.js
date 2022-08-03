const  express  =  require ( 'express' ) ;

const  app  =  express ( ) ;

aplicativo . get ( '/' ,  ( req ,  res ) => {

    consola . log ( 'Rota Http!') ;
    res . send ( 'Rota Http!') ;

} ) ;

aplicativo . get ( '/Iniciar' ,  ( req ,  res ) => {

    consola . log ( 'teste') ;
    res . send ( 'teste' ) ;

} ) ;


aplicativo . ouça ( 9080 ,  ( ) => {
    consola . log ( 'Servidor rodando em: http://localhost:9080' ) ;
} ) ;