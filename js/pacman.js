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
      this.lastXPos = xpos;
      this.lastYPos = ypos;
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

    stop() {
      if (event.key === this.right) {
        this.stopLeft();
        this.facing = 'l';
      } else if (event.key === this.left) {
        this.stopRight();
        this.facing = 'r';
      } else if (event.key === this.down) {
        this.stopUp();
        this.facing = 't';
      } else if (event.key === this.up) {
        this.stopDown();
        this.facing = 't';
      }
    }
  
    moveRight() {
      if (this.xpos < 9) {
        // this.recordLastPosition()
        this.xpos += 1;
        this.switchMouth();
        this.facing = 'r';
        this.updateHTML();
      }  
    }

    stopRight() {
      if (this.xpos < 9) {
        // this.recordLastPosition()
        this.xpos += 1;
        this.switchMouth();
        this.facing = 'l';
        this.updateHTML();
      }  
    }

  
    moveLeft() {
      if (this.xpos > 0) {
        // this.recordLastPosition()
        this.xpos -= 1;
        this.switchMouth();
        this.facing = 'l';
        this.updateHTML();
      } 
    }

    stopLeft() {
      if (this.xpos < 9) {
        // this.recordLastPosition()
        this.xpos -= 1;
        this.switchMouth();
        this.facing = 'r';
        this.updateHTML();
      }  
    }
  
    moveDown() {
      if (this.ypos < 9) {
        // this.recordLastPosition()
        this.ypos += 1;
        this.switchMouth();
        this.facing = 'b';
        this.updateHTML();
      }
    }

    stopDown() {
      if (this.ypos < 9) {
        // this.recordLastPosition()
        this.ypos += 1;
        this.switchMouth();
        this.facing = 't';
        this.updateHTML();
      }
    }
  
    moveUp() {
      if (this.ypos > 0) {
        // this.recordLastPosition()
        this.ypos -= 1;
        this.switchMouth();
        this.facing = 't';
        this.updateHTML();
      }
    }

    stopUp() {
      if (this.ypos > 0) {
        // this.recordLastPosition()
        this.ypos -= 1;
        this.switchMouth();
        this.facing = 'b';
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

    // badThings = this.xpos === bomb1.xpos && this.ypos === bomb1.ypos
    

    death() {
      const pacman = document.getElementById(`pacman-${this.name}`);
      
      pacman.style.display = 'none';
  
    }

    // recordLastPosition() {
    //   this.lastXPos = this.xpos;
    //   this.lastYPos = this.ypos;
    // }

    goToLastPos() {
      this.xpos = this.lastXPos;
      this.ypos = this.lastYPos;
      this.updateHTML();
    }
  }