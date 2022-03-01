import React, { useContext } from "react"
import * as S from "./stylle"
import { UserContext } from "../../context/AddInput"
import Tasks from "../Task"

const Main = () => {
  const { tasks, completeTask, filterType, filteredTasks } =
    useContext(UserContext)
  console.log(filterType)
  return (
    <S.SectionDiv>
          {filterType === "all" ? (
            <>
              {tasks.map((el) => (
                <Tasks el={el} />
              ))}
            </>
          ) : (
            <>
              {filteredTasks.map((el) => (
                <Tasks el={el} />
              ))}
            </>
          )}
    </S.SectionDiv>
  )
}
export default Main
