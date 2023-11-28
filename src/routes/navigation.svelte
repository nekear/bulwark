<script lang="ts">
	import '../app.pcss';
	import { cn } from '$lib/utils';
	import { page } from '$app/stores';

	$: routeId = $page.route.id;
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<nav class={cn('flex items-center space-x-4 lg:space-x-6', className)}>
	<a
		href="/"
		class=" text-[{routeId === '/'
			? '#FFFFFF'
			: '#535353'}] font-medium transition-colors hover:text-primary"
	>
		Home
	</a>

	<a
		href="/services"
		class=" text-[{routeId === '/services'
			? '#FFFFFF'
			: '#535353'}] font-medium transition-colors hover:text-primary"
	>
		Services
	</a>

	<a
		href="/feedback"
		class="text-[{routeId === '/feedback'
			? '#FFFFFF'
			: '#535353'}] font-medium transition-colors hover:text-primary"
	>
		Feedback
	</a>
</nav>
