import Head from 'components/Head'
import Navbar from 'components/Navbar'
import type { PropsWithChildren, ReactElement } from 'react'

interface Properties {
	achievements?: string[]
	dateRange: string
	employer: string
	responsibilities: string[]
	summary?: string[]
}

interface WorkHistory {
	workHistory: Properties[]
}

interface SectionProperties {
	title: string
}

const experienceData = [
	{
		dateRange: 'September 2022 - November 2023',
		employer: 'CareRev',
		responsibilities: [
			'Meet with product and design team members to contribute to product discussions',
			'Develop engaging and effective user interfaces for web applications',
			'Review PRs for engineering team members',
			'Write code for various languages and frameworks, including Elm, Node JS, Express JS, and some vanilla Javascript'
		]
	},
	{
		dateRange: 'December 2021 - September 2022',
		employer: 'Avetta',
		responsibilities: [
			'Develop engaging and effective user interfaces for web applications',
			'Create tickets for project management in an agile work environment',
			'Write code for various languages and frameworks, including Elm, Node JS, Express JS, and some vanilla Javascript'
		]
	},
	{
		achievements: [
			'Awarded the first Most Valued Pro award in 2018',
			'Designed and implemented the initial API and CMS applications, allowing ITProTV to move away from WordPress as a CMS',
			'Served as the lead full-stack developer for two years'
		],
		dateRange: 'March 2014 - December 2021',
		employer: 'ITProTV/ACI Learning',
		responsibilities: [
			'Train and mentor a team of front-end developers and designers',
			'Lead the creation of engaging and effective user interfaces for web applications',
			'Develop epics and stories for project management in an agile work environment',
			'Manage multiple concurrent projects and report to leadership on progress',
			'Write code for various languages and frameworks, including Elm, React, Gatsby JS, various versions of Angular, Node JS, Express JS, vanilla Javascript, PHP, and some Ruby.',
			'Contribute creatively to marketing efforts to add leads to our funnel, including campaigns, promotions, slogans, social media posts, and graphics.'
		],
		summary: [
			'Hired in March of 2014 as the third full-time employee, my role originally included marketing and maintaining the WordPress-based web application/e-commerce site. After seven years, with over sixty employees and an annual revenue of over 10 million dollars, my role evolved from lead developer to product lead to the role I finally hold as front-end lead.',
			"My team was responsible for designing and implementing effective user interfaces and managing the ITProTV band's visuals across our websites, videos, and print assets."
		]
	},
	{
		employer: 'MonkeyWish',
		dateRange: 'February 2012 - March 2014',
		responsibilities: [
			'Redesigning the MonkeyWish.com and iOS user interfaces',
			'Implementing the front-end for MonkeyWish.com',
			'Manage intern schedules and workloads',
			'Designing and implementing mobile applications for local businesses via an application publishing platform'
		],
		summary: [
			'Working at MonkeyWish was full of valuable experiences and lessons about starting a tech business, creating, launching, and promoting web and mobile applications, and working with team members to achieve challenging goals.'
		]
	}
]

function Experience({ workHistory }: WorkHistory): ReactElement {
	return (
		<ul>
			{workHistory.map(experience => (
				<li
					className='mb-6 flex flex-col lg:flex-row'
					key={experience.employer}
				>
					<h3 className='flex flex-col text-xl font-bold lg:w-1/4'>
						{experience.employer}
						<small className='text-sm font-normal leading-tight text-slate-600 lg:mt-4'>
							{experience.dateRange}
						</small>
					</h3>
					<div className='w-3/4'>
						<div>
							{experience.summary && experience.summary.length > 0 ? (
								<>
									<h5 className='text-normal mb-4 font-bold lg:w-3/4'>
										Summary
									</h5>
									{experience.summary.map(summaryParagraph => (
										<p
											className='mb-4 text-slate-600'
											key={summaryParagraph.length}
										>
											{summaryParagraph}
										</p>
									))}
								</>
							) : undefined}
						</div>
						<h5 className='text-normal mb-4 font-bold lg:w-3/4'>
							Responsibilities
						</h5>
						<ul className='list-disc pl-8'>
							{experience.responsibilities.map(responsibility => (
								<li className='text-slate-600' key={responsibility}>
									{responsibility}
								</li>
							))}
						</ul>
						<div>
							{experience.achievements && experience.achievements.length > 0 ? (
								<>
									<h5 className='text-normal mb-4 font-bold lg:w-3/4'>
										Achievements
									</h5>
									<ul className='list-disc pl-8'>
										{experience.achievements.map(achievement => (
											<li className='text-slate-600' key={achievement}>
												{achievement}
											</li>
										))}
									</ul>
								</>
							) : undefined}
						</div>
					</div>
				</li>
			))}
		</ul>
	)
}

function SectionWrapper({
	children,
	title
}: PropsWithChildren<SectionProperties>): ReactElement {
	return (
		<section className='max-w-screen-lg'>
			<h2 className='mt-6 text-2xl font-bold'>{title}</h2>
			<hr className='border-b-1 my-6' />
			{children}
		</section>
	)
}

export default function ResumePage(): ReactElement {
	return (
		<>
			<Head title='Resume' />
			<Navbar />
			<div id='resume' className='flex flex-col px-12'>
				<section className='max-w-screen-lg'>
					<h1 className='mb-4 text-2xl font-bold'>Summary</h1>
					<p>
						A skilled leader with more than four years of experience developing
						team members and more than ten years of experience designing and
						developing web and mobile applications. Specializing in casting a
						product vision, breaking the project down into deployable phases,
						leading the team to project completion, and building great web
						applications with Elm.
					</p>
				</section>
				<SectionWrapper title='Experience'>
					<Experience workHistory={experienceData} />
				</SectionWrapper>
				<SectionWrapper title='Education' />
				<SectionWrapper title='Volunteering' />
			</div>
		</>
	)
}
