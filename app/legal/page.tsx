import { formatTitle } from "@/lib/seo";
import Link from "next/link";

export const metadata = {
  title: formatTitle("法律声明"),
  description: "法律条款",
};

export default function Legal() {
  return (
    <div className="px-4 md:px-8 py-12 max-w-screen-lg mx-auto space-y-6 text-base md:text-xl text-tc leading-loose font-sans-light">
      <p className="text-5xl md:text-7xl text-tc mb-8 font-[fanily-name:var(--font-han-sans)]">
        法律声明
      </p>
      <p className="text-2xl md:text-4xl text-tc font-[fanily-name:var(--font-han-sans)] mt-6">规则及思客咨询网址访问条件</p>
      <p className="text-xl md:text-2xl text-tc leading-normal md:leading-normal font-[family-name:var(--font-sans-light)]">
        以下规则（以下称“使用条款”）适用于所有访问本网站的用户或浏览者，思客咨询（云南）有限公司（以下统称"思客咨询"）保留随时修改这些规则的权利。
        访问本网站的权利由思客咨询根据下列条款授予。如果您不同意下列任何条款，请停止使用本网址。
        对于违反这些规则的行为，思客咨询有权采取法律和公平的补救措施。
      </p>

      <p className="text-2xl md:text-4xl text-tc font-[fanily-name:var(--font-han-sans)] mt-6">思客咨询网站内容</p>
      <p className="text-xl md:text-2xl text-tc leading-normal md:leading-normal font-[family-name:var(--font-sans-light)]">
      本网站所载的材料和信息，包括但不限于文本、图片、数据、观点、建议、网页或链路，虽然思客咨询力图在网站上提供准确的材料和信息，
      但思客咨询并不保证这些材料和内容的准确、完整、充分和可靠性，并且明确声明不对这些材料和内容的错误或遗漏承担责任，
      也不对这些材料和内容作出任何明示或默示的、包括但不限于有关所有权担保、没有侵犯第三方权利、质量和没有计算机病毒的保证。
      </p>
      <p className="text-xl md:text-2xl text-tc leading-normal md:leading-normal font-[family-name:var(--font-sans-light)]">
      思客咨询可以在没有任何通知或提示的情况下随时对本网站上的内容进行修改，为了得到最新版本的信息，请定时访问本网站。
      思客咨询在本网站上所提及的非思客咨询产品或服务仅仅是为了提供相关信息，并不构成对这些产品、服务的认可或推荐。
      思客咨询并不就网址上提供的任何产品、服务或信息做出任何声明、保证或认可，所有产品和服务应受本公司的相关具体合同和条款的约束。
      </p>

      <p className="text-2xl md:text-4xl text-tc font-[fanily-name:var(--font-han-sans)] mt-6">软件内容</p>
      <p className="text-xl md:text-2xl text-tc leading-normal md:leading-normal font-[family-name:var(--font-sans-light)]">
      本网站上所有源代码和二进制形式的软件、示例代码、API、SDK、相关文档和其他相关材料（统称“软件”）的所有权，
      包括所适用的知识产权归思客咨询或其许可方所有。除非您跟据与思客咨询或其关联公司的相关协议另行获得相应许可，
      本网站使用条款不就软件提供任何形式的许可，您不得对软件进行反向工程、反编译、反汇编、拆解、改编、植入或其他派生操作，
      不得以任何方式研究思客咨询产品内部实现、获取产品源代码、窃取知识产权等，也不得披露任何软件性能测试的结果。
      </p>

      <p className="text-2xl md:text-4xl text-tc font-[fanily-name:var(--font-han-sans)] mt-6">您对本网站的使用</p>
      <p className="text-xl md:text-2xl text-tc leading-normal md:leading-normal font-[family-name:var(--font-sans-light)]">
      您不得出于任何非法或本使用条款禁止的目的使用本网站和/或其包含的任何内容，
      不得将本网站和/或其包含的任何内容用于任何非法用途，
      也不得唆使任何非法活动或其他侵犯思客咨询或他人权利的活动。
      </p>

      <p className="text-xl md:text-2xl text-tc leading-normal md:leading-normal font-[family-name:var(--font-sans-light)]">
      您不得以任何非法方式，在未经授权的情况下访问本网站及其任何部分，
      或接受通过本网站提供的任何服务，
      或连接到思客咨询服务器的任何其他系统或网络。
      </p>
      <p className="text-xl md:text-2xl text-tc leading-normal md:leading-normal font-[family-name:var(--font-sans-light)]">
      您同意不会采取任何会对本网站及其相关的架构、系统、网络带来不合理或不成比例的高负载的行为。
      </p>
      <p className="text-xl md:text-2xl text-tc leading-normal md:leading-normal font-[family-name:var(--font-sans-light)]">
      您不得通过本网站未提供的方式获取或试图获取本网站的任何内容，亦不得使用任何自动或手动的流程、抓取设备、程序、算法或方法，
      来访问、获取、拷贝或监控本网站的任何组成部分或内容。
      </p>
      <p className="text-xl md:text-2xl text-tc leading-normal md:leading-normal font-[family-name:var(--font-sans-light)]">
      您不得以扫描等方式测试本网站和/或其网络是否存在漏洞，亦不得破坏网站及其服务所采用的安全或身份验证措施。
      您不得反向搜索、跟踪或试图跟踪有关思客咨询及本网站的任何其他用户或访客的任何信息；
      亦不得以任何方式滥用或泄露网站内的任何服务或信息。
      </p>
      <p className="text-xl md:text-2xl text-tc leading-normal md:leading-normal font-[family-name:var(--font-sans-light)]">
      您不得以任何方式（包括但不限于使用任何设备、软件或程序）干扰或试图干扰本网站的正常运作及其他人对本网站的正常使用。
      </p>
      <p className="text-xl md:text-2xl text-tc leading-normal md:leading-normal font-[family-name:var(--font-sans-light)]">
      您同意在使用本网站及其内容时，遵守国家法律法规、社会公共道德。
      您不得利用本网站及其内容从事制作、查阅、复制和传播任何违法、侵犯他人权益等扰乱社会秩序、破坏社会稳定的行为，
      亦不得利用本网站及其内容从事任何危害或试图危害计算机系统及网络安全的活动。
      </p>

      <p className="text-2xl md:text-4xl text-tc font-[fanily-name:var(--font-han-sans)] mt-6">商标</p>
      <p className="text-xl md:text-2xl text-tc leading-normal md:leading-normal font-[family-name:var(--font-sans-light)]">
      思客咨询网站上使用和显示的所有商标、标志皆属思客咨询或其许可人所有。
      思客咨询网站所载的任何内容不应被视作未经思客咨询或其他方书面许可，
      以暗示、不反对或其他形式授予使用前述任何商标、标志的许可或权利。
      未经事先书面许可，任何人不得以任何方式使用思客咨询名称及思客咨询的商标、标记。
      </p>

      <p className="text-2xl md:text-4xl text-tc font-[fanily-name:var(--font-han-sans)] mt-6">隐私</p>
      <p className="text-xl md:text-2xl text-tc leading-normal md:leading-normal font-[family-name:var(--font-sans-light)]">
        思客咨询的隐私声明适用于本网站的使用。使用本网站，即表示您确认并同意思客咨询可以根据此
        <Link
          href="/privacy"
          className="underline text-blue-600 hover:text-blue-800 transition-colors"
        >
          隐私声明
        </Link>
        使用此类信息。
      </p>

      <p className="text-2xl md:text-4xl text-tc font-[fanily-name:var(--font-han-sans)] mt-6">著作权说明</p>
      <p className="text-xl md:text-2xl text-tc leading-normal md:leading-normal font-[family-name:var(--font-sans-light)]">
        除注明外，网站所有内容受版权保护。未经授权，不得复制、修改、传播、翻印、以镜像方式存储或展示。
      </p>

      <p className="text-2xl md:text-4xl text-tc font-[fanily-name:var(--font-han-sans)] mt-6">产品或服务的适用性</p>
      <p className="text-xl md:text-2xl text-tc leading-normal md:leading-normal font-[family-name:var(--font-sans-light)]">
      本网站所载的所有材料或内容受版权法的保护，所有版权由思客咨询或其许可方拥有，但注明引用其他方的内容除外。
      未经思客咨询或其他方事先书面许可，任何人不得将本网站上的任何内容以任何方式进行复制、修改、传播、经销、翻印、播放、拆解、反向工程、反编译、以超级链路连接或传送、以"镜像法"载入其他服务器上、存储于信息检索系统或者其他任何的使用。
      </p>

      <p className="text-2xl md:text-4xl text-tc font-[fanily-name:var(--font-han-sans)] mt-6">提供的产品或服务</p>
      <p className="text-xl md:text-2xl text-tc leading-normal md:leading-normal font-[family-name:var(--font-sans-light)]">
      由于互联网的国际性或无国界性，因此通过本网站所提供的信息亦具有国际性，其中可能包含对未在您所在国家/地区发布的产品或服务的引用，
      所以不是所有的在本网站上所提到的产品或服务在您的国家或地区都提供，请联系思客咨询了解在您的国家或地区所提供的产品或服务。
      </p>

      <p className="text-2xl md:text-4xl text-tc font-[fanily-name:var(--font-han-sans)] mt-6">第三方链接</p>
      <p className="text-xl md:text-2xl text-tc leading-normal md:leading-normal font-[family-name:var(--font-sans-light)]">
      本网站可能保留有与第三方网站或网址的链接，访问这些链接将由用户自己作出决定，思客咨询并不保证这些链接上所提供的任何信息、数据、观点、图片、陈述或建议的准确性、完整性、充分性和可靠性。
      思客咨询提供这些链接仅仅在于提供方便，并不表示思客咨询对这些信息的认可和推荐，也不是用于宣传或广告目的。
      </p>

      <p className="text-2xl md:text-4xl text-tc font-[fanily-name:var(--font-han-sans)] mt-6">免责声明</p>
      <p className="text-xl md:text-2xl text-tc leading-normal md:leading-normal font-[family-name:var(--font-sans-light)]">
      思客咨询不应对间接、附带、特殊或任何形式的惩罚性赔偿承担任何责任，也不应对任何利润、收入、数据、数据使用的损失承担任何责任。
      除非思客咨询在相关合同中另行书面同意，在适用法允许的范围内，思客咨询不对本网站的“资料”承担任何责任，不论该责任因何原因引起或者基于何种侵权理论。
      </p>

      <p className="text-2xl md:text-4xl text-tc font-[fanily-name:var(--font-han-sans)] mt-6">适用法律与争议解决</p>
      <p className="text-xl md:text-2xl text-tc leading-normal md:leading-normal font-[family-name:var(--font-sans-light)]">
      您同意，与您访问或使用本网站相关的所有事项，应根据中华人民共和国法律解释、理解和管辖。
      您同意，中国云南省昆明市有管辖权的法院具有相关的管辖权。
      </p>
    </div>
  );
}
