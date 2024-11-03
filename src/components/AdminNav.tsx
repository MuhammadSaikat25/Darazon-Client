import Link from "next/link";

const AdminNav = () => {
  return (
    <div className="flex items-center gap-3">
      <Link href={"/"}>Home</Link>
      <Link href={"/admin"}>Admin</Link>
      <Link href={"/admin/add-pro"}>Add Pro</Link>
    </div>
  );
};

export default AdminNav;
