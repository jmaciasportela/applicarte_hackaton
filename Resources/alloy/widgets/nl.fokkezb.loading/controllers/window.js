function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.loading/" + s : s.substring(0, index) + "/nl.fokkezb.loading/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function Controller() {
    function init() {
        if ($.loadingMask.images) {
            useImages = true;
            $.loadingInner.remove($.loadingIndicator);
            $.loadingIndicator = null;
        } else {
            $.loadingInner.remove($.loadingImages);
            $.loadingImages = null;
        }
        $.loadingMask.addEventListener("androidback", cancel);
        update(args.message, args.cancelable);
        $.loadingMask.addEventListener("open", function() {
            isOpen = true;
        });
        args = null;
    }
    function update(_message, _cancelable) {
        $.loadingMessage.text = _message || L("loadingMessage", "Loading...");
        cancelable = _cancelable;
    }
    function cancel(e) {
        if (!cancelable) {
            if (true && "androidback" === e.type) {
                var intent = Ti.Android.createIntent({
                    action: Ti.Android.ACTION_MAIN
                });
                intent.addCategory(Ti.Android.CATEGORY_HOME);
                Ti.Android.currentActivity.startActivity(intent);
            }
            return;
        }
        close();
        _.isFunction(cancelable) && cancelable();
        return;
    }
    function open() {
        Ti.API.debug("window open " + $.loadingMask.n);
        $.loadingMask.open();
        useImages ? $.loadingImages.start() : $.loadingIndicator.show();
    }
    function close() {
        if (false || isOpen) _close(); else var interval = setInterval(function() {
            if (isOpen) {
                _close();
                clearInterval(interval);
            }
        }, 100);
    }
    function _close() {
        $.loadingMask.close();
        useImages ? $.loadingImages.stop() : $.loadingIndicator.hide();
        cancelable = null;
    }
    function onFocus() {
        $.hasFocus = true;
    }
    function onBlur() {
        $.hasFocus = false;
    }
    new (require("alloy/widget"))("nl.fokkezb.loading");
    this.__widgetId = "nl.fokkezb.loading";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "window";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.loadingMask = Ti.UI.createWindow({
        navBarHidden: true,
        backgroundColor: "#5000",
        backgroundImage: null,
        opacity: 1,
        modal: false,
        id: "loadingMask"
    });
    $.__views.loadingMask && $.addTopLevelView($.__views.loadingMask);
    cancel ? $.__views.loadingMask.addEventListener("click", cancel) : __defers["$.__views.loadingMask!click!cancel"] = true;
    onFocus ? $.__views.loadingMask.addEventListener("focus", onFocus) : __defers["$.__views.loadingMask!focus!onFocus"] = true;
    onBlur ? $.__views.loadingMask.addEventListener("blur", onBlur) : __defers["$.__views.loadingMask!blur!onBlur"] = true;
    $.__views.loadingOuter = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        borderRadius: 10,
        backgroundColor: "#C000",
        id: "loadingOuter"
    });
    $.__views.loadingMask.add($.__views.loadingOuter);
    $.__views.loadingInner = Ti.UI.createView({
        top: "20dp",
        right: "20dp",
        bottom: "20dp",
        left: "20dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "loadingInner"
    });
    $.__views.loadingOuter.add($.__views.loadingInner);
    $.__views.loadingIndicator = Ti.UI.createActivityIndicator({
        top: "0dp",
        style: Ti.UI.ActivityIndicatorStyle.BIG,
        id: "loadingIndicator"
    });
    $.__views.loadingInner.add($.__views.loadingIndicator);
    $.__views.loadingImages = Ti.UI.createImageView({
        top: "0dp",
        images: [ "/images/nl.fokkezb.loading/00.png", "/images/nl.fokkezb.loading/01.png", "/images/nl.fokkezb.loading/02.png", "/images/nl.fokkezb.loading/03.png", "/images/nl.fokkezb.loading/04.png", "/images/nl.fokkezb.loading/05.png", "/images/nl.fokkezb.loading/06.png", "/images/nl.fokkezb.loading/07.png", "/images/nl.fokkezb.loading/08.png", "/images/nl.fokkezb.loading/09.png", "/images/nl.fokkezb.loading/10.png", "/images/nl.fokkezb.loading/11.png" ],
        id: "loadingImages"
    });
    $.__views.loadingInner.add($.__views.loadingImages);
    $.__views.loadingMessage = Ti.UI.createLabel({
        top: "20dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: L("loadingMessage", "Loading.."),
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontFamily: "Helvetica",
            fontSize: "20dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "loadingMessage"
    });
    $.__views.loadingInner.add($.__views.loadingMessage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {}, useImages = false, cancelable = false, isOpen = false;
    init();
    exports.hasFocus = true;
    exports.open = open;
    exports.update = update;
    exports.close = close;
    __defers["$.__views.loadingMask!click!cancel"] && $.__views.loadingMask.addEventListener("click", cancel);
    __defers["$.__views.loadingMask!focus!onFocus"] && $.__views.loadingMask.addEventListener("focus", onFocus);
    __defers["$.__views.loadingMask!blur!onBlur"] && $.__views.loadingMask.addEventListener("blur", onBlur);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;