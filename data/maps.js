"use strict"

const assets = "./static/assets/";

//map data list is:
//sprite        the image from the map;
//cell_size     the size of the map cell`s;
//width         the max map width;
//height        the map map height;
//collision     this is the 1d array from tiled for your collision pos, I use it for place collision in a grid on the map;

const first_map = {
    sprite: `${assets}dungeon_map.png`,
    cell_size: 32,
    width:  1920,
    height: 1600, 
    collisions: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,257,257,257,257,257,257,257,257,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,257,257,257,257,257,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,257,0,0,257,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,257,257,0,0,257,0,0,0,257,0,0,0,257,257,257,0,0,257,257,257,257,257,257,257,257,257,257,0,0,0,0,257,0,0,0,0,0,0,257,
    0,257,257,257,257,257,257,257,257,257,257,257,0,0,0,0,0,0,0,257,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,257,0,257,0,0,0,0,0,0,0,0,0,257,0,0,0,257,0,0,0,0,0,0,257,
    257,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,257,0,0,0,0,0,0,0,0,0,257,0,0,0,257,0,0,0,0,0,0,257,
    257,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,257,0,0,0,0,0,0,0,0,0,257,0,0,0,257,0,0,0,0,0,0,257,
    257,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,257,0,0,0,0,0,0,0,0,0,257,0,0,0,257,0,0,0,0,0,0,257,
    257,0,0,0,0,0,257,0,0,0,0,0,257,257,257,257,257,257,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,257,257,257,0,0,257,257,257,257,257,257,257,257,257,257,257,0,0,0,0,0,0,257,
    257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,
    257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,
    257,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,
    257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,
    0,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,0,0,0,0,0,0,0,0,0,0,0,257,257,257,257,257,257,257,257,257,257,0,0,0,0,257,257,257,257,257,257,257,257,0,0,0,0,0,0,257,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,257,0,0,0,257,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,0,257,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,257,0,0,0,257,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,0,257,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,257,0,0,0,257,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,0,257,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,257,0,0,0,257,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,0,257,
    0,0,0,0,0,0,0,0,0,257,257,257,257,257,257,257,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,257,0,0,0,257,257,257,257,257,257,0,0,0,0,0,0,257,0,0,0,0,0,0,257,
    0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,257,0,0,257,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,257,
    0,0,0,0,0,0,0,0,257,0,0,0,257,0,0,0,257,0,0,257,0,257,0,0,0,0,0,0,0,257,0,257,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,257,
    0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,257,0,0,257,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,257,
    0,0,257,257,257,257,257,257,257,0,0,0,0,0,0,0,257,0,0,0,257,257,257,257,257,257,257,0,0,257,257,0,0,0,0,0,0,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,0,257,0,0,0,0,257,
    0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,257,
    0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,257,0,0,257,257,257,
    0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,257,0,0,0,0,257,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,257,
    0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,257,257,257,257,257,257,257,257,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,257,
    0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,257,
    0,0,257,257,257,257,257,257,257,257,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,0,0,0,0,257,
    0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,
    0,0,0,0,0,0,0,0,0,0,257,0,0,0,257,257,257,257,257,257,257,257,257,257,257,0,0,0,0,0,0,257,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,
    0,0,0,0,0,0,0,0,0,0,257,0,0,0,257,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,
    0,0,0,0,0,0,0,0,0,0,257,0,0,0,257,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,257,
    0,0,0,0,0,0,0,0,0,0,257,0,0,0,257,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,257,257,257,257,0,0,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,0,
    0,0,0,0,0,0,0,0,0,0,257,0,0,0,257,0,0,0,0,0,0,0,0,0,257,0,0,0,0,257,0,257,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,257,
    0,0,257,257,257,257,257,257,257,257,257,0,0,0,257,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,
    0,257,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,
    0,257,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,
    0,257,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,
    0,257,0,0,257,257,257,257,257,257,257,257,257,257,0,257,257,257,257,257,257,0,257,257,257,257,257,0,0,257,257,257,257,257,0,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,0,0,0,0,0,257,
    257,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,257,0,0,0,0,0,257,
    257,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,257,0,257,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,257,0,257,257,0,0,0,257,0,0,0,0,0,257,0,0,0,0,0,257,
    257,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,257,0,0,0,0,0,257,
    257,0,0,0,257,257,0,0,0,257,257,0,0,257,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,257,0,0,0,0,0,257,
    257,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,257,0,0,0,0,0,0,257,0,0,0,0,0,257,0,0,0,0,0,257,
    257,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,257,257,0,0,257,257,257,257,257,0,0,257,257,257,257,257,0,0,257,257,0,0,0,0,0,257,
    257,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,
    0,257,257,257,257,257,257,257,257,257,257,257,257,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,257,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,0
    ]
};