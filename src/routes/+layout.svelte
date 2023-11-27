<script lang="ts">
    import "../app.pcss";
    import Header from "./header.svelte";
</script>

<div class="layout">
    <Header />
    <main class="max-w-screen-2xl m-auto">
        <slot>

        </slot>
    </main>
</div>