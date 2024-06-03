import { Portfolio } from "../types/portfolio";


const myPortfolioInfo: Portfolio[] = [
  {
    name: "KoT plus",
    description: "KoT(King of Time)の勤怠情報画面に情報を追加するChrome拡張機能です。",
    githubUrl: "https://github.com/nakashima-takeo/KoT-plus",
    otherLinks: [
      {
        title: "Chromeウェブストア",
        url: "https://chromewebstore.google.com/detail/kotplus/oanefkeogpibhhbaglmfnflmjddeople",
      },
    ],
  },
  {
    name: "BestReply",
    description: "gptを用いて、チケットの返信を自動生成するツールです。",
    githubUrl: "https://github.com/nakashima-takeo/bestreply-frontend",
    otherLinks: [
      {
        title: "Webサイト",
        url: "https://bestreply.takeo-taco.soy/",
      },
    ],
  },
];

export default myPortfolioInfo;
