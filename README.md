# 💰 Pricing Component

A responsive and interactive pricing component built with **React** and **TypeScript**.  
Users can select pageview tiers and toggle between monthly and yearly billing, with real-time price updates and feature highlights.

---

## 📸 Preview

![Pricing Component Screenshot](/screenshot.jpg)

Live demo: [https://dzik0.github.io/pricing-component](https://dzik0.github.io/pricing-component)

---

## 🚀 Features

- 📊 **Dynamic Slider**  
  Select pageview tiers from "10K" up to "200K" with smooth slider control.

- 💸 **Billing Toggle**  
  Switch between monthly and yearly billing modes with price recalculation.

- 💎 **Feature List**  
  Displays perks like unlimited websites, data ownership, and email reports.

- 🔄 **Responsive Design**  
  Tailored layouts for desktop and mobile using Tailwind CSS.

- 🤝 **Context API**  
  Central state management for slider position, billing mode, and pricing.

---

## 🛠️ Tech Stack

- React (with Context API & functional components)
- TypeScript
- Tailwind CSS for utility-first styling
- Vite for development and build

---

## 📁 File Structure

```
src/
├── Billing.tsx              # Billing toggle component
├── Button.tsx               # CTA button component
├── Perk.tsx                 # Individual perk component
├── PerksContainer.tsx       # Container for perks list
├── Price.tsx                # Display current price
├── Slider.tsx               # Slider UI element
├── SliderContainer.tsx      # Container for price, slider and billing sections
├── SliderComponent.tsx      # Main component managing state and context
└── context.ts               # Slider context export (optional)
```

---

## 🧠 How It Works

- **Pageview options:** defined as data array with IDs, views, and price.
- **Slider control:** Adjusts displayed pageviews and price, updates bar length visually.
- **Billing toggle:** Switch between monthly/yearly; yearly billing doubles the price (or apply discount logic).
- **Centralized state:** Uses React Context to share slider value, pricing, and billing mode between components.

---

## 📦 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Dzik0/pricing-component.git
   cd pricing-component
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

---

## ✅ Future Improvements

- [ ] Add discount calculation and display for yearly billing
- [ ] Add accessibility improvements for slider and toggle
- [ ] Integrate with backend or API for dynamic pricing
- [ ] Add unit and integration tests

---

## 👨‍💻 Author

**Dzik0**  
GitHub: [https://github.com/Dzik0](https://github.com/Dzik0)

---

## 📝 License

Open source under the [MIT License](LICENSE).

---
