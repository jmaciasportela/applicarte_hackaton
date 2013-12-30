function Controller() {
    function getImageData() {
        Alloy.Globals.loading.show("Loading image data...", true);
        Alloy.Globals.applicarte.getPaintingDetails(function(e) {
            info = e;
            Ti.API.debug(JSON.stringify(e));
            $.starwidget.init();
            $.drawer.init({
                mainWindow: $.index,
                buttons: [ {
                    id: "One",
                    title: "One",
                    click: function() {
                        alert("One");
                    }
                }, {
                    id: "Two",
                    title: "Two",
                    click: function() {
                        alert("Two");
                    }
                }, {
                    id: "Three",
                    title: "Three",
                    click: function() {
                        alert("Three");
                    }
                } ],
                autoClose: true,
                gutter: 5,
                overrideMenu: false
            });
            $.header.backgroundImage = "http://hackaton.applicarte.es" + e.image_file_url;
            $.title.text = e.metadata_image.title;
            $.author.text = e.metadata_image.author;
            $.technique.text = e.metadata_painting.technique;
            $.year.text = e.metadata_image.year_of_creation;
            $.info_content_title.text = e.metadata_image.title;
            $.info_content_text.text = e.metadata_painting.big_description;
            var listIM = resources.getResources(e, "IM");
            var listVI = resources.getResources(e, "VI");
            var listAU = resources.getResources(e, "AU");
            $.videos_content.add(listVI);
            $.audios_content.add(listAU);
            $.images_content.add(listIM);
            Ti.API.debug(e.image_file);
            Alloy.Globals.loading.hide();
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        navBarHidden: true,
        backgroundColor: "transparent",
        exitOnClose: true,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.main = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "absolute",
        id: "main"
    });
    $.__views.index.add($.__views.main);
    $.__views.wrapper = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        id: "wrapper"
    });
    $.__views.main.add($.__views.wrapper);
    $.__views.header = Ti.UI.createView({
        backgroundColor: "black",
        width: Ti.UI.FILL,
        height: "120dp",
        layout: "horizontal",
        id: "header"
    });
    $.__views.wrapper.add($.__views.header);
    $.__views.back = Ti.UI.createView({
        width: "120dp",
        height: "120dp",
        backgroundColor: "transparent",
        backgroundImage: "/images/home.png",
        id: "back"
    });
    $.__views.header.add($.__views.back);
    $.__views.metainfo = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "120dp",
        backgroundColor: "black",
        layout: "vertical",
        opacity: .7,
        id: "metainfo"
    });
    $.__views.header.add($.__views.metainfo);
    $.__views.title = Ti.UI.createLabel({
        color: "white",
        text: "",
        left: "3dp",
        width: Ti.UI.FILL,
        height: "24dp",
        font: {
            fontFamily: "Helvetica",
            fontSize: "20dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        opacity: 1,
        id: "title"
    });
    $.__views.metainfo.add($.__views.title);
    $.__views.author = Ti.UI.createLabel({
        color: "white",
        text: "",
        left: "3dp",
        width: Ti.UI.FILL,
        height: "20dp",
        font: {
            fontFamily: "Helvetica",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        opacity: 1,
        id: "author"
    });
    $.__views.metainfo.add($.__views.author);
    $.__views.technique = Ti.UI.createLabel({
        color: "white",
        text: "",
        left: "3dp",
        width: Ti.UI.FILL,
        height: "18dp",
        font: {
            fontFamily: "Helvetica",
            fontSize: "14dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        opacity: 1,
        id: "technique"
    });
    $.__views.metainfo.add($.__views.technique);
    $.__views.year = Ti.UI.createLabel({
        color: "white",
        text: "",
        left: "3dp",
        width: Ti.UI.FILL,
        height: "18dp",
        font: {
            fontFamily: "Helvetica",
            fontSize: "14dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        opacity: 1,
        id: "year"
    });
    $.__views.metainfo.add($.__views.year);
    $.__views.starwidget = Alloy.createWidget("starrating", "widget", {
        left: "0dp",
        id: "starwidget",
        max: "5",
        initialRating: "4\n							\n							",
        __parentSymbol: $.__views.metainfo
    });
    $.__views.starwidget.setParent($.__views.metainfo);
    $.__views.resources_bar = Ti.UI.createView({
        backgroundColor: "white",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#ffffff",
                offset: 0
            }, {
                color: "#EBEBEB",
                offset: .5
            }, {
                color: "#DBDBDB",
                offset: 1
            } ]
        },
        width: Ti.UI.FILL,
        height: "50dp",
        layout: "horizontal",
        id: "resources_bar"
    });
    $.__views.wrapper.add($.__views.resources_bar);
    $.__views.info = Ti.UI.createView({
        width: "25%",
        height: "50dp",
        id: "info"
    });
    $.__views.resources_bar.add($.__views.info);
    $.__views.info_icon = Ti.UI.createView({
        backgroundImage: "/images/info_on.png",
        backgroundSelectedImage: "/images/info.png",
        width: "50dp",
        height: "50dp",
        id: "info_icon"
    });
    $.__views.info.add($.__views.info_icon);
    $.__views.videos = Ti.UI.createView({
        width: "25%",
        height: "50dp",
        id: "videos"
    });
    $.__views.resources_bar.add($.__views.videos);
    $.__views.videos_icon = Ti.UI.createView({
        backgroundImage: "/images/videos.png",
        backgroundSelectedImage: "/images/videos.png",
        width: "50dp",
        height: "50dp",
        id: "videos_icon"
    });
    $.__views.videos.add($.__views.videos_icon);
    $.__views.audios = Ti.UI.createView({
        width: "25%",
        height: "50dp",
        id: "audios"
    });
    $.__views.resources_bar.add($.__views.audios);
    $.__views.audios_icon = Ti.UI.createView({
        backgroundImage: "/images/audios.png",
        backgroundSelectedImage: "/images/audios.png",
        width: "50dp",
        height: "50dp",
        id: "audios_icon"
    });
    $.__views.audios.add($.__views.audios_icon);
    $.__views.images = Ti.UI.createView({
        width: "25%",
        height: "50dp",
        id: "images"
    });
    $.__views.resources_bar.add($.__views.images);
    $.__views.images_icon = Ti.UI.createView({
        backgroundImage: "/images/images.png",
        backgroundSelectedImage: "/images/images.png",
        width: "50dp",
        height: "50dp",
        id: "images_icon"
    });
    $.__views.images.add($.__views.images_icon);
    $.__views.content = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "content"
    });
    $.__views.wrapper.add($.__views.content);
    var __alloyId0 = [];
    $.__views.info_content = Ti.UI.createScrollView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "info_content"
    });
    __alloyId0.push($.__views.info_content);
    $.__views.info_content_title = Ti.UI.createLabel({
        top: "20dp",
        left: "15dp",
        right: "70dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        font: {
            fontFamily: "Helvetica",
            fontSize: "18dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        color: "#0095FF",
        id: "info_content_title"
    });
    $.__views.info_content.add($.__views.info_content_title);
    $.__views.info_content_tts = Ti.UI.createView({
        backgroundImage: "/images/tts.png",
        backgroundSelectedImage: "/images/tts_press.png",
        width: "60dp",
        height: "60dp",
        top: "2dp",
        right: "5dp",
        id: "info_content_tts"
    });
    $.__views.info_content.add($.__views.info_content_tts);
    $.__views.info_content_text = Ti.UI.createLabel({
        top: "60dp",
        left: "15dp",
        right: "15dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        font: {
            fontFamily: "Helvetica",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        color: "black",
        id: "info_content_text"
    });
    $.__views.info_content.add($.__views.info_content_text);
    $.__views.videos_content = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "videos_content"
    });
    __alloyId0.push($.__views.videos_content);
    $.__views.audios_content = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "audios_content"
    });
    __alloyId0.push($.__views.audios_content);
    $.__views.images_content = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "images_content"
    });
    __alloyId0.push($.__views.images_content);
    $.__views.content_scrollable = Ti.UI.createScrollableView({
        views: __alloyId0,
        id: "content_scrollable",
        showPagingControl: "true"
    });
    $.__views.content.add($.__views.content_scrollable);
    $.__views.drawer = Alloy.createWidget("com.appcelerator.drawer", "widget", {
        id: "drawer",
        __parentSymbol: $.__views.main
    });
    $.__views.drawer.setParent($.__views.main);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var info;
    var resources = require("aux_UI");
    var audioPlayer = Ti.Media.createAudioPlayer({
        url: "/music/background.mp3",
        allowBackground: true
    });
    audioPlayer.start();
    $.index.open();
    $.index.addEventListener("open", function() {
        getImageData();
    });
    $.info_content_tts.addEventListener("click", function() {
        if (Alloy.Globals.tts.isSpeaking()) {
            Alloy.Globals.tts.stopSpeaking();
            audioPlayer.volume = 1;
        } else {
            audioPlayer.volume = .2;
            Alloy.Globals.tts.speak(info.metadata_image.title + "." + info.metadata_painting.big_description);
        }
    });
    $.info_icon.addEventListener("click", function() {
        $.content_scrollable.scrollToView(0);
        icon_activate(0);
    });
    $.videos_icon.addEventListener("click", function() {
        $.content_scrollable.scrollToView(1);
        icon_activate(1);
    });
    $.audios_icon.addEventListener("click", function() {
        $.content_scrollable.scrollToView(2);
        icon_activate(2);
    });
    $.images.addEventListener("click", function() {
        $.content_scrollable.scrollToView(3);
        icon_activate(3);
    });
    $.content_scrollable.addEventListener("scrollend", function(e) {
        icon_activate(e.currentPage);
    });
    var icon_activate = function(id) {
        $.info_icon.backgroundImage = "/images/info.png";
        $.videos_icon.backgroundImage = "/images/videos.png";
        $.audios_icon.backgroundImage = "/images/audios.png";
        $.images_icon.backgroundImage = "/images/images.png";
        0 == id ? $.info_icon.backgroundImage = "/images/info_on.png" : 1 == id ? $.videos_icon.backgroundImage = "/images/videos_on.png" : 2 == id ? $.audios_icon.backgroundImage = "/images/audios_on.png" : 3 == id && ($.images_icon.backgroundImage = "/images/images_on.png");
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;