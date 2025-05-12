import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { ButtonStyled } from "./styled";

type props = {
  buttonText: string,
}

export const ContactUsButton = ({buttonText}: props) => {
  return (
    <Stack width={{xs:"40%", sm:"20%",  md:"15%"}}>
      <Link to="/contact-us" style={{ textDecoration: "none", color: "white"}}>
        <ButtonStyled sx={{textTransform:"none"}} >
          {buttonText}
        </ButtonStyled>
      </Link>
    </Stack>)
}