import styled from "@emotion/styled";
import Button, {type ButtonProps} from "@mui/material/Button";

export const ButtonStyled = styled(Button)<ButtonProps>(() => ({
    backgroundColor: "#128C76",
    color:"white",
    width: "100%",
  }));
