import AdminNav from "@/components/AdminNav";
import Nav from "@/components/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <AdminNav />
      {children}
    </div>
  );
}
