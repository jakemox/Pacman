class Bomb {
    constructor(index, xpos, ypos) {
        this.index = index;
        this.xpos = xpos;
        this.ypos = ypos;
    }

    updateHTML() {
        // this.render();
        const bomb = document.getElementById(`bomb-${this.index}`);
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
        const bomb = document.getElementById(`bomb-${this.index}`);
        bomb.className = `pacman tomb`;
    }
}