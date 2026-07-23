import projectsData from '@/data/projects.json'

export type Project = {
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

const projects = projectsData as Project[]

export function getAllProjects(): Project[] {
	return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug)
}
