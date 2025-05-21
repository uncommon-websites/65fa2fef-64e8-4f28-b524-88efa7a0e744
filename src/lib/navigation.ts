/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Book demo",
	href: "/"
};

export const navigation: NavItem[] = [
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
    label: "Use Cases",
    showInNav: true,
    showInFooter: true,
    children: [
      {
        label: "Accelerate AI model training",
        href: "/use-cases/ai-model-training",
        image: "/generated/image-a-diverse-group-of-engineers-collaborati.webp",
        description: "Start large-scale machine learning experiments right from your S3 buckets—no slow data migrations, no wasted storage. Archil volumes provide instant, high-performance access for your team.",
        showInNav: true,
        showInFooter: true
      },
      {
        label: "Real-time analytics on event streams",
        href: "/use-cases/real-time-analytics",
        image: "/generated/image-a-team-of-engineers-in-a-collaborative-e.webp",
        description: "Power continuous analytics and observability for streaming data without worrying about storage bottlenecks or scaling headaches. Archil scales instantly as event volume grows.",
        showInNav: true,
        showInFooter: true
      },
      {
        label: "Share data across clouds",
        href: "/use-cases/shared-cloud-storage",
        image: "/generated/image-a-diverse-platform-team-working-together.webp",
        description: "Collaborate across teams, clusters, or clouds with POSIX-compliant storage that’s always in sync with your S3—supporting multi-cloud, multi-user, and serverless workflows, instantly.",
        showInNav: true,
        showInFooter: true
      }
    ]
  },
	{
		label: "Company",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Pricing",
				href: "/pricing",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/careers",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "More",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			}
			// Social media might be handled differently, not typically a nav item
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
