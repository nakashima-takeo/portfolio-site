import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/header";
import Footer from "~/components/footer";
import PortfolioCard from "~/components/portfolio_card";
import myPortfolioInfo from "~/data/my_portfolio_info";

export const meta: MetaFunction = () => {
  return [
    { title: "自身のポートフォリオまとめサイト" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div  className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4 text-center flex-grow">
        <h1 className="text-3xl font-bold">ポートフォリオ一覧</h1>
        {myPortfolioInfo.map((info) => (
          <PortfolioCard key={info.name} {...info} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
