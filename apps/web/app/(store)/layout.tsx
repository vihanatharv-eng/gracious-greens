import { CartProvider } from "@/contexts/cart-context";
import { Navbar } from "@/components/navbar";
import { CartDrawer } from "@/components/cart-drawer";
import { Footer } from "@/components/footer";

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <Navbar />
      <CartDrawer />
      <main>{children}</main>
      <Footer />
    </CartProvider>
  );
}
