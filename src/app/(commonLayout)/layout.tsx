import { Navbar1 } from "@/components/navbar1";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar1 />
        <main>{children}</main>
      </body>
    </html>
  );
}
