import { formatTitle } from "@/lib/seo";
import CareerPage from "./career";

export const metadata = {
  title: formatTitle("职业发展"),
  description: "了解思客咨询的发展历程、团队理念与使命。",
};

export default function Career() {
  return <CareerPage />;
}