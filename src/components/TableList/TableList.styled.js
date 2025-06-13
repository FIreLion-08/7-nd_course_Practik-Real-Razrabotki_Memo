import styled from 'styled-components'

export const TableBox = styled.div`
    width: 790px;
    height: 618px;
    border-radius: 30px;
    box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
    background: rgb(255, 255, 255);
`

export const TableHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 32px;
`

export const TitleHeader = styled.h2`
    color: rgb(0, 0, 0);
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 0px;
`

export const FilterControls = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
`

export const FilterSelect = styled.select`
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    background-color: white;
    cursor: pointer;
    font-family: Montserrat;
`

export const SortSelect = styled.select`
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    background-color: white;
    cursor: pointer;
    font-family: Montserrat;
`
export const TableContainerScroll = styled.div`
    max-height: 520px;
    overflow-y: scroll;
    overflow-x: hidden;
    width: calc(100% + 4px);

    &::-webkit-scrollbar {
        width: 6px;
        height: 100px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 30px;
    }

    &::-webkit-scrollbar-thumb {
        background: #d9d9d9;
        border-radius: 30px;
    }

    &::-webkit-scrollbar-button {
        display: none;
        width: 0;
        height: 0;
    }

    scrollbar-width: thin;
    scrollbar-color: #d9d9d9 transparent;
`

export const TableContainer = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
`

export const TableHead = styled.thead`
    width: 790px;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #ffffff;
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr``

export const TableHeaderCell = styled.th`
    text-align: left;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 400;
    color: #999999;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 230px;
        height: 0.5px;
        background: #999999;
    }
    &:first-child {
        padding-left: 32px;
        padding-right: 108px;
    }
    &:nth-child(2) {
        padding-right: 108px;
    }
    &:nth-child(3) {
        padding-right: 108px;
    }
    &:nth-child(4) {
        padding-right: 180px;
    }
`

export const TableCell = styled.td`
    padding-top: 12px;

    font-family: Montserrat;
    font-size: 12px;
    font-weight: 400;
    &:first-child {
        padding-left: 32px;
    }
`

export const SCategory = styled.span`
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0px;
    text-align: center;
    text-decoration: underline;
    color: #7334ea;
`
export const SFilterCategory = styled.p`
    cursor: pointer;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
`
export const SSortTransaction = styled.p`
    cursor: pointer;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
`

export const ModWinPos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
export const SButtonDelete = styled.button`
    cursor: pointer;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
    background-color: rgb(255, 255, 255);
    border: none;
    padding: 0;
    margin-left: 6px;
`
export const SButtonEdit = styled.button`
    cursor: pointer;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
    background-color: rgb(255, 255, 255);
    border: none;
    padding: 0;
    margin-right: 6px;
`
