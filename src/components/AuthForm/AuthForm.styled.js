import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 20px;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    
`

export const ErrorMessage = styled.p`
    width: 400px;
    height:36px;
    text-align: center;
    size: 12px;
    color: #ff4d4f;
    margin: 0;
`
export const StyledInputName = styled.input`
    padding: 12px;
    
    border-radius: 8px;
    font-size: 16px;
    width: 100%;
    transition: all 0.3s;
    ${({$validName}) => {switch ($validName) {
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


    &::placeholder {
        color: #bfbfbf;
    }
`

export const StyledInputLogin = styled.input`
    padding: 12px;
    
    border-radius: 8px;
    font-size: 16px;
    width: 100%;
    transition: all 0.3s;
    ${({$validLogin}) => {switch ($validLogin) {
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


    &::placeholder {
        color: #bfbfbf;
    }
`

export const StyledInputPass = styled.input`
    padding: 12px;
    
    border-radius: 8px;
    font-size: 16px;
    width: 100%;
    transition: all 0.3s;
    ${({$validPass}) => {switch ($validPass) {
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


    &::placeholder {
        color: #bfbfbf;
    }
`
export const InputContainer = styled.div`
  position: relative;
`;
export const StarIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: red;
`;