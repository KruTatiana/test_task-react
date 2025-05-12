import styled from "@emotion/styled";

export const MainPageContainer = styled.main<{ $colored?: boolean }>`
  width: 100%;
  min-height: 70vh;
  margin-top: 0;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({$colored}) => ($colored ? "#095473" : "white")};

  & h4 {
    text-alighn: center;
    color: #5B95AA;
  }

  & h3 {
    padding-bottom: 5%;
    text-alighn: center;
    color: white;
  }
`;
