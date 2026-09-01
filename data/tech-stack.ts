export type StackCategory = {
	key: string
	label: string
	items: readonly string[]
}

export const STACK_CATEGORIES = [
	{
		key: 'frontend',
		label: 'Frontend',
		items: ['react', 'nextjs', 'typescript', 'tailwind'],
	},
	{
		key: 'backend',
		label: 'Backend',
		items: ['laravel', 'php', 'redis', 'octane'],
	},
	{
		key: 'devtools',
		label: 'Dev Tools',
		items: ['docker', 'git', 'stripe'],
	},
] as const
