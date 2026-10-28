import QuoteForm from "@/components/QuoteForm";
import { OffersCarousel } from "@/components/Offers";
import ReviewsSlider from "@/components/ReviewsSlider";
import {
  FinancingBanner,
  Hero,
  QualitySection,
  ReviewBadges,
  ServiceArches,
  WhatToExpect,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="relative z-10 -mt-28 lg:-mt-36">
        <div className="container-x">
          <div className="shadow-2xl">
            <QuoteForm variant="wide" />
          </div>
        </div>
      </div>
      <ServiceArches />
      <FinancingBanner />
      <WhatToExpect />
      <OffersCarousel />
      <ReviewsSlider />
      <ReviewBadges />
      <QualitySection />
    </>
  );
}
