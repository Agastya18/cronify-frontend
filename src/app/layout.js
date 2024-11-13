
import "./globals.css";
import { raleway } from "./fonts/font";
import { Providers } from "./providers";

export const metadata = {
 title: "Cronify",
  description: "A cronjob scheduler",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
      <body
         className={`${raleway.className}  h-[100vh] antialiased`}
      >
        {children}
      </body>
    </html>
    </Providers>
  );
}
