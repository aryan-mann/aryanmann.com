export type PostItem = {
	url: string;
} & Partial<PostMeta>;

export type PostMeta = {
	title: string;
	description?: string;
	date: Date;
	lastUpdated?: Date;
	tags: Array<string>;
	part?: number;
	series?: string;
	draft: boolean;
};