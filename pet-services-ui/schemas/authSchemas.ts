import * as z from 'zod'

const email = z.string().email("Formato de e-mail inválido")
const password = z.string().min(8, "A senha deve ter no mínimo 8 caracteres")
const fullName = z.string().min(3, "O nome deve ter no mínimo 3 caracteres")

export const cpf = z.string()
  .length(14, "O CPF deve ter 11 dígitos.") // Verifica o tamanho total (14 caracteres com pontuação)
  .regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "O CPF deve estar no formato XXX.XXX.XXX-XX");


// 🎯 CEP: Valida exatamente XXXXX-XXX
export const cep = z.string()
  .length(9, "O CEP deve ter 8 dígitos.") // Verifica o tamanho total (9 caracteres com pontuação)
  .regex(/^\d{5}\-\d{3}$/, "O CEP deve estar no formato XXXXX-XXX");


export const loginSchema = z.object({
    email,
    password
})

export const petOwnerSignUpSchema = z.object({
    email,
    password,
    confirmPassword: password,
    fullName,
    phoneNumber: z.string().length(11, "O número de telefone deve ter 11 dígitos")
    .regex(/^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$/, "O número de telefone deve conter DDD e 9 dígitos")
    .optional(),
    cpf: cpf.optional(),
    address: z.string().min(5, "O endereço deve ter no mínimo 5 caracteres")
    .optional(),
    city: z.string().min(3, "A cidade deve ter no mínimo 3 caracteres")
    .optional(),
    state: z.string().min(2, "O estado deve ter no mínimo 2 caracteres")
    .optional(),
    cep: cep.optional()
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"]
})

export const petProviderSignUpSchema = z.object({
    email,
    password,
    confirmPassword: password,
    fullName,
    phoneNumber: z.string().length(11, "O número de telefone deve ter 11 dígitos")
    .regex(/^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$/, "O número de telefone deve conter DDD e 9 dígitos")
    .optional(),
    activity: z.string().min(3, "O tipo de serviço deve ter no mínimo 3 caracteres"),
    description: z.string().min(100, "A descrição deve ter no mínimo 100 caracteres")

}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"]
})


export type LoginValues = z.infer<typeof loginSchema>
export type PetOwnerSignUpValues = z.infer<typeof petOwnerSignUpSchema>
export type PetProviderSignValues = z.infer<typeof petProviderSignUpSchema>