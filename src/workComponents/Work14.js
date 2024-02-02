import React, { useState, useEffect } from 'react';

const createInitialBoard = () => {
  const initialBoard = [];
  for (let y = 0; y < 3; y++) {
    initialBoard[y] = [];
    for (let x = 0; x < 3; x++) {
      initialBoard[y][x] = { color: 0 };
    }
  }
  return initialBoard;
};

const Work14 = () => {
  const [board, setBoard] = useState(createInitialBoard());
  const [isAnimation, setIsAnimation] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    init();
  }, [setBoard]); // 空の依存配列を渡すことで、一度だけ実行される



  const init = () => {
    const container = document.createElement("div");
    container.style.position = "relative";
    document.body.appendChild(container);

    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        const panel = document.createElement("div");
        panel.style.position = `absolute`;
        panel.style.left = `${x * 100 + 2}px`;
        panel.style.top = `${y * 100 + 2}px`;
        panel.style.width = `96px`;
        panel.style.height = `96px`;
        panel.style.backgroundColor = `#f00`;
        panel.style.borderRadius = `10px`;
        panel.style.transition = `all 150ms linear`;
        container.appendChild(panel);
        board[y][x] = { panel, color: 0 };
        panel.onpointerdown = (e) => {
          e.preventDefault();
          ondown(x, y);
        };
      }
    }
  };

  const flip = async (x, y) => {
    if (x < 0 || y < 0 || x >= 3 || y >= 3) {
      return;
    }
    setIsAnimation(true);

    const panel = board[y][x].panel;
    let color = board[y][x].color;
    color = 1 - color;
    board[y][x].color = color;

    panel.style.transform = "perspective(100px) rotateY(90deg)";
    await new Promise((r) => setTimeout(r, 150));
    panel.style.backgroundColor = color ? "#00f" : "#f00";
    panel.style.transform = "perspective(100px) rotateY(-90deg)";
    panel.parentElement.appendChild(panel);
    await new Promise((r) => setTimeout(r, 50));
    panel.style.backgroundColor = color ? "#00f" : "#f00";
    panel.style.transform = "perspective(100px) rotateY(0deg)";
    await new Promise((r) => setTimeout(r, 150));

    setIsAnimation(false);
  };

  const ondown = (x, y) => {
    if (isAnimation) {
      return;
    }
    if (isGameOver) {
      return;
    }
    flip(x, y);
    flip(x + 1, y);
    flip(x - 1, y);
    flip(x, y + 1);
    flip(x, y - 1);

    setIsGameOver(board.flat().every((v) => v.color === 1));
  };
  return (
    <span>
      about
    </span>
  )
};

export default Work14;
