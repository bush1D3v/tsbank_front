import { lpWelcome } from "@/assets/images";
import ImageSkeletonLoader from "../ImageSkeletonLoader";
import { FirstSection, SummaryPresentation } from "./components";
import { type ReactElement } from "react";

export default function AboutProject(): ReactElement {
  return (
    <main className="min-h-[82dvh] flex flex-col gap-4 text-center animate-fade-down animate-duration-1000 animate-ease-in-out"
      data-testid="AboutProject">
      <div className="my-6 flex flex-col gap-4 items-center max-w-7xl m-auto">
        <div
          className="lg:flex lg:items-center lg:w-full lg:justify-around"
          data-testid="AboutProjectImageSkeletonDivision"
        >
          <h1
            className="font-bold text-4xl md:text-6xl lg:text-8xl"
            data-testid="AboutProjectTitle"
          >
            Welcome to <br /> TSBank! 🏦💵
          </h1>
          <ImageSkeletonLoader
            src={lpWelcome}
            alt={"Welcome Image"}
            loading={"eager"}
            sessionStorageItem={"aboutImageLoaded"}
          />
        </div>
        <FirstSection />
        <hr className="p-[1px] bg-saturedBlue border-white border-2 w-10/12 rounded-2xl" />
        <section className="flex flex-col items-center gap-4 text-lg">
          <h2
            className="mb-4 lg:mt-4 font-bold text-xl md:text-4xl lg:text-5xl"
            data-testid="AboutProjectSubtitle"
          >
            Who developed it? 👨‍💻
          </h2>
          <SummaryPresentation />
        </section>
      </div>
    </main>
  );
}
