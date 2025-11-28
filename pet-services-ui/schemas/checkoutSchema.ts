// src/schemas/checkoutSchema.ts
import { z } from 'zod';

export const checkoutSchema = z.object({
  paymentMethod: z.enum(['pix', 'credit_card'], {
    error: 'Selecione um método de pagamento.',
  }),
  // Campos do Cartão (visíveis apenas se 'credit_card' for selecionado)
  cardNumber: z.string().optional(),
  cardHolder: z.string().optional(),
  cardExpiry: z.string().optional(),
  cardCvc: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.paymentMethod === 'credit_card') {
    if (!data.cardNumber || data.cardNumber.length < 16) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Número do cartão inválido.',
        path: ['cardNumber'],
      });
    }
    // ... Adicione mais validações para os outros campos do cartão
  }
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;