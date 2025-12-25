import * as z from 'zod'

export const providerOnboardingSchema = z.object({
    cnpj: z.string().length(14, "O Cnpj deve ter 14 dígitos"),
    companyName: z.string(),
    phoneNumber: z.string(),
    email: z.email({message: "Formato de e-mail inválido"}),
     address: z.string().min(5, "O endereço deve ter no mínimo 5 caracteres")
        .optional(),
        city: z.string().min(3, "A cidade deve ter no mínimo 3 caracteres")
        .optional(),
        state: z.string().min(2, "O estado deve ter no mínimo 2 caracteres")
        .optional(),
        zipCode: z.string()

})

export type OnboardingProviderValues = z.infer<typeof providerOnboardingSchema>