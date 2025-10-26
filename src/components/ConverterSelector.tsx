import React from "react";

interface ConverterSelectorProps {
    onSelect: (type: string) => void;
}

export const ConverterSelector: React.FC<ConverterSelectorProps> = ({ onSelect }) => {
    const converters = [
        { id: "temperature", label: "🌡️ Temperature Converter" },
        { id: "currency", label: "💰 Currency Converter" },
        { id: "weight", label: "⚖️ Weight Converter" },
        { id: "length", label: "📏 Length Converter" },
    ];

    return (
        <div className="text-center">
            <h5 className="mb-3">Select a converter type</h5>
            <div className="d-flex flex-wrap justify-content-center gap-3">
                {converters.map((converter) => (
                    <button
                        key={converter.id}
                        onClick={() => onSelect(converter.id)}
                        className="btn btn-outline-primary"
                    >
                        {converter.label}
                    </button>
                ))}
            </div>
        </div>
    );
};
