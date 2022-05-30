
const Camera = function(screen, player, map) {
    const camera = {};
    camera.speed = player.speed;

    let result;
    //set the player and player spawn on the map to the center of the viewport
    if (player.pos_x > screen.width / 2) {
        result =  player.pos_x - screen.width / 2;
        player.pos_x -= result;
        map.pos_x -= result; 
    }
    if (player.pos_x < screen.width / 2) {
        result = screen.width / 2 - player.pos_x;
        player.pos_x += result;
        map.pos_x += result;
    }

    if (player.pos_y > screen.height / 2) {
        result = player.pos_y - screen.height / 2;
        player.pos_y -= result;
        map.pos_y -= result;
    }
    if (player.pos_y < screen.width / 2) {
        result = screen.height / 2 - player.pos_y;
        player.pos_y += result;
        map.pos_y += result;
    }
    
    camera.render = function() {
        if (player.direction.get("right")) {
            map.pos_x -= camera.speed;
            player.speed = 0;
        }
        if (player.direction.get("left")) {
            map.pos_x += camera.speed;
            player.speed = 0;
        }
        if (player.direction.get("down")) {
            map.pos_y -= camera.speed;
            player.speed = 0;
        }
        if (player.direction.get("up")) {
            map.pos_y += camera.speed;
            player.speed = 0;
        }
    };

    return camera;
}