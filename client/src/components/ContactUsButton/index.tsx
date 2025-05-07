import { ButtonStyled } from "./styled";

type props = {
  buttonText: string,
}

export const ContactUsButton = ({buttonText}: props) => {
  return <ButtonStyled sx={{textTransform:"none"}}>{buttonText}</ButtonStyled>
}