import React from 'react'
import "./cell.css"

export const Cell = ({details, updateFlag, revealCell}) => {
  return (
    <div 
      className="Cell"
      onContextMenu={(e) => updateFlag(e, details.x, details.y)}
      onClick={() => revealCell(details.x, details.y)}
    >
      {details.revealed ? details.value : ""}
    </div>
  )
}
