import React, { useState } from "react";
import { ConverterCard } from "../components/ConverterCard";

interface TemperatureConverterProps {
    onBack: () => void;
}

export const TemperatureConverter: React.FC<TemperatureConverterProps> = ({
    onBack,
}) => {
    const [from, setFrom] = useState("C");
    const [to, setTo] = useState("F");
    const [value, setValue] = useState(0);

    const convert = (val: number, fromU: string, toU: string): number => {
        if (fromU === toU) return val;
        if (fromU === "C" && toU === "F") return (val * 9) / 5 + 32;
        if (fromU === "F" && toU === "C") return ((val - 32) * 5) / 9;
        if (fromU === "C" && toU === "K") return val + 273.15;
        if (fromU === "K" && toU === "C") return val - 273.15;
        if (fromU === "F" && toU === "K") return ((val - 32) * 5) / 9 + 273.15;
        if (fromU === "K" && toU === "F") return ((val - 273.15) * 9) / 5 + 32;
        return val;
    };

    const handleSwap = () => {
        setFrom(to);
        setTo(from);
    };

    const result = convert(value, from, to).toFixed(2);

    return (
        <ConverterCard title="Temperature Converter" onBack={onBack} onSwap={handleSwap}>
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
                        <option value="C">Celsius (°C)</option>
                        <option value="F">Fahrenheit (°F)</option>
                        <option value="K">Kelvin (K)</option>
                    </select>
                </div>
                <div className="col-auto">to</div>
                <div className="col-auto">
                    <select
                        className="form-select"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                    >
                        <option value="C">Celsius (°C)</option>
                        <option value="F">Fahrenheit (°F)</option>
                        <option value="K">Kelvin (K)</option>
                    </select>
                </div>
            </div>
            <h6 className="text-success">{result} {to}</h6>
        </ConverterCard>
    );
};
