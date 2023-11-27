<script lang="ts">
	export let text: string;
	export let byWhome: string;
	export let image: string;
</script>

<div
	class="flex flex-row w-[900px] border-[#A6F829] border-[3px] rounded-[32px] pl-[20px] pr-[20px] pt-[20px] pb-[20px]"
>
	<div class="flex flex-col">
		<div class="text-[10px] sm:text-[24px]">{text}</div>
		<div class="text-[10px] text-[#A6F829] sm:text-[24px]">- {byWhome}</div>
	</div>
	<img src={image} alt="img" class="hidden lg:block" />
</div>
