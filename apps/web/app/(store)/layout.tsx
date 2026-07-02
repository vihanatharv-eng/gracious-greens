import { CartProvider } from "@/contexts/cart-context";
import { Navbar } from "@/components/navbar";
import { CartDrawer } from "@/components/cart-drawer";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { WhatsAppFab } from "@/components/whatsapp-fab";

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <Navbar />
      <CartDrawer />
      <main>{children}</main>
      <Footer />
      <CookieBanner />
      <WhatsAppFab />
    </CartProvider>
  );
}
