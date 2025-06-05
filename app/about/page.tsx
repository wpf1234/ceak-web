import { formatTitle } from "@/lib/seo";
import AboutPage from "./about";

export const metadata = {
  title: formatTitle("关于我们"),
  description: "了解思客咨询的发展历程、团队理念与使命。",
};

export default function About() {
  return <AboutPage />;
}