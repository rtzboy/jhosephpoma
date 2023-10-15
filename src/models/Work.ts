export interface Work {
	name: string;
	details: string;
	description: string;
	tags: Tag[];
	image: string;
	demo_links: DemoLink[];
}

export interface DemoLink {
	to: string;
	href: string;
	icon: string;
}

export interface Tag {
	name: string;
	color: string;
	image: string;
}
