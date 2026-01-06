import Footer from "@/components/ReusableComponents/footer"
import Desc from "@/components/LandingPageComponents/desc"

export default function ProductsRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main>
        {children}
        <section className="px-[165px]">
          <Desc/>
        </section>
         <Footer/>
      </main>
  )
}