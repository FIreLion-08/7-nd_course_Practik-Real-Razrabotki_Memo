import styled from "styled-components";

export const ModalBox = styled.div`
display: block;
position: absolute;
background-color: #FFFFFF;
min-width: 176px;
border: 0.5px solid rgba(153, 153, 153, 1);
border-radius: 6px;
box-shadow: 0px 20px 67px -12px #00000021;
top: 235px;
left: 595px;
z-index: 2;
display: flex;
flex-direction: column;
gap: 6px;
padding: 12px;
`
export const CardCategoryItemFood = styled.div`
    border-radius: 30px;
    background-color: #f4f5f6;
    padding: 8px 20px 8px 20px;
    max-width: 89px;
    border: none;
    cursor: pointer;
    ${(props) =>
        props.$isActive === 'food' &&
        `
      background-color: #DBFFE9;
      color:  #1FA46C;
      svg path {
  fill: #1FA46C;
}
    `}
`
export const CardCategoryItemTransport = styled.div`
    border-radius: 30px;
    background-color: #f4f5f6;
    padding: 8px 20px 8px 20px;
    max-width: 133px;
    border: none;
    cursor: pointer;
    ${(props) =>
        props.$isActive === 'transport' &&
        `
      background-color: #DBFFE9;
      color:  #1FA46C;
      svg path {
  fill: #1FA46C;
}
    `}
`
export const CardCategoryItemJoy = styled.div`
    border-radius: 30px;
    background-color: #f4f5f6;
    padding: 8px 20px 8px 20px;
    max-width: 149px;
    border: none;
    cursor: pointer;
    ${(props) =>
        props.$isActive === 'joy' &&
        `
      background-color: #DBFFE9;
      color:  #1FA46C;
      svg path {
  fill: #1FA46C;
}
    `}
`

export const CardCategoryItemHousing = styled.div`
    border-radius: 30px;
    background-color: #f4f5f6;
    padding: 8px 20px 8px 20px;
    max-width: 109px;
    border: none;
    cursor: pointer;
    ${(props) =>
        props.$isActive === 'housing' &&
        `
      background-color: #DBFFE9;
      color:  #1FA46C;
      svg path {
  fill: #1FA46C;
}
    `}
`

export const CardCategoryItemEducation = styled.div`
    border-radius: 30px;
    background-color: #f4f5f6;
    padding: 8px 20px 8px 20px;
    max-width: 152px;
    border: none;
    cursor: pointer;
    ${(props) =>
        props.$isActive === 'education' &&
        `
      background-color: #DBFFE9;
      color:  #1FA46C;
      svg path {
  fill: #1FA46C;
}
    `}
`

export const CardCategoryItemOthers = styled.div`
    border-radius: 30px;
    background-color: #f4f5f6;
    padding: 8px 20px 8px 20px;
    max-width: 111px;
    border: none;
    cursor: pointer;
    ${(props) =>
        props.$isActive === 'others' &&
        `
      background-color: #DBFFE9;
      color:  #1FA46C;
      svg path {
  fill: #1FA46C;
}
    `}
`

export const ItemName = styled.span`
    font-weight: 400;
    font-size: 12px;
    padding-left: 12px;
`