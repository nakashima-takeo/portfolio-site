export type Portfolio = {
	name: string;
	description: string;
	githubUrl: string;
	otherLinks?: [
		{
			title: string;
			url: string;
		}
	];
};
