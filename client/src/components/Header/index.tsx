import { ButtonStyled, HeaderContainer, Logo } from "./styled";
import { Stack } from "@mui/material";

export const Header = () => {
  return (
    <HeaderContainer>
      <Stack width={1200} direction={"row"} sx={{justifyContent:"space-between"}}>
      <Logo>
        Some Company
      </Logo>
      <ButtonStyled>Contact Us</ButtonStyled>
      </Stack>
    </HeaderContainer>
  )
}