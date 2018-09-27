class GamePlan {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    updateHTML() {
        const board = document.getElementById(`board`);
        board.style.width = `${this.width * 64}px`;
        board.style.height = `${this.height * 64}px`;
      }
}