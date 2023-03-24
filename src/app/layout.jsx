import Providers from "./Providers";
import Header from "@/components/Header.component";
import Navbar from "@/components/NavBar.component";
import SearchBox from "@/components/SearchBox.component";

import "./globals.css";

export const metadata = {
  title: "IMDb Clone",
  description: "This is a IMDb Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
