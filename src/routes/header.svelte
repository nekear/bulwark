<script>
    import Navigation from "./navigation.svelte";
    import logo from "$lib/assets/logo.png";
</script>

<header class="fixed w-full backdrop-blur-lg">
    <div class="border-b relative px-[40px]">
        <img class="absolute top-1/2 -translate-y-2/4 w-[150px]" src={logo} alt="bulwark logo"/>
        <div class="flex items-center h-20 justify-end md:justify-center px-4">
            <Navigation/>
        </div>
    </div>
</header>