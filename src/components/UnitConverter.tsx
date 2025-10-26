import React from "react";
import { TemperatureConverter } from "../converters/TemperatureConverter";
import { CurrencyConverter } from "../converters/CurrencyConverter";
import { WeightConverter } from "../converters/WeightConverter";
import { LengthConverter } from "../converters/LengthConverter";

interface UnitConverterProps {
    type: string;
    onBack: () => void;
}

export const UnitConverter: React.FC<UnitConverterProps> = ({ type, onBack }) => {
    switch (type) {
        case "temperature":
            return <TemperatureConverter onBack={onBack} />;
        case "currency":
            return <CurrencyConverter onBack={onBack} />;
        case "weight":
            return <WeightConverter onBack={onBack} />;
        case "length":
            return <LengthConverter onBack={onBack} />;
        default:
            return (
                <div className="text-center">
                    <p>🚧 This converter type is not yet available.</p>
                    <button className="btn btn-secondary mt-3" onClick={onBack}>
                        ← Back
                    </button>
                </div>
            );
    }
};
