// src/common/decorators/provider-id.decorator.ts

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * Decorator customizado para extrair o ID do Prestador (Provider) 
 * do objeto Request (geralmente injetado pelo JwtAuthGuard).
 * * Supondo que o ID esteja em req.user.sub ou req.user.id.
 */
export const UserId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): number => {
    // 1. Acessa o objeto Request do contexto HTTP
    const request = ctx.switchToHttp().getRequest();
    
    // 2. Extrai o ID do usuário (sub) do objeto 'user' anexado pelo Guard
    // Ajuste 'sub' para a propriedade real do seu payload JWT (ex: 'id', 'providerId', 'userId').
    const rawId = request.user?.providerId ?? request.user?.userId ?? request.user?.sub ?? request.user?.id;

    if (rawId === undefined || rawId === null) {
        // Você pode lançar um erro ou retornar null, dependendo da sua política
        throw new Error('Provider ID não encontrado no payload JWT.');
    }

    // Garante que retornamos um number (o JWT pode fornecer string)
    const userId = Number(rawId);
    if (Number.isNaN(userId)) {
      throw new Error('Provider ID no payload JWT não é um número válido.');
    }

    console.log('Provider ID extraído:', userId);
    return userId;
  },
);