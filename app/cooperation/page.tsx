import { formatTitle } from "@/lib/seo";
import CooperationPage from "./cooperation";

export const metadata = {
  title: formatTitle("合作"),
  description: "了解思客咨询的发展历程、团队理念与使命。",
};

export default function Cooperation() {
  return <CooperationPage />;
}