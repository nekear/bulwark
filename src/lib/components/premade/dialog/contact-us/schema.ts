import {z} from "zod";

export const formSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    request: z.string()
})

export type FormSchema = typeof formSchema;
export type FormTyping = z.infer<FormSchema>;