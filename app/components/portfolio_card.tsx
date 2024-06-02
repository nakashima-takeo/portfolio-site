import { Portfolio } from "~/types/portfolio";
import Button from "./button";

export default function PortfolioCard(portfolioInfo: Portfolio) {
  return (
    <div className="border p-4 my-4">
      <h2 className="text-xl font-bold">{portfolioInfo.name}</h2>
      <p>{portfolioInfo.description}</p>
      <div className="mt-4">
        <Button text="GitHub" url={portfolioInfo.githubUrl} />
        {portfolioInfo.ohterlinks?.map((link) => (
          <Button key={link.title} text={link.title} url={link.url} />
        ))}
      </div>
    </div>
  );
}
