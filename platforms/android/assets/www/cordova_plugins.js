cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "id": "ionic-plugin-keyboard.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "id": "es6-promise-plugin.Promise",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-geofence/www/TransitionType.js",
        "id": "cordova-plugin-geofence.TransitionType",
        "pluginId": "cordova-plugin-geofence",
        "clobbers": [
            "TransitionType"
        ]
    },
    {
        "file": "plugins/cordova-plugin-geofence/www/geofence.js",
        "id": "cordova-plugin-geofence.geofence",
        "pluginId": "cordova-plugin-geofence",
        "clobbers": [
            "geofence"
        ]
    },
    {
        "file": "plugins/cordova-plugin-mapbox/www/Mapbox.js",
        "id": "cordova-plugin-mapbox.Mapbox",
        "clobbers": [
            "Mapbox"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-console": "1.0.2",
    "cordova-plugin-device": "1.1.1",
    "cordova-plugin-splashscreen": "3.2.1",
    "cordova-plugin-statusbar": "2.1.2",
    "cordova-plugin-whitelist": "1.2.1",
    "ionic-plugin-keyboard": "2.0.1",
    "es6-promise-plugin": "3.0.2",
    "cordova-plugin-geofence": "0.5.0",
    "cordova-plugin-mapbox": "1.2.0"
};
// BOTTOM OF METADATA
});