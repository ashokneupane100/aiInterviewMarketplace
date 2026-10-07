import { StarsBackgroundDemo } from "@/components/demo components backgrounds stars";
import { GoldTitle, GrayTitle, SectionLabel } from "@/components/reusables";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 relative min-h-screen grid grid-cols-1 lg:grid-cols-5 px-4 sm:px-8 pb-29 overflow-hidden">

        <StarsBackgroundDemo />

       
       

     </section>
      </div>
     
  );
}
