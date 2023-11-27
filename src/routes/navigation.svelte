<script lang="ts">
    import "../app.pcss";
    import {cn} from "$lib/utils";

    let className: string | undefined | null = undefined;
    export {className as class};
</script>

<nav class={cn("flex items-center space-x-4 lg:space-x-6", className)}>
    <a href="/" class="text-md font-medium transition-colors hover:text-primary">
        Home
    </a>

    <a href="/services" class="text-md font-medium text-muted-foreground transition-colors hover:text-primary">
        About
    </a>

    <a href="/services" class="text-md font-medium text-muted-foreground transition-colors hover:text-primary">
        Services
    </a>

    <a href="/services" class="text-md font-medium text-muted-foreground transition-colors hover:text-primary">
        Feedback
    </a>

    <a href="/services" class="text-md font-medium text-muted-foreground transition-colors hover:text-primary">
        Contact us
    </a>
</nav>