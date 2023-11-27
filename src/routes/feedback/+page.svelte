<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import ogres from '$lib/assets/characters/heroes_colored.png';
	import al from '$lib/assets/characters/slide_0.png';
	import thar from '$lib/assets/characters/slide_1.png';
	import letho from '$lib/assets/characters/slide_2.png';

	import Slide from '../feedback/Slide.svelte';

	let index = 0;

	const quotes = [
		`"To Bulwark's Valiant Defenders, Your unwavering dedication and expert protection have proven invaluable to our realm. Your commitment to excellence in security is commendable, standing as a trusted beacon in our kingdom's defense."`,
		`"By the mountain's beard, Bulwark's defense be mighty! Your watchful eye and stone-hard resolve protect our tunnels and halls. Dwarven kin commend your shielded vigilance. Stone and steel salute ye!"`,
		`"Amidst the forest's whispers, Bulwark's guardians stand resolute. Though the ways of orcs and trolls differ from ours, their vigilance protects our ancient woods. Your dedication to safeguarding our realm earns our reluctant gratitude."`
	];

	const rulers = ['King Aldric III', 'King Thrain Stonehelm IV', 'King Larethion Evergreen'];

	const images = [al, thar, letho];

	function pressLeft() {
		if (index > 0) {
			index = index - 1;
		}
	}

	function pressRight() {
		if (index < 2) {
			index = index + 1;
		}
	}
</script>

<div class="flex flex-col h-screen pl-[10%] pr-[10%]">
	<div class="font-montserrat font-normal text-[48px] mt-[90px] text-[#A6F829]">
		Trusted by the Realm's Elite
	</div>
	<div class="text-[24px]">
		At Bulwark, our dedication to unwavering protection has earned us the trust of esteemed clients
		from various domains. We take pride in safeguarding the interests of the realm's elite, ensuring
		their safety without compromise.
	</div>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="flex flex-row justify-center items-center mt-[40px]">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<caret class="border-[#A6F829] border-[3px] h-[50px] w-[50px] mr-[20px]" on:click={pressLeft}
		></caret>
		<Slide text={quotes[index]} byWhome={rulers[index]} image={images[index]} />
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<caret class="border-[#A6F829] border-[3px] h-[50px] w-[50px] ml-[20px]" on:click={pressRight}
		></caret>
	</div>
</div>
