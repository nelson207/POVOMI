import { useMemo, useState } from "react";

import TaxInput from "./components/TaxInput";
import TaxChart from "./components/TaxChart";
import ExpenseCard from "./components/ExpenseCard";
import CuriosityPanel from "./components/CuriosityPanel";
import type { ExpenseItem } from "./types/ExpenseItem";

function App() {
  const [taxPaid, setTaxPaid] = useState(12000);

  const expenses: ExpenseItem[] = useMemo(
    () => [
      {
        title: "Administração Pública",
        amount: taxPaid * 0.32725,
        percentage: 33,
        icon: "bi-bank",
        color: "#264653",
      },
      {
        title: "Saúde",
        amount: taxPaid * 0.17248,
        percentage: 17,
        icon: "bi-hospital",
        color: "#2A9D8F",
      },
      {
        title: "Educação",
        amount: taxPaid * 0.11114,
        percentage: 11,
        icon: "bi-mortarboard",
        color: "#457B9D",
      },
      {
        title: "Defesa",
        amount: taxPaid * 0.02596,
        percentage: 3,
        icon: "bi-shield-check",
        color: "#E63946",
      },
      {
        title: "Segurança e Ordem Pública",
        amount: taxPaid * 0.05269,
        percentage: 5,
        icon: "bi-shield-lock",
        color: "#6D597A",
      },
      {
        title: "Assuntos Económicos e Financeiros",
        amount: taxPaid * 0.12329,
        percentage: 12,
        icon: "bi-currency-exchange",
        color: "#F4A261",
      },
      {
        title: "Habitação e Infraestruturas",
        amount: taxPaid * 0.01602,
        percentage: 2,
        icon: "bi-house",
        color: "#FFB703",
      },
      {
        title: "Proteção Ambiental",
        amount: taxPaid * 0.02582,
        percentage: 3,
        icon: "bi-tree",
        color: "#52B788",
      },
      {
        title: "Desporto e Cultura",
        amount: taxPaid * 0.01013,
        percentage: 1,
        icon: "bi-music-note-beamed",
        color: "#C77DFF",
      },
      {
        title: "Proteção Social",
        amount: taxPaid * 0.1352,
        percentage: 14,
        icon: "bi-people",
        color: "#F77F00",
      },
    ],
    [taxPaid],
  );

  return (
    <div className="dashboard">
      {/* TOP LEFT */}

      <div className="dashboard-panel mb-4">
        <TaxInput value={taxPaid} onChange={setTaxPaid} />
      </div>

      {/* TOP RIGHT */}

      {/* <div className="dashboard-panel">
        <h4 className="mb-4">Distribuição Fiscal</h4>
        <TaxChart taxPaid={taxPaid} expenses={expenses} />
      </div> */}

      {/* BOTTOM LEFT */}

      <div className="dashboard-panel mb-4">
        <div className="d-flex align-items-center mb-4">
          <i className="bi bi-bar-chart text-warning fs-2 me-3"></i>

          <div>
            <h3 className="fw-bold mb-0">Despesas do Estado</h3>

            <small className="text-muted">
              Valor estimado de despesas do Estado com base nos impostos pagos
            </small>
          </div>
        </div>

        <div className="row g-3">
          {expenses.map((expense) => (
            <ExpenseCard key={expense.title} {...expense} />
          ))}
        </div>
      </div>

      {/* BOTTOM RIGHT */}

      <div className="dashboard-panel mb-4">
        <div className="d-flex align-items-center mb-4">
          <i className="bi bi-lightbulb-fill text-warning fs-2 me-3"></i>

          <div>
            <h3 className="fw-bold mb-0">Subsídios</h3>

            <small className="text-muted">
              Subsidios comumentes citados no debate político, e o seu impacto
              estimado no orçamento global
            </small>
          </div>
        </div>
        <CuriosityPanel taxPaid={taxPaid} />
      </div>

      <div className="dashboard-panel">
        <div className="alert alert-info">
          <i className="bi bi-info-circle me-2"></i>
          Estes valores são estimativas para ajudar a visualizar como parte dos
          seus impostos pode ser utilizada em despesas específicas do Estado.
          Percentagem ainda em desenvolvimento, e não representa o valor real de
          cada despesa. Para mais informações, consulte o{" "}
          <a
            href="https://www.dgo.pt/pt/estatisticas/estatisticas-fiscais/estatisticas-fiscais-anuais/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Relatório de Estatísticas Fiscais Anuais
          </a>
          .
        </div>
        <div className="alert alert-warning">
          <i className="bi bi-exclamation-triangle me-2"></i>
          Este simulador é apenas para fins educativos e não deve ser
          considerado como aconselhamento financeiro ou fiscal. As estimativas
          apresentadas podem não refletir com precisão a realidade fiscal de
          cada indivíduo.
        </div>
      </div>
    </div>
  );
}

export default App;
