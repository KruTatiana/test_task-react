import styled from "@emotion/styled";
import { Button, type ButtonProps } from "@mui/material";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  width: 20%;
  margin: 0% auto 5%;
  padding: 3% 2%;
  border: solid rgba(91, 149, 170, 0.8) 2px;
  border-radius: 8px;
  background-color: white;
`;

export const Submit = styled(Button)<ButtonProps>(() => ({
  backgroundColor: '#128C76',
  color:'white',
}));

export const Error = styled.p`
  margin: 0;
  padding: 0;
  color:rgb(191, 32, 32);
`

export const Sucsess = styled.p`
  margin: 0 auto;
  padding: 0;
  alighn-self: auto;
  color: white;
  font-size: 3rem;
  font-weight: 700;
`
