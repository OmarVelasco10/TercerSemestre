let reverseGeocode=require('./modules/geocode');
let statusClima=require('./modules/clima');

let coordenada ={
 lat:19.262824,
 lon:-103.736101

}


reverseGeocode(coordenada,(error,dataResponse)=>{
    if(error){
        console.log('Ocurrio un error');
    }
    else{
        console.log(dataResponse);
        statusClima(dataResponse.estado,(error,dataResponse)=>{
            if(error){
                console.log('Ocurrio un error');
            }
            else{
                console.log(dataResponse);
                
                
            }
        });

        
    }
});


