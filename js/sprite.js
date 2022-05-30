"use strict";

const sprite = {
    direction: new Map(),

    update() {
        if (this.direction.get("right")) { this.pos_x += this.speed; }
        else if (this.direction.get("left")) { this.pos_x -= this.speed; }
        else if (this.direction.get("down")) {this.pos_y += this.speed; }
        else if (this.direction.get("up")) { this.pos_y -= this.speed; }

        this.screen.ctx.fillStyle = this.color;
        this.screen.ctx.fillRect(this.pos_x, this.pos_y, this.size, this.size);
    }
};