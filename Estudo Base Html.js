// Arquivo JavaScript
// Cria o canvas para desenhar o jogo
const canvas = document.getElementById('canvas');
canvas.width = 400;
canvas.height = 600;
const ctx = canvas.getContext('2d');

// Define as constantes do jogo
const BLOCK_SIZE = 20;
const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// Classe para representar um bloco do Tetris
class Block {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw() {
    // Desenha o bloco na tela
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x * BLOCK_SIZE, this.y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
  }
}

// Classe para representar uma peça do Tetris
class Tetromino {
  constructor(blocks, color) {
    this.blocks = blocks;
    this.color = color;
  }

  draw() {
    // Desenha cada bloco da peça na tela
    this.blocks.forEach(block => block.draw());
  }

  move(dx, dy) {
    // Move a peça para a direita ou para a esquerda
    this.blocks.forEach(block => {
      block.x += dx;
      block.y += dy;
    });
  }

  rotate() {
    // Rotaciona a peça em sentido horário
    const centerX = this.blocks[1].x;
    const centerY = this.blocks[1].y;
    this.blocks.forEach(block => {
      const dx = block.x - centerX;
      const dy = block.y - centerY;
      block.x = centerX - dy;
      block.y = centerY + dx;
    });
  }
}

// Classe para representar o tabuleiro do Tetris
class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = Array(height)}}
