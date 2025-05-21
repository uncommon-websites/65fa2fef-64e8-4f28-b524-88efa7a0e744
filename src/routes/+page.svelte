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
	title="Cloud volumes built for active data"
	text="Archil provides infinitely scalable cloud storage volumes for modern applications. Get instant, shareable access to your S3 datasets—with the cost, speed, and simplicity you wish S3 always had."
/>




<Features
	title="Cloud volume features"
	subtitle="How Archil changes what cloud storage can do"
	features={[
		{
			title: "Infinite scalability",
			description: "Volumes grow automatically to petabyte scale, so you never manage capacity."
		},
		{
			title: "Instant s3 access",
			description: "Mount volumes on top of any S3 bucket and access all data immediately."
		},
		{
			title: "Share across instances",
			description: "Allow multiple compute instances to read and write the same volume."
		},
		{
			title: "High-performance io",
			description: "Enjoy up to 30x faster reads and 100x faster writes than S3 or EFS."
		},
		{
			title: "Only pay for what’s active",
			description: "Achieve up to 90% cost reduction versus block storage by paying for only active data."
		},
		{
			title: "Compliance and no lock-in",
			description: "Data stays in your S3, with SOC2, HIPAA, and GDPR support by default."
		}
	]}
/>

<UseCases
  title="Use Cases"
  subtitle="Real-world applications for your business needs"
  useCases={[
    {
      title: "Accelerate AI model training on petabyte-scale data",
      description: "Start large-scale machine learning experiments right from your S3 buckets—no slow data migrations, no wasted storage. Archil volumes provide instant, high-performance access for your team.",
      image: "/generated/image-a-diverse-group-of-engineers-collaborati.webp",
      link: {
        href: "/use-cases/ai-model-training",
        label: "Learn more"
      }
    },
    {
      title: "Real-time analytics on fast-growing event streams",
      description: "Power continuous analytics and observability for streaming data without worrying about storage bottlenecks or scaling headaches. Archil scales instantly as event volume grows.",
      image: "/generated/image-a-team-of-engineers-in-a-collaborative-e.webp",
      link: {
        href: "/use-cases/real-time-analytics",
        label: "Learn more"
      }
    },
    {
      title: "Share cloud data and workloads across any environment",
      description: "Collaborate across teams, clusters, or clouds with POSIX-compliant storage that’s always in sync with your S3—supporting multi-cloud, multi-user, and serverless workflows, instantly.",
      image: "/generated/image-a-diverse-platform-team-working-together.webp",
      link: {
        href: "/use-cases/shared-cloud-storage",
        label: "Learn more"
      }
    }
  ]}
/>

<AboutTeaser />
<CallToAction
  title="Cloud storage for massive S3 datasets—at lightning speed and infinite scale"
  subtitle="Archil makes your S3 data instantly accessible and shareable across compute, with 30x faster reads and 100x faster writes. Fully POSIX compliant and pay only for active data."
  imageSrc="/generated/image-a-cheerful-data-engineer-sitting-at-a-de.webp"
  callsToAction={[{ href: '/contact', label: 'Try Archil in minutes', variant: 'primary' }]}
/>
