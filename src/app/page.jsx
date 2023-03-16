import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="text-red-400">HELLO from page.jsx</div>
    </div>
  );
}
