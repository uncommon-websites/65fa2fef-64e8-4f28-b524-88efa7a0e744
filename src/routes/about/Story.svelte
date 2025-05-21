<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";

	let {
  paragraphs = [
    "Hunter Leath spent years in the heart of cloud infrastructure, first at Amazon's EFS team and later leading platform efforts at Netflix. There, he worked alongside hundreds of data teams, all building products that depended on large, active datasets. The storage tools they had—slow block storage, over-provisioned volumes, and shared file systems that couldn’t scale—just weren’t keeping up. Teams wasted time provisioning storage they didn’t use, rewriting infrastructure, and waiting on data to move. At some point, storage started slowing innovation down.",
    "Hunter began asking a simple question: What if we started from scratch, with a model actually built for how teams access data today? Fast, cloud-native storage tied directly to the data already sitting in S3. Always shareable. Instantly accessible. Always in sync. With no need to over-provision or wrap it in yet another layer. The idea made so much sense—and no one else was solving it. So he left Netflix to fix it himself. That’s how Archil began.",
    "Today, Archil builds storage that’s designed for people actually building. Whether you’re training models, crunching logs, or building serverless data notebooks, Archil gives you infinite, S3-backed volumes you can mount from anywhere. With high performance, full POSIX support, and a “pay-only-for-data-you-use” model, Archil takes storage from bottleneck to invisible. No rewrites. No vendor lock-in. Just storage that moves as fast as your data—and doesn’t get in the way."
  ]
}: {
  paragraphs: string[];
} = $props();
</script>

<div class="">
	<article class="section-py container mx-auto grid max-w-full">
		<Summary text={paragraphs.join("\n\n")} />
	</article>
</div>
