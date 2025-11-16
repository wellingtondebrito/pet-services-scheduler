// src/common/decorators/user-role.decorator.ts

import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserRole } from '@prisma/client'; // Importe seu enum de roles

export const UserRoleDecorator = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): UserRole => {
    const request = ctx.switchToHttp().getRequest();
    
    // O 'role' foi anexado ao request.user pelo JwtStrategy
    const role = request.user?.role; 



    if (!role) {
        throw new Error('Role do usuário não encontrado no token JWT.');
    }
    
    console.log('Role do usuário extraída:', role);
    return role;
  },
);