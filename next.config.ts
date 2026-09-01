import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
import path from 'path'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

const nextConfig: NextConfig = {
	experimental: {
		optimizePackageImports: ['@phosphor-icons/react'],
	},
	turbopack: {
		root: path.join(__dirname),
	},
}

export default withNextIntl(nextConfig)
