import { ContactUsButton } from "../ContactUsButton";
import { VideoComponent } from "../VideoComponent";
import { MainPageContainer} from "./styled";
import { GridStyled, HeaderTwo  } from "../styled";
import { Grid, Stack } from "@mui/material";

export const HomePage = () => {
  return (
    <MainPageContainer>
      <GridStyled container spacing={2} padding={"5% 0"} justifyContent={"center"} borderBottom={"solid rgba(91, 149, 170, 0.8) 3px"}>
        <Stack maxWidth={1200} width={1200} direction={"row"} sx={{justifyContent:"space-between"} }>
          <Grid size={{md:4, lg:5}} marginLeft={"3%"}>
            <h1>Most important title on the page</h1>
            <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante</article>
          </Grid>
          <Grid size={{md:7, lg:6}} marginRight={"3%"} justifySelf={"end"}>
            <VideoComponent />
          </Grid>
        </Stack>
      </GridStyled>
      <Stack maxWidth={1200} padding={"3% 0"} margin={"0 auto"} flexDirection={"column"} alignItems={"center"}>
          <HeaderTwo>Also very important title</HeaderTwo>
            <Grid container spacing={2} paddingBottom={"5%"} width={"95%"}>
              <Grid size={4}>
                <h4>Title</h4>
                <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</article>
              </Grid>
              <Grid size={4}>
                <h4>Title</h4>
                <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</article>
              </Grid>
              <Grid size={4}>
                <h4>Title</h4>
                <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</article>
              </Grid>
              <Grid size={4}>
                <h4>Title</h4>
                <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</article>
              </Grid>
              <Grid size={4}>
                <h4>Title</h4>
                <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</article>
              </Grid>
              <Grid size={4}>
                <h4>Title</h4>
                <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</article>
              </Grid>
            </Grid>
          <ContactUsButton buttonText="Contact Us"/>
      </Stack>
      <GridStyled container spacing={8} padding={"4% 3% 3%"} flexDirection={"column"} alignItems={"center"} borderTop={"solid rgba(91, 149, 170, 0.8) 3px"}>
          <h3>Less important title</h3>
          <ContactUsButton buttonText="Contact Us"/>
      </GridStyled>
    </MainPageContainer>
  )
}