import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import DealCard from "./DealCard";
import { useAppSelector } from "../../../../State/Store";

const Deal = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplay.current]
  );

  useEffect(() => {
    if (!emblaApi) return;

    // Recalculate after the component is mounted
    emblaApi.reInit();
  }, [emblaApi]);

  const {customer} = useAppSelector(store => store);

  return (
    <section className="w-full py-8">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {customer.homePageData?.deals.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] px-3"
            >
              <DealCard item = {item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deal;