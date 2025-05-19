import * as S from './ErrorPage.styled'

const ErrorPage = () => {
    return (
        <S.Container>
            <S.Title>404</S.Title>
            <S.Text>Страница не найдена</S.Text>
            <S.HomeLink to="/">На главную</S.HomeLink>
        </S.Container>
    )
}

export default ErrorPage
