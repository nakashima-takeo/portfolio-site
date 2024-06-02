import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/header";
import Footer from "~/components/footer";
import PortfolioCard from "~/components/portfolio_card";
import { Portfolio } from "~/types/portfolio";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const samplePortfolioInfo: Portfolio[] = [
  {
    name: "KoT plus",
    description: "KoT(King of Time)の勤怠情報画面に情報を追加するChrome拡張機能です。",
    githubUrl: "https://github.com/nakashima-takeo/KoT-plus",
  },
  {
    name: "BestReply",
    description: "gptを用いて、チケットの返信を自動生成するツールです。",
    githubUrl: "https://github.com/nakashima-takeo/bestreply-frontend",
  },
];

export default function Index() {
  return (
    <div  className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4 text-center flex-grow">
        <h1 className="text-3xl font-bold">ポートフォリオ一覧</h1>
        {samplePortfolioInfo.map((info) => (
          <PortfolioCard key={info.name} {...info} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
