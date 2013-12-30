function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.loading/" + s : s.substring(0, index) + "/nl.fokkezb.loading/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0001,
    key: "Window",
    style: {
        navBarHidden: true
    }
}, {
    isClass: true,
    priority: 10000.0006,
    key: "loadingMask",
    style: {
        backgroundColor: "#5000",
        backgroundImage: null,
        opacity: 1,
        modal: false
    }
}, {
    isClass: true,
    priority: 10000.0007,
    key: "loadingOuter",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        borderRadius: 10,
        backgroundColor: "#C000"
    }
}, {
    isClass: true,
    priority: 10000.0008,
    key: "loadingInner",
    style: {
        top: "20dp",
        right: "20dp",
        bottom: "20dp",
        left: "20dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical"
    }
}, {
    isClass: true,
    priority: 10000.0009,
    key: "loadingIndicator",
    style: {
        top: "0dp",
        style: Ti.UI.ActivityIndicatorStyle.BIG
    }
}, {
    isClass: true,
    priority: 10000.0011,
    key: "loadingImages",
    style: {
        top: "0dp",
        images: [ "/images/nl.fokkezb.loading/00.png", "/images/nl.fokkezb.loading/01.png", "/images/nl.fokkezb.loading/02.png", "/images/nl.fokkezb.loading/03.png", "/images/nl.fokkezb.loading/04.png", "/images/nl.fokkezb.loading/05.png", "/images/nl.fokkezb.loading/06.png", "/images/nl.fokkezb.loading/07.png", "/images/nl.fokkezb.loading/08.png", "/images/nl.fokkezb.loading/09.png", "/images/nl.fokkezb.loading/10.png", "/images/nl.fokkezb.loading/11.png" ]
    }
}, {
    isClass: true,
    priority: 10000.0012,
    key: "loadingMessage",
    style: {
        top: "20dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: L("loadingMessage", "Loading.."),
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    }
}, {
    isId: true,
    priority: 100000.0002,
    key: "loadingMessage",
    style: {
        font: {
            fontFamily: "Helvetica",
            fontSize: "20dp",
            fontStyle: "normal",
            fontWeight: "normal"
        }
    }
}, {
    isId: true,
    priority: 100000.0003,
    key: "starwidget",
    style: {
        left: "0dp"
    }
} ];