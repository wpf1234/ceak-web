import { MiddleContent } from "../components/MiddleContent";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "首页 | 思客咨询",
  description: "思客咨询(Ceak Consulting)官网",
};

export default function Home() {
  return (
    <MiddleContent/>
  );
}
