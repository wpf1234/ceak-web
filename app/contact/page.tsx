import { formatTitle } from "@/lib/seo";
import ContactUs from "./contact";

export const metadata = {
  title: formatTitle("联系我们"),
  description: "了解思客咨询的发展历程、团队理念与使命。",
};

export default function ContactPage() {
  return <ContactUs />;
}