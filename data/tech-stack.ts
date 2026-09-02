export type StackCategory = {
	key: string
	items: readonly string[]
}

export const STACK_CATEGORIES = [
	{
		key: 'frontend',
		items: ['React', 'Next.js', 'TypeScript', 'Alpine.js', 'livewire'],
	},
	{
		key: 'backend',
		items: ['Laravel', 'Node.js', 'PHP', 'Redis', 'Octane'],
	},
	{
		key: 'database',
		items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Supabase'],
	},
	{
		key: 'styling',
		items: ['Tailwind', 'CSS', 'Sass'],
	},
	{
		key: 'devTools',
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
