<script lang="ts">
    import ContactUsModal from "$lib/components/premade/dialog/contact-us";
    import ogre from "$lib/assets/characters/ogre_intro.png";
    import type {FormTyping} from "$lib/components/premade/dialog/contact-us/schema";
</script>

<!-- Main introduction container -->
<div class="intro flex flex-col md:flex-row justify-center h-screen px-[20px] overflow-hidden">
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
            <ContactUsModal buttonTitle="Get Safety"/>
        </div>
    </div>
    <div class="flex items-end -mb-[400px] md:-mb-[100px]">
        <img src={ogre} alt="Bulwark ogre"/>
    </div>
</div>

