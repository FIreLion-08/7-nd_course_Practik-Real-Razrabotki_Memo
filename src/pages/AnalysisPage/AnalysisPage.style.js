import styled from 'styled-components'

export const StyleAnalysis = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    background-color: #eaeef6;
`
export const StyleAnalysisExpress = styled.div`
    padding-left: 120px;
`

export const Title = styled.h2`
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 36px 0 32px 0;
`

export const PeriodSelector = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`

export const PeriodButton = styled.button`
    padding: 8px 16px;
    border: 1px solid ${(props) => (props.active ? '#52c41a' : '#d9d9d9')};
    border-radius: 20px;
    background-color: ${(props) => (props.active ? '#f6ffed' : '#fff')};
    color: ${(props) => (props.active ? '#52c41a' : '#000')};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        border-color: #52c41a;
    }
`

export const Summary = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
`

export const SummaryTitle = styled.h3`
    margin-top: 0;
`

export const SummaryAmount = styled.div`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
`

export const Categories = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
`

export const CategoryCard = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

export const CategoryTitle = styled.h4`
    margin-top: 0;
    color: #52c41a;
`

export const CategoryAmount = styled.div`
    font-size: 18px;
    font-weight: 600;
`