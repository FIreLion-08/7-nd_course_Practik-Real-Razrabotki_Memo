import styled from "styled-components";

export const ModalBox = styled.div`
display: block;
position: absolute;
background-color: #FFFFFF;
min-width: 106px;
border: 0.5px solid rgba(153, 153, 153, 1);
border-radius: 6px;
box-shadow: 0px 20px 67px -12px #00000021;
top: 235px;
left: 785px;
z-index: 2;
display: flex;
flex-direction: column;
gap: 6px;
padding: 12px;
`
export const SortCategoriesDate = styled.div`
    border-radius: 30px;
    background-color: #f4f5f6;
    padding: 8px 20px 8px 20px;
    max-width: 70px;
    border: none;
    cursor: pointer;
    ${(props) =>
        props.$isActive === 'date' &&
        `
      background-color: #DBFFE9;
      color:  #1FA46C;
      svg path {
  fill: #1FA46C;
}
    `}
`

export const SortCategoriesSum = styled.div`
    border-radius: 30px;
    background-color: #f4f5f6;
    padding: 8px 20px 8px 20px;
    max-width: 82px;
    border: none;
    cursor: pointer;
    ${(props) =>
        props.$isActive === 'sum' &&
        `
      background-color: #DBFFE9;
      color:  #1FA46C;
      svg path {
  fill: #1FA46C;
}
    `}
`

export const SortName = styled.p`
    font-weight: 400;
    font-size: 12px;
`