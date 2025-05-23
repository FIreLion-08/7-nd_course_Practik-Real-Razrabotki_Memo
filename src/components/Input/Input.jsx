import * as S from './input.styled'

const Input = ({ isError, isValid, ...props }) => {
    return <S.StyledInput $isError={isError} $isValid={isValid} {...props} />
}

export default Input