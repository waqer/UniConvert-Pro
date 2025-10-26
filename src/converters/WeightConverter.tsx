import React, { useState } from "react";
import { ConverterCard } from "../components/ConverterCard";

interface WeightConverterProps {
    onBack: () => void;
}

const weightRates: Record<string, number> = {
    kg: 1,
    g: 1000,
    mg: 1_000_000,
    lb: 2.20462,
    oz: 35.274,
};

export const WeightConverter: React.FC<WeightConverterProps> = ({ onBack }) => {
    const [from, setFrom] = useState("kg");
    const [to, setTo] = useState("lb");
    const [value, setValue] = useState(1);

    const handleSwap = () => {
        setFrom(to);
        setTo(from);
    };

    const convert = (val: number, fromU: string, toU: string): number => {
        const inKg = val / weightRates[fromU];
        return inKg * weightRates[toU];
    };

    const result = convert(value, from, to).toFixed(4);

    return (
        <ConverterCard title="Weight Converter" onBack={onBack} onSwap={handleSwap}>
            <div className="row g-3 mb-4 align-items-center justify-content-center">
                <div className="col">
                    <input
                        type="number"
                        className="form-control"
                        value={value}
                        onChange={(e) => setValue(parseFloat(e.target.value) || 0)}
                    />
                </div>
                <div className="col-auto">
                    <select
                        className="form-select"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                    >
                        {Object.keys(weightRates).map((u) => (
                            <option key={u}>{u}</option>
                        ))}
                    </select>
                </div>
                <div className="col-auto">to</div>
                <div className="col-auto">
                    <select
                        className="form-select"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                    >
                        {Object.keys(weightRates).map((u) => (
                            <option key={u}>{u}</option>
                        ))}
                    </select>
                </div>
            </div>
            <h6 className="text-success">{result} {to}</h6>
        </ConverterCard>
    );
};
