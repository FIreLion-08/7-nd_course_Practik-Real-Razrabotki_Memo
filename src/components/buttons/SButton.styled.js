import styled from "styled-components";

export const SButton = styled.button`
  width: 100%;
  height: 39px;
  padding: 12px;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: ${(props) =>
    props.$isActive ? "rgba(115, 52, 234, 1)" : "rgb(153, 153, 153)"};
  color: rgb(255, 255, 255);
  font-family: inherit;
  cursor: ${(props) => (props.$isActive ? "pointer" : "not-allowed")};

  &:hover {
    background-color: ${(props) =>
      props.$isActive ? "rgba(115, 52, 254, 1)" : "rgb(133, 133, 133)"};
    box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  }
`;
