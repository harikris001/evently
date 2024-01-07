import * as z from "zod";

export const eventFormSchema = z.object({
    title: z.string().min(5, {
      message: "Title must be atleast 5 Characters",
    }),
    description: z.string().min(5,{
        message: "Description must be atleast 5 Characters"
    }).max(400,{
        message: "Description must be less than 400 Characters."
    }),
    location: z.string().min(3,'Location must be atleast 3 charcters'),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url(),
  });