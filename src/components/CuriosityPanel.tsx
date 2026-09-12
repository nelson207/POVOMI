// components/CuriosityPanel.tsx

import React from "react";

interface CuriosityPanelProps {
  taxPaid: number;
}

const CuriosityPanel: React.FC<CuriosityPanelProps> = ({ taxPaid }) => {
  const curiosities = [
    {
      title: "Rendimento Social de Inserção",
      icon: "bi-person-heart",
      amount: taxPaid * 0.0012844,
      percentage: 0.12,
      description:
        "Dos seus impostos anuais, cerca de {amount} financiam o RSI.",
      color: "#264653",
    },
    {
      title: "Migração, Asilo e Igualdade",
      icon: "bi-globe-europe-africa",
      amount: taxPaid * 0.000338,
      percentage: 0.03,
      description:
        "Uma despesa frequentemente debatida mas de reduzido peso orçamental.",
      color: "#2A9D8F",
    },
    {
      title: "Pensões de Velhice, Sobrevivência e Invalidez",
      icon: "bi-person-bounding-box",
      amount: taxPaid * 0.088556,
      percentage: 8.86,
      description:
        "Peso real no orçamento do Estado, apesar de ser um tema frequentemente debatido.",
      color: "#457B9D",
    },
    {
      title: "Deputados da Assembleia",
      icon: "bi-building",
      amount: taxPaid * 0.0014,
      percentage: 0.14,
      description:
        "O funcionamento do parlamento representa uma pequena parcela da despesa do Estado.",
      color: "#E63946",
    },
  ];

  return (
    <div className="card border-0 shadow-lg">
      <div className="card-body p-4">
        <div className="row g-4">
          {curiosities.map((item) => (
            <div key={item.title} className="col-md-6 col-xl-3">
              <div className="card h-100 bg-light border-0">
                <div className="card-body text-center">
                  <div className={`mb-3`} style={{ color: `${item.color}` }}>
                    <i className={`bi ${item.icon} fs-1`} />
                  </div>

                  <h5 className="fw-bold">{item.title}</h5>

                  <h3
                    className={`fw-bold my-3`}
                    style={{ color: `${item.color}` }}
                  >
                    €
                    {item.amount.toLocaleString("pt-PT", {
                      maximumFractionDigits: 0,
                    })}
                  </h3>

                  <p className="text-muted small mb-0">
                    {item.description.replace(
                      "{amount}",
                      `€${item.amount.toFixed(2)}`,
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuriosityPanel;
