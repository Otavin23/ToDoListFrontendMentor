import React, { useContext, useEffect, useState } from "react"
import * as S from "./style"
import { UserContext } from "../../context/AddInput"

const Footer = () => {
  const {
    clearCompledTasks,
    tasks,
    mostrarTaskComplete,
    setAll,
    showComplete,
    filterType,
    filteredTasks,    
  } = useContext(UserContext)
  const [taksLength, setTaksLength] = useState(0)
  useEffect(() => {
      if(filterType === "all"){
          setTaksLength(tasks.length)
      }else{
          setTaksLength(filteredTasks.length)
      }
  }, [filterType])

  return (
    <S.Footer>
      <S.Container>
        <div className="items">
          {taksLength} {taksLength >= 1 ? "Items left" : "item left"}
        </div>
        <div className="activesAll">
          <button onClick={setAll} className={filterType === "all" && "active"}>
            All
          </button>
          <button
            onClick={showComplete}
            className={filterType === "active" && "active"}
          >
            Active
          </button>
          <button
            onClick={mostrarTaskComplete}
            className={filterType === "completed" && "active"}
          >
            Completed
          </button>
        </div>
        <button className="clear" onClick={clearCompledTasks}>
          Clear Completed
        </button>
      </S.Container>
    </S.Footer>
  )
}
export default Footer
