function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.appcelerator.drawer/" + s : s.substring(0, index) + "/com.appcelerator.drawer/" + s.substring(index + 1);
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
}, {
    isId: true,
    priority: 100000.0018,
    key: "drawer",
    style: {
        left: 0,
        right: 0,
        bottom: "-0dp",
        width: Ti.UI.FILL,
        height: "80dp",
        layout: "vertical",
        opacity: .75
    }
}, {
    isId: true,
    priority: 100000.0019,
    key: "pulltab",
    style: {
        backgroundImage: "/images/com.appcelerator.drawer/PullTabUp.png",
        center: {
            x: "50%"
        },
        top: 0,
        width: "50dp",
        height: "50dp",
        accessibilityLabel: "Drawer",
        accessibilityValue: "Closed",
        accessibilityHint: "Click to open the drawer"
    }
}, {
    isId: true,
    priority: 100000.002,
    key: "buttonbar",
    style: {
        left: 0,
        top: 0,
        width: Ti.UI.FILL,
        height: "50dp",
        backgroundColor: "black",
        layout: "horizontal"
    }
} ];