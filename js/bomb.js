class Bomb {
    constructor(xpos, ypos) {
        this.xpos = xpos;
        this.ypos = ypos;
    }

    updateHTML() {
        // this.render();
        const bomb = document.getElementById(`bomb`);
        bomb.style.left = `${this.xpos * 64}px`;
        bomb.style.top = `${this.ypos * 64}px`
      }

    // render() {
    //     let bomb = document.createElement("div");
    //     let board = document.getElementById('board');
    //     bomb.className = 'pacman bomb';
    //     bomb.id = 'bomb';
    //     board.appendChild(bomb);
    // }

    death() {
        const bomb = document.getElementById(`bomb`);
        bomb.className = 'pacman tomb';
    }
}