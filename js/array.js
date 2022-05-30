"use strict";

//cast a 1d array to 1d
const cast_to_2d = function(array, row_width) {
    const grid = [];
    let count = 1;

    for (let idx = 0; idx < array.length; idx += row_width) {
        let row = array.slice(idx, row_width * count);
        grid.push(row);
        count += 1;
    };
    
    return grid;
};

//get a 2d array and remove all value == 0 and return the cell pos of the other
const get_cell_pos = function(array, map_data) {
    const grid  = [];
    
    for (let y = 0; y < array.length; y++) {
        for (let x = 0; x < array[y].length; x++) {

            const cell = array[y][x];
            const cell_pos_y = map_data.pos_y + map_data.cell_size * y;
            const cell_pos_x = map_data.pos_x + map_data.cell_size * x;

            if (cell != 0) {
                grid.push({"pos_x": cell_pos_x, "pos_y": cell_pos_y})
            };
        };
    };
    return grid;
};