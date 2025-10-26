import React, { useState } from "react";
import { ConverterCard } from "../components/ConverterCard";

interface LengthConverterProps {
    onBack: () => void;
}

const conversionRates: Record<string, number> = {
    m: 1,
    km: 0.001,
    cm: 100,
    mm: 1000,
    ft: 3.28084,
    inch: 39.3701,
};

export const LengthConverter: React.FC<LengthConverterProps> = ({ onBack }) => {
    const [from, setFrom] = useState("m");
    const [to, setTo] = useState("km");
    const [value, setValue] = useState(1);

    const handleSwap = () => {
        setFrom(to);
        setTo(from);
    };

    const convert = (val: number, fromU: string, toU: string) => {
        const inMeters = val / conversionRates[fromU];
        return inMeters * conversionRates[toU];
    };

    const result = convert(value, from, to).toFixed(4);

    return (
        <ConverterCard title="Length Converter" onBack={onBack} onSwap={handleSwap}>
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
                        {Object.keys(conversionRates).map((u) => (
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
                        {Object.keys(conversionRates).map((u) => (
                            <option key={u}>{u}</option>
                        ))}
                    </select>
                </div>
            </div>
            <h6 className="text-success">{result} {to}</h6>
        </ConverterCard>
    );
};
