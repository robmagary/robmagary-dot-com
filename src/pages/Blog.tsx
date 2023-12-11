import Head from 'components/Head'
import Navbar from 'components/Navbar'
import type { ReactElement } from 'react'
import { default as SmallBusiness } from 'content/blog/2014-2-23-why-design-matters-for-the-small-business.md'
import { default as WebsiteUpdated } from 'content/blog/2014-1-11-comprehensive-pain-and-spine-website-is-updated.md'
import { default as Design } from 'content/blog/2013-2-28-design-the-creative-process.md'

export default function Blog(): ReactElement {
	return (
		<>
			<Head title='Blog' />
			<Navbar />
			<div className='prose flex max-w-screen-lg flex-col gap-12 px-12'>
				<SmallBusiness />
				<WebsiteUpdated />
				<Design />
			</div>
		</>
	)
}
