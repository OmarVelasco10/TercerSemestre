const request = require('postman-request');
 

const statusClima= (estado, callback)=>{

    let urlLatLon= `http://api.weatherstack.com/current?access_key=9070308c24613be8d3e83b5e6f74b11e&query=${estado}`;
    request(urlLatLon,(error,response,body)=>{
        if(error){
            callback('Ocurrio algun error con la busqueda',undefined)
        }
        else{
            let data= JSON.parse(body);
           

            callback(undefined,{
               clima:data.current.temperature,
               descripcionclima:data.current.weather_descriptions
           });
           
        }
    })
    


}
module.exports=statusClima;