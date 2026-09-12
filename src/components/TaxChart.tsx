// components/TaxChart.tsx

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import type { ExpenseItem } from "../types/ExpenseItem";

interface TaxChartProps {
  taxPaid: number;
  expenses: ExpenseItem[];
}

const bootstrapColors: Record<string, string> = {
  primary: "#0d6efd",
  secondary: "#6c757d",
  success: "#198754",
  danger: "#dc3545",
  warning: "#ffc107",
  info: "#0dcaf0",
  dark: "#212529",
};

const TaxChart: React.FC<TaxChartProps> = ({ taxPaid, expenses }) => {
  return (
    <div className="card border-0 shadow-lg">
      <div className="card-body">
        <h3 className="fw-bold mb-4">Distribuição dos Impostos</h3>

        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={expenses.map((expense) => ({
                name: expense.title,
                value: expense.amount,
              }))}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={140}
              label={({ name, value }) =>
                `${name} ${((value / taxPaid) * 100).toFixed(0)}%`
              }
            >
              {expenses.map((_, index) => (
                <Cell
                  key={index}
                  fill={bootstrapColors[expenses[index].color]}
                />
              ))}
            </Pie>

            {/* <Tooltip
              formatter={(value: number) => [
                `€ ${value.toLocaleString("pt-PT", {
                  maximumFractionDigits: 0,
                })}`,
                "Valor",
              ]}
            /> */}

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TaxChart;
