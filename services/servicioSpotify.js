export async function pedirTokenEnSpotify(){
    //RECETA PARA CONSUMIR APIS CON JS == PASOS PARA IR A UN RESTAURANTE

    //1. PA DONDE VAS? (LA URL DEL SERVIDOR+ENDPPINT)
    const URL = "https://accounts.spotify.com/api/token"

    let datoUno="grant_type=client_credentials"
    let datoDos="client_id=5938fd7d0e5f4d889ba4db749d5780ad"
    let datoTres="client_secret=63d8eca3cf88416ca881b4f92588b05b"

    //2. QUE VAS A HACER? (CONFIGURAMOS LA PETICION O REQUEST) 
    const PETICION={
        method:"POST",
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        },
        body:`${datoUno}&${datoDos}&${datoTres}`
    }
    //3. ARRANQUE PUES (CONSUMA EL API)
    let respuesta=await fetch(URL,PETICION)
    let respuestaTOKEN=await respuesta.json()

    
    let token=respuestaTOKEN.token_type+" "+respuestaTOKEN.access_token  
    return(token)
}