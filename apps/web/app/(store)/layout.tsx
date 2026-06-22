import { CartProvider } from "@/contexts/cart-context";
import { LenisProvider } from "@/components/lenis-provider";
import { Navbar } from "@/components/navbar";
import { CartDrawer } from "@/components/cart-drawer";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <LenisProvider>
        <Navbar />
        <CartDrawer />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </LenisProvider>
    </CartProvider>
  );
}
