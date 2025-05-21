<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Pricing from "$lib/components/layout/Pricing.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Pricing />

<Testimonials
  testimonials={[
    {
      name: "James Mihara",
      position: "Head of Infrastructure",
      company: "AegixAI",
      quote:
        "Our analytics workloads ran 12x faster after switching to Archil, and we eliminated complex S3 pre-processing pipelines overnight.",
      image: "/generated/image-a-professional-headshot-of-a-black-male-.webp",
    },
    {
      name: "Lina Carew",
      position: "Platform Lead",
      company: "Aperture Systems",
      quote:
        "Archil gave us fast, reliable shared access to TBs of streaming telemetry data—without needing to manually orchestrate storage.",
      image: "/generated/image-a-professional-headshot-of-an-east-asian.webp",
    },
    {
      name: "Kostas Guerrera",
      position: "MLOps Engineer",
      company: "Goliath Robotics",
      quote:
        "It just works. Seamless with TensorFlow, Kubernetes, everything. It made onboarding new data scientists 10x easier.",
      image: "/generated/image-a-professional-headshot-of-a-white-male-.webp",
    }
  ]}
/>

<CallToAction
  title="The next step for active data in the cloud"
  subtitle="Blazing-fast, infinitely scalable cloud storage for modern teams"
  description="Get instant access to your S3 datasets at speeds up to 30x faster than native S3 and up to 100x faster writes than EFS—at a fraction of the cost. Only pay for the data you actively use. Works with the tools you already rely on."
  imageSrc="/generated/image-a-cheerful-engineer-in-a-modern-office-e.webp"
  callsToAction={[
    {
      href: '/get-started',
      label: 'Start free',
      variant: 'primary'
    },
    {
      href: '/contact',
      label: 'Talk to sales',
      variant: 'secondary'
    }
  ]}
/>
