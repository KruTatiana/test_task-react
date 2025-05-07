import { FooterContainer } from "./styled";
import { Stack } from "@mui/material";

export const Footer = () => {
  return (
    <FooterContainer>
      <Stack width={1200} direction={"row"} sx={{justifyContent:"center"}}>
        <p>Some company</p>
        <p>2024</p>
      </Stack>
    </FooterContainer>
  )
}