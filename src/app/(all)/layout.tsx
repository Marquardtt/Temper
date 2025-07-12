import { HeaderComponent } from "@/components/HeaderComponent";
import { FooterComponent } from "@/components/FooterComponent";
import { ClientProviders } from "@/components/ClientProviders";
import { Alata, League_Spartan, Montserrat } from "next/font/google";
import "@/style/globals.css";

const alata = Alata({ subsets: ["latin"], weight: "400", variable: "--font-alata" });
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-league-spartan",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Temper",
  description: "Coming soon.",
  icons: {
    icon: "/icon.ico"
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${alata.variable} ${leagueSpartan.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <body className="transition-colors duration-500">
        <ClientProviders>
          <div className="h-screen flex flex-col overflow-hidden">
            <HeaderComponent />
            <div className="flex-1 overflow-y-scroll">
              {children}
              <FooterComponent />
            </div>
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
