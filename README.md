🧮 UniConvert Pro

UniConvert Pro is a modern, responsive, and theme-adaptive unit conversion app built with React + TypeScript + Bootstrap 5.
It allows users to easily convert between multiple unit types — including Temperature, Currency, Weight, and Length — all in one place.

🌟 Features

🌗 Dark / Light Mode toggle with smooth transitions

🔁 Swap Button for quick unit reversal

💰 Live Currency Rates (via ExchangeRate API)

🧠 Smart, modular converters (Temperature / Currency / Weight / Length)

💻 Built with React 18, TypeScript, and Bootstrap 5

⚡ Fast, responsive, and mobile-friendly UI

🎨 Sleek animated UI and gradients

🛠️ Tech Stack
Category	Tools / Libraries
Framework	React + TypeScript
Styling	Bootstrap 5, custom CSS
API	ExchangeRate.host

Build Tool	Vite
Package Manager	npm / yarn
🚀 Getting Started
1️⃣ Clone the repo
git clone https://github.com/<your-username>/uniconvert-pro.git
cd uniconvert-pro

2️⃣ Install dependencies
npm install

3️⃣ Set up environment variables

Create a .env file in the root directory:

VITE_CURRENCY_API_KEY=your_api_key_here

4️⃣ Run the app
npm run dev

5️⃣ Build for production
npm run build

📂 Folder Structure
src/
├── components/
│   ├── ConverterCard.tsx
│   ├── ConverterSelector.tsx
│   └── UnitConverter.tsx
├── converters/
│   ├── CurrencyConverter.tsx
│   ├── TemperatureConverter.tsx
│   ├── WeightConverter.tsx
│   └── LengthConverter.tsx
├── hooks/
│   └── useCurrencyRates.ts
├── App.tsx
├── main.tsx
└── index.css

👨‍💻 Author

Designed & Developed by Shah Waqer Kabir

© 2025 UniConvert Pro – All Rights Reserved

💡 Future Improvements

📏 Add more converters (Volume, Speed, Time)

🌍 Multi-language support

💾 Offline caching for last fetched rates

🔊 Voice input (future experiment)