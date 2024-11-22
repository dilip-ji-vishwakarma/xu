import React from "react";
import { ButtonUi } from "../../core/ButtonUi";
import { icons } from "lucide-react";

export const ImageBanner = () => {
    const buttondata: { label: string; url: string; icon: keyof typeof icons }[] = [
        {
            label: "Tenants",
            url: "#",
            icon: "MoveDownRight", 
        },
        {
            label: "Owners",
            url: "#",
            icon: "MoveDownRight", 
        },
    ];

    return (
        <div className="relative w-full md:h-[696px] ">
            <div
                className="md:h-[696px] h-[444px] bg-cover md:bg-center bg-right flex items-center"
                style={{
                    backgroundImage: `linear-gradient(103.79deg, #121212 4.54%, rgba(46, 46, 46, 0) 58.09%), url(/images/banner.jpg)`,
                }}
            >
                <div className="container">
                <div className="relative z-10 md:w-[805px] md:space-y-[40px] space-y-[30px] text-white ">
                    <h1 className="md:text-[2.8rem] text-[24px] font-semibold md:leading-[60px] leading-[30px]">
                        {`Discover the ultimate solution to all your housing challenges with XU Lifestyle!`}
                    </h1>
                    <div className="md:space-y-10 space-y-2">
                        <h2 className="md:text-[34px] text-[16px] font-medium leading-10">
                            {`Wondering What’s in it for you?`}
                        </h2>
                        <div className="flex gap-5">
                            {buttondata.map((item, index) => (
                                <ButtonUi
                                    className="w-6/12"
                                    key={index}
                                    label={item.label}
                                    url={item.url}
                                    icon={item.icon}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};
