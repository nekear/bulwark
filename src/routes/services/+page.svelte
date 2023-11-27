<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import ogres from '$lib/assets/characters/heroes_colored.png';
	import al from '$lib/assets/characters/slide_0.png';
	import thar from '$lib/assets/characters/slide_1.png';
	import letho from '$lib/assets/characters/slide_2.png';
	import ServiceCard from './ServiceCard.svelte';
	import PrimaryButton from './PrimaryButton.svelte';
	import Slide from '../feedback/Slide.svelte';
</script>

<div class="flex flex-col h-screen bg-[url({ogres})]">
	<kostya class="grid grid-cols-1 xl:grid-cols-3 gap-[45px] pl-[40px] pr-[45px] mt-[150px]">
		<ServiceCard
			title="Fortress Defense"
			subTitle="Impenetrable barriers, vigilant patrols, and strategic fortification to safeguard your estate."
		></ServiceCard>

		<ServiceCard
			title="VIP Protection"
			subTitle="Discreet and elite protection for dignitaries, executives, and high-profile individuals."
		></ServiceCard>

		<ServiceCard
			title="Threat Assessment"
			subTitle="Expert evaluations and strategic advice to fortify your security measures."
		></ServiceCard>

		<ServiceCard
			title="Magical Barrier Installation"
			subTitle="Harness powerful troll and orc magic for impenetrable barriers."
		></ServiceCard>

		<ServiceCard
			title="Patrol and Surveillance"
			subTitle="Regular surveillance by vigilant troll and orc patrols for proactive security."
		></ServiceCard>

		<ServiceCard
			title="Custom Security Solutions"
			subTitle="Tailored packages meeting your unique security needs."
		></ServiceCard>
	</kostya>
	<div class="flex flex-row justify-center mt-[20px] mb-[20px]">
		<div class="bg-[#A6F829] pt-[19px] pb-[19px] pl-[20px] pr-[20px] rounded-[8px]">
			<div class="text-[#000000] text-center">Use our services</div>
		</div>
	</div>
</div>
