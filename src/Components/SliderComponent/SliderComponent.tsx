import { createContext, useState } from "react";
import Billing from "./Billing";
import Button from "./Button";
import Perk from "./Perk";
import PerksContainer from "./PerksContainer";
import Price from "./Price";
import Slider from "./Slider";
import Title from "./Title";
import SliderContainer from "./SliderContainer";

type SliderContextProps = {
  barLength: number;
  onChange: (e: any) => void;
  data: DataType[];
  correctInfo: DataType;
  billingType: number;
  changeBillingType: () => void;
};

type DataType = {
  id: number;
  views: string;
  price: number;
};

const SliderContext = createContext<SliderContextProps | undefined>(undefined);
export { SliderContext };

export default function SliderComponent() {
  const data: DataType[] = [
    { id: 1, views: "10K", price: 400 },
    { id: 2, views: "20K", price: 600 },
    { id: 3, views: "30K", price: 800 },
    { id: 4, views: "40K", price: 1000 },
    { id: 5, views: "50K", price: 1200 },
    { id: 6, views: "60K", price: 1400 },
    { id: 7, views: "70K", price: 1600 },
    { id: 8, views: "80K", price: 1800 },
    { id: 9, views: "90K", price: 2000 },
    { id: 10, views: "100K", price: 2200 },
    { id: 11, views: "200K", price: 4400 },
  ];

  const [barLength, setBarLength] = useState(50);
  const [barValue, setBarValue] = useState(6);
  const [billingType, setBillingType] = useState(1);

  const correctInfo: DataType | undefined = data.find(
    (item) => item.id === Number(barValue),
  );

  if (!correctInfo) {
    throw new Error("Check data");
  }

  function onChange(e: any) {
    const value = e.target.value;

    setBarLength(Math.round((value / data.length) * 100));
    setBarValue(value);
  }

  function changeBillingType() {
    setBillingType((pS) => (pS === 1 ? 2 : 1));
  }

  return (
    <SliderContext.Provider
      value={{
        barLength,
        onChange,
        data,
        correctInfo,
        billingType,
        changeBillingType,
      }}
    >
      <SliderContainer>
        <Title>{correctInfo.views} pageviews</Title>
        <Slider />
        <Price />
        <Billing />
        <div className="border-my-text-grayish-blue w-full border-t opacity-20"></div>
        <PerksContainer>
          <Perk>Unlimited websites</Perk>
          <Perk>100% data ownership</Perk>
          <Perk>Email reports</Perk>
        </PerksContainer>
        <Button>Start my trial</Button>
      </SliderContainer>
    </SliderContext.Provider>
  );
}
