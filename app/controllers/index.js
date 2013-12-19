
$.index.open();



function doClick() {
    Alloy.Globals.loading.show('Loading image data...', true);
    
    Alloy.Globals.applicarte.getPaintingDetails(function(e){
        Ti.API.debug(JSON.stringify(e));
        Ti.API.debug(e.image_file);
        Alloy.Globals.loading.hide();        
        alert(JSON.stringify(e));        
    });
}