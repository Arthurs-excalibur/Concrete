import SiteHeader from "@/components/SiteHeader";
import Masthead from "@/components/Masthead";
import CoverPhoto from "@/components/CoverPhoto";
import FeaturedDossier from "@/components/FeaturedDossier";
import SelectedStories from "@/components/SelectedStories";
import ManifestoSection from "@/components/ManifestoSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-concrete">
      <SiteHeader />
      <main className="flex-1">
        <Masthead />
        <CoverPhoto />
        <FeaturedDossier />
        <SelectedStories />
        <ManifestoSection />
      </main>
      <SiteFooter />
    </div>
  );
}
