import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { MapPin } from "lucide-react";

export const SliderUi = () => {
  const options = {
    loop: true,
    autoplay: true,
    interval: 1000,
  };

  const sliderdata = [
    {
      image: "/images/slider/image1.jpg",
      lable: "Prestige Shantiniketan",
      field: "Whitefield",
    },
    {
      image: "/images/slider/image2.jpg",
      lable: "Adarsh Palm Retreat",
      field: "Whitefield",
    },
    {
      image: "/images/slider/image3.jpg",
      lable: "Salarpuria Magnificia",
      field: "Whitefield",
    },
    {
      image: "/images/slider/image2.jpg",
      lable: "Adarsh Palm Retreat",
      field: "Whitefield",
    },
    {
      image: "/images/slider/image3.jpg",
      lable: "Salarpuria Magnificia",
      field: "Whitefield",
    },
  ];

  return (
    <Carousel opts={options} className="md:px-0 px-5  bg-white">
      <CarouselContent className="flex md:gap-8">
        {sliderdata.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 md:basis-1/4 py-5"
          >
            <div className="shadow-[0px_5px_12px_0px_#0000001A] rounded-xl">
              <Image
                src={item.image}
                width={407}
                height={255}
                alt={item.lable}
                className="rounded-[12px_12px_0px_0px]"
              />
              <div className="flex justify-between items-center px-4 py-[13px]">
                <span className="text-lg font-semibold leading-6 -tracking-wide">
                  {item.lable}
                </span>
                <span className="text-sm font-normal leading-[21px] text-[#2E2E2E] flex gap-2 items-center">
                  <MapPin className="w-4 h-4" /> {item.field}
                </span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
