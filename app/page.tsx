import { Separator, SliderUi } from "@/components/core";
import { Tenants } from "@/components/Home";
import { ImageBanner } from "@/components/Home/ImageBanner";
import { Presence } from "@/components/Home/Presence";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <ImageBanner />
    <Presence />
    <SliderUi />
    <div className="my-5">
    <Separator height="2px" color="#9D9D9D" />
    </div>
    <Tenants />
    </>
  );
}
