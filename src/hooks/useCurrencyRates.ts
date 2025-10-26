import { useEffect, useState } from "react";
import axios from "axios";

interface CurrencyRates {
  [key: string]: number;
}

interface UseCurrencyRatesResult {
  rates: CurrencyRates;
  loading: boolean;
  error: string | null;
}

export const useCurrencyRates = (base: string): UseCurrencyRatesResult => {
  const [rates, setRates] = useState<CurrencyRates>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ Read API key from .env
  const apiKey = import.meta.env.VITE_CURRENCY_API_KEY;

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          `https://api.apilayer.com/exchangerates_data/latest?base=${base}`,
          {
            headers: {
              apikey: apiKey,
            },
          }
        );

        if (response.data && response.data.rates) {
          setRates(response.data.rates);
        } else {
          setError("Invalid API response");
        }
      } catch (err: any) {
        console.error("Currency API error:", err);
        setError("Failed to load currency rates. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (apiKey) {
      fetchRates();
    } else {
      setError("Missing API key. Check your .env file.");
      setLoading(false);
    }
  }, [base, apiKey]);

  return { rates, loading, error };
};
