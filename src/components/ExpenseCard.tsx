// components/ExpenseCard.tsx

import React from "react";
import type { ExpenseItem } from "../types/ExpenseItem";
const ExpenseCard: React.FC<ExpenseItem> = ({
  title,
  amount,
  percentage,
  icon,
  color,
}) => {
  return (
    <div className="col-md-6 col-lg-3">
      <div
        className={`card h-100 shadow border-0 border-start border-4`}
        style={{ borderColor: `${color}` }}
      >
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div
              className={`bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center`}
              style={{
                width: "56px",
                height: "56px",
                backgroundColor: `${color}`,
              }}
            >
              <i className={`bi ${icon} fs-3`} style={{ color: `white` }} />
            </div>

            <span className={`badge `} style={{ backgroundColor: `${color}` }}>
              {percentage}%
            </span>
          </div>

          <h5 className="fw-bold mb-2">{title}</h5>

          <h3 className={`fw-bold mb-3`} style={{ color: `${color}` }}>
            €
            {amount.toLocaleString("pt-PT", {
              maximumFractionDigits: 0,
            })}
          </h3>

          <div className="progress" style={{ height: "8px" }}>
            <div
              className={`progress-bar`}
              role="progressbar"
              style={{
                width: `${percentage}%`,
                backgroundColor: `${color}`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
