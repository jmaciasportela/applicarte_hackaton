function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "starrating/" + s : s.substring(0, index) + "/starrating/" + s.substring(index + 1);
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
    priority: 10000.0014,
    key: "star",
    style: {
        height: "24dp",
        width: "24dp",
        left: "5dp",
        top: "5dp"
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