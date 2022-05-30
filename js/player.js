"use strict";

const Player = function(screen, map) {
    this.player = Object.create(sprite);
    this.player.screen = screen;
    this.player.color = "green";
    
    //player data is in data/player_data.js and is a 1d array white one point for player pos
    const template_pos = cast_to_2d(player_data, map.row);
    const pos_data = get_cell_pos(template_pos, map);

    pos_data.forEach(data => {
        this.player.pos_x = data.pos_x;
        this.player.pos_y = data. pos_y;
    });

    this.player.size = 30;
    this.player.speed = 5;

    this.keydown = function(key) {
        if (key == 68) { console.log("right"); this.player.direction.set("right", true)};
        if (key == 65) { console.log("left");  this.player.direction.set("left", true)};
        if (key == 83) { console.log("down");  this.player.direction.set("down", true)};
        if (key == 87) { console.log("up");    this.player.direction.set("up", true)};
    };

    this.keyup = function(key) {
        if (key == 68) { console.log("right"); this.player.direction.set("right", false)};
        if (key == 65) { console.log("left");  this.player.direction.set("left", false)};
        if (key == 83) { console.log("down");  this.player.direction.set("down", false)};
        if (key == 87) { console.log("up");    this.player.direction.set("up", false)};
    };

    addEventListener("keydown", key => { this.keydown(key.keyCode) });
    addEventListener("keyup", key => { this.keyup(key.keyCode) });

    return this.player;
};