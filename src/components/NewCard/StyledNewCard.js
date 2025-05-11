import styled from 'styled-components'

export const CardBox = styled.div`
    height: 618px;
    width: 379px;
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
    padding-left: 12px;
    &::placeholder {
        font-size: 12px;
        font-weight: 400;
        color: #999999;
    }
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
    border: none;
    cursor: pointer;
    ${props => props.$isActive === 'joy' && `
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
    border: none;
    cursor: pointer;
    ${props => props.$isActive === 'housing' && `
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
    border: none;
    cursor: pointer;
    ${props => props.$isActive === 'education' && `
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
    border: none;
    cursor: pointer;
    ${props => props.$isActive === 'others' && `
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
    padding-left: 12px;
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
`
export const CardFormButton = styled.button`
    margin-left: 32px;
    margin-right: 34px;
    margin-bottom: 32px;
    background-color: #1fa46c;
    border: none;
    border-radius: 6px;
    padding: 12px 79px 12px 79px;
    color: #ffffff;
    cursor: pointer;
`
