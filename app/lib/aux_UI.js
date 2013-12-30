exports.getResources = function (resources, type){
    
    var plainTemplate = {
        childTemplates: [
            {
                type: 'Ti.UI.Label', // Use a label
                bindId: 'rowtitle',  // Bind ID for this label
                properties: {        // Sets the Label.left property
                    left: '10dp',
                    right: '80dp',                    
                    font: {
                        fontFamily:"Helvetica",
                        fontSize: "16dp",
                        fontStyle: "normal",
                        fontWeight: "normal"
                    }                      
                }
            },
            {
                type: 'Ti.UI.Label', // Use a label
                bindId: 'description',  // Bind ID for this label
                properties: {        // Sets the Label.left property
                    left: '10dp',
                    right: '80dp',
                    font: {
                        fontFamily:"Helvetica",
                        fontSize: "10dp",
                        fontStyle: "normal",
                        fontWeight: "normal"
                    }                   
                }
            },            
            {
                type: 'Ti.UI.ImageView',  // Use an image view
                bindId: 'pic',            // Bind ID for this image view
                properties: {             // Sets the ImageView.image property
                    image: '/images/mini_audio.png',
                    width: "24dp",
                    height: "24dp",
                    right: '10dp'
                }
            },                    
        ]
    };
    
    function report(e) {
        Ti.API.info(e.type);
    }
    
    var listView = Ti.UI.createListView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        // Maps the plainTemplate object to the 'plain' style name
        templates: { 'plain': plainTemplate },
        // Use the plain template, that is, the plainTemplate object defined earlier
        // for all data list items in this list view
        defaultItemTemplate: 'plain'               
    });
    
    var data = [];
    
    resources.all_resources.length
    
    for (var i = 0; i < resources.all_resources.length; i++) {        
        if (resources.all_resources[i].type_of_resource == type){
            
            var mini_image ="";
            if(type=='IM') mini_image ="/images/mini_image.png";
            else if(type=='VI') mini_image ="/images/mini_video.png";
            else if(type=='AU') mini_image ="/images/mini_audio.png";
            
            data.push({
                // Maps to the rowtitle component in the template
                // Sets the text property of the Label component
                rowtitle : { text: resources.all_resources[i].title},
                description : { text: resources.all_resources[i].description},
                pic: { image: mini_image},
                // Sets the regular list data properties
                properties : {
                    itemId: i + 1,
                    accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE
                }
            });
        }
    }
    
    var section = Ti.UI.createListSection({items: data});
    listView.sections = [section];
    listView.addEventListener('itemclick', function(e){
        // Only respond to clicks on the label (rowtitle) or image (pic)
        if (e.bindId == 'rowtitle' || e.bindId == 'pic') {
            var item = e.section.getItemAt(e.itemIndex);
            if (item.properties.accessoryType == Ti.UI.LIST_ACCESSORY_TYPE_NONE) {
                item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK;
            }
            else {
                item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_NONE;
            }
            e.section.updateItemAt(e.itemIndex, item);
        }      
    });
    


Ti.API.debug(JSON.stringify(listView));
return listView;
}