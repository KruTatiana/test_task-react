import styled from "@emotion/styled";
import  Grid, {type GridProps} from "@mui/material/Grid";

export const GridStyled = styled(Grid)<GridProps>(() => ({
  width: '100vw',
  backgroundColor: '#095473',
  color:'white',
}));

export const HeaderTwo = styled.h2<{ $colored?: boolean }>`
    margin: 0 auto;
    padding: ${({$colored}) => ($colored ? '5% 0 3%' : '2% 0 5%')} ;
    color:${({$colored}) => ($colored ? 'white' : '#095473')};
`

export const NotFoundStyled = styled.p`
  margin: 0 auto;
  padding: 0;
  color: #095473;
  font-size: 2rem;
  font-weight: 400;
`