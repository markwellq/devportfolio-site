export interface Project {
	slug: string
	title: string
	description: string
	stack: string[]
	cover: string
	screenshots: string[]
	youtubeUrl: string | null
	demoUrl: string | null
	githubUrl: string | null
	content: string
}
