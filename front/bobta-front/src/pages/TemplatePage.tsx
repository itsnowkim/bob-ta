import { RootContainer } from "../styles"
import { Outlet } from "react-router-dom"

export const TemplatePage = () => {
  return (
    <RootContainer>
      <Outlet />
    </RootContainer>
  )
}
