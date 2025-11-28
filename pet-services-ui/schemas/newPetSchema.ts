import { z } from 'zod';

export const newPetSchema = z.object({
  name: z.string().min(2, 'O nome do pet deve ter pelo menos 2 caracteres.'),
  type: z.enum(['DOG', 'CAT', 'BIRD', 'RODENT', 'REPTILE', 'OTHER'], {
    error: 'A espécie é obrigatória.',
  }),
  breed: z.string().min(2, 'A raça é obrigatória.'),
  age: z.string().min(1, 'A idade é obrigatória.'),
  weight: z.number().optional(),
  height: z.number().optional(),  
});

export type NewPetFormData = z.infer<typeof newPetSchema>;