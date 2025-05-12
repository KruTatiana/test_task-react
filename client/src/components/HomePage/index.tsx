import { ContactUsButton } from "../ContactUsButton";
import { VideoComponent } from "../VideoComponent";
import { MainPageContainer} from "./styled";
import { GridStyled, HeaderTwo  } from "../styled";
import { Grid, Stack } from "@mui/material";

export const HomePage = () => {
  return (
    <MainPageContainer>
      <GridStyled container spacing={2} padding={"5% 0"} justifyContent={"center"} borderBottom={"solid rgba(91, 149, 170, 0.8) 3px"}>
        <Stack maxWidth={1200} width={{sm:"85%", md:"85%", lg:"100%"}} direction={{lg:"row", md:"column"}} sx={{justifyContent:"space-between"} }>
          <Grid size={{md:12, lg:5}} paddingLeft={"3%"} paddingRight={{sm:"3%", md:"3%", lg:"0"}} marginBottom={{xs:"5%", sm:"5%", md:"5%", lg:"0"}}>
            <h1>Most important title on the page</h1>
            <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante</article>
          </Grid>
          <Grid size={{sm:12, md:12, lg:6}} minHeight={{xs:"200px", sm:"300px", md:"300px", lg:"300px"}} paddingLeft={{sm:"3%", md:"3%", lg:"0"}} display={{xs:"flex", sm:"flex", md:"flex"}} alignItems={{sm:"center"}} justifyContent={{xs:"center", md:"center"}} justifySelf={{lg:"end"}}>
            <VideoComponent />
          </Grid>
        </Stack>
      </GridStyled>
      <Stack maxWidth={1200} padding={"3% 0"} margin={"0 auto"} flexDirection={"column"} alignItems={"center"}>
          <HeaderTwo>Also very important title</HeaderTwo>
          <Grid container spacing={2} paddingBottom={"5%"} width={{xs:"90%", sm:"80%", md:"80%", lg:"95%"}}>
            <Grid size={{sm:12, md:6, lg:4}}>
              <h4>Title</h4>
              <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</article>
            </Grid>
            <Grid size={{sm:12, md:6, lg:4}}>
              <h4>Title</h4>
              <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</article>
            </Grid>
            <Grid size={{sm:12, md:6, lg:4}}>
              <h4>Title</h4>
              <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</article>
            </Grid>
            <Grid size={{sm:12, md:6, lg:4}}>
              <h4>Title</h4>
              <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</article>
            </Grid>
            <Grid size={{sm:12, md:6, lg:4}}>
              <h4>Title</h4>
              <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</article>
            </Grid>
            <Grid size={{sm:12, md:6, lg:4}}>
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