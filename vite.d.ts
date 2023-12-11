declare module '*.md' {
	import type React from 'react'

	const ReactComponent: React.VFC
	export default ReactComponent
	// export const attributes = Record<string, any>;
}

interface WrapperComponentProperties {
	// attributes: Record<string, any>;
	importComponentName: string[]
}
