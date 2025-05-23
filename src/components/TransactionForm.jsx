import styled from 'styled-components'
import { useState } from 'react'
import Button from './Button'
import Input from './Input/Input'
import { CATEGORIES } from '../constants/categories'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 24px;
`

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const Label = styled.label`
    font-weight: 500;
`

const CategoryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const CategoryButton = styled.button`
    padding: 8px 16px;
    border: 1px solid ${(props) => (props.selected ? '#52c41a' : '#d9d9d9')};
    border-radius: 20px;
    background-color: ${(props) => (props.selected ? '#f6ffed' : '#fff')};
    color: ${(props) => (props.selected ? '#52c41a' : '#000')};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        border-color: #52c41a;
    }
`

const ErrorMessage = styled.p`
    color: #ff4d4f;
    margin: 0;
`

const TransactionForm = ({ initialData = {}, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
        description: initialData.description || '',
        category: initialData.category || '',
        date: initialData.date
            ? new Date(initialData.date).toISOString().split('T')[0]
            : '',
        sum: initialData.sum || '',
    })
    const [error, setError] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleCategorySelect = (category) => {
        setFormData((prev) => ({ ...prev, category }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        if (
            !formData.description ||
            !formData.category ||
            !formData.date ||
            !formData.sum
        ) {
            setError('Все поля обязательны для заполнения')
            return
        }

        if (formData.description.length < 4) {
            setError('Описание должно содержать минимум 4 символа')
            return
        }

        if (isNaN(formData.sum) || Number(formData.sum) <= 0) {
            setError('Сумма должна быть положительным числом')
            return
        }

        const [year, month, day] = formData.date.split('-')
        const formattedDate = `${month}-${day}-${year}`

        const result = await onSubmit({
            description: formData.description,
            category: formData.category,
            date: formattedDate,
            sum: Number(formData.sum),
        })

        if (!result.success) {
            setError(result.error)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Описание</Label>
                <Input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Введите описание"
                />
            </FormGroup>

            <FormGroup>
                <Label>Категория</Label>
                <CategoryContainer>
                    {Object.entries(CATEGORIES).map(([key, value]) => (
                        <CategoryButton
                            key={key}
                            type="button"
                            selected={formData.category === key}
                            onClick={() => handleCategorySelect(key)}
                        >
                            {value}
                        </CategoryButton>
                    ))}
                </CategoryContainer>
            </FormGroup>

            <FormGroup>
                <Label>Дата</Label>
                <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                />
            </FormGroup>

            <FormGroup>
                <Label>Сумма</Label>
                <Input
                    type="number"
                    name="sum"
                    value={formData.sum}
                    onChange={handleChange}
                    placeholder="Введите сумму"
                    min="0"
                    step="0.01"
                />
            </FormGroup>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <div style={{ display: 'flex', gap: '10px' }}>
                <Button type="submit">
                    {initialData._id ? 'Сохранить' : 'Добавить'}
                </Button>
                {onCancel && (
                    <Button
                        type="button"
                        onClick={onCancel}
                        style={{ backgroundColor: '#f5f5f5', color: '#000' }}
                    >
                        Отмена
                    </Button>
                )}
            </div>
        </Form>
    )
}

export default TransactionForm
