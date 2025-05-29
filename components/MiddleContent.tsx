import Image from "next/image";

// 面包屑内容
const breadcrumbs = ["CEAK聚焦", "人工智能", "教育革新", "课程建设"];

// 业务卡片内容
const services = [
  {
    title: "AI课程建设",
    img: "/service1.jpg",
    desc: "",
    btn: "了解更多",
  },
  {
    title: "精品课程建设",
    img: "/service2.jpg",
    desc: "",
    btn: "了解更多",
  },
  {
    title: "教师AI赋能",
    img: "/service3.jpg",
    desc: "",
    btn: "了解更多",
  },
  {
    title: "AI应用咨询",
    img: "",
    desc: "我们为教育行业客户提供AI应用咨询服务，深入分析客户需求与实际场景，制定定制化的AI应用方案，帮助客户提升教学效率、创新教学模式、实现教育数字化转型。",
    btn: "了解更多",
  },
];

export const MiddleContent = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-16">
      {/* 上：轮播卡片+面包屑 */}
      <section className="w-full flex flex-col gap-6 mt-5">
        {/* 轮播卡片（此处用静态图片+左右箭头占位，后续可替换为轮播组件） */}
        <div className="w-full flex items-center gap-4 min-h-[320px] md:min-h-[400px] lg:min-h-[480px]">
          <button className="text-3xl text-gray-400 hover:text-primary">{'<'}</button>
          <div className="rounded-3xl overflow-hidden w-[480px] h-[220px] md:w-[600px] md:h-[320px] lg:w-[720px] lg:h-[400px] flex-shrink-0 shadow-lg">
            <Image
              src="/banner-demo.jpg"
              alt="banner"
              width={720}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center items-start ml-8">
            <h2 className="text-2xl font-bold mb-2 font-[family-name:var(--font-han-sans)]">让AI融入课堂<br />点燃学术创新</h2>
            <p className="text-gray-800 text-sm mb-4">为决策层和分门别类的群体提供系统与前沿方案，助力学科升级、实验室升级。</p>
            <button className="bg-primary text-white px-6 py-2 rounded font-semibold text-sm">了解更多</button>
          </div>
          <button className="text-3xl text-gray-400 hover:text-primary">{'>'}</button>
        </div>
        {/* 面包屑 */}
        <div className="flex gap-3 mt-4 justify-center">
          {breadcrumbs.map((item, idx) => (
            <a
              key={item}
              href={`/${encodeURIComponent(item)}`}
              className="px-4 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105 cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>
      </section>

      {/* 中上：服务卡片 */}
      <section className="w-full flex flex-col gap-6 relative">
        <h1 className="text-3xl font-bold font-[family-name:var(--font-han-sans)] mb-4 z-10">探索我们的服务</h1>
        {/* 梯形背景层 */}
        <div
          className="absolute left-0 top-8 w-full pointer-events-none bg-primary mt-10"
          style={{
            zIndex: 0,
            height: "min(540px, 40vw)",
            clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
          }}
        />
        {/* 卡片内容层 */}
        <div className="w-full rounded-lg p-8 flex flex-col md:flex-row gap-6 relative z-10">
          {services.map((s, idx) => (
            <div
              key={s.title}
              className={`flex-1 bg-white/10 rounded-lg flex flex-col items-center justify-between p-4 min-h-[320px] ${
                idx === 3 ? "bg-gray-100 text-gray-800 items-start" : ""
              }`}
            >
              {s.img ? (
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={s.img}
                    alt={s.title}
                    width={200}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
              ) : null}
              <div className="w-full">
                <div className="text-lg font-bold mb-2">{s.title}</div>
                {s.desc && <div className="text-sm mb-4">{s.desc}</div>}
                <button className="bg-white text-primary px-4 py-1 rounded font-semibold text-sm shadow hover:bg-gray-200">
                  {s.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* 新增：了解更多按钮，左对齐 */}
        <div className="mt-1 pl-8 ml-8">
          <button
            className="group flex items-center border-2 border-white text-white font-bold px-6 py-2 rounded transition-colors duration-300 hover:bg-white/10
              hover:text-white hover:border-white relative overflow-hidden self-start -ml-8"
            style={{ fontFamily: "var(--font-han-sans)" }}
          >
            <span className="flex items-center transition-transform duration-1000 group-hover:translate-x-4">
              了解更多
              <span className="ml-2">→</span>
            </span>
          </button>
        </div>
      </section>

      {/* 中下：关于CEAK */}
      <section className="w-full flex flex-col md:flex-row items-center gap-8 mt-16">
        {/* 左侧文字 */}
        <div className="flex-1 flex flex-col justify-between h-full relative">
          <div>
            <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-han-sans)]">关于CEAK</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              专注于为教育机构和人工智能领域提供高价值的咨询与解决方案，涵盖AI课程建设、精品课程建设、教师AI赋能、教育数字化转型等服务。我们致力于推动教育创新，助力学校和企业实现高质量发展，助力教育行业数字化升级和创新能力提升。我们的专家团队拥有丰富的行业经验，致力于为客户提供科学的解决方案和持续的价值提升。
            </p>
          </div>
          {/* 新增：了解更多按钮（黑色），左下角对齐 */}
          <div className="mt-8 flex justify-start">
            <button
              className="group flex items-center border-2 border-black text-black font-bold px-6 py-2 rounded transition-colors duration-300 hover:bg-black/10
                hover:text-black hover:border-black relative overflow-hidden self-start"
              style={{ fontFamily: "var(--font-han-sans)" }}
            >
              <span className="flex items-center transition-transform duration-1000 group-hover:translate-x-4">
                了解更多
                <span className="ml-2">→</span>
              </span>
            </button>
          </div>
        </div>
        {/* 右侧图片 */}
        <div className="flex-1 flex justify-center">
          <div className="rounded-3xl overflow-hidden w-[380px] h-[200px] shadow">
            <Image
              src="/about-ceak.jpg"
              alt="关于CEAK"
              width={380}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* 下：职业发展 */}
      <section className="w-full flex flex-col md:flex-row items-center gap-8 mt-8">
        {/* 左侧图片 */}
        <div className="flex-1 flex justify-center">
          <div className="rounded-3xl overflow-hidden w-[380px] h-[200px] shadow">
            <Image
              src="/career.jpg"
              alt="职业发展"
              width={380}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* 右侧内容 */}
        <div className="flex-1 flex flex-col justify-between h-full">
          <div>
            <div className="text-sm text-gray-500 mb-2">职业发展</div>
            <h2 className="text-2xl font-bold mb-2 font-[family-name:var(--font-han-sans)]">用AI共创未来教育新篇章。</h2>
            <p className="text-gray-700 text-base mb-6">
              促进公司、行业和社会的创新认知。
            </p>
          </div>
          <div className="flex justify-end">
            <button className="bg-primary text-white px-6 py-2 rounded font-semibold text-sm shadow hover:bg-[#133d50]">
              申请职业机会
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 