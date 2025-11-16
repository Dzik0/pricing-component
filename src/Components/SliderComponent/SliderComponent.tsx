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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    { id: 0, views: "10K", price: 400 },
    { id: 1, views: "20K", price: 600 },
    { id: 2, views: "30K", price: 800 },
    { id: 3, views: "40K", price: 1000 },
    { id: 4, views: "50K", price: 1200 },
    { id: 5, views: "60K", price: 1400 },
    { id: 6, views: "70K", price: 1600 },
    { id: 7, views: "80K", price: 1800 },
    { id: 8, views: "90K", price: 2000 },
    { id: 9, views: "100K", price: 2200 },
    { id: 10, views: "200K", price: 4400 },
  ];

  const [barLength, setBarLength] = useState(50);
  const [barValue, setBarValue] = useState(5);
  const [billingType, setBillingType] = useState(1);

  const correctInfo: DataType | undefined = data.find(
    (item) => item.id === Number(barValue),
  );

  if (!correctInfo) {
    throw new Error("Check data");
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setBarLength(Math.round((Number(value) / (data.length - 1)) * 100));
    setBarValue(Number(value));
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
        {/* PC */}
        <div className="hidden w-full flex-col gap-8 md:flex">
          <div className="flex flex-row items-center justify-between">
            <Title>{correctInfo.views} pageviews</Title>
            <Price />
          </div>
          <Slider />
        </div>

        {/* MOBILE */}
        <div className="flex w-full flex-col items-center gap-8 md:hidden">
          <Title>{correctInfo.views} pageviews</Title>
          <Slider />
          <Price />
        </div>

        <Billing />
        <div className="border-my-text-grayish-blue w-full border-t opacity-20"></div>
        <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row">
          <PerksContainer>
            <Perk>Unlimited websites</Perk>
            <Perk>100% data ownership</Perk>
            <Perk>Email reports</Perk>
          </PerksContainer>
          <Button>Start my trial</Button>
        </div>
      </SliderContainer>
    </SliderContext.Provider>
  );
}
