import styled from 'styled-components'

export const StyledInput = styled.input`
    padding: 12px;
    border: 1px solid ${props => {
        if (props.$isError) return '#ff4d4f';
        if (props.$isValid) return '#52c41a';
        return '#d9d9d9';
    }};
    border-radius: 8px;
    font-size: 16px;
    width: 100%;
    transition: all 0.3s;
    background-color: ${props => {
        if (props.$isError) return '#fff2f0';
        if (props.$isValid) return '#f6ffed';
        return 'transparent';
    }};
    position: relative;

    &:focus {
        border-color: ${props => props.$isError ? '#ff4d4f' : '#52c41a'};
        outline: none;
        box-shadow: ${props => 
            props.$isError 
                ? '0 0 0 2px rgba(255, 77, 79, 0.2)' 
                : '0 0 0 2px rgba(82, 196, 26, 0.2)'
        };
    }

    &::placeholder {
        color: #bfbfbf;
    }

    ${props => props.$isError && `
        &:after {
            content: '*';
            color: #ff4d4f;
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
        }
    `}
`