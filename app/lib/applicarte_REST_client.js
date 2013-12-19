exports.getPaintingDetails = function(callback){
    var url = "http://hackaton.applicarte.es/images/hackaton/";
    var timeout = 60000;
    
    var process_response = function (obj, e, state){
        
        Ti.API.debug('HACKATON - API - GET - PROCESS RESPONSE');
        var body = {};

        if(state.status == "error"){
            callback(state);
        }
        else {
            try{
                body = JSON.parse(obj.responseText);
            }catch(err){
                callback(getError(0, "Bad Json", err));
                return;
            }
            body["status"] = "ok";
            Ti.API.debug('HACKATON - API - GET - PROCESS RESPONSE OK');
            callback(body);
        }
    }
    makeGET(url, "", timeout, "", process_response);
}

/****** GENERIC REST METHODS *****/
var makeGET = function(url, params, tout, headers, f_callback){

    Ti.API.debug('HACKATON - API - GET - Request to:' + url);

    if(Titanium.Network.online){
        // Creamos HTTP client
        var xhr = Ti.Network.createHTTPClient();

        // Establecemos la funcion onload
        xhr.onload = function(e){
            Ti.API.debug('HACKATON - API - GET - ONLOAD');
            f_callback (this, e, {"status": "ok", "code": e.source.status});
            xhr = null;
        };

        // Establecemos la funcion onerror
        xhr.onerror = function(e)
        {
            Ti.API.debug('HACKATON - API - GET - Error: ' + JSON.stringify(e));
            f_callback (this, e, getError(e.source.status, e.source.responseText, e.error));
            xhr = null;
        };

        xhr.open('GET', url);
        // Establecemos el timeout
        xhr.setTimeout(tout);
        if (headers) {
            for (var header in headers){
                Ti.API.debug('HACKATON - API - GET - '+ header["name"] + ':' + header["value"]);
                xhr.setRequestHeader(header["name"], header["value"]);
            }
        }
        // Header gzip
        xhr.setRequestHeader("Accept-Encoding","gzip,deflate");
        xhr.setRequestHeader("Accept","application/json");
        
        // params es un array con los query parameters
        if (params) {
            xhr.send(params);
        }

        // Desactivamos la validación del certificado
        xhr.setValidatesSecureCertificate(false);
        xhr.send();
    }
    else{
        Ti.API.debug('HACKATON - API - GET - Data network not available');
        f_callback (this, null, getError( -1, "Network not available", "Network not available"));
    }
}


var getError = function(code, description, details){
    return {"status": "error", "code": code, "description": description, "details": details}
}