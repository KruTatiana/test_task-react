import { ContactUsButton } from "../ContactUsButton";
import { HomePageContainer } from "./styled";
import { GridStyled } from "../styled";
import { Grid, Stack } from "@mui/material";

export const HomePage = () => {
  return (
    <HomePageContainer>
      <GridStyled container spacing={8} padding={'5% 0'} justifyContent={'center'} borderBottom={'solid rgba(91, 149, 170, 0.8) 3px'}>
        <Stack width={1200} direction={"row"} paddingX={'3%'} sx={{justifyContent:"space-between"} }>
          <Grid size={5}>
            <h1>Most important title on the page</h1>
            <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante</article>
          </Grid>
          <Grid size={5} justifySelf={'end'}>
            <div>YouTubeVideo</div>
          </Grid>
        </Stack>
      </GridStyled>
      <Stack width={1200} padding={'3% 0'} margin={'0 auto'} flexDirection={'column'} alignItems={'center'}>
          <h2>Also very important title</h2>
            <Grid container spacing={8} paddingBottom={'5%'}>
              <Grid size={4}>
                <h4>Title</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</p>
              </Grid>
              <Grid size={4}>
                <h4>Title</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</p>
              </Grid>
              <Grid size={4}>
                <h4>Title</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</p>
              </Grid>
              <Grid size={4}>
                <h4>Title</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</p>
              </Grid>
              <Grid size={4}>
                <h4>Title</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</p>
              </Grid>
              <Grid size={4}>
                <h4>Title</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</p>
              </Grid>
            </Grid>
          <ContactUsButton buttonText="Contact Us"/>
      </Stack>
      <GridStyled container spacing={8} padding={'4% 3% 3%'} flexDirection={'column'} alignItems={'center'} borderBottom={'solid rgba(91, 149, 170, 0.8) 3px'} borderTop={'solid rgba(91, 149, 170, 0.8) 3px'}>
        <Stack width={1200} direction={'column'} alignItems={'center'}>
          <h3>Less important title</h3>
          <ContactUsButton buttonText="Contact Us"/>
        </Stack>
      </GridStyled>
    </HomePageContainer>
  )
}