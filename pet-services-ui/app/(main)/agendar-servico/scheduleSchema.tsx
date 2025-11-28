import * as z from "zod";

// 🎯 1. O novo pet agora é opcional e pode ser nulo
const newPetSchema = z.object({ 
    name: z.string().min(2, "O nome do Pet é obrigatório."), 
    type: z.string().min(2, "O tipo/espécie do Pet é obrigatório.") 
}).optional().nullable(); 

export const scheduleFormSchema = z.object({
    serviceId: z.string().min(1, "Selecione um serviço."),
    date: z.date({ 
        error: "Selecione uma data para o agendamento." 
    }),
    timeSlot: z.string().min(1, "Selecione um horário disponível."),
    petId: z.string().optional().nullable(), // Simplificado: permite string, undefined ou null
    newPetData: newPetSchema,
})
// 🎯 2. Adicione o refine() para a validação condicional
.refine((data) => {
   const isExistingPet = !!data.petId;

   const isNewPetDataFilled = !!data.newPetData?.name && !!data.newPetData?.type;


   return isExistingPet || isNewPetDataFilled;

    
}, {
    message: "Você deve selecionar um Pet existente ou preencher os dados para adicionar um novo Pet.",
    path: ["petId"], // O erro será exibido próximo ao campo Pet
});

export type ScheduleFormValues = z.infer<typeof scheduleFormSchema>;