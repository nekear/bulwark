<script lang="ts">
    import * as Dialog from "$lib/components/ui/dialog";
    import * as AlertDialog from "$lib/components/ui/alert-dialog";
    import {Label} from "$lib/components/ui/label";
    import {Input} from "$lib/components/ui/input"
    import {Textarea} from "$lib/components/ui/textarea"
    import {Button} from "$lib/components/ui/button"
    import {buttonVariants} from "$lib/components/ui/button";

    import {formSchema, type FormTyping} from "./schema";
    import {superForm, superValidateSync} from "sveltekit-superforms/client";

    export let buttonTitle = "Open";

    let isInputModalOpen = false;
    let inputResultDialogData: FormTyping | undefined;

    const schemeValidator = superValidateSync(formSchema);

    const {form, errors, constraints, enhance} = superForm(schemeValidator, {
        SPA: true,
        validators: formSchema,
        onUpdate({form}) {
            if (form.valid){
                inputResultDialogData = form.data;
                isInputModalOpen = false;
            }
        }
    })
</script>

<!-- Main request input dialog -->
<Dialog.Root open={isInputModalOpen} onOpenChange={state => isInputModalOpen = state}>
    <Dialog.Trigger class={buttonVariants({ variant: "default" })}>
        {buttonTitle}
    </Dialog.Trigger>
    <Dialog.Content class="border-primary">
        <Dialog.Header>
            <Dialog.Title class="text-primary">Get safety! Sign contract with us!</Dialog.Title>
            <Dialog.Description>Fill out the form Click sign when you're done.</Dialog.Description>
        </Dialog.Header>
        <form method="POST" use:enhance on:submit={e => e.preventDefault()} class="space-y-5">
            <div class="space-y-2">
                <Label>Name</Label>
                <Input placeholder="John Ogre" bind:value={$form.name} {...$constraints.name}/>
                {#if $errors.name}
                    <div class="text-sm text-[#f54245]">{$errors.name}</div>
                {/if}
            </div>

            <div class="space-y-2">
                <Label>Email</Label>
                <Input placeholder="ogre@example.com" bind:value={$form.email} {...$constraints.email}/>
                {#if $errors.email}
                    <div class="text-sm text-[#f54245]">{$errors.email}</div>
                {/if}
            </div>

            <div class="space-y-2">
                <Label>Request</Label>
                <Textarea placeholder="ogre@example.com" bind:value={$form.request} {...$constraints.request}/>
                {#if $errors.request}
                    <div class="text-sm text-[#f54245]">{$errors.request}</div>
                {/if}
            </div>

            <div class="text-center mt-4">
                <Button type="submit">Submit</Button>
            </div>
        </form>
    </Dialog.Content>
</Dialog.Root>

<!-- Notifying customer about successful request applying -->
<AlertDialog.Root open={!!inputResultDialogData} onOpenChange={() => inputResultDialogData = undefined}>
    <AlertDialog.Content>
        <AlertDialog.Header>
            <AlertDialog.Title>Thank you, {inputResultDialogData?.name ?? ""}!</AlertDialog.Title>
            <AlertDialog.Description>
                We will contact you at {inputResultDialogData?.email ?? ""} as soon as possible.
            </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
            <AlertDialog.Action>Got it</AlertDialog.Action>
        </AlertDialog.Footer>
    </AlertDialog.Content>
</AlertDialog.Root>