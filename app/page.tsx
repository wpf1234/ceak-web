import { Header } from "../components/Header";
import { FootBar } from "../components/Footbar";
import { MiddleContent } from "../components/MiddleContent";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 顶部导航栏 */}
      <Header />
      {/* 中间内容区 */}
      <main className="flex-1 px-4 py-8">
        {/* 这里放置公司的业务信息等内容 */}
        <MiddleContent/>
      </main>
      {/* 底部导航栏 */}
      <FootBar />
    </div>
  );
}
