"use strict";

let current_spine = "";

const change_spine = (id, assetSpineVersion) => {

    if (current_spine !== ""){
        current_spine.dispose();
    }

    let runtimeSpineVersion;

    if (assetSpineVersion == 4.0) {
        runtimeSpineVersion = spine40
    } else if (assetSpineVersion == 4.1) {
        runtimeSpineVersion = spine41
    }

    document.getElementById("player-container").innerHTML = "";

    current_spine = new runtimeSpineVersion.SpinePlayer("player-container", {
        // jsonUrl: "/assets/" + id + "/" + id + ".json",
        skelUrl: "/assets/" + id + "/" + id + ".skel",
        atlasUrl: "/assets/" + id + "/" + id + ".atlas",
        backgroundColor: "2f353a",
        alpha: false,
        preserveDrawingBuffer:true
    });

    //very important or there'll be some annoying issue when zooming in and out
    //I don't even know how I found that to fix the issue
    document.querySelector(".spine-player-canvas").width = document.querySelector(".spine-player-canvas").height

    document.querySelector(".spine-player-canvas").style.width = null

    document.querySelector(".spine-player-canvas").style.display = "inline"
}
