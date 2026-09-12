// components/TaxInput.tsx

import Slider from "rc-slider";
import React, { useEffect, useRef, useState } from "react";

interface TaxInputProps {
  value: number;
  onChange: (value: number) => void;
}

const TaxInput: React.FC<TaxInputProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value) || 0);
  };
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  const minValue = 0; // Define the minimum value for the slider
  const maxValue = 25000; // Define the maximum value for the slider
  const desiredPixelGap = 80; // distance between labels
  const tickCount = Math.floor(sliderWidth / desiredPixelGap);
  const stepValue = Math.ceil((maxValue - minValue) / tickCount);
  const labels = [];

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setSliderWidth(sliderRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  for (let value = minValue; value <= maxValue; value += stepValue) {
    labels.push(value);
  }
  labels.pop(); // Remove the last label to avoid duplication
  labels.push(maxValue);

  console.log("Slider width:", sliderRef.current?.offsetWidth);

  return (
    <div className="card shadow border-0 h-100">
      <div className="card-body p-4">
        <h3 className="fw-bold mb-1 text-center">Impostos Pagos em 2025</h3>

        <p className="text-muted mb-4 text-center">
          Ajuste o valor através do slider ou introduza manualmente.
        </p>

        <div className="text-center mb-4">
          <input
            type="number"
            className="text-center border-0 shadow-none display-5 fw-bold text-primary bg-transparent custom-number-input"
            min={minValue}
            max={maxValue}
            step={stepValue}
            value={value}
            onChange={handleChange}
          />
          <span className="display-5 fw-bold text-primary">€</span>
          <p>
            <small className="text-muted">Total pago em impostos</small>
          </p>
        </div>

        {/* Slider */}

        <div className="mb-2" ref={sliderRef} style={{ width: "100%" }}>
          <Slider
            min={minValue}
            max={maxValue}
            step={stepValue}
            value={value}
            onChange={(val) => onChange(val as number)}
          />
        </div>

        <div className="d-flex justify-content-between text-muted small">
          {labels.map((label) => (
            <span key={label}>€{label.toLocaleString("pt-PT")}</span>
          ))}
        </div>

        {/* <div className="alert alert-primary mt-4 mb-0">
          Simulação baseada na contribuição fiscal anual introduzida.
        </div> */}
      </div>
    </div>
  );
};

export default TaxInput;
