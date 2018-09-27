'use strict';

const jake = new Pacman('jake', 'light', 0, 0);
const sally = new Pacman('sally', 'dark', 4, 0);
const bomb1 = new Bomb(1, Math.floor(Math.random() * 9 + 1), Math.floor(Math.random() * 9 + 1));
const bomb2 = new Bomb(2, Math.floor(Math.random() * 9 + 1), Math.floor(Math.random() * 9 + 1));
let bombOne = document.getElementById('bomb-1');
let bombTwo = document.getElementById('bomb-2');

// class Movement {
//   constructor(right, left, up, down) {
//     this.right;
//     thi
//   }
// }

function jakeMove() {
  if (event.key === 'ArrowRight') {
    jake.moveRight();
  } else if (event.key === 'ArrowLeft') {
    jake.moveLeft();
  } else if (event.key === 'ArrowDown') {
    jake.moveDown();
  } else if (event.key === 'ArrowUp') {
    jake.moveUp();
  }
}

function sallyMove() {
  if (event.key === 'd') {
    sally.moveRight();
  } else if (event.key === 'a') {
    sally.moveLeft();
  } else if (event.key === 's') {
    sally.moveDown();
  } else if (event.key === 'w') {
    sally.moveUp();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  jake.mount();
  sally.mount();
  bomb1.updateHTML();
  bomb2.updateHTML();

  document.addEventListener('keydown', event => {
    jakeMove();
    sallyMove();

    if (bombOne.classList.contains('bomb')) {
      if (jake.xpos === bomb1.xpos && jake.ypos === bomb1.ypos) {
        jake.death();
        bomb1.death();
      }

      if (sally.xpos === bomb1.xpos && sally.ypos === bomb1.ypos) {
        sally.death();
        bomb1.death();
      }
    } 

    if (bombTwo.classList.contains('bomb')) {
      if (jake.xpos === bomb2.xpos && jake.ypos === bomb2.ypos) {
        jake.death();
        bomb2.death();
      }

      if (sally.xpos === bomb2.xpos && sally.ypos === bomb2.ypos) {
        sally.death();
        bomb2.death();
      }
    } 

    // else if (bomb.classList.contains('tomb')) {
    //   if (jake.xpos === bomb1.xpos && jake.ypos === bomb1.ypos) {
    //     console.log('dont stand on my grave');
    //   }
    // }
  });
});