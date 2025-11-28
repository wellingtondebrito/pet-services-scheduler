'use client';

import { useBookingStore } from '@/store/useBookingStore'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns'; // Importamos a biblioteca para formatar datas
import { ptBR } from 'date-fns/locale';

export function AsideConfirmation() {
  // 1. Usamos o hook do Zustand para acessar todas as partes do estado necessárias.
  // O componente "escuta" essas variáveis e renderiza novamente sempre que elas mudam.
  const { 
    companyName, 
    selectedDate, 
    selectedTime, 
    selectedPet, 
    selectedEmployee,
    selectedService
  } = useBookingStore();

   const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

 
  // 2. Formatamos a data para exibição, se ela existir.
  // Se 'selectedDate' for nulo, a variável 'formattedDate' será 'N/A'.
  const formattedDate = selectedDate 
    ? format(selectedDate, 'EEEE, dd/MM/yyyy', { locale: ptBR}) 
    : 'Aguardando a seleção de data';
    
  // 3. Busca o nome do funcionário selecionado. 
  // Em um projeto real, você buscaria esse nome em um array ou mapa de funcionários.
  const employeeName = selectedEmployee ? `Funcionário (a): ${selectedEmployee.name}` : 'Não Selecionado';

  console.log('serviço clicado', selectedService)

  return (
    // O Card com a classe 'sticky' garante que o resumo fique visível enquanto o usuário rola.
    <Card className="lg:col-span-1 h-fit sticky top-4"> 
      <CardHeader>
        <CardTitle className='text-purple-950'>Detalhes do Seu Agendamento</CardTitle>
        <CardDescription className='text-gray-700'>
          Confirme todas as suas escolhas para prosseguir para o pagamento.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Item 1: Prestador */}
        {/* Item 2: Data e Hora (Atualiza com o calendário) */}
        <div>
          <p className="text-sm text-purple-700 font-semibold">Serviço</p>
          <p className="text-sm text-gray-700">{selectedService?.name || 'Aguardando seleção do serviço'}</p>
        </div>
         <div>
          <p className="text-sm text-purple-700 font-semibold">Data</p>
          <p className="text-sm text-gray-700">{formattedDate}</p>
        </div>
        <div>
          <p className="text-sm text-purple-700 font-semibold">Horário</p>
          {/* Mostra 'selectedTime' ou um texto de instrução */}
          <p className="text-sm font-medium text-gray-700">{selectedTime || 'Aguardando seleção do horário'}</p>
        </div>

        {/* Item 3: Pet (Atualiza com o PetSelectionStep) */}
        <div>
          <p className="text-sm text-purple-700 font-semibold">Pet para Atendimento</p>
          <p className="text-sm text-gray-700">{selectedPet?.name || 'Aguardando seleção do pet'}</p>
        </div>
        
        {/* Item 4: Funcionário (Atualiza com o EmployeeSelectionStep) */}
        <div>
          <p className="text-sm text-purple-700 font-semibold">Profissional Escolhido</p>
          <p className="text-sm text-gray-700">{selectedEmployee ? employeeName : 'Aguardando seleção do funcionário'}</p>
        </div>

        <div className="pt-4 border-t">
          <p className="text-lg font-bold text-purple-700">{selectedService ? `Total: ${formatCurrency(selectedService.price)}` : 'Aguardando seleção do serviço'}</p>
        </div>
      </CardContent>
    </Card>
  );
}