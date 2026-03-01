import Navbar1 from "@/components/modules/homepage/navbar1"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
       <div>

         <Navbar1 />
         <main>{children}</main>
       </div>
     
  );
}
