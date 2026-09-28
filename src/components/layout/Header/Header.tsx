import Navbar from "@/components/Navbar";
import { appPathsList } from "@/config/allAppPath";

export default function Header() {
  return <Navbar menuList={appPathsList} />;
}
