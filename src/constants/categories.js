export const CATEGORIES = {
    food: 'Еда',
    transport: 'Транспорт',
    housing: 'Жилье',
    joy: 'Развлечения',
    education: 'Образование',
    others: 'Другое',
};

// Функцию для преобразования
export const getCategoryName = (categoryKey) => {
    return CATEGORIES[categoryKey] || categoryKey;
};