class Pacman {
    constructor(name, color, xpos, ypos) {
      this.name = name;
      this.color = color;
      this.mouth = 'open';
      this.facing = 'r';
      this.xpos = xpos;
      this.ypos = ypos;
    }
  
    switchMouth() {
      if(this.mouth === 'open') {
        this.mouth = 'close';
      } else {
        this.mouth = 'open';
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

    death() {
      const pacman = document.getElementById(`pacman-${this.name}`);

      pacman.style.display = 'none';

    }
  }