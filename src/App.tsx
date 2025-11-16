import Header from "./Components/Header/Header";

import SliderComponent from "./Components/SliderComponent/SliderComponent";

export default function App() {
  return (
    <div className="bg-my-main-background relative z-1 h-dvh px-10 pt-20">
      <Header />

      <div className="flex justify-center">
        <SliderComponent />
      </div>

      <div className="pb-20"></div>
    </div>
  );
}
