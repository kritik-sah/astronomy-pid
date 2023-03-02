import Header from "@/components/Header/Header";
import "../styles/globals.scss";

export const metadata = {
  title: "NASA- Astronomy picture of the day",
  description: "Practice application by Kritik Sah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
