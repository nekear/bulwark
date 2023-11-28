<script lang="ts">
	import spline from '$lib/assets/spline.svg';
	import ContactUsModal from '$lib/components/premade/dialog/contact-us'
	import * as Card from "$lib/components/ui/card";

	const services = [
		{
			title: "Fortress Defense",
			subTitle: "Impenetrable barriers, vigilant patrols, and strategic fortification to safeguard your estate."
		},
		{
			title: "VIP Protection",
			subTitle: "Discreet and elite protection for dignitaries, executives, and high-profile individuals."
		},
		{
			title: "Threat Assessment",
			subTitle: "Expert evaluations and strategic advice to fortify your security measures."
		},
		{
			title: "Magical Barrier Installation",
			subTitle: "Harness powerful troll and orc magic for impenetrable barriers."
		},
		{
			title: "Patrol and Surveillance",
			subTitle: "Regular surveillance by vigilant troll and orc patrols for proactive security."
		},
		{
			title: "Custom Security Solutions",
			subTitle: "Tailored packages meeting your unique security needs."
		}
	]
</script>

<div class="flex flex-col h-screen">
	<div class="grid grid-cols-1 xl:grid-cols-3 gap-[45px] pl-[40px] pr-[45px] mt-[150px]">
		{#each services as service}
			<Card.Root class="border-primary bg-background border-2 rounded-3xl min-h-[200px]">
				<Card.Header>
					<Card.Title class="text-3xl text-primary">{service.title}</Card.Title>
					<Card.Description class="text-xl text-foreground">{service.subTitle}</Card.Description>
				</Card.Header>
			</Card.Root>
		{/each}
	</div>
	<div class="flex flex-row justify-center mt-[40px] mb-[20px]">
		<ContactUsModal buttonTitle="Use our services"/>
	</div>
</div>
