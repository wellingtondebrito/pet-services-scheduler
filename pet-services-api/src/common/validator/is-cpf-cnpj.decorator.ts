/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment */
// Instale a biblioteca de lógica pura: npm i cpf-cnpj-validator
import { cpf, cnpj } from 'cpf-cnpj-validator';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

// 1. Defina a Lógica da Validação (Constraint)
@ValidatorConstraint({ async: false })
export class CpfCnpjConstraint implements ValidatorConstraintInterface {
  validate(document: any) {
    // Sua lógica de validação vai aqui
    // Deve retornar true ou false
    if (!document) return false;

    // Testa se é CPF (11 dígitos, ignorando formatação)
    if (document.length <= 14) {
      return cpf.isValid(document);
    }

    // Testa se é CNPJ
    return cnpj.isValid(document);
  }

  defaultMessage() {
    return 'O $property informado é inválido (CPF ou CNPJ)';
  }
}

// 2. Defina o Decorator
export function IsCpfOrCnpj(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsCpfOrCnpj',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: CpfCnpjConstraint, // <--- Aqui linkamos a lógica
    });
  };
}
