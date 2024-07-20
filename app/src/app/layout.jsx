import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Subnav from "./(components)/Subnav";
import Bottom from "./(components)/Bottom";
import { Toaster } from "@/components/ui/toaster"


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {


  
 


  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed top-0 left-0 right-0 bg-[#F7F7F7]  z-[10000]">
        <Subnav/>
        <Navbar/>
        </div>
        <div className="pt-[8%] bg-[#F7F7F7]  min-h-[90vh]">{children}</div>
        <Bottom/>
        <Toaster />
        <script src="https://www.paypal.com/sdk/js?client-id=AaT9W1iE78LeoVCAh9Y2bbWrV7EdF-xFuiQHRNlC1aXRnIIa820mn8ktIu3dS97a45TmLaYhVky34eyM" async></script>
        </body>
    </html>
  );
}