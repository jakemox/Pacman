'use strict';

const board = new GamePlan(10, 10);

const jake = new Pacman('jake', 'light', 0, 0, 'ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp');

const sally = new Pacman('sally', 'dark', 0, 9, 'd', 'a', 's', 'w');

const bomb1 = new Bomb(1, Math.floor(Math.random() * 9 + 1), Math.floor(Math.random() * 9 + 1));
const bomb2 = new Bomb(2, Math.floor(Math.random() * 9 + 1), Math.floor(Math.random() * 9 + 1));

const bombOne = document.getElementById('bomb-1');
const bombTwo = document.getElementById('bomb-2');


document.addEventListener('DOMContentLoaded', () => {
  board.updateHTML();
  jake.mount();
  sally.mount();
  bomb1.updateHTML();
  bomb2.updateHTML();

  document.addEventListener('keydown', event => {
    jake.move();
    sally.move();

    if (bombOne.classList.contains('bomb')) {
      jake.badThings();
      sally.badThings();
    } 

    if (bombTwo.classList.contains('bomb')) {
      jake.badThings();
      sally.badThings();
    } 

    // else if (bomb.classList.contains('tomb')) {
    //   if (jake.xpos === bomb1.xpos && jake.ypos === bomb1.ypos) {
    //     console.log('dont stand on my grave');
    //   }
    // }
  });
});