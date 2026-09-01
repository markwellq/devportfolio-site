export type StackCategory = {
	key: string
	label: string
	items: readonly string[]
}

export const STACK_CATEGORIES = [
	{
		key: 'frontend',
		label: 'Frontend',
		items: ['React', 'Next.js', 'Typescript', 'Alpine.js'],
	},
	{
		key: 'backend',
		label: 'Backend',
		items: ['Laravel', 'Node.js', 'PHP', 'Redis', 'Octane'],
	},
	{
		key: 'Styling',
		label: 'Backend',
		items: ['Tailwind', 'CSS', 'SaSS'],
	},
	{
		key: 'Database',
		label: 'Backend',
		items: ['MySQL', 'MongoDB', 'PostgreSQL'],
	},
	{
		key: 'Dev tools',
		label: 'Dev Tools',
		items: [
			'Docker',
			'Git',
			'GitHub',
			'Stripe',
			'Figma',
			'Vercel',
			'Postman',
			'VScode',
			'Xcode',
		],
	},
] as const
