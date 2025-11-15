import Header from "./Components/Header/Header";
import Billing from "./Components/SliderComponent/Billing";
import Button from "./Components/SliderComponent/Button";
import Perk from "./Components/SliderComponent/Perk";
import PerksContainer from "./Components/SliderComponent/PerksContainer";
import Price from "./Components/SliderComponent/Price";
import Slider from "./Components/SliderComponent/Slider";
import SliderComponent from "./Components/SliderComponent/SliderComponent";
import Title from "./Components/SliderComponent/Title";

export default function App() {
  return (
    <div className="bg-my-main-background relative z-1 h-dvh px-10 pt-20">
      <Header />
      <SliderComponent>
        <Title>100k pageviews</Title>
        <Slider />
        <Price>16.00</Price>
        <Billing />
        <div className="border-my-text-grayish-blue w-full border-t opacity-20"></div>
        <PerksContainer>
          <Perk>Unlimited websites</Perk>
          <Perk>100% data ownership</Perk>
          <Perk>Email reports</Perk>
        </PerksContainer>
        <Button>Start my trial</Button>
      </SliderComponent>
      <div className="pb-20"></div>
    </div>
  );
}
