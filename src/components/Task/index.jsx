import React, { useContext } from "react"
import { UserContext } from "../../context/AddInput"
import * as S from "./style"

const Tasks = ({ el }) => {
  const { completeTask } = useContext(UserContext)
  return (
    <>
      <S.Container>
        <S.Estilizacao>
          <button
            onClick={() => completeTask(el.id)}
            className={el.isCompled ? "active" : "disable"}
          >
            {el.isCompled && (
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                <path
                  fill="none"
                  stroke="#FFF"
                  stroke-width="2"
                  d="M1 4.304L3.696 7l6-6"
                />
              </svg>
            )}
          </button>
          <p>{el.name}</p>
        </S.Estilizacao>
      </S.Container>
    </>
  )
}
export default Tasks
