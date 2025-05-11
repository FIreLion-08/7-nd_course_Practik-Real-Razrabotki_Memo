import styled from 'styled-components';

export const TableBox = styled.div`
  width: 790px;
  border-radius: 30px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgb(255, 255, 255);
  padding: 20px;
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const TitleHeader = styled.h2`
  color: rgb(0, 0, 0);
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  margin: 0;
`;

export const FilterControls = styled.div`
  display: flex;
  gap: 10px;
`;

export const FilterSelect = styled.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  background-color: white;
  cursor: pointer;
  font-family: Montserrat;
`;

export const SortSelect = styled.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  background-color: white;
  cursor: pointer;
  font-family: Montserrat;
`;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #f5f5f5;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableHeaderCell = styled.th`
  padding: 12px 15px;
  text-align: left;
  font-family: Montserrat;
  font-weight: 600;
`;

export const TableCell = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #e0e0e0;
  font-family: Montserrat;
`;