const request = require('postman-request');
 

const reverseGeocode= (coordenada, callback)=>{

    let urlLatLon= `https://us1.locationiq.com/v1/reverse.php?key=pk.c46d95f4178e8a89d2389501dfbf09fd&lat=${coordenada.lat}&lon=${coordenada.lon}&format=json`;
    request(urlLatLon,(error,response,body)=>{
        if(error){
            callback('Ocurrio algun error con la busqueda',undefined)
        }
        else{
            let data= JSON.parse(body);
           

            callback(undefined,{
               pais:data.address.country,
               estado:data.address.state
           });
           
        }
    })

}
module.exports=reverseGeocode;