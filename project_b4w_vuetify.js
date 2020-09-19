"use strict"

// register the application module
b4w.register("project_b4w_vuetify_main", function(exports, require) {

// import modules used by the app
var m_app       = require("app");
var m_cfg       = require("config");
var m_data      = require("data");
var m_preloader = require("preloader");
var m_ver       = require("version");
var m_cam       = require("camera");
var m_cont      = require("container");
var m_ctl       = require("controls");
var m_mouse     = require("mouse");
var m_math      = require("math");
var m_obj       = require("objects");
var m_phy       = require("physics");
var m_scenes    = require("scenes");
var m_trans     = require("transform");
var m_util      = require("util");

var m_quat = require("quat");
var _enable_camera_controls = true;
// detect application mode
var DEBUG = (m_ver.type() == "DEBUG");

// automatically detect assets path
var APP_ASSETS_PATH = m_cfg.get_assets_path("project_b4w_vuetify");

/**
 * export the method to initialize the app (called at the bottom of this file)
 */
exports.init = function() {
    m_app.init({
        canvas_container_id: "main_canvas_container",
        callback: init_cb,
        show_fps: DEBUG,
        console_verbose: DEBUG,
        // autoresize: true,
        // physics_enabled: true,
        alpha: false,
        background_color: [1.0, 1.0, 1.0, 0.0],
        assets_gzip_available: true
    });
}

/**
 * callback executed when the app is initialized
 */
function init_cb(canvas_elem, success) {

    if (!success) {
        console.log("b4w init failure");
        return;
    }
    m_preloader.create_preloader({
      container_color:"#FFFFFF", // background color of the container
      bar_color:"#80D4FF", // background color of the bar
      frame_color: "#15D6C5", // color of the frame border
      font_color: "#000000" // color of the font
    });

    // m_preloader.create_preloader();

    window.onresize = m_cont.resize_to_container;
    m_cont.resize_to_container();


    // ignore right-click on the canvas element
    canvas_elem.oncontextmenu = function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    };

    load();
}

/**
 * load the scene data
 */
function load() {
    m_data.load(APP_ASSETS_PATH + "project_b4w_vuetify.json", load_cb, preloader_cb);
}

/**
 * update the app's preloader
 */
function preloader_cb(percentage) {
    m_preloader.update_preloader(percentage);
}
// function preloader_cb(percentage) {
//     m_preloader.update_preloader((percentage!==100)?percentage+' % from 100 ':percentage);
// }

/**
 * callback executed when the scene data is loaded
 */
function load_cb(data_id, success) {

    if (!success) {
        console.log("b4w load failure");
        return;
    }
    m_app.enable_camera_controls(false, false, false, m_cont.get_canvas());
    init_controls();

    // var spawner = m_scenes.get_object_by_name("spawner");
    // m_trans.get_translation(spawner, spawner_pos);
    // place your code here

}
function init_controls() {
    document.getElementById("scene1").addEventListener("click", function(e) {
      m_preloader.create_preloader();
      m_data.unload("scene2.json, scene3.json");
        m_data.load(APP_ASSETS_PATH + "scene1.json", loaded_cb, preloader_cb);
    });
    document.getElementById("scene2").addEventListener("click", function(e) {
      m_preloader.create_preloader();
      m_data.unload("scene1.json, scene3.json");
      m_data.load(APP_ASSETS_PATH + "scene2.json", loaded_cb, preloader_cb);
    });
    document.getElementById("scene3").addEventListener("click", function(e) {
      m_preloader.create_preloader();
      m_data.unload("scene1.json, scene2.json");
      m_data.load(APP_ASSETS_PATH + "scene3.json", loaded_cb, preloader_cb);
    });
    // document.getElementById("scene0").addEventListener("click", function(e) {
    //   m_preloader.create_preloader();
    //   m_data.unload("torus.json", loaded_cb, null, null, true);
    //   m_data.unload("monkey.json", loaded_cb, null, null, true);
    //     m_data.load(APP_ASSETS_PATH + "dinamik_loader.json", load_cb, preloader_cb);
    // });
  }
    function loaded_cb(data_id) {
      m_app.enable_camera_controls(false, false, false, m_cont.get_canvas());
    }
});

// import the app module and start the app by calling the init method
b4w.require("project_b4w_vuetify_main").init();
