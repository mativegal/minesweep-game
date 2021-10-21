import React, { useState, useEffect } from "react";
import createBoard from "../utils/createBoard";
import { Cell } from "./Cell/Cell";

export const Board = () => {
  const [grid, setGrid] = useState([]);

  // ComponentDidMount
  useEffect(() => {

    // Creating a board
    function freshBoard() {
      const newBoard = createBoard(5, 5, 10);
      setGrid(newBoard.board);
    }

    // Calling the function
    freshBoard();
  }, []);

  // On Right Click / Flag Cell
  const updateFlag = (e, x, y) => {

    // To not have a dropdown on right click
    e.preventDefault();

    // Deep copy of a state (creates an exact copy of the grid)
    let newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[x][y].flagged = true;
    setGrid(newGrid);
  }

  // Reveal Cell
  const revealCell = (x,y) => {
    let newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[x][y].revealed = true;
    setGrid(newGrid);
  }

  return grid.map((singleRow) => {
    return (
      <div style={{display: 'flex'}}>
        {singleRow.map((singleBlock) => {
          return (
            <Cell 
              details={singleBlock}
              updateFlag={updateFlag}
              revealCell={revealCell}
            />
          )
        })}
      </div>
    );
  });
};
