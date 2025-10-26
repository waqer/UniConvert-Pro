import React, { useState } from 'react';
import { useCurrencyRates } from '../hooks/useCurrencyRates';

export const CurrencyConverter: React.FC = () => {
    const [amount, setAmount] = useState<number>(1);
    const [from, setFrom] = useState<string>('USD');
    const [to, setTo] = useState<string>('EUR');

    const { rates, loading } = useCurrencyRates(from);

    // Safely handle missing rates
    const hasRates = rates && Object.keys(rates).length > 0;
    const rate = hasRates && rates[to] ? rates[to] : 0;

    const converted = hasRates ? (amount * rate).toFixed(2) : '';

    return (
        <div className="card p-3 shadow-sm">
            <h5>Currency Converter</h5>

            {/* Loading or Error State */}
            {loading && <p>Loading rates...</p>}
            {!loading && !hasRates && (
                <p className="text-danger">Failed to load currency rates. Try again later.</p>
            )}

            {/* Main Converter UI */}
            {!loading && hasRates && (
                <>
                    <div className="row g-3 mb-4 align-items-center justify-content-center">
                        <div className="col">
                            <input
                                type="number"
                                value={amount}
                                min={0}
                                step={0.01}
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
                                    <option key={code} value={code}>
                                        {code}
                                    </option>
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
                                    <option key={code} value={code}>
                                        {code}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Result */}
                    <h6 className="text-success">
                        {converted ? `${converted} ${to}` : ''}
                    </h6>
                </>
            )}
        </div>
    );
};
