import React, { useState } from "react";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

const Slider: React.FC = () => {
  const [range, setRange] = useState<number>(1000);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange(parseInt(e.target.value));
  };

  return (
    <div className="relative mb-6">
      <label htmlFor="labels-range-input" className="sr-only">
        Labels range
      </label>
      <input
        id="labels-range-input"
        type="range"
        value={range}
        min="100"
        max="1500"
        onChange={handleRangeChange}
        className="w-full h-2 bg-gray-200 border border-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-black"
      />
      <div className="flex justify-between text-sm text-white dark:text-white mt-2">
        <span>Min ($100)</span>
        <span>{formatCurrency(range)}</span>
        <span>Max ($1500)</span>
      </div>
    </div>
  );
};

export default Slider;
