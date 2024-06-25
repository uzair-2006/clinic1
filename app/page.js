import Hero from "@/components/hero";
import Subhero from "@/components/subhero";
import Services from "@/components/services";
import Whyus from "@/components/whyus";
import Plans from "@/components/plans";
import Testimonials from "@/components/testimonials";
export default function Home() {
  return (
    <>
      <Hero buttonText='Discover More' heading='Welcome To Medpro Health Care' subHeading='The Hospital That Cares For Life And Humanity' />
      <Subhero />
      <Services />
      <Whyus />
      <Plans />
      <Testimonials/>
    </>
  );
}
