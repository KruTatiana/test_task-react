import { ContactUsButton } from "../ContactUsButton";
import { HeaderContainer, Logo } from "./styled";
import { Stack } from "@mui/material";

export const Header = () => {
  return (
    <HeaderContainer>
      <Stack width={1200} direction={"row"} paddingX={'3%'} sx={{justifyContent:"space-between"} }>
      <Logo>
        Some Company
      </Logo>
      <ContactUsButton buttonText="Contact Us" />
      </Stack>
    </HeaderContainer>
  )
}