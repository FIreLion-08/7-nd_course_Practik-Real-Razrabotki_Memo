import styled from 'styled-components'

const StyledButton = styled.button`
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    background-color: ${(props) => (props.disabled ? '#f5f5f5' : '#7334EA')};
    color: ${(props) => (props.disabled ? '#d9d9d9' : '#fff')};
    font-weight: 600;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    transition: all 0.3s;

    &:hover {
        background-color: ${(props) =>
            props.disabled ? '#f5f5f5' : '#7334EA'};
    }
`

const Button = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
