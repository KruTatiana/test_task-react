import styled from "@emotion/styled";
import  Grid, {type GridProps} from "@mui/material/Grid";

export const GridStyled = styled(Grid)<GridProps>(() => ({
  width: '100vw',
  backgroundColor: '#095473',
  color:'white',
}));