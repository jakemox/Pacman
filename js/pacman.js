class Pacman {
    constructor(name, color, xpos, ypos, right, left, down, up) {
      this.name = name;
      this.color = color;
      this.mouth = 'open';
      this.facing = 'r';
      this.xpos = xpos;
      this.ypos = ypos;
      this.right = right;
      this.left = left;
      this.down = down;
      this.up = up;
    }
  
    switchMouth() {
      if(this.mouth === 'open') {
        this.mouth = 'close';
      } else {
        this.mouth = 'open';
      }
    }

    move() {
      if (event.key === this.right) {
        this.moveRight();
      } else if (event.key === this.left) {
        this.moveLeft();
      } else if (event.key === this.down) {
        this.moveDown();
      } else if (event.key === this.up) {
        this.moveUp();
      }
    }
  
    moveRight() {
      if (this.xpos < 9) {
        this.xpos += 1;
        this.switchMouth();
        this.facing = 'r';
        this.updateHTML();
      }  
    }
  
    moveLeft() {
      if (this.xpos > 0) {
        this.xpos -= 1;
        this.switchMouth();
        this.facing = 'l';
        this.updateHTML();
      } 
    }
  
    moveDown() {
      if (this.ypos < 9) {
        this.ypos += 1;
        this.switchMouth();
        this.facing = 'b';
        this.updateHTML();
      }
    }
  
    moveUp() {
      if (this.ypos > 0) {
        this.ypos -= 1;
        this.switchMouth();
        this.facing = 't';
        this.updateHTML();
      }
    }
  
    mount() {
      this.updateHTML();
    }
  
    updateHTML() {
      const pacman = document.getElementById(`pacman-${this.name}`);
      pacman.style.left = `${this.xpos * 64}px`;
      pacman.style.top = `${this.ypos * 64}px`;
      pacman.className = `pacman pac-${this.color}-${this.facing}${this.mouth}`;
    }

    badThings() {
      if (this.xpos === bomb1.xpos && this.ypos === bomb1.ypos) {
        this.death();
        bomb1.death();
      }

      if (this.xpos === bomb2.xpos && this.ypos === bomb2.ypos) {
        this.death();
        bomb2.death();
      }
    }

    death() {
      const pacman = document.getElementById(`pacman-${this.name}`);
      
      pacman.style.display = 'none';

    }
  }