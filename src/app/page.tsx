import Hero from "@/components/Hero";
import ProductPage from "@/components/product";
import PricingPage from "@/components/pricing";
import BlogPage from "@/components/blog";
import CaseStudiesPage from "@/components/case-studies";
import AboutPage from "@/components/about";
import CommunityPage from "@/components/community";
import GetStartedPage from "@/components/get-started";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductPage />
      <PricingPage />
      <BlogPage />
      <CaseStudiesPage />
      <AboutPage />
      <CommunityPage />
      <GetStartedPage />
    </>
  );
}

