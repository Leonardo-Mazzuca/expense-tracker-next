import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//trocando a fonte
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Expense tracker",
  description: "Track your expenses and create a budget",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (

    <ClerkProvider>
      <html lang="en">

        <body className={`${roboto.variable}`}>
          <ClerkLoading>
            <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

              <h1>
                Loading...
              </h1>

            </div>
          </ClerkLoading>
          
            <ClerkLoaded>

            <Header />
            <main className="container">{children}</main>
            </ClerkLoaded>
          <ToastContainer />
        </body>

      </html>
    </ClerkProvider>

  );
}
