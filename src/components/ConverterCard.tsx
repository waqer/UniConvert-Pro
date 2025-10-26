import React from "react";

interface ConverterCardProps {
    title: string;
    onBack: () => void;
    onSwap?: () => void;
    children: React.ReactNode;
}

export const ConverterCard: React.FC<ConverterCardProps> = ({
    title,
    onBack,
    onSwap,
    children,
}) => {
    return (
        <div className="card p-3 shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">{title}</h5>
                <div className="d-flex gap-2">
                    {onSwap && (
                        <button className="btn btn-outline-secondary btn-sm" onClick={onSwap}>
                            ↔️
                        </button>
                    )}
                    <button className="btn btn-outline-secondary btn-sm" onClick={onBack}>
                        ← Back
                    </button>
                </div>
            </div>
            {children}
        </div>
    );
};
