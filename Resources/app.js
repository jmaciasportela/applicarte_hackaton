var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.loading = Alloy.createWidget("nl.fokkezb.loading");

Alloy.Globals.applicarte = require("applicarte_REST_client");

Alloy.Globals.tts = require("jp.isisredirect.tts");

Alloy.Globals.tts.addEventListener(Alloy.Globals.tts.TTS_INITOK, function() {});

Alloy.Globals.tts.addEventListener(Alloy.Globals.tts.TTS_UTTERANCE_COMPLETE, function() {});

Alloy.Globals.tts.initTTS();

Alloy.createController("index");