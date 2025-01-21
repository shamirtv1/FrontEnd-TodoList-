import z from "zod";

export const taskSchema = z.object({
    task: z.string().nonempty(),
    state: z.string().nonempty(),
    dueDate: z.date()
});

export type Task = z.infer<typeof taskSchema>;