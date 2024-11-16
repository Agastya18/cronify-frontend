import { z } from "zod";

const formSchema = z.object({
  title: z.string(),
 url: z
    .string()
    .url({ message: "Please enter a valid URL" })
    .refine((val) => val.startsWith("https://"), {
      message: "URL must start with https://",
    }),
    // notify: z.boolean().optional(),
    // discordUrl: z
    // .string()
    // .transform((value) => (value === "" ? undefined : value))
    // .optional()
    // .refine(
    //   (val) => !val || val.startsWith("https://discord.com/api/webhooks/"),
    //   {
    //     message:
    //       "Discord URL must start with https://discord.com/api/webhooks/",
    //   }
    // ),
});

export default formSchema;