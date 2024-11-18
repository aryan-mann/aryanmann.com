// Icons
import IconGithub from 'lucide-svelte/icons/github';
import IconMusic from 'lucide-svelte/icons/audio-lines';
import IconEmail from 'lucide-svelte/icons/mail';
// Assets
import PfOurSpaces from "@assets/images/sc_spaces.png"
import PfCoral from "@assets/images/sc_coral.png"
import PfAmchem from "@assets/images/sc_amc.jpg"
import PfDrythane from "@assets/images/sc_dry.jpg"
import PfPerception from "@assets/images/sc_perception.png"
import PfAmshield from "@assets/images/sc_ams.jpg"
import PfAryanMann from "@assets/images/sc_ari.jpg"

export const SiteData = {
	base_url: 'https://aryanmann.com',
	site_title: "aryan's website",
	author: 'Aryan Mann',
	title_functor: (title) => `${title} | Aryan Mann`,
	site_description:
		'a blog containing posts about things like tech, philosophy, tech, and philosophy. maybe some book stuff too.',
	site_keywords: ['Next.js', 'Netlify', 'React'],
	posts_per_page: 5,
	socials: [
		{ title: 'Github', url: 'https://github.com/aryan-mann', icon: IconGithub },
		{ title: 'Spotify', url: 'https://open.spotify.com/user/aryan_mann', icon: IconMusic },
		{ title: 'Email', url: 'mailto:aryan.21.mann@gmail.com', icon: IconEmail }
	] as const,
	menuLinks: [
		{ label: 'home', url: '/' },
		{ label: 'blog', url: '/posts' },
		{ label: 'résumé (outdated)', url: '/resumes/AryanMann_Resume_Apr28.pdf', external: true },
	] as const,
	portfolio: [
		{
			website: 'chat.cohere.com',
			image: PfCoral,
			description: `Cohere's main experimental chat interface that included quirky features like next turn suggestions (thanks aryan), some bugs (thanks aryan), and lots of positive design (thanks team!)`
		},
		{
			website: 'ourspac.es',
			image: PfOurSpaces,
			description:
				'A resource for spaces available to the public around San Francisco. These spaces are vetted and selected to be as free as possible, as nice as possible, and open to the public. We have parks, POPOs, libraries, and more coming as we discover them!'
		},
		{
			website: 'amchemproducts.com',
			image: PfAmchem,
			description:
				"Official website of Amchem Products Pvt. Ltd. Made from the ground up using NextJS, React, and Tailwind. Meta tags & JSON-LD injected using Helmet for a proper SEO experience. Aiming and acheiving that perfect 10/10 score on Google's Lighthouse =)"
		},
		{
			website: 'drythane.com',
			image: PfDrythane,
			description:
				'Official website of Drythane. Built with React & Gatsby using a custom Gatsby theme that uses shadowing to share structure between drythane.com and amshielddeck.com but with completely different themeing and content.'
		},
		{
			displayName: 'com.unity.perception',
			website: 'github.com/Unity-Technologies/com.unity.perception',
			image: PfPerception,
			description:
				'A Unity toolkit for creating high variance synthetic data with ground truth such as bounding boxes, segmentation maps, labeling of occlusion percentages, etc. Used by dozens of computer vision projects that saw significant improvement in model performance.'
		},
		{
			website: 'amshielddeck.com',
			image: PfAmshield,
			description:
				'Official website of Amshield Deck. Built with React & Gatsby using a custom Gatsby theme that uses shadowing to share structure between amshielddeck.com and drythane.com but with completely different themeing and content.'
		},
		{
			website: 'aryanmann.com',
			image: PfAryanMann,
			description:
				'My own personal website with a tiny blog. Powered by Svelte under the hood with all custom components made using Tailwind. The blog uses MDX for the posts which also allows embedding of Svelte code (among other things such as Markdown).'
		}
	] as const
};
