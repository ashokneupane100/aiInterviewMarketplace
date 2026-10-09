import { StarsBackgroundDemo } from "@/components/stars-background";
import { GoldTitle, GrayTitle, SectionLabel } from "@/components/reusables";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 relative min-h-screen grid grid-cols-1 lg:grid-cols-5 px-4 sm:px-8 pb-29 overflow-hidden">
        <StarsBackgroundDemo />
        <div className="col-span-full lg:col-span-3 flex flex-col items-center justify-center text-center lg:rotate-2">
          <Badge variant="gold">Powered by AI-Now in Beta</Badge>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tighter max-w-4xl">
            <GrayTitle>Ace your next interview </GrayTitle>
            <br />
            <GoldTitle>with real experts</GoldTitle>
          </h1>
           <p>
            Book 1:1 mock interviews with top-tier experts in your field and get personalized feedback to help you land your dream job.
           </p>
        </div>
      </section>
    </div>
  );
}
