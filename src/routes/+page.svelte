<script lang="ts">
	// Components
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
</script>

<CustomerCardHero
  centered={false}
  title="Cloud storage built for active data"
  subtitle="Archil gives developers and data teams instant access to S3-backed storage that scales forever, shares effortlessly across instances, and needs no setup."
  customers={[
    {
      name: "Priya Kulkarni",
      position: "Data platform lead at Vectra Metrics",
      imageSrc: "/generated/image-a-female-data-scientist-in-a-modern-offi.webp"
    },
    {
      name: "Dan Palmer",
      position: "CTO at OrbitWorks",
      imageSrc: "/generated/image-a-male-developer-at-a-tech-startup-seate.webp"
    },
    {
      name: "Lia Chen",
      position: "ML infra engineer at Skylab",
      imageSrc: "/generated/image-a-female-cloud-architect-smiling-warmly-.webp"
    },
    {
      name: "Jamal Rivers",
      position: "Systems architect at DeltaQ",
      imageSrc: "/generated/image-a-male-platform-engineer-with-glasses-fo.webp"
    },
    {
      name: "Alex Wang",
      position: "Platform engineer at Runloop",
      imageSrc: "/generated/image-a-male-analytics-lead-in-an-open-workspa.webp"
    }
  ]}
  callsToAction={[{ href: "/contact", label: "Request a demo" }]}
/>

<LogoScroller
  label="Trusted by industry leaders"
  logoUrls={[
    'https://logo.clearbit.com/airbnb.com',
    'https://logo.clearbit.com/openai.com',
    'https://logo.clearbit.com/stripe.com',
    'https://logo.clearbit.com/asana.com'
  ]}
/>

<Summary
	generating
	title="What we do"
	text="Our technology delivers measurable results through secure, adaptable solutions that directly increase productivity and drive growth."
/>




<Features
	generating
	title="Features"
	subtitle="Some features"
	features={[
		{
			title: "Streamlined Workflows",
			description:
				"Automate repetitive tasks and connect systems to improve productivity with our industry-leading 87% time savings."
		},
		{
			title: "Data Analysis",
			description:
				"Extract meaningful insights from your data with powerful analytical tools backed by proprietary AI algorithms that are 3x more accurate than competitors."
		},
		{
			title: "Secure Collaboration",
			description:
				"Work together seamlessly while maintaining strict data privacy standards with our zero-knowledge architecture and military-grade encryption."
		}
	]}
/>

<UseCases
	generating
	title="Use Cases"
	subtitle="Real-world applications for your business needs"
	useCases={[
		{
			title: "Streamlined Workflows",
			description:
				"Automate repetitive tasks and connect systems to improve productivity with our industry-leading 87% time savings.",
			image:
				"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
			link: {
				href: "/use-cases/workflows",
				label: "Learn more"
			}
		},
		{
			title: "Data Analysis",
			description:
				"Extract meaningful insights from your data with powerful analytical tools backed by proprietary AI algorithms that are 3x more accurate than competitors.",
			image:
				"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2488&q=80",
			link: {
				href: "/use-cases/data-analysis",
				label: "Explore analytics"
			}
		},
		{
			title: "Secure Collaboration",
			description:
				"Work together seamlessly while maintaining strict data privacy standards with our zero-knowledge architecture and military-grade encryption.",
			image:
				"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
			link: {
				href: "/use-cases/collaboration",
				label: "See security features"
			}
		}
	]}
/>

<AboutTeaser generating />
<CallToAction generating />
