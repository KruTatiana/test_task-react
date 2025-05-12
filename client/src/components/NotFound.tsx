import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { NotFoundStyled } from "./styled"

export const NotFound = () => {
  return (
      <Stack paddingX={"3%"} sx={{justifyContent:"center", minHeight:"70vh"} }>
        <NotFoundStyled>This page don't exist. Go <Link to="/">Home.</Link></NotFoundStyled>
      </Stack>
  )
}