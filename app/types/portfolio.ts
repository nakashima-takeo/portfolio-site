export type Portfolio = {
  name: string;
  description: string;
  githubUrl: string;
  ohterlinks?: [
    {
      title: string;
      url: string;
    }
  ]
};
