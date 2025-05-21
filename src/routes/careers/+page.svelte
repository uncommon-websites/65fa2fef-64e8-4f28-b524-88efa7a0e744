<script lang="ts">
	// Types

	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Card from "$lib/components/ui/Card.svelte";
	import JobList, { type JobOpening } from "./JobList.svelte";

	// Icons
	import IconBriefcase from "~icons/lucide/briefcase";
	import IconUsers from "~icons/lucide/users";
	import IconHeart from "~icons/lucide/heart";
	import IconGlobe from "~icons/lucide/globe";

	// Constants
	const SECTION_BASE_CLASSES = "section-py section-px container mx-auto";
	const GRADIENT_BG_CLASSES =
		"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
	const ICON_CONTAINER_CLASSES =
		"bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400 flex items-center justify-center rounded-full";

	const benefits = [
  {
    title: "Build what’s next for cloud data",
    description: "Join a fast-moving team changing the future of large-scale storage. Ship real product, make impactful decisions, and shape the roadmap from day one.",
    icon: IconBriefcase
  },
  {
    title: "Work directly with the best minds",
    description: "Collaborate daily with ex-Amazon and ex-Netflix engineers, and learn from leaders with deep experience building cloud infrastructure at scale.",
    icon: IconUsers
  },
  {
    title: "Flexible, developer-first culture",
    description: "Remote-friendly with a collaborative SF hub. High trust, true ownership, and the flexibility to work where and how you do your best work.",
    icon: IconHeart
  }
];

	const openings: JobOpening[] = [
		// Engineering
		{
			title: "Senior Frontend Developer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Backend Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Design Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Design
		{
			title: "UX/UI Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Product
		{
			title: "Product Manager",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Analyst",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Marketing
		{
			title: "Marketing Specialist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Content Strategist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Social Media Manager",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		}
	];

	const employeeTestimonials = [
  {
    name: "David Zhang",
    position: "Senior Software Engineer",
    company: "Engineering Team",
    quote:
      "Archil is a place where technical curiosity is valued. I get to work on real scaling challenges with team members who genuinely care about each other's growth. Every day brings opportunities to push boundaries and learn something new.",
    image: "/generated/image-an-asian-male-senior-engineer-in-a-moder.webp"
  },
  {
    name: "Aarti Patel",
    position: "Product Designer",
    company: "Product & Design",
    quote:
      "I love how much trust and ownership I have in my work here. From day one, my ideas have shaped our products, and I always feel supported creatively. The company's openness to feedback is unmatched — we build together as a team.",
    image: "/generated/image-an-indian-female-product-designer-immers.webp"
  },
  {
    name: "Jamal Thompson",
    position: "Marketing Coordinator",
    company: "Growth & Marketing",
    quote:
      "Joining Archil early in my career, I felt welcomed right away. The mentorship and energy here make an enormous difference. Everyone is approachable and collaborative, and I always feel like my contributions matter.",
    image: "/generated/image-a-black-junior-marketing-team-member-eit.webp"
  }
];

	const processSteps = [
  {
    step: 1,
    title: "Apply in minutes",
    description: "Send a quick intro and resume—no long forms or portals."
  },
  {
    step: 2,
    title: "Intro conversation",
    description: "A short video call to get to know each other and discuss what excites you about Archil."
  },
  {
    step: 3,
    title: "Technical or problem-solving session",
    description: "Walk through a relevant challenge or explore your technical thinking with a team member."
  },
  {
    step: 4,
    title: "Meet the team",
    description: "Chat with founders or future teammates to learn about our culture, ways of working, and growth paths."
  },
  {
    step: 5,
    title: "Decision",
    description: "We aim to make decisions within a week and always give you transparent feedback."
  }
];

	const values = [
  {
    title: "Speed with thoughtfulness",
    description: "We move quickly to solve hard problems but never sacrifice stability or trust in our systems or each other."
  },
  {
    title: "No bureaucracy",
    description: "Less process, more building. Every voice matters—engineering, design, and customer input shape our product."
  },
  {
    title: "Radical clarity",
    description: "We value ownership, transparency, and direct communication—even when it's hard. Everyone is empowered to take initiative."
  }
];
</script>

<!-- Hero Section -->

<SecondaryHero
	title="The future of active data is built together"
	subtitle="Join a collaborative team where big challenges fuel real growth and everyone has a seat at the table. Shape how the cloud works for developers, data scientists, and innovators everywhere."
	imageSrc="/generated/image-a-diverse-and-collaborative-team-working.webp"
/>

<!-- Why Join Us Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader title="Why join us?" subtitle="Build your career while making an impact" />

	<div class="mt-16 grid gap-4 md:grid-cols-3">
		{#each benefits as benefit}
			<Card {...benefit} />
		{/each}
	</div>
</section>

<!-- Culture Section -->
<Culture {values} />

<Testimonials testimonials={employeeTestimonials} />

<!-- Application Process -->
<section class={SECTION_BASE_CLASSES}>
	<div class="mx-auto">
		<h2 class="text-title1 mb-16">Our application process</h2>

		<div class="grid gap-12 md:grid-cols-3">
			{#each processSteps as { step, title, description }, i}
				<div class="flex flex-col">
					<div class="{ICON_CONTAINER_CLASSES} mb-6 size-11">
						<span class="text-headline">{step}</span>
					</div>
					<h3 class="text-headline mb-3">{title}</h3>
					<p class="text-body text-emphasis-low">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- Current Openings Section -->
<section class={GRADIENT_BG_CLASSES}>
	<div class="section-px section-py container mx-auto grid w-full items-start lg:grid-cols-2">
		<SectionHeader title="Current openings" subtitle="Find your perfect role" />

		<JobList {openings} />
	</div>
</section>
