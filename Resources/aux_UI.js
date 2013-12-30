exports.getResources = function(resources, type) {
    var plainTemplate = {
        childTemplates: [ {
            type: "Ti.UI.Label",
            bindId: "rowtitle",
            properties: {
                left: "10dp",
                right: "80dp",
                font: {
                    fontFamily: "Helvetica",
                    fontSize: "16dp",
                    fontStyle: "normal",
                    fontWeight: "normal"
                }
            }
        }, {
            type: "Ti.UI.Label",
            bindId: "description",
            properties: {
                left: "10dp",
                right: "80dp",
                font: {
                    fontFamily: "Helvetica",
                    fontSize: "10dp",
                    fontStyle: "normal",
                    fontWeight: "normal"
                }
            }
        }, {
            type: "Ti.UI.ImageView",
            bindId: "pic",
            properties: {
                image: "/images/mini_audio.png",
                width: "24dp",
                height: "24dp",
                right: "10dp"
            }
        } ]
    };
    var listView = Ti.UI.createListView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        templates: {
            plain: plainTemplate
        },
        defaultItemTemplate: "plain"
    });
    var data = [];
    resources.all_resources.length;
    for (var i = 0; resources.all_resources.length > i; i++) if (resources.all_resources[i].type_of_resource == type) {
        var mini_image = "";
        "IM" == type ? mini_image = "/images/mini_image.png" : "VI" == type ? mini_image = "/images/mini_video.png" : "AU" == type && (mini_image = "/images/mini_audio.png");
        data.push({
            rowtitle: {
                text: resources.all_resources[i].title
            },
            description: {
                text: resources.all_resources[i].description
            },
            pic: {
                image: mini_image
            },
            properties: {
                itemId: i + 1,
                accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE
            }
        });
    }
    var section = Ti.UI.createListSection({
        items: data
    });
    listView.sections = [ section ];
    listView.addEventListener("itemclick", function(e) {
        if ("rowtitle" == e.bindId || "pic" == e.bindId) {
            var item = e.section.getItemAt(e.itemIndex);
            item.properties.accessoryType = item.properties.accessoryType == Ti.UI.LIST_ACCESSORY_TYPE_NONE ? Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK : Ti.UI.LIST_ACCESSORY_TYPE_NONE;
            e.section.updateItemAt(e.itemIndex, item);
        }
    });
    Ti.API.debug(JSON.stringify(listView));
    return listView;
};