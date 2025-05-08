import { Link } from "react-router-dom";
import { ButtonStyled } from "./styled";

type props = {
  buttonText: string,
}

export const ContactUsButton = ({buttonText}: props) => {
  return (
    <ButtonStyled sx={{textTransform:"none"}} >
      <Link to="/contact-us" style={{ textDecoration: "none", color: "white" }}>{buttonText}</Link>
    </ButtonStyled>)
}