<script lang="ts">
    import {Button} from "$lib/components/ui/button";
    import ogre from "$lib/assets/characters/ogre_intro.png";
</script>

<div class="intro flex justify-center h-screen">
    <div class="flex flex-col justify-center space-y-10">
        <div class="space-y-4">
            <h1 class="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-primary">Welcome to Bulwark</h1>
            <p class="text-2xl font-normal tracking-tight max-w-prose">
                At Bulwark, we redefine security.
                Harnessing the unparalleled strength and unwavering dedication of trolls and orcs,
                we stand as the vanguard of protection in a realm of uncertainty.
            </p>
        </div>
        <div>
            <Button>
                Get Safety
            </Button>
        </div>
    </div>
    <div class="flex items-end overflow-hidden">
        <img src={ogre} alt="Bulwark ogre" class="-mb-[100px]" />
    </div>
</div>

