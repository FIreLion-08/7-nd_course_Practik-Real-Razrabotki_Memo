import React, { useContext } from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    LabelList,
    ResponsiveContainer,
} from 'recharts'
import { TransactionsContext } from '../../context/TransactionsContext'
import { ChartBox, HeaderPeriod, HeaderSum, PeriodDate } from './Chart'
import { format, parse } from 'date-fns'
import { ru } from 'date-fns/locale'

const ExpenseChart = () => {
    const { periodTransactions, period } = useContext(TransactionsContext)

    const categoriesConfig = {
        food: {
            name: 'Еда',
            color: 'rgba(217, 182, 255, 1)',
        },
        transport: {
            name: 'Транспорт',
            color: 'rgba(255, 181, 61, 1)',
        },
        housing: {
            name: 'Жилье',
            color: 'rgba(110, 228, 254, 1)',
        },
        joy: {
            name: 'Развлечения',
            color: 'rgba(176, 174, 255, 1)',
        },
        education: {
            name: 'Образование',
            color: 'rgba(188, 236, 48, 1)',
        },
        others: {
            name: 'Другое',
            color: 'rgba(255, 185, 184, 1)',
        },
    }


    const processData = () => {
 
        const result = Object.keys(categoriesConfig).map((key) => ({
            name: categoriesConfig[key].name,
            sum: 0,
            fill: categoriesConfig[key].color,
        }))

        periodTransactions.forEach((transaction) => {
            const category = categoriesConfig[transaction.category]
            if (category) {
                const existingCategory = result.find(
                    (item) => item.name === category.name
                )
                if (existingCategory) {
                    existingCategory.sum += transaction.sum
                }
            }
        })

        return result
    }

    const data = processData()
    const totalSum = data.reduce((sum, category) => sum + category.sum, 0)

    const formatValue = (value) => `${value.toLocaleString('ru-RU')} ₽`

    function formatDate(inputDate) {
        const date = parse(inputDate, 'M-d-yyyy', new Date())
        return format(date, 'd MMMM yyyy', { locale: ru })
    }

    let periodStart
    let periodEnd

    if (period.start === '' || period.end === '') {
        return
    } else {
        periodStart = formatDate(period.start)
        periodEnd = formatDate(period.end)
    }

    return (
        <ChartBox>
            <HeaderSum>{totalSum}</HeaderSum>
            {period.start === period.end && (
                <HeaderPeriod>
                    Расходы за <PeriodDate>{periodStart}</PeriodDate>
                </HeaderPeriod>
            )}
            {period.start != period.end && (
                <HeaderPeriod>
                    Расходы за <PeriodDate>{periodStart}</PeriodDate> -
                    <PeriodDate>{periodEnd}</PeriodDate>
                </HeaderPeriod>
            )}
            <ResponsiveContainer width="100%" height="95%">
                <BarChart
                    data={data}
                    layout="horizontal"
                    margin={{ top: 30, right: 30, bottom: 44 }}
                >
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12 }}
                    />
                    <Tooltip
                        formatter={(value) => [formatValue(value)]}
                        contentStyle={{
                            borderRadius: '8px',
                            border: 'none',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                        }}
                    />
                    <Bar
                        dataKey="sum"
                        minPointSize={4}
                        barSize={94}
                        barCategoryGap={32}
                        radius={[12, 12, 12, 12]}
                    >
                        {data.map((entry, index) => (
                            <LabelList
                                key={`label-${index}`}
                                dataKey="sum"
                                position="top"
                                formatter={formatValue}
                                fill="#333"
                                fontSize={16}
                                fontWeight={600}
                                offset={10}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </ChartBox>
    )
}
export default ExpenseChart
