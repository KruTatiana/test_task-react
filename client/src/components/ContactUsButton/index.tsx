import { Link } from "react-router-dom";
import { ButtonStyled } from "./styled";

type props = {
  buttonText: string,
}

export const ContactUsButton = ({buttonText}: props) => {
  return (
    
      <Link to="/contact-us" style={{ textDecoration: "none", color: "white", width:"15%"}}>
        <ButtonStyled sx={{textTransform:"none"}} >
          {buttonText}
        </ButtonStyled>
      </Link>)
}