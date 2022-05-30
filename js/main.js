"use strict"

const game = function() {
    const screen  = {};
    screen.canvas = document.querySelector(".screen");
    screen.ctx = screen.canvas.getContext("2d");
    screen.resize = 10;
    screen.width = screen.canvas.width = window.innerWidth - screen.resize;
    screen.height = screen.canvas.height = window.innerHeight - screen.resize;

    //her ist your first map data when you have multiple maps the data come from data/maps.js
    const map = new Game_map(screen, first_map)
    const player = new Player(screen, map);
    const camera = Camera(screen, player, map)

    const update = function() {
        screen.ctx.clearRect(0, 0, screen.width, screen.height);
        
        map.render();
        camera.render();
        player.update();

        window.requestAnimationFrame(update);
    };
    window.requestAnimationFrame(update);
};

window.onload = game();