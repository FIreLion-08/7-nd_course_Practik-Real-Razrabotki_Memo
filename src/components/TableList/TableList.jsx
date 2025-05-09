import { useState, useMemo } from 'react';
import * as S from './TableList.styled.js';

export const TableList = () => {
  // Данные таблицы
  const expensesData = [
    { id: 1, description: 'Пятерочка', category: 'Еда', date: '03.07.2024', amount: '3 500 ₽' },
    { id: 2, description: 'Яндекс Такси', category: 'Транспорт', date: '03.07.2024', amount: '730 ₽' },
  ];

  // Состояния для фильтрации и сортировки
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [sortOrder, setSortOrder] = useState('newest');

  // Уникальные категории для фильтра
  const categories = ['Все', ...new Set(expensesData.map(item => item.category))];

  // Фильтрация и сортировка данных
  const processedData = useMemo(() => {
  // Фильтрация
    const filtered = selectedCategory === 'Все' 
      ? expensesData 
      : expensesData.filter(item => item.category === selectedCategory);
    
    // Сортировка
    return [...filtered].sort((a, b) => {
      const dateA = new Date(a.date.split('.').reverse().join('-'));
      const dateB = new Date(b.date.split('.').reverse().join('-'));
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }, [expensesData, selectedCategory, sortOrder]);

  return (
    <S.TableBox>
      <S.TableHeader>
        <S.TitleHeader>Таблица расходов</S.TitleHeader>
        <S.FilterControls>
          <S.FilterSelect 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </S.FilterSelect>
          
          <S.SortSelect 
            value={sortOrder} 
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Сначала новые</option>
            <option value="oldest">Сначала старые</option>
          </S.SortSelect>
        </S.FilterControls>
      </S.TableHeader>

      <S.TableContainer>
        <S.TableHead>
          <S.TableRow>
            <S.TableHeaderCell>Описание</S.TableHeaderCell>
            <S.TableHeaderCell>Категория</S.TableHeaderCell>
            <S.TableHeaderCell>Дата</S.TableHeaderCell>
            <S.TableHeaderCell>Сумма</S.TableHeaderCell>
          </S.TableRow>
        </S.TableHead>
        
        <S.TableBody>
          {processedData.map((item) => (
            <S.TableRow key={item.id}>
              <S.TableCell>{item.description}</S.TableCell>
              <S.TableCell>{item.category}</S.TableCell>
              <S.TableCell>{item.date}</S.TableCell>
              <S.TableCell>{item.amount}</S.TableCell>
            </S.TableRow>
          ))}
        </S.TableBody>
      </S.TableContainer>
    </S.TableBox>
  );
};