import { z } from "zod";

export const acceptMessageSchema = z.object({
  isAcceptingMessaages: z.boolean(),
});
