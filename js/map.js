"use strict";

const Game_map = function(screen, data) {
    const map = {};
    map.sprite = new Image();
    map.sprite.src = data.sprite;
    
    map.scale = 2;
    // use / scale by width height cell_size  
    map.width = data.width;
    map.height = data.height;
    map.cell_size = data.cell_size;
    
    map.row = map.width / map.cell_size;
    map.pos_x = 0;
    map.pos_y = 0;

    map.grid = cast_to_2d(data.collisions, map.row);
    
    map.max_cell_width = map.width / map.cell_size;
    map.max_cell_height = map.height / map.cell_size;
    
    map.render = function() {
        screen.ctx.drawImage(map.sprite, map.pos_x, map.pos_y, map.width, map.height);
        map.collisions = get_cell_pos(map.grid, map);
        
        //draw map collisions
        map.collisions.forEach(cell => {
            screen.ctx.fillStyle = "rgba(200, 0, 0, .5)";
            screen.ctx.fillRect(cell.pos_x, cell.pos_y, map.cell_size, map.cell_size);
        })
    };

    return map;
};