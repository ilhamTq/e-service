import { z } from "zod";

export const UserSchema = z
  .object({
    user_id: z.number().optional(),
    user_nama: z.string().min(5),
    user_nip: z.string(),
    user_email: z.string(),
    user_hp: z.string({
      required_error: "No HP is required",
    }),
    user_alamat: z.string({
      required_error: "alamat is required",
    }),
    user_name: z
      .string({
        required_error: "username is required",
      })
      .min(5, { message: "Minimal 5 character" }),
    user_pass: z
      .string({
        required_error: "password is required",
      })
      .min(5, { message: "Minimal 5 character" }),
    confirm_password: z.string(),
  })
  .superRefine(({ confirm_password, user_pass }, ctx) => {
    if (confirm_password != user_pass) {
      ctx.addIssue({
        code: "custom",
        message: "The password did not match",
        path: ["confirm_password"],
      });
    }
  });

export const UserEditSchema = z
  .object({
    user_id: z.number().optional(),
    user_nama: z.string().min(5),
    user_nip: z.string(),
    user_email: z.string(),
    user_hp: z.string({
      required_error: "No HP is required",
    }),
    user_alamat: z.string({
      required_error: "alamat is required",
    }),
    user_name: z
      .string({
        required_error: "username is required",
      })
      .min(5, { message: "Minimal 5 character" }),
    user_pass: z
      .string({
        required_error: "password is required",
      })
      .min(5, { message: "Minimal 5 character" }),
    confirm_password: z.string(),
  })
  .superRefine(({ confirm_password, user_pass }, ctx) => {
    if (confirm_password != user_pass) {
      ctx.addIssue({
        code: "custom",
        message: "The password did not match",
        path: ["confirm_password"],
      });
    }
  });
