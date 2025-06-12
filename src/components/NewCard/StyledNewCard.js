import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components'

export const CardBox = styled.div`
    max-height: 620px;
    width: 380px;
    background-color: #ffffff;
    border-radius: 30px;
`

export const CardHeader = styled.h2`
    font-size: 24px;
    font-weight: 700;
    line-height: 100%;
    padding: 32px 161px 24px 32px;
`

export const CardForm = styled.form`
    display: flex;
    flex-direction: column;
`
export const CardFormHeader = styled.h3`
    font-size: 16px;
    font-weight: 600;
    line-height: 100%;
    padding-bottom: 16px;
    padding-left: 32px;
`
export const CardFormDiscription = styled.input`
    height: 39px;
    width: 313px;
    border: 0.5px, solid, #999999;
    border-radius: 6px;
    margin-left: 32px;
    margin-bottom: 24px;
     margin-right: 34px;
    padding-left: 12px;
    &::placeholder {
        font-size: 12px;
        font-weight: 400;
        color: #999999;
    }
    ${({$validationDescription}) => {switch ($validationDescription) {
      case 'valid':
        return `background-color: rgba(241, 235, 253, 1);
                 border: 0.5px solid #7334EA;`;
      case "invalid":
        return `background-color: rgba(255, 235, 235, 1);
                 border: 0.5px solid #F25050;`;
      default:
        return `background-color: #FFFFFF;
                 border: 0.5px solid #999999;`;
    }}}
`
export const CardCategoryHeader = styled.h3`
    font-size: 16px;
    font-weight: 600;
    line-height: 100%;
    padding-bottom: 16px;
    padding-left: 32px;
`

export const CardCategoryItems = styled.div`
    margin-left: 32px;
    margin-bottom: 24px;
    max-width: 277px;
    display: flex;
    flex-direction: row;
    gap: 6px;
    flex-wrap: wrap;
`
export const CardCategoryItemFood = styled.div`
    border-radius: 30px;
    background-color: #f4f5f6;
    padding: 8px 20px 8px 20px;
    border: none;
    cursor: pointer;
    ${(props) =>
        props.$isActive === 'food' &&
        `
      background-color: #F1EBFD;
      color:  #7334EA;
      svg path {
  fill: #7334EA;
}
    `}
`

export const CardCategoryItemTransport = styled.div`
    border-radius: 30px;
    background-color: #f4f5f6;
    padding: 8px 20px 8px 20px;
    border: none;
    cursor: pointer;
    ${(props) =>
        props.$isActive === 'transport' &&
        `
      background-color: #F1EBFD;
      color:  #7334EA;
      svg path {
  fill: #7334EA;
}
    `}
`
export const CardCategoryItemJoy = styled.div`
    border-radius: 30px;
    background-color: #f4f5f6;
    padding: 8px 20px 8px 20px;
    border: none;
    cursor: pointer;
    ${(props) =>
        props.$isActive === 'joy' &&
        `
      background-color: #F1EBFD;
      color:  #7334EA;
      svg path {
  fill: #7334EA;
}
    `}
`

export const CardCategoryItemHousing = styled.div`
    border-radius: 30px;
    background-color: #f4f5f6;
    padding: 8px 20px 8px 20px;
    border: none;
    cursor: pointer;
    ${(props) =>
        props.$isActive === 'housing' &&
        `
      background-color: #F1EBFD;
      color:  #7334EA;
      svg path {
  fill: #7334EA;
}
    `}
`

export const CardCategoryItemEducation = styled.div`
    border-radius: 30px;
    background-color: #f4f5f6;
    padding: 8px 20px 8px 20px;
    border: none;
    cursor: pointer;
    ${(props) =>
        props.$isActive === 'education' &&
        `
      background-color: #F1EBFD;
      color:  #7334EA;
      svg path {
  fill: #7334EA;
}
    `}
`

export const CardCategoryItemOthers = styled.div`
    border-radius: 30px;
    background-color: #f4f5f6;
    padding: 8px 20px 8px 20px;
    border: none;
    cursor: pointer;
    ${(props) =>
        props.$isActive === 'others' &&
        `
      background-color: #F1EBFD;
      color:  #7334EA;
      svg path {
  fill: #7334EA;
}
    `}
`

export const ItemName = styled.span`
    font-weight: 400;
    font-size: 12px;
    padding-left: 12px;
`

export const CardDateHeader = styled.h3`
    font-size: 16px;
    font-weight: 600;
    line-height: 100%;
    padding-bottom: 16px;
    padding-left: 32px;
`
export const CardFormDate = styled.input`
    height: 39px;
    width: 313px;
    border: 0.5px, solid, #999999;
    border-radius: 6px;
    margin-left: 32px;
    margin-bottom: 24px;
     margin-right: 34px;
    padding-left: 12px;
    border-color: ${(props) => (props.$hasError ? 'red' : 'initial')};
    &::placeholder {
        font-size: 12px;
        font-weight: 400;
        color: #999999;
        
    }
`
export const CardSumHeader = styled.h3`
    font-size: 16px;
    font-weight: 600;
    line-height: 100%;
    padding-bottom: 16px;
    padding-left: 32px;
    
`
export const CardFormSum = styled.input`
    height: 39px;
    width: 313px;
    border: 0.5px, solid, #999999;
    border-radius: 6px;
    margin-left: 32px;
    margin-bottom: 24px;
     margin-right: 34px;
    padding-left: 12px;
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    appearance: textfield;
    &::placeholder {
        font-size: 12px;
        font-weight: 400;
        color: #999999;
    }
    ${({$inputError}) => {switch ($inputError) {
      case 'valid':
        return `background-color: rgba(241, 235, 253, 1);
                 border: 0.5px solid #7334EA;`;
      case "invalid":
        return `background-color: rgba(255, 235, 235, 1);
                 border: 0.5px solid #F25050;`;
      default:
        return `background-color: #FFFFFF;
                 border: 0.5px solid #999999;`;
    }}}
`
export const CardFormButton = styled.button`
    margin-left: 32px;
    
    margin-bottom: 32px;
    background-color:${(props) => (props.$activButton ? '#7334EA' : '#999999')} ;
    border: none;
    border-radius: 6px;
    padding: 12px 82px 12px 79px;
    color: #ffffff;
    cursor: pointer;

`
export const StyledDatePicker = styled(DatePicker)`
  padding: 12px 12px;
  border: 0.5px solid #ccc;
  border-radius: 6px;
  font-size: 12px;
  width: 313px;
  background-color: white;
  margin-left: 32px;
  margin-bottom: 24px;
  background-color: ${(props) => (props.$isInvalid ? "rgba(255, 235, 235, 1)" : "rgba(241, 235, 253, 1)")};
  ${({ $isInvalid }) => {
    switch ($isInvalid) {
      case false:
        return `background-color: rgba(241, 235, 253, 1);
                 border: 0.5px solid #7334EA;`;
      case true:
        return `background-color: rgba(255, 235, 235, 1);
                 border: 0.5px solid #F25050;`;
      default:
        return `background-color: #FFFFFF;
                 border: 0.5px solid #999999;`;
    }
  }}
`;
export const ErrorStar = styled.span`
color: red;
`