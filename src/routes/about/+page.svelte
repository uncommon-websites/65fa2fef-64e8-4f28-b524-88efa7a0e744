<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
  {
    title: "We solve real problems",
    description: "We focus on practical, technically sound solutions for complex data and storage challenges."
  },
  {
    title: "Feedback over ego",
    description: "We value open feedback and humility at every level. The best ideas win, no matter who shares them."
  },
  {
    title: "Build with users",
    description: "We stay close to the engineers and teams we serve—shipping quickly, iterating with real-world feedback."
  },
  {
    title: "Own what you ship",
    description: "Every engineer has a direct hand in our product and our results. We believe in individual impact and shared accountability."
  },
  {
    title: "Sweat the technical details",
    description: "We care deeply about robustness, efficiency, and clarity when building foundational systems."
  },
  {
    title: "Experience matters",
    description: "Our culture is shaped by years spent building some of the most-used storage platforms on earth. We keep learning, together."
  }
];
</script>

<SecondaryHero
  title="Instant data. Infinite scale."
  subtitle="Access petabytes of S3 cloud data in real time. Pay only for what's active."
  imageSrc="/mockups/airport-screen-1747848420477.png"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"We started in 2018 with a simple goal: make helpful tech that people actually need. While many chase profits, we chose to do things differently.",
		"Beyond making good products, we care about doing the right thing, being kind to our planet, and making sure everyone can use what we build. That's our compass.",
		"From day one, we've asked ourselves: 'Does this actually help people?' This question gets us through tough calls and shapes who we are. We're playing the long game here.",
		"We think about how our work affects real people's lives. We build tech that brings people together, keeps your information safe, and treats everyone fairly. When we stick to these basics, good things happen."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->
<StakeholderGrid
  stakeholderType="team"
  title="Our founder"
  subtitle="Meet the builder behind Archil."
  stakeholders={[
    {
      name: "Hunter Leath",
      position: "Founder & CEO",
      bio: "Hunter spent a decade shaping cloud storage at Amazon EFS and Netflix. He started Archil to help engineers and data teams move faster with scaleable, shareable volumes that make massive data feel local.",
      image: "/generated/image-a-professional-headshot-of-a-friendly-ma.webp"
    }
  ]}
/>

<StakeholderGrid
  stakeholderType="investor"
  title="Backed by world-class investors"
  subtitle="Archil is supported by Y Combinator and Felicis."
  stakeholders={[
    {
      name: "Y Combinator",
      image: "https://cdn.brandfetch.io/yc.com/w/400/h/400/logo"
    },
    {
      name: "Felicis",
      image: "https://cdn.brandfetch.io/felicis.com/w/400/h/400/logo"
    }
  ]}
/>

<!-- CTA Section -->
<CallToAction
  title="Help build infinitely scalable, S3-compatible cloud file storage for AI and analytics"
  subtitle="Seeking cloud and data infrastructure experts to solve complex challenges in active cloud data"
  description="Archil is building foundational cloud volume architecture for AI, analytics, and real-time applications. We're tackling petabyte-scale datasets, multi-cloud environments, and millisecond data access—bridging the performance of local volumes with the scale and simplicity of S3. Collaborate directly on core infrastructure problems, including distributed caching, high-throughput file systems, and cost-optimized storage built for active data use. Work alongside a small team with deep experience and partners shaping the future of cloud computing."
  callsToAction={[
    { label: 'See engineering roles', href: '/careers', variant: 'primary' },
    { label: 'Contact the team', href: '/contact', variant: 'secondary' }
  ]}
/>
