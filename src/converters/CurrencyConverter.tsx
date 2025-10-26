import React, { useState } from "react";
import { useCurrencyRates } from "../hooks/useCurrencyRates";
import { ConverterCard } from "../components/ConverterCard";

interface CurrencyConverterProps {
    onBack: () => void;
}

export const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ onBack }) => {
    const [amount, setAmount] = useState<number>(1);
    const [from, setFrom] = useState<string>("USD");
    const [to, setTo] = useState<string>("EUR");
    const { rates, loading, error } = useCurrencyRates(from);

    const handleSwap = () => {
        setFrom(to);
        setTo(from);
    };

    const converted =
        rates && rates[to] !== undefined ? (amount * rates[to]).toFixed(2) : "";

    return (
        <ConverterCard title="Currency Converter" onBack={onBack} onSwap={handleSwap}>
            {loading ? (
                <p>Loading exchange rates...</p>
            ) : error ? (
                <p className="text-danger">{error}</p>
            ) : (
                <>
                    <div className="row g-3 mb-4 align-items-center justify-content-center">
                        <div className="col">
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                                className="form-control"
                            />
                        </div>
                        <div className="col-auto">
                            <select
                                className="form-select"
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}
                            >
                                {Object.keys(rates).map((code) => (
                                    <option key={code}>{code}</option>
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
                                {Object.keys(rates).map((code) => (
                                    <option key={code}>{code}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <h6 className="text-success">
                        {converted ? `${converted} ${to}` : ""}
                    </h6>
                </>
            )}
        </ConverterCard>
    );
};
