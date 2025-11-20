import * as z from "zod";


const passwordSchema = z
  .string()
  .min(8, { message: "A senha deve ter pelo menos 8 caracteres." });

export const petOwnerRegisterSchema = z
  .object({
    email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
    password: passwordSchema,
    confirmPassword: passwordSchema,
    fullName: z
    .string()
    .min(3, { message: "O nome completo deve ter pelo menos 3 caracteres." }),
    phone: z
    .string()
    .min(10, { message: "O telefone deve ter pelo menos 10 dígitos." }),
    cpf: z.string().length(11, { message: "O CPF deve ter 11 dígitos." }),
    street: z.string().min(3, { message: "O endereço deve ter pelo menos 3 caracteres." }),
    city: z.string().min(2, { message: "A cidade deve ter pelo menos 2 caracteres." }),
    state: z.string().length(2, { message: "O estado deve ter 2 caracteres (UF)." }),
    zipCode: z.string().length(8, { message: "O CEP deve ter 8 dígitos." }),
  })
  // O método `.refine()` permite criar uma validação customizada que depende de múltiplos campos.
  // Aqui, estamos verificando se a senha e a confirmação de senha são iguais.
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"], // O 'path' indica qual campo receberá a mensagem de erro.
  });

// Schema de validação para o Prestador de Serviços.
export const serviceProviderRegisterSchema = z
  .object({
    email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  password: passwordSchema,
  confirmPassword: passwordSchema,
  fullName: z
    .string()
    .min(3, { message: "O nome completo deve ter pelo menos 3 caracteres." }),
  phone: z
    .string()
    .min(10, { message: "O telefone deve ter pelo menos 10 dígitos." }),
    serviceType: z.string({ error: "Selecione um tipo de serviço." }), // Validação para o campo de seleção.
    experienceDescription: z.string().min(10, { message: "A descrição deve ter pelo menos 10 caracteres."}),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });
