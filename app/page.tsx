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
