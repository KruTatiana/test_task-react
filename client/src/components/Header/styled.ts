import styled from "@emotion/styled";
import Button, {type ButtonProps} from "@mui/material/Button";

export const HeaderContainer = styled.header`
  width: 100vw;
  margin-top: 0;
  padding: 25px 0px;
  display: flex;
  justify-content: center;
  background-color: white;
  -webkit-box-shadow: 0px 4px 13px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 13px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 13px 0px rgba(34, 60, 80, 0.2);
`;

export const Logo = styled.p`
  margin: 0 0 0 3%;
  vertical-align: middle;
  font-size: 1.5rem;
  font-weight: 600;
  color: #128C76;
`;

export const ButtonStyled = styled(Button)<ButtonProps>(() => ({
    backgroundColor: '#128C76',
    color:'white',
    minWidth: '15%',
    marginRight: '3%',
    textTransform: 'none',
  }));
