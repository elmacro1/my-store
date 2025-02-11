import Header from "@/components/header/header";
import AdvertisingSlider from "@/components/advertising-slider/advertising-slider";
import Footer from "@/components/footer/footer";

export default function CostumerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <AdvertisingSlider />
      {children}
      <Footer />
    </>
  );
}
