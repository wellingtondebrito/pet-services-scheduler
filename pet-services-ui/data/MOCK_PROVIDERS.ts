import { Provider } from "./mock-providers";

// A lista completa de 100 prestadores deve ser exportada como:

export const MOCK_PROVIDERS: Provider[] = [
  {
    "id": 1,
    "nameResponsavel": "Carlos Eduardo",
    "companyName": "Pet Feliz Passeador",
    "avatarProvider": "https://i.pravatar.cc/150?img=501",
    "averagePrice": 33,
    "services": [
      {
        "name": "Banho e Tosa Completo",
        "price": 69,
        "duration": "2h"
      },
      {
        "name": "Passeio 1h",
        "price": 49,
        "duration": "1h"
      },
      {
        "name": "Passeio 1h",
        "price": 33,
        "duration": "1h"
      }
    ],
    "coordinates": {
      "latitude": -20.1773,
      "longitude": -45.6475
    },
    "rating": 4.6,
    "reviews": [
      {
        "name": "Roberto Alves",
        "avatar": "https://i.pravatar.cc/150?img=100",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.8
      },
      {
        "name": "Felipe Santos",
        "avatar": "https://i.pravatar.cc/150?img=101",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.7
      },
      {
        "name": "Juliana Lima",
        "avatar": "https://i.pravatar.cc/150?img=102",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.1
      },
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=103",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.9
      },
      {
        "name": "Ana Beatriz",
        "avatar": "https://i.pravatar.cc/150?img=104",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.4
      }
    ],
    "subscriptionPlans": [
      {
        "planName": "Premium Trimestral",
        "value": "R$168.00/mês",
        "services": "Inclui 2 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em tosa e Prioridade no agendamento."
      }
    ],
    "address": {
      "neighborhood": "Centro",
      "city": "Joinville",
      "state": "SC",
      "zip": "89201-302",
      "complement": "Sala 65",
      "number": 1791
    },
    "providerType": "Passeador",
    "cnpj": "79.091.823/8793-34",
    "gallery": [
      "https://picsum.photos/seed/1/600/400",
      "https://picsum.photos/seed/2/600/400",
      "https://picsum.photos/seed/3/600/400",
      "https://picsum.photos/seed/4/600/400",
      "https://picsum.photos/seed/5/600/400",
      "https://picsum.photos/seed/6/600/400",
      "https://picsum.photos/seed/7/600/400",
      "https://picsum.photos/seed/8/600/400",
      "https://picsum.photos/seed/9/600/400",
      "https://picsum.photos/seed/10/600/400"
    ],
    "achievements": [
      "Líder em Passeador"
    ],
    "description": "O Au Au Club é um espaço dedicado ao bem-estar animal, oferecendo serviços de Banho e Tosa Completo e Passeio 1h. Nossa missão é garantir a felicidade e saúde do seu melhor amigo.",
    "skills": [
      "Comportamento Animal",
      "Gerenciamento de Estresse",
      "Primeiros Socorros"
    ],
    "spaceFeatures": [
      "Ambiente climatizado",
      "Vigilância 24h",
      "Não possui crianças",
      "Sistema anti-fuga"
    ],
    "availability": {
      "available": [
        "2025-11-23",
        "2025-11-24",
        "2025-11-26",
        "2025-11-27",
        "2025-11-28",
        "2025-11-29",
        "2025-11-30",
        "2025-12-02",
        "2025-12-03",
        "2025-12-04",
        "2025-12-06",
        "2025-12-07",
        "2025-12-08",
        "2025-12-09",
        "2025-12-10",
        "2025-12-11",
        "2025-12-12",
        "2025-12-13",
        "2025-12-14",
        "2025-12-16",
        "2025-12-18",
        "2025-12-19",
        "2025-12-20",
        "2025-12-21"
      ],
      "unavailable": [
        "2025-11-25",
        "2025-12-01",
        "2025-12-05",
        "2025-12-15",
        "2025-12-17",
        "2025-12-22"
      ]
    },
    "preferences": {
      "servicePreferences": "Prioridade em atividades ao ar livre",
      "petSizes": [
        "Pequeno"
      ],
      "acceptsCats": false
    }
  },
  {
    "id": 2,
    "nameResponsavel": "Felipe Santos",
    "companyName": "Pet Feliz Creche",
    "avatarProvider": "https://i.pravatar.cc/150?img=502",
    "averagePrice": 48,
    "services": [
      {
        "name": "Adestramento Básico (Sessão)",
        "price": 254,
        "duration": "1h 30m"
      },
      {
        "name": "Banho e Tosa Completo",
        "price": 75,
        "duration": "2h"
      },
      {
        "name": "Diária de Creche",
        "price": 48,
        "duration": "8h"
      },
      {
        "name": "Hospedagem Noturna",
        "price": 161,
        "duration": "24h"
      }
    ],
    "coordinates": {
      "latitude": -24.7158,
      "longitude": -51.9234
    },
    "rating": 4.7,
    "reviews": [
      {
        "name": "Mariana Costa",
        "avatar": "https://i.pravatar.cc/150?img=200",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 5
      },
      {
        "name": "Juliana Lima",
        "avatar": "https://i.pravatar.cc/150?img=201",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.3
      },
      {
        "name": "Ana Beatriz",
        "avatar": "https://i.pravatar.cc/150?img=202",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.9
      },
      {
        "name": "Juliana Lima",
        "avatar": "https://i.pravatar.cc/150?img=203",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.3
      },
      {
        "name": "Roberto Alves",
        "avatar": "https://i.pravatar.cc/150?img=204",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.6
      },
      {
        "name": "Juliana Lima",
        "avatar": "https://i.pravatar.cc/150?img=205",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 5
      }
    ],
    "subscriptionPlans": [
      {
        "planName": "Daycare Ilimitado",
        "value": "R$158.00/mês",
        "services": "Inclui 4 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em tosa e Prioridade no agendamento."
      }
    ],
    "address": {
      "neighborhood": "Ipanema",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "zip": "22010-973",
      "complement": "Sala 38",
      "number": 211
    },
    "providerType": "Creche",
    "cnpj": "30.977.552/5663-09",
    "gallery": [
      "https://picsum.photos/seed/2/600/400",
      "https://picsum.photos/seed/3/600/400",
      "https://picsum.photos/seed/4/600/400",
      "https://picsum.photos/seed/5/600/400",
      "https://picsum.photos/seed/6/600/400",
      "https://picsum.photos/seed/7/600/400",
      "https://picsum.photos/seed/8/600/400",
      "https://picsum.photos/seed/9/600/400",
      "https://picsum.photos/seed/10/600/400",
      "https://picsum.photos/seed/11/600/400"
    ],
    "achievements": [
      "Certificado de Excelência em Creche",
      "Certificado de Excelência em Creche"
    ],
    "description": "O Veterinária Viva é um espaço dedicado ao bem-estar animal, oferecendo serviços de Adestramento Básico (Sessão) e Banho e Tosa Completo. Nossa missão é garantir a felicidade e saúde do seu melhor amigo.",
    "skills": [
      "Comportamento Animal",
      "Adestramento Positivo",
      "Primeiros Socorros",
      "Adestramento Positivo"
    ],
    "spaceFeatures": [
      "Não possui crianças",
      "Aceita pets com necessidades especiais"
    ],
    "availability": {
      "available": [
        "2025-11-24",
        "2025-11-25",
        "2025-11-28",
        "2025-11-29",
        "2025-12-01",
        "2025-12-02",
        "2025-12-03",
        "2025-12-04",
        "2025-12-06",
        "2025-12-07",
        "2025-12-09",
        "2025-12-11",
        "2025-12-12",
        "2025-12-13",
        "2025-12-14",
        "2025-12-15",
        "2025-12-17",
        "2025-12-18",
        "2025-12-19",
        "2025-12-21",
        "2025-12-22"
      ],
      "unavailable": [
        "2025-11-23",
        "2025-11-26",
        "2025-11-27",
        "2025-11-30",
        "2025-12-05",
        "2025-12-08",
        "2025-12-10",
        "2025-12-16",
        "2025-12-20"
      ]
    },
    "preferences": {
      "servicePreferences": "Foco em higiene e prevenção",
      "petSizes": [
        "Médio",
        "Gigante"
      ],
      "acceptsCats": true
    }
  },
  {
    "id": 3,
    "nameResponsavel": "Juliana Lima",
    "companyName": "Pet Feliz Pet Sitter",
    "avatarProvider": "https://i.pravatar.cc/150?img=503",
    "averagePrice": 103,
    "services": [
      {
        "name": "Adestramento Básico (Sessão)",
        "price": 103,
        "duration": "1h 30m"
      },
      {
        "name": "Banho e Tosa Completo",
        "price": 140,
        "duration": "2h"
      },
      {
        "name": "Hospedagem Noturna",
        "price": 118,
        "duration": "24h"
      }
    ],
    "coordinates": {
      "latitude": -22.7009,
      "longitude": -47.6249
    },
    "rating": 4.5,
    "reviews": [
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=300",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.4
      },
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=301",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.7
      },
      {
        "name": "Roberto Alves",
        "avatar": "https://i.pravatar.cc/150?img=302",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.2
      },
      {
        "name": "Ana Beatriz",
        "avatar": "https://i.pravatar.cc/150?img=303",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.6
      },
      {
        "name": "Juliana Lima",
        "avatar": "https://i.pravatar.cc/150?img=304",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.9
      },
      {
        "name": "Ana Beatriz",
        "avatar": "https://i.pravatar.cc/150?img=305",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.1
      }
    ],
    "subscriptionPlans": [
      {
        "planName": "Básico Mensal",
        "value": "R$312.00/mês",
        "services": "Inclui 2 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em tosa e Prioridade no agendamento."
      },
      {
        "planName": "Daycare Ilimitado",
        "value": "R$129.00/mês",
        "services": "Inclui 3 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em vacinas e Prioridade no agendamento."
      },
      {
        "planName": "Premium Trimestral",
        "value": "R$497.00/mês",
        "services": "Inclui 3 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em tosa e Prioridade no agendamento."
      }
    ],
    "address": {
      "neighborhood": "Batel",
      "city": "Curitiba",
      "state": "PR",
      "zip": "80010-276",
      "complement": "Sala 44",
      "number": 1822
    },
    "providerType": "Pet Sitter",
    "cnpj": "58.735.151/1270-14",
    "gallery": [
      "https://picsum.photos/seed/3/600/400",
      "https://picsum.photos/seed/4/600/400",
      "https://picsum.photos/seed/5/600/400",
      "https://picsum.photos/seed/6/600/400",
      "https://picsum.photos/seed/7/600/400",
      "https://picsum.photos/seed/8/600/400",
      "https://picsum.photos/seed/9/600/400",
      "https://picsum.photos/seed/10/600/400"
    ],
    "achievements": [
      "Melhor Avaliado em Pet Sitter"
    ],
    "description": "O Amigo Fiel Petcare é um espaço dedicado ao bem-estar animal, oferecendo serviços de Adestramento Básico (Sessão) e Banho e Tosa Completo. Nossa missão é garantir a felicidade e saúde do seu melhor amigo.",
    "skills": [
      "Gerenciamento de Estresse",
      "Gerenciamento de Estresse",
      "Cuidados Pós-Cirúrgicos"
    ],
    "spaceFeatures": [
      "Não possui crianças",
      "Área externa ampla",
      "Ambiente climatizado",
      "Não possui crianças"
    ],
    "availability": {
      "available": [
        "2025-11-23",
        "2025-11-24",
        "2025-11-25",
        "2025-11-26",
        "2025-11-28",
        "2025-11-29",
        "2025-11-30",
        "2025-12-01",
        "2025-12-02",
        "2025-12-03",
        "2025-12-04",
        "2025-12-06",
        "2025-12-07",
        "2025-12-08",
        "2025-12-09",
        "2025-12-10",
        "2025-12-11",
        "2025-12-12",
        "2025-12-13",
        "2025-12-15",
        "2025-12-16",
        "2025-12-17",
        "2025-12-18",
        "2025-12-19",
        "2025-12-20",
        "2025-12-21",
        "2025-12-22"
      ],
      "unavailable": [
        "2025-11-27",
        "2025-12-05",
        "2025-12-14"
      ]
    },
    "preferences": {
      "servicePreferences": "Foco em higiene e prevenção",
      "petSizes": [
        "Médio"
      ],
      "acceptsCats": false
    }
  },
  {
    "id": 4,
    "nameResponsavel": "Carlos Eduardo",
    "companyName": "Au Au Club Pet Shop",
    "avatarProvider": "https://i.pravatar.cc/150?img=504",
    "averagePrice": 160,
    "services": [
      {
        "name": "Consulta Veterinária Rotina",
        "price": 238,
        "duration": "45m"
      },
      {
        "name": "Hospedagem Noturna",
        "price": 160,
        "duration": "24h"
      }
    ],
    "coordinates": {
      "latitude": -19.6321,
      "longitude": -50.3123
    },
    "rating": 4.8,
    "reviews": [
      {
        "name": "Felipe Santos",
        "avatar": "https://i.pravatar.cc/150?img=400",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.8
      },
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=401",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.6
      },
      {
        "name": "Mariana Costa",
        "avatar": "https://i.pravatar.cc/150?img=402",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.9
      },
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=403",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.7
      },
      {
        "name": "Roberto Alves",
        "avatar": "https://i.pravatar.cc/150?img=404",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.7
      },
      {
        "name": "Ana Beatriz",
        "avatar": "https://i.pravatar.cc/150?img=405",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.8
      }
    ],
    "subscriptionPlans": [
      {
        "planName": "Daycare Ilimitado",
        "value": "R$415.00/mês",
        "services": "Inclui 2 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em vacinas e Prioridade no agendamento."
      },
      {
        "planName": "Básico Mensal",
        "value": "R$286.00/mês",
        "services": "Inclui 3 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em vacinas e Prioridade no agendamento."
      },
      {
        "planName": "Daycare Ilimitado",
        "value": "R$275.00/mês",
        "services": "Inclui 2 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em vacinas e Prioridade no agendamento."
      }
    ],
    "address": {
      "neighborhood": "Pinheiros",
      "city": "São Paulo",
      "state": "SP",
      "zip": "01001-708",
      "complement": "Sala 15",
      "number": 1991
    },
    "providerType": "Pet Shop",
    "cnpj": "10.720.946/2141-38",
    "gallery": [
      "https://picsum.photos/seed/4/600/400",
      "https://picsum.photos/seed/5/600/400",
      "https://picsum.photos/seed/6/600/400",
      "https://picsum.photos/seed/7/600/400",
      "https://picsum.photos/seed/8/600/400"
    ],
    "achievements": [
      "Certificado de Excelência em Pet Shop",
      "Líder em Pet Shop"
    ],
    "description": "O Veterinária Viva é um espaço dedicado ao bem-estar animal, oferecendo serviços de Consulta Veterinária Rotina e Hospedagem Noturna. Nossa missão é garantir a felicidade e saúde do seu melhor amigo.",
    "skills": [
      "Cuidados Pós-Cirúrgicos",
      "Cuidados Pós-Cirúrgicos",
      "Comportamento Animal"
    ],
    "spaceFeatures": [
      "Área externa ampla",
      "Área externa ampla"
    ],
    "availability": {
      "available": [
        "2025-11-23",
        "2025-11-24",
        "2025-11-25",
        "2025-11-26",
        "2025-11-27",
        "2025-11-28",
        "2025-11-29",
        "2025-11-30",
        "2025-12-01",
        "2025-12-03",
        "2025-12-04",
        "2025-12-05",
        "2025-12-06",
        "2025-12-07",
        "2025-12-09",
        "2025-12-10",
        "2025-12-11",
        "2025-12-12",
        "2025-12-13",
        "2025-12-15",
        "2025-12-16",
        "2025-12-17",
        "2025-12-18",
        "2025-12-19",
        "2025-12-20",
        "2025-12-21"
      ],
      "unavailable": [
        "2025-12-02",
        "2025-12-08",
        "2025-12-14",
        "2025-12-22"
      ]
    },
    "preferences": {
      "servicePreferences": "Foco em higiene e prevenção",
      "petSizes": [
        "Gigante"
      ],
      "acceptsCats": false
    }
  },
  {
    "id": 5,
    "nameResponsavel": "Felipe Santos",
    "companyName": "Amigo Fiel Petcare Adestramento",
    "avatarProvider": "https://i.pravatar.cc/150?img=505",
    "averagePrice": 50,
    "services": [
      {
        "name": "Hospedagem Noturna",
        "price": 79,
        "duration": "24h"
      },
      {
        "name": "Diária de Creche",
        "price": 64,
        "duration": "8h"
      },
      {
        "name": "Consulta Veterinária Rotina",
        "price": 153,
        "duration": "45m"
      },
      {
        "name": "Passeio 1h",
        "price": 50,
        "duration": "1h"
      }
    ],
    "coordinates": {
      "latitude": -25.3009,
      "longitude": -52.2487
    },
    "rating": 4.5,
    "reviews": [
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=500",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.7
      },
      {
        "name": "Ana Beatriz",
        "avatar": "https://i.pravatar.cc/150?img=501",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.7
      },
      {
        "name": "Ana Beatriz",
        "avatar": "https://i.pravatar.cc/150?img=502",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.3
      },
      {
        "name": "Mariana Costa",
        "avatar": "https://i.pravatar.cc/150?img=503",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.8
      },
      {
        "name": "Roberto Alves",
        "avatar": "https://i.pravatar.cc/150?img=504",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.3
      },
      {
        "name": "Felipe Santos",
        "avatar": "https://i.pravatar.cc/150?img=505",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.5
      },
      {
        "name": "Felipe Santos",
        "avatar": "https://i.pravatar.cc/150?img=506",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.3
      },
      {
        "name": "Felipe Santos",
        "avatar": "https://i.pravatar.cc/150?img=507",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.4
      }
    ],
    "subscriptionPlans": [
      {
        "planName": "Daycare Ilimitado",
        "value": "R$315.00/mês",
        "services": "Inclui 5 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em tosa e Prioridade no agendamento."
      }
    ],
    "address": {
      "neighborhood": "Córrego Grande",
      "city": "Florianópolis",
      "state": "SC",
      "zip": "88010-095",
      "complement": "Sala 44",
      "number": 1717
    },
    "providerType": "Adestramento",
    "cnpj": "78.237.716/4172-95",
    "gallery": [
      "https://picsum.photos/seed/5/600/400",
      "https://picsum.photos/seed/6/600/400",
      "https://picsum.photos/seed/7/600/400",
      "https://picsum.photos/seed/8/600/400",
      "https://picsum.photos/seed/9/600/400",
      "https://picsum.photos/seed/10/600/400",
      "https://picsum.photos/seed/11/600/400",
      "https://picsum.photos/seed/12/600/400",
      "https://picsum.photos/seed/13/600/400"
    ],
    "achievements": [
      "Certificado de Excelência em Adestramento",
      "Líder em Adestramento"
    ],
    "description": "O Amigo Fiel Petcare é um espaço dedicado ao bem-estar animal, oferecendo serviços de Hospedagem Noturna e Diária de Creche. Nossa missão é garantir a felicidade e saúde do seu melhor amigo.",
    "skills": [
      "Gerenciamento de Estresse",
      "Gerenciamento de Estresse",
      "Primeiros Socorros",
      "Cuidados Pós-Cirúrgicos"
    ],
    "spaceFeatures": [
      "Vigilância 24h",
      "Aceita pets com necessidades especiais",
      "Aceita pets com necessidades especiais",
      "Ambiente climatizado"
    ],
    "availability": {
      "available": [
        "2025-11-23",
        "2025-11-25",
        "2025-11-26",
        "2025-11-28",
        "2025-11-29",
        "2025-11-30",
        "2025-12-01",
        "2025-12-02",
        "2025-12-03",
        "2025-12-04",
        "2025-12-05",
        "2025-12-06",
        "2025-12-07",
        "2025-12-08",
        "2025-12-11",
        "2025-12-13",
        "2025-12-14",
        "2025-12-15",
        "2025-12-16",
        "2025-12-17",
        "2025-12-20",
        "2025-12-21"
      ],
      "unavailable": [
        "2025-11-24",
        "2025-11-27",
        "2025-12-09",
        "2025-12-10",
        "2025-12-12",
        "2025-12-18",
        "2025-12-19",
        "2025-12-22"
      ]
    },
    "preferences": {
      "servicePreferences": "Foco em higiene e prevenção",
      "petSizes": [
        "Pequeno",
        "Pequeno"
      ],
      "acceptsCats": false
    }
  },
  {
    "id": 6,
    "nameResponsavel": "Carlos Eduardo",
    "companyName": "Amigo Fiel Petcare Veterinária",
    "avatarProvider": "https://i.pravatar.cc/150?img=506",
    "averagePrice": 44,
    "services": [
      {
        "name": "Diária de Creche",
        "price": 44,
        "duration": "8h"
      },
      {
        "name": "Adestramento Básico (Sessão)",
        "price": 190,
        "duration": "1h 30m"
      },
      {
        "name": "Hospedagem Noturna",
        "price": 103,
        "duration": "24h"
      }
    ],
    "coordinates": {
      "latitude": -19.7383,
      "longitude": -51.5762
    },
    "rating": 4.5,
    "reviews": [
      {
        "name": "Mariana Costa",
        "avatar": "https://i.pravatar.cc/150?img=600",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.2
      },
      {
        "name": "Roberto Alves",
        "avatar": "https://i.pravatar.cc/150?img=601",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.5
      },
      {
        "name": "Mariana Costa",
        "avatar": "https://i.pravatar.cc/150?img=602",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.3
      },
      {
        "name": "Felipe Santos",
        "avatar": "https://i.pravatar.cc/150?img=603",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 5
      }
    ],
    "subscriptionPlans": [
      {
        "planName": "Premium Trimestral",
        "value": "R$420.00/mês",
        "services": "Inclui 5 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em vacinas e Prioridade no agendamento."
      }
    ],
    "address": {
      "neighborhood": "Saguaçu",
      "city": "Joinville",
      "state": "SC",
      "zip": "89201-094",
      "complement": "Sala 49",
      "number": 1289
    },
    "providerType": "Veterinária",
    "cnpj": "45.288.820/0720-94",
    "gallery": [
      "https://picsum.photos/seed/6/600/400",
      "https://picsum.photos/seed/7/600/400",
      "https://picsum.photos/seed/8/600/400",
      "https://picsum.photos/seed/9/600/400",
      "https://picsum.photos/seed/10/600/400"
    ],
    "achievements": [
      "Certificado de Excelência em Veterinária",
      "Certificado de Excelência em Veterinária"
    ],
    "description": "O Pelo Saudável é um espaço dedicado ao bem-estar animal, oferecendo serviços de Diária de Creche e Adestramento Básico (Sessão). Nossa missão é garantir a felicidade e saúde do seu melhor amigo.",
    "skills": [
      "Comportamento Animal",
      "Adestramento Positivo",
      "Cuidados Pós-Cirúrgicos"
    ],
    "spaceFeatures": [
      "Aceita pets com necessidades especiais",
      "Área externa ampla"
    ],
    "availability": {
      "available": [
        "2025-11-23",
        "2025-11-24",
        "2025-11-26",
        "2025-11-27",
        "2025-11-29",
        "2025-11-30",
        "2025-12-01",
        "2025-12-02",
        "2025-12-03",
        "2025-12-05",
        "2025-12-06",
        "2025-12-07",
        "2025-12-09",
        "2025-12-10",
        "2025-12-11",
        "2025-12-12",
        "2025-12-13",
        "2025-12-14",
        "2025-12-15",
        "2025-12-17",
        "2025-12-18",
        "2025-12-20",
        "2025-12-21",
        "2025-12-22"
      ],
      "unavailable": [
        "2025-11-25",
        "2025-11-28",
        "2025-12-04",
        "2025-12-08",
        "2025-12-16",
        "2025-12-19"
      ]
    },
    "preferences": {
      "servicePreferences": "Foco em higiene e prevenção",
      "petSizes": [
        "Médio",
        "Grande"
      ],
      "acceptsCats": true
    }
  },
  {
    "id": 7,
    "nameResponsavel": "Carlos Eduardo",
    "companyName": "Veterinária Viva Pet Sitter",
    "avatarProvider": "https://i.pravatar.cc/150?img=507",
    "averagePrice": 54,
    "services": [
      {
        "name": "Diária de Creche",
        "price": 56,
        "duration": "8h"
      },
      {
        "name": "Diária de Creche",
        "price": 54,
        "duration": "8h"
      },
      {
        "name": "Adestramento Básico (Sessão)",
        "price": 180,
        "duration": "1h 30m"
      }
    ],
    "coordinates": {
      "latitude": -25.0418,
      "longitude": -45.2837
    },
    "rating": 4.6,
    "reviews": [
      {
        "name": "Mariana Costa",
        "avatar": "https://i.pravatar.cc/150?img=700",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.9
      },
      {
        "name": "Felipe Santos",
        "avatar": "https://i.pravatar.cc/150?img=701",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.2
      },
      {
        "name": "Ana Beatriz",
        "avatar": "https://i.pravatar.cc/150?img=702",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.3
      },
      {
        "name": "Felipe Santos",
        "avatar": "https://i.pravatar.cc/150?img=703",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 5
      },
      {
        "name": "Juliana Lima",
        "avatar": "https://i.pravatar.cc/150?img=704",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.6
      },
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=705",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.8
      },
      {
        "name": "Ana Beatriz",
        "avatar": "https://i.pravatar.cc/150?img=706",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.5
      },
      {
        "name": "Felipe Santos",
        "avatar": "https://i.pravatar.cc/150?img=707",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.2
      }
    ],
    "subscriptionPlans": [
      {
        "planName": "Daycare Ilimitado",
        "value": "R$481.00/mês",
        "services": "Inclui 5 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em vacinas e Prioridade no agendamento."
      }
    ],
    "address": {
      "neighborhood": "Ipanema",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "zip": "22010-447",
      "complement": "Sala 63",
      "number": 631
    },
    "providerType": "Pet Sitter",
    "cnpj": "01.890.894/9149-45",
    "gallery": [
      "https://picsum.photos/seed/7/600/400",
      "https://picsum.photos/seed/8/600/400",
      "https://picsum.photos/seed/9/600/400",
      "https://picsum.photos/seed/10/600/400",
      "https://picsum.photos/seed/11/600/400",
      "https://picsum.photos/seed/12/600/400",
      "https://picsum.photos/seed/13/600/400"
    ],
    "achievements": [
      "Melhor Avaliado em Pet Sitter"
    ],
    "description": "O Veterinária Viva é um espaço dedicado ao bem-estar animal, oferecendo serviços de Diária de Creche e Diária de Creche. Nossa missão é garantir a felicidade e saúde do seu melhor amigo.",
    "skills": [
      "Cuidados Pós-Cirúrgicos",
      "Comportamento Animal",
      "Comportamento Animal"
    ],
    "spaceFeatures": [
      "Aceita pets com necessidades especiais",
      "Sistema anti-fuga",
      "Não possui crianças"
    ],
    "availability": {
      "available": [
        "2025-11-23",
        "2025-11-24",
        "2025-11-25",
        "2025-11-26",
        "2025-11-27",
        "2025-11-29",
        "2025-12-01",
        "2025-12-02",
        "2025-12-03",
        "2025-12-04",
        "2025-12-05",
        "2025-12-06",
        "2025-12-07",
        "2025-12-08",
        "2025-12-09",
        "2025-12-10",
        "2025-12-11",
        "2025-12-12",
        "2025-12-13",
        "2025-12-15",
        "2025-12-16",
        "2025-12-17",
        "2025-12-18",
        "2025-12-19",
        "2025-12-20",
        "2025-12-21",
        "2025-12-22"
      ],
      "unavailable": [
        "2025-11-28",
        "2025-11-30",
        "2025-12-14"
      ]
    },
    "preferences": {
      "servicePreferences": "Foco em higiene e prevenção",
      "petSizes": [
        "Grande",
        "Pequeno",
        "Gigante"
      ],
      "acceptsCats": false
    }
  },
  {
    "id": 8,
    "nameResponsavel": "Carlos Eduardo",
    "companyName": "Amigo Fiel Petcare Passeador",
    "avatarProvider": "https://i.pravatar.cc/150?img=508",
    "averagePrice": 72,
    "services": [
      {
        "name": "Hospedagem Noturna",
        "price": 72,
        "duration": "24h"
      },
      {
        "name": "Adestramento Básico (Sessão)",
        "price": 159,
        "duration": "1h 30m"
      }
    ],
    "coordinates": {
      "latitude": -23.9054,
      "longitude": -50.4523
    },
    "rating": 4.4,
    "reviews": [
      {
        "name": "Mariana Costa",
        "avatar": "https://i.pravatar.cc/150?img=800",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.5
      },
      {
        "name": "Felipe Santos",
        "avatar": "https://i.pravatar.cc/150?img=801",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.3
      },
      {
        "name": "Mariana Costa",
        "avatar": "https://i.pravatar.cc/150?img=802",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4
      },
      {
        "name": "Roberto Alves",
        "avatar": "https://i.pravatar.cc/150?img=803",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.5
      },
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=804",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.7
      }
    ],
    "subscriptionPlans": [
      {
        "planName": "Fidelidade Anual",
        "value": "R$357.00/mês",
        "services": "Inclui 3 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em vacinas e Prioridade no agendamento."
      },
      {
        "planName": "Premium Trimestral",
        "value": "R$260.00/mês",
        "services": "Inclui 5 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em vacinas e Prioridade no agendamento."
      }
    ],
    "address": {
      "neighborhood": "Centro Cívico",
      "city": "Curitiba",
      "state": "PR",
      "zip": "80010-623",
      "complement": "Sala 12",
      "number": 578
    },
    "providerType": "Passeador",
    "cnpj": "35.164.648/3502-92",
    "gallery": [
      "https://picsum.photos/seed/8/600/400",
      "https://picsum.photos/seed/9/600/400",
      "https://picsum.photos/seed/10/600/400",
      "https://picsum.photos/seed/11/600/400",
      "https://picsum.photos/seed/12/600/400",
      "https://picsum.photos/seed/13/600/400",
      "https://picsum.photos/seed/14/600/400",
      "https://picsum.photos/seed/15/600/400"
    ],
    "achievements": [
      "Parceiro Verificado em Passeador",
      "Parceiro Verificado em Passeador"
    ],
    "description": "O Veterinária Viva é um espaço dedicado ao bem-estar animal, oferecendo serviços de Hospedagem Noturna e Adestramento Básico (Sessão). Nossa missão é garantir a felicidade e saúde do seu melhor amigo.",
    "skills": [
      "Cuidados Pós-Cirúrgicos",
      "Cuidados Pós-Cirúrgicos",
      "Cuidados Pós-Cirúrgicos"
    ],
    "spaceFeatures": [
      "Área de banho separada",
      "Ambiente climatizado",
      "Aceita pets com necessidades especiais"
    ],
    "availability": {
      "available": [
        "2025-11-24",
        "2025-11-25",
        "2025-11-26",
        "2025-11-27",
        "2025-11-28",
        "2025-12-01",
        "2025-12-02",
        "2025-12-04",
        "2025-12-06",
        "2025-12-07",
        "2025-12-08",
        "2025-12-09",
        "2025-12-14",
        "2025-12-15",
        "2025-12-16",
        "2025-12-18",
        "2025-12-19",
        "2025-12-20",
        "2025-12-22"
      ],
      "unavailable": [
        "2025-11-23",
        "2025-11-29",
        "2025-11-30",
        "2025-12-03",
        "2025-12-05",
        "2025-12-10",
        "2025-12-11",
        "2025-12-12",
        "2025-12-13",
        "2025-12-17",
        "2025-12-21"
      ]
    },
    "preferences": {
      "servicePreferences": "Prioridade em atividades ao ar livre",
      "petSizes": [
        "Pequeno",
        "Pequeno",
        "Gigante"
      ],
      "acceptsCats": true
    }
  },
  {
    "id": 9,
    "nameResponsavel": "Roberto Alves",
    "companyName": "Pet Feliz Veterinária",
    "avatarProvider": "https://i.pravatar.cc/150?img=509",
    "averagePrice": 118,
    "services": [
      {
        "name": "Banho e Tosa Completo",
        "price": 118,
        "duration": "2h"
      },
      {
        "name": "Adestramento Básico (Sessão)",
        "price": 212,
        "duration": "1h 30m"
      }
    ],
    "coordinates": {
      "latitude": -26.7888,
      "longitude": -48.139
    },
    "rating": 4.5,
    "reviews": [
      {
        "name": "Juliana Lima",
        "avatar": "https://i.pravatar.cc/150?img=900",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.6
      },
      {
        "name": "Felipe Santos",
        "avatar": "https://i.pravatar.cc/150?img=901",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.4
      },
      {
        "name": "Mariana Costa",
        "avatar": "https://i.pravatar.cc/150?img=902",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4
      },
      {
        "name": "Roberto Alves",
        "avatar": "https://i.pravatar.cc/150?img=903",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.6
      },
      {
        "name": "Mariana Costa",
        "avatar": "https://i.pravatar.cc/150?img=904",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.7
      }
    ],
    "subscriptionPlans": [
      {
        "planName": "Fidelidade Anual",
        "value": "R$331.00/mês",
        "services": "Inclui 3 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em tosa e Prioridade no agendamento."
      },
      {
        "planName": "Fidelidade Anual",
        "value": "R$287.00/mês",
        "services": "Inclui 5 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em produtos e Prioridade no agendamento."
      }
    ],
    "address": {
      "neighborhood": "Moema",
      "city": "São Paulo",
      "state": "SP",
      "zip": "01001-340",
      "complement": "Sala 25",
      "number": 1434
    },
    "providerType": "Veterinária",
    "cnpj": "47.320.057/1318-91",
    "gallery": [
      "https://picsum.photos/seed/9/600/400",
      "https://picsum.photos/seed/10/600/400",
      "https://picsum.photos/seed/11/600/400",
      "https://picsum.photos/seed/12/600/400",
      "https://picsum.photos/seed/13/600/400",
      "https://picsum.photos/seed/14/600/400",
      "https://picsum.photos/seed/15/600/400",
      "https://picsum.photos/seed/16/600/400",
      "https://picsum.photos/seed/17/600/400"
    ],
    "achievements": [
      "Certificado de Excelência em Veterinária"
    ],
    "description": "O Pet Feliz é um espaço dedicado ao bem-estar animal, oferecendo serviços de Banho e Tosa Completo e Adestramento Básico (Sessão). Nossa missão é garantir a felicidade e saúde do seu melhor amigo.",
    "skills": [
      "Gerenciamento de Estresse",
      "Adestramento Positivo",
      "Primeiros Socorros",
      "Comportamento Animal"
    ],
    "spaceFeatures": [
      "Área de banho separada",
      "Não possui crianças"
    ],
    "availability": {
      "available": [
        "2025-11-24",
        "2025-11-25",
        "2025-11-26",
        "2025-11-27",
        "2025-11-28",
        "2025-11-29",
        "2025-12-01",
        "2025-12-02",
        "2025-12-03",
        "2025-12-06",
        "2025-12-08",
        "2025-12-09",
        "2025-12-10",
        "2025-12-12",
        "2025-12-15",
        "2025-12-16",
        "2025-12-17",
        "2025-12-19",
        "2025-12-20",
        "2025-12-21"
      ],
      "unavailable": [
        "2025-11-23",
        "2025-11-30",
        "2025-12-04",
        "2025-12-05",
        "2025-12-07",
        "2025-12-11",
        "2025-12-13",
        "2025-12-14",
        "2025-12-18",
        "2025-12-22"
      ]
    },
    "preferences": {
      "servicePreferences": "Foco em higiene e prevenção",
      "petSizes": [
        "Médio",
        "Grande",
        "Pequeno"
      ],
      "acceptsCats": false
    }
  },
  {
    "id": 10,
    "nameResponsavel": "Ana Beatriz",
    "companyName": "Cão e Cia Veterinária",
    "avatarProvider": "https://i.pravatar.cc/150?img=510",
    "averagePrice": 40,
    "services": [
      {
        "name": "Hospedagem Noturna",
        "price": 115,
        "duration": "24h"
      },
      {
        "name": "Passeio 1h",
        "price": 40,
        "duration": "1h"
      },
      {
        "name": "Consulta Veterinária Rotina",
        "price": 228,
        "duration": "45m"
      },
      {
        "name": "Consulta Veterinária Rotina",
        "price": 184,
        "duration": "45m"
      },
      {
        "name": "Adestramento Básico (Sessão)",
        "price": 283,
        "duration": "1h 30m"
      }
    ],
    "coordinates": {
      "latitude": -21.1107,
      "longitude": -46.6275
    },
    "rating": 4.5,
    "reviews": [
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=1000",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.4
      },
      {
        "name": "Ana Beatriz",
        "avatar": "https://i.pravatar.cc/150?img=1001",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.9
      },
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=1002",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.1
      },
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=1003",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.8
      },
      {
        "name": "Juliana Lima",
        "avatar": "https://i.pravatar.cc/150?img=1004",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.1
      }
    ],
    "subscriptionPlans": [
      {
        "planName": "Daycare Ilimitado",
        "value": "R$484.00/mês",
        "services": "Inclui 3 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em tosa e Prioridade no agendamento."
      },
      {
        "planName": "Premium Trimestral",
        "value": "R$404.00/mês",
        "services": "Inclui 4 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em produtos e Prioridade no agendamento."
      },
      {
        "planName": "Básico Mensal",
        "value": "R$459.00/mês",
        "services": "Inclui 5 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em tosa e Prioridade no agendamento."
      }
    ],
    "address": {
      "neighborhood": "Córrego Grande",
      "city": "Florianópolis",
      "state": "SC",
      "zip": "88010-173",
      "complement": "Sala 46",
      "number": 2000
    },
    "providerType": "Veterinária",
    "cnpj": "79.803.310/4653-09",
    "gallery": [
      "https://picsum.photos/seed/10/600/400",
      "https://picsum.photos/seed/11/600/400",
      "https://picsum.photos/seed/12/600/400",
      "https://picsum.photos/seed/13/600/400",
      "https://picsum.photos/seed/14/600/400",
      "https://picsum.photos/seed/15/600/400",
      "https://picsum.photos/seed/16/600/400"
    ],
    "achievements": [
      "Melhor Avaliado em Veterinária"
    ],
    "description": "O Au Au Club é um espaço dedicado ao bem-estar animal, oferecendo serviços de Hospedagem Noturna e Passeio 1h. Nossa missão é garantir a felicidade e saúde do seu melhor amigo.",
    "skills": [
      "Primeiros Socorros",
      "Cuidados Pós-Cirúrgicos",
      "Cuidados Pós-Cirúrgicos"
    ],
    "spaceFeatures": [
      "Área externa ampla",
      "Vigilância 24h",
      "Vigilância 24h"
    ],
    "availability": {
      "available": [
        "2025-11-24",
        "2025-11-25",
        "2025-11-28",
        "2025-11-29",
        "2025-11-30",
        "2025-12-01",
        "2025-12-02",
        "2025-12-04",
        "2025-12-05",
        "2025-12-06",
        "2025-12-07",
        "2025-12-08",
        "2025-12-09",
        "2025-12-10",
        "2025-12-12",
        "2025-12-13",
        "2025-12-14",
        "2025-12-16",
        "2025-12-17",
        "2025-12-18",
        "2025-12-19",
        "2025-12-20",
        "2025-12-21",
        "2025-12-22"
      ],
      "unavailable": [
        "2025-11-23",
        "2025-11-26",
        "2025-11-27",
        "2025-12-03",
        "2025-12-11",
        "2025-12-15"
      ]
    },
    "preferences": {
      "servicePreferences": "Foco em higiene e prevenção",
      "petSizes": [
        "Médio",
        "Médio",
        "Gigante"
      ],
      "acceptsCats": false
    }
  },
  {
    "id": 11,
    "nameResponsavel": "Carlos Eduardo",
    "companyName": "Amigo Fiel Petcare Pet Shop",
    "avatarProvider": "https://i.pravatar.cc/150?img=511",
    "averagePrice": 102,
    "services": [
      {
        "name": "Banho e Tosa Completo",
        "price": 126,
        "duration": "2h"
      },
      {
        "name": "Banho e Tosa Completo",
        "price": 122,
        "duration": "2h"
      },
      {
        "name": "Consulta Veterinária Rotina",
        "price": 150,
        "duration": "45m"
      },
      {
        "name": "Banho e Tosa Completo",
        "price": 102,
        "duration": "2h"
      },
      {
        "name": "Banho e Tosa Completo",
        "price": 117,
        "duration": "2h"
      }
    ],
    "coordinates": {
      "latitude": -24.8577,
      "longitude": -50.1724
    },
    "rating": 4.5,
    "reviews": [
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=1100",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.7
      },
      {
        "name": "Mariana Costa",
        "avatar": "https://i.pravatar.cc/150?img=1101",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.1
      },
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=1102",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.2
      },
      {
        "name": "Roberto Alves",
        "avatar": "https://i.pravatar.cc/150?img=1103",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.8
      },
      {
        "name": "Roberto Alves",
        "avatar": "https://i.pravatar.cc/150?img=1104",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.5
      },
      {
        "name": "Felipe Santos",
        "avatar": "https://i.pravatar.cc/150?img=1105",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.7
      },
      {
        "name": "Ana Beatriz",
        "avatar": "https://i.pravatar.cc/150?img=1106",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.4
      },
      {
        "name": "Roberto Alves",
        "avatar": "https://i.pravatar.cc/150?img=1107",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.5
      }
    ],
    "subscriptionPlans": [
      {
        "planName": "Premium Trimestral",
        "value": "R$375.00/mês",
        "services": "Inclui 3 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em produtos e Prioridade no agendamento."
      }
    ],
    "address": {
      "neighborhood": "Centro",
      "city": "Joinville",
      "state": "SC",
      "zip": "89201-285",
      "complement": "Sala 40",
      "number": 432
    },
    "providerType": "Pet Shop",
    "cnpj": "54.313.429/9878-36",
    "gallery": [
      "https://picsum.photos/seed/11/600/400",
      "https://picsum.photos/seed/12/600/400",
      "https://picsum.photos/seed/13/600/400",
      "https://picsum.photos/seed/14/600/400",
      "https://picsum.photos/seed/15/600/400",
      "https://picsum.photos/seed/16/600/400"
    ],
    "achievements": [
      "Líder em Pet Shop",
      "Líder em Pet Shop",
      "Parceiro Verificado em Pet Shop"
    ],
    "description": "O Amigo Fiel Petcare é um espaço dedicado ao bem-estar animal, oferecendo serviços de Banho e Tosa Completo e Banho e Tosa Completo. Nossa missão é garantir a felicidade e saúde do seu melhor amigo.",
    "skills": [
      "Comportamento Animal",
      "Cuidados Pós-Cirúrgicos"
    ],
    "spaceFeatures": [
      "Vigilância 24h",
      "Não possui crianças"
    ],
    "availability": {
      "available": [
        "2025-11-24",
        "2025-11-26",
        "2025-11-27",
        "2025-12-01",
        "2025-12-02",
        "2025-12-03",
        "2025-12-04",
        "2025-12-05",
        "2025-12-06",
        "2025-12-07",
        "2025-12-08",
        "2025-12-09",
        "2025-12-10",
        "2025-12-11",
        "2025-12-12",
        "2025-12-14",
        "2025-12-15",
        "2025-12-16",
        "2025-12-17",
        "2025-12-18",
        "2025-12-19",
        "2025-12-21",
        "2025-12-22"
      ],
      "unavailable": [
        "2025-11-23",
        "2025-11-25",
        "2025-11-28",
        "2025-11-29",
        "2025-11-30",
        "2025-12-13",
        "2025-12-20"
      ]
    },
    "preferences": {
      "servicePreferences": "Foco em higiene e prevenção",
      "petSizes": [
        "Médio",
        "Médio"
      ],
      "acceptsCats": true
    }
  },
  {
    "id": 12,
    "nameResponsavel": "Felipe Santos",
    "companyName": "Amigo Fiel Petcare Pet Shop",
    "avatarProvider": "https://i.pravatar.cc/150?img=512",
    "averagePrice": 29,
    "services": [
      {
        "name": "Hospedagem Noturna",
        "price": 101,
        "duration": "24h"
      },
      {
        "name": "Passeio 1h",
        "price": 29,
        "duration": "1h"
      },
      {
        "name": "Banho e Tosa Completo",
        "price": 93,
        "duration": "2h"
      },
      {
        "name": "Adestramento Básico (Sessão)",
        "price": 194,
        "duration": "1h 30m"
      }
    ],
    "coordinates": {
      "latitude": -20.9242,
      "longitude": -52.0348
    },
    "rating": 4.7,
    "reviews": [
      {
        "name": "Mariana Costa",
        "avatar": "https://i.pravatar.cc/150?img=1200",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.7
      },
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=1201",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 5
      },
      {
        "name": "Felipe Santos",
        "avatar": "https://i.pravatar.cc/150?img=1202",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.4
      }
    ],
    "subscriptionPlans": [
      {
        "planName": "Daycare Ilimitado",
        "value": "R$162.00/mês",
        "services": "Inclui 4 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em produtos e Prioridade no agendamento."
      },
      {
        "planName": "Premium Trimestral",
        "value": "R$330.00/mês",
        "services": "Inclui 4 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em produtos e Prioridade no agendamento."
      }
    ],
    "address": {
      "neighborhood": "Barra da Tijuca",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "zip": "22010-617",
      "complement": "Sala 88",
      "number": 1980
    },
    "providerType": "Pet Shop",
    "cnpj": "97.426.446/3596-31",
    "gallery": [
      "https://picsum.photos/seed/12/600/400",
      "https://picsum.photos/seed/13/600/400",
      "https://picsum.photos/seed/14/600/400",
      "https://picsum.photos/seed/15/600/400",
      "https://picsum.photos/seed/16/600/400",
      "https://picsum.photos/seed/17/600/400",
      "https://picsum.photos/seed/18/600/400"
    ],
    "achievements": [
      "Certificado de Excelência em Pet Shop",
      "Líder em Pet Shop",
      "Parceiro Verificado em Pet Shop"
    ],
    "description": "O Au Au Club é um espaço dedicado ao bem-estar animal, oferecendo serviços de Hospedagem Noturna e Passeio 1h. Nossa missão é garantir a felicidade e saúde do seu melhor amigo.",
    "skills": [
      "Adestramento Positivo",
      "Cuidados Pós-Cirúrgicos",
      "Cuidados Pós-Cirúrgicos"
    ],
    "spaceFeatures": [
      "Área externa ampla",
      "Área de banho separada"
    ],
    "availability": {
      "available": [
        "2025-11-24",
        "2025-11-25",
        "2025-11-26",
        "2025-11-27",
        "2025-11-28",
        "2025-11-29",
        "2025-11-30",
        "2025-12-01",
        "2025-12-04",
        "2025-12-05",
        "2025-12-06",
        "2025-12-07",
        "2025-12-08",
        "2025-12-09",
        "2025-12-10",
        "2025-12-11",
        "2025-12-12",
        "2025-12-14",
        "2025-12-15",
        "2025-12-16",
        "2025-12-17",
        "2025-12-18",
        "2025-12-20",
        "2025-12-21",
        "2025-12-22"
      ],
      "unavailable": [
        "2025-11-23",
        "2025-12-02",
        "2025-12-03",
        "2025-12-13",
        "2025-12-19"
      ]
    },
    "preferences": {
      "servicePreferences": "Foco em higiene e prevenção",
      "petSizes": [
        "Gigante"
      ],
      "acceptsCats": false
    }
  },
  {
    "id": 13,
    "nameResponsavel": "Mariana Costa",
    "companyName": "Cão e Cia Veterinária",
    "avatarProvider": "https://i.pravatar.cc/150?img=513",
    "averagePrice": 73,
    "services": [
      {
        "name": "Hospedagem Noturna",
        "price": 73,
        "duration": "24h"
      },
      {
        "name": "Banho e Tosa Completo",
        "price": 75,
        "duration": "2h"
      }
    ],
    "coordinates": {
      "latitude": -28.8289,
      "longitude": -48.4941
    },
    "rating": 4.5,
    "reviews": [
      {
        "name": "Felipe Santos",
        "avatar": "https://i.pravatar.cc/150?img=1300",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.9
      },
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=1301",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.6
      },
      {
        "name": "Mariana Costa",
        "avatar": "https://i.pravatar.cc/150?img=1302",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4
      },
      {
        "name": "Ana Beatriz",
        "avatar": "https://i.pravatar.cc/150?img=1303",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.4
      },
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=1304",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.6
      }
    ],
    "subscriptionPlans": [
      {
        "planName": "Básico Mensal",
        "value": "R$205.00/mês",
        "services": "Inclui 3 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em vacinas e Prioridade no agendamento."
      }
    ],
    "address": {
      "neighborhood": "Batel",
      "city": "Curitiba",
      "state": "PR",
      "zip": "80010-706",
      "complement": "Sala 2",
      "number": 1265
    },
    "providerType": "Veterinária",
    "cnpj": "31.373.359/0484-89",
    "gallery": [
      "https://picsum.photos/seed/13/600/400",
      "https://picsum.photos/seed/14/600/400",
      "https://picsum.photos/seed/15/600/400",
      "https://picsum.photos/seed/16/600/400",
      "https://picsum.photos/seed/17/600/400"
    ],
    "achievements": [
      "Parceiro Verificado em Veterinária",
      "Certificado de Excelência em Veterinária"
    ],
    "description": "O Cão e Cia é um espaço dedicado ao bem-estar animal, oferecendo serviços de Hospedagem Noturna e Banho e Tosa Completo. Nossa missão é garantir a felicidade e saúde do seu melhor amigo.",
    "skills": [
      "Adestramento Positivo",
      "Cuidados Pós-Cirúrgicos",
      "Comportamento Animal",
      "Cuidados Pós-Cirúrgicos"
    ],
    "spaceFeatures": [
      "Ambiente climatizado",
      "Área de banho separada",
      "Área externa ampla",
      "Ambiente climatizado"
    ],
    "availability": {
      "available": [
        "2025-11-23",
        "2025-11-24",
        "2025-11-25",
        "2025-11-27",
        "2025-12-01",
        "2025-12-02",
        "2025-12-03",
        "2025-12-04",
        "2025-12-06",
        "2025-12-07",
        "2025-12-08",
        "2025-12-09",
        "2025-12-10",
        "2025-12-12",
        "2025-12-13",
        "2025-12-14",
        "2025-12-15",
        "2025-12-17",
        "2025-12-18",
        "2025-12-19",
        "2025-12-20",
        "2025-12-22"
      ],
      "unavailable": [
        "2025-11-26",
        "2025-11-28",
        "2025-11-29",
        "2025-11-30",
        "2025-12-05",
        "2025-12-11",
        "2025-12-16",
        "2025-12-21"
      ]
    },
    "preferences": {
      "servicePreferences": "Foco em higiene e prevenção",
      "petSizes": [
        "Médio"
      ],
      "acceptsCats": true
    }
  },
  {
    "id": 14,
    "nameResponsavel": "Carlos Eduardo",
    "companyName": "Pelo Saudável Passeador",
    "avatarProvider": "https://i.pravatar.cc/150?img=514",
    "averagePrice": 43,
    "services": [
      {
        "name": "Hospedagem Noturna",
        "price": 116,
        "duration": "24h"
      },
      {
        "name": "Diária de Creche",
        "price": 65,
        "duration": "8h"
      },
      {
        "name": "Passeio 1h",
        "price": 43,
        "duration": "1h"
      }
    ],
    "coordinates": {
      "latitude": -27.1735,
      "longitude": -45.7689
    },
    "rating": 4.6,
    "reviews": [
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=1400",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.1
      },
      {
        "name": "Mariana Costa",
        "avatar": "https://i.pravatar.cc/150?img=1401",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.8
      },
      {
        "name": "Ana Beatriz",
        "avatar": "https://i.pravatar.cc/150?img=1402",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.1
      },
      {
        "name": "Roberto Alves",
        "avatar": "https://i.pravatar.cc/150?img=1403",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.2
      },
      {
        "name": "Juliana Lima",
        "avatar": "https://i.pravatar.cc/150?img=1404",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 5
      },
      {
        "name": "Roberto Alves",
        "avatar": "https://i.pravatar.cc/150?img=1405",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.9
      },
      {
        "name": "Roberto Alves",
        "avatar": "https://i.pravatar.cc/150?img=1406",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 5
      }
    ],
    "subscriptionPlans": [
      {
        "planName": "Daycare Ilimitado",
        "value": "R$450.00/mês",
        "services": "Inclui 2 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em vacinas e Prioridade no agendamento."
      },
      {
        "planName": "Básico Mensal",
        "value": "R$136.00/mês",
        "services": "Inclui 5 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em tosa e Prioridade no agendamento."
      }
    ],
    "address": {
      "neighborhood": "Moema",
      "city": "São Paulo",
      "state": "SP",
      "zip": "01001-874",
      "complement": "Sala 65",
      "number": 1925
    },
    "providerType": "Passeador",
    "cnpj": "35.383.320/0494-42",
    "gallery": [
      "https://picsum.photos/seed/14/600/400",
      "https://picsum.photos/seed/15/600/400",
      "https://picsum.photos/seed/16/600/400",
      "https://picsum.photos/seed/17/600/400",
      "https://picsum.photos/seed/18/600/400",
      "https://picsum.photos/seed/19/600/400"
    ],
    "achievements": [
      "Certificado de Excelência em Passeador",
      "Melhor Avaliado em Passeador",
      "Melhor Avaliado em Passeador"
    ],
    "description": "O Au Au Club é um espaço dedicado ao bem-estar animal, oferecendo serviços de Hospedagem Noturna e Diária de Creche. Nossa missão é garantir a felicidade e saúde do seu melhor amigo.",
    "skills": [
      "Comportamento Animal",
      "Cuidados Pós-Cirúrgicos"
    ],
    "spaceFeatures": [
      "Não possui crianças",
      "Área de banho separada",
      "Não possui crianças",
      "Aceita pets com necessidades especiais"
    ],
    "availability": {
      "available": [
        "2025-11-23",
        "2025-11-24",
        "2025-11-25",
        "2025-11-26",
        "2025-11-27",
        "2025-11-28",
        "2025-11-29",
        "2025-12-01",
        "2025-12-02",
        "2025-12-03",
        "2025-12-04",
        "2025-12-06",
        "2025-12-07",
        "2025-12-08",
        "2025-12-09",
        "2025-12-10",
        "2025-12-11",
        "2025-12-12",
        "2025-12-14",
        "2025-12-15",
        "2025-12-16",
        "2025-12-17",
        "2025-12-18",
        "2025-12-20",
        "2025-12-22"
      ],
      "unavailable": [
        "2025-11-30",
        "2025-12-05",
        "2025-12-13",
        "2025-12-19",
        "2025-12-21"
      ]
    },
    "preferences": {
      "servicePreferences": "Prioridade em atividades ao ar livre",
      "petSizes": [
        "Pequeno",
        "Gigante",
        "Grande"
      ],
      "acceptsCats": false
    }
  },
  {
    "id": 15,
    "nameResponsavel": "Felipe Santos",
    "companyName": "Cão e Cia Veterinária",
    "avatarProvider": "https://i.pravatar.cc/150?img=515",
    "averagePrice": 49,
    "services": [
      {
        "name": "Adestramento Básico (Sessão)",
        "price": 197,
        "duration": "1h 30m"
      },
      {
        "name": "Passeio 1h",
        "price": 49,
        "duration": "1h"
      },
      {
        "name": "Banho e Tosa Completo",
        "price": 95,
        "duration": "2h"
      },
      {
        "name": "Hospedagem Noturna",
        "price": 152,
        "duration": "24h"
      }
    ],
    "coordinates": {
      "latitude": -21.5885,
      "longitude": -43.3432
    },
    "rating": 4.5,
    "reviews": [
      {
        "name": "Juliana Lima",
        "avatar": "https://i.pravatar.cc/150?img=1500",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.4
      },
      {
        "name": "Felipe Santos",
        "avatar": "https://i.pravatar.cc/150?img=1501",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.4
      },
      {
        "name": "Ana Beatriz",
        "avatar": "https://i.pravatar.cc/150?img=1502",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.6
      },
      {
        "name": "Ana Beatriz",
        "avatar": "https://i.pravatar.cc/150?img=1503",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.3
      },
      {
        "name": "Felipe Santos",
        "avatar": "https://i.pravatar.cc/150?img=1504",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.2
      },
      {
        "name": "Roberto Alves",
        "avatar": "https://i.pravatar.cc/150?img=1505",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.5
      },
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=1506",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.7
      },
      {
        "name": "Roberto Alves",
        "avatar": "https://i.pravatar.cc/150?img=1507",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.6
      }
    ],
    "subscriptionPlans": [
      {
        "planName": "Daycare Ilimitado",
        "value": "R$227.00/mês",
        "services": "Inclui 2 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em produtos e Prioridade no agendamento."
      },
      {
        "planName": "Daycare Ilimitado",
        "value": "R$423.00/mês",
        "services": "Inclui 4 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em produtos e Prioridade no agendamento."
      }
    ],
    "address": {
      "neighborhood": "Lagoa da Conceição",
      "city": "Florianópolis",
      "state": "SC",
      "zip": "88010-765",
      "complement": "Sala 45",
      "number": 921
    },
    "providerType": "Veterinária",
    "cnpj": "60.381.400/2858-18",
    "gallery": [
      "https://picsum.photos/seed/15/600/400",
      "https://picsum.photos/seed/16/600/400",
      "https://picsum.photos/seed/17/600/400",
      "https://picsum.photos/seed/18/600/400",
      "https://picsum.photos/seed/19/600/400",
      "https://picsum.photos/seed/20/600/400",
      "https://picsum.photos/seed/21/600/400",
      "https://picsum.photos/seed/22/600/400"
    ],
    "achievements": [
      "Parceiro Verificado em Veterinária",
      "Líder em Veterinária",
      "Certificado de Excelência em Veterinária"
    ],
    "description": "O Veterinária Viva é um espaço dedicado ao bem-estar animal, oferecendo serviços de Adestramento Básico (Sessão) e Passeio 1h. Nossa missão é garantir a felicidade e saúde do seu melhor amigo.",
    "skills": [
      "Gerenciamento de Estresse",
      "Primeiros Socorros"
    ],
    "spaceFeatures": [
      "Área de banho separada",
      "Área de banho separada",
      "Área externa ampla"
    ],
    "availability": {
      "available": [
        "2025-11-23",
        "2025-11-24",
        "2025-11-25",
        "2025-11-26",
        "2025-11-27",
        "2025-11-28",
        "2025-11-30",
        "2025-12-01",
        "2025-12-02",
        "2025-12-04",
        "2025-12-05",
        "2025-12-06",
        "2025-12-07",
        "2025-12-08",
        "2025-12-09",
        "2025-12-10",
        "2025-12-11",
        "2025-12-12",
        "2025-12-13",
        "2025-12-14",
        "2025-12-15",
        "2025-12-16",
        "2025-12-17",
        "2025-12-18",
        "2025-12-19",
        "2025-12-20",
        "2025-12-21"
      ],
      "unavailable": [
        "2025-11-29",
        "2025-12-03",
        "2025-12-22"
      ]
    },
    "preferences": {
      "servicePreferences": "Foco em higiene e prevenção",
      "petSizes": [
        "Gigante"
      ],
      "acceptsCats": true
    }
  },
  {
    "id": 16,
    "nameResponsavel": "Felipe Santos",
    "companyName": "Pet Feliz Creche",
    "avatarProvider": "https://i.pravatar.cc/150?img=516",
    "averagePrice": 117,
    "services": [
      {
        "name": "Consulta Veterinária Rotina",
        "price": 241,
        "duration": "45m"
      },
      {
        "name": "Consulta Veterinária Rotina",
        "price": 132,
        "duration": "45m"
      },
      {
        "name": "Hospedagem Noturna",
        "price": 117,
        "duration": "24h"
      }
    ],
    "coordinates": {
      "latitude": -27.8468,
      "longitude": -51.4246
    },
    "rating": 4.4,
    "reviews": [
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=1600",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.7
      },
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=1601",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.1
      },
      {
        "name": "Felipe Santos",
        "avatar": "https://i.pravatar.cc/150?img=1602",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.4
      }
    ],
    "subscriptionPlans": [
      {
        "planName": "Premium Trimestral",
        "value": "R$315.00/mês",
        "services": "Inclui 2 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em produtos e Prioridade no agendamento."
      },
      {
        "planName": "Básico Mensal",
        "value": "R$415.00/mês",
        "services": "Inclui 2 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em produtos e Prioridade no agendamento."
      },
      {
        "planName": "Fidelidade Anual",
        "value": "R$213.00/mês",
        "services": "Inclui 5 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em vacinas e Prioridade no agendamento."
      }
    ],
    "address": {
      "neighborhood": "Iririú",
      "city": "Joinville",
      "state": "SC",
      "zip": "89201-369",
      "complement": "Sala 98",
      "number": 141
    },
    "providerType": "Creche",
    "cnpj": "63.587.340/8779-12",
    "gallery": [
      "https://picsum.photos/seed/16/600/400",
      "https://picsum.photos/seed/17/600/400",
      "https://picsum.photos/seed/18/600/400",
      "https://picsum.photos/seed/19/600/400",
      "https://picsum.photos/seed/20/600/400",
      "https://picsum.photos/seed/21/600/400"
    ],
    "achievements": [
      "Líder em Creche"
    ],
    "description": "O Au Au Club é um espaço dedicado ao bem-estar animal, oferecendo serviços de Consulta Veterinária Rotina e Consulta Veterinária Rotina. Nossa missão é garantir a felicidade e saúde do seu melhor amigo.",
    "skills": [
      "Cuidados Pós-Cirúrgicos",
      "Adestramento Positivo",
      "Cuidados Pós-Cirúrgicos",
      "Adestramento Positivo"
    ],
    "spaceFeatures": [
      "Aceita pets com necessidades especiais",
      "Área de banho separada",
      "Não possui crianças"
    ],
    "availability": {
      "available": [
        "2025-11-23",
        "2025-11-24",
        "2025-11-25",
        "2025-11-29",
        "2025-11-30",
        "2025-12-01",
        "2025-12-03",
        "2025-12-04",
        "2025-12-05",
        "2025-12-06",
        "2025-12-07",
        "2025-12-09",
        "2025-12-10",
        "2025-12-11",
        "2025-12-13",
        "2025-12-14",
        "2025-12-15",
        "2025-12-16",
        "2025-12-18",
        "2025-12-19",
        "2025-12-21",
        "2025-12-22"
      ],
      "unavailable": [
        "2025-11-26",
        "2025-11-27",
        "2025-11-28",
        "2025-12-02",
        "2025-12-08",
        "2025-12-12",
        "2025-12-17",
        "2025-12-20"
      ]
    },
    "preferences": {
      "servicePreferences": "Foco em higiene e prevenção",
      "petSizes": [
        "Gigante",
        "Pequeno"
      ],
      "acceptsCats": true
    }
  },
  {
    "id": 17,
    "nameResponsavel": "Felipe Santos",
    "companyName": "Amigo Fiel Petcare Hospedagem",
    "avatarProvider": "https://i.pravatar.cc/150?img=517",
    "averagePrice": 146,
    "services": [
      {
        "name": "Hospedagem Noturna",
        "price": 146,
        "duration": "24h"
      },
      {
        "name": "Consulta Veterinária Rotina",
        "price": 213,
        "duration": "45m"
      }
    ],
    "coordinates": {
      "latitude": -23.2118,
      "longitude": -48.8607
    },
    "rating": 4.3,
    "reviews": [
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=1700",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.3
      },
      {
        "name": "Mariana Costa",
        "avatar": "https://i.pravatar.cc/150?img=1701",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.6
      },
      {
        "name": "Felipe Santos",
        "avatar": "https://i.pravatar.cc/150?img=1702",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.4
      },
      {
        "name": "Felipe Santos",
        "avatar": "https://i.pravatar.cc/150?img=1703",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.1
      },
      {
        "name": "Ana Beatriz",
        "avatar": "https://i.pravatar.cc/150?img=1704",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.2
      },
      {
        "name": "Ana Beatriz",
        "avatar": "https://i.pravatar.cc/150?img=1705",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.4
      }
    ],
    "subscriptionPlans": [
      {
        "planName": "Fidelidade Anual",
        "value": "R$257.00/mês",
        "services": "Inclui 4 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em vacinas e Prioridade no agendamento."
      }
    ],
    "address": {
      "neighborhood": "Tijuca",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "zip": "22010-878",
      "complement": "Sala 65",
      "number": 1597
    },
    "providerType": "Hospedagem",
    "cnpj": "71.271.373/8931-94",
    "gallery": [
      "https://picsum.photos/seed/17/600/400",
      "https://picsum.photos/seed/18/600/400",
      "https://picsum.photos/seed/19/600/400",
      "https://picsum.photos/seed/20/600/400",
      "https://picsum.photos/seed/21/600/400",
      "https://picsum.photos/seed/22/600/400",
      "https://picsum.photos/seed/23/600/400",
      "https://picsum.photos/seed/24/600/400",
      "https://picsum.photos/seed/25/600/400",
      "https://picsum.photos/seed/26/600/400"
    ],
    "achievements": [
      "Melhor Avaliado em Hospedagem"
    ],
    "description": "O Au Au Club é um espaço dedicado ao bem-estar animal, oferecendo serviços de Hospedagem Noturna e Consulta Veterinária Rotina. Nossa missão é garantir a felicidade e saúde do seu melhor amigo.",
    "skills": [
      "Adestramento Positivo",
      "Comportamento Animal",
      "Cuidados Pós-Cirúrgicos"
    ],
    "spaceFeatures": [
      "Área externa ampla",
      "Não possui crianças",
      "Não possui crianças"
    ],
    "availability": {
      "available": [
        "2025-11-23",
        "2025-11-24",
        "2025-11-25",
        "2025-11-26",
        "2025-11-27",
        "2025-11-28",
        "2025-11-29",
        "2025-11-30",
        "2025-12-01",
        "2025-12-03",
        "2025-12-05",
        "2025-12-06",
        "2025-12-07",
        "2025-12-09",
        "2025-12-10",
        "2025-12-11",
        "2025-12-12",
        "2025-12-14",
        "2025-12-15",
        "2025-12-16",
        "2025-12-17",
        "2025-12-18",
        "2025-12-19",
        "2025-12-20",
        "2025-12-21",
        "2025-12-22"
      ],
      "unavailable": [
        "2025-12-02",
        "2025-12-04",
        "2025-12-08",
        "2025-12-13"
      ]
    },
    "preferences": {
      "servicePreferences": "Foco em higiene e prevenção",
      "petSizes": [
        "Gigante"
      ],
      "acceptsCats": true
    }
  },
  {
    "id": 18,
    "nameResponsavel": "Ana Beatriz",
    "companyName": "Cão e Cia Veterinária",
    "avatarProvider": "https://i.pravatar.cc/150?img=518",
    "averagePrice": 92,
    "services": [
      {
        "name": "Hospedagem Noturna",
        "price": 96,
        "duration": "24h"
      },
      {
        "name": "Banho e Tosa Completo",
        "price": 92,
        "duration": "2h"
      },
      {
        "name": "Consulta Veterinária Rotina",
        "price": 232,
        "duration": "45m"
      }
    ],
    "coordinates": {
      "latitude": -28.7756,
      "longitude": -51.8871
    },
    "rating": 4.6,
    "reviews": [
      {
        "name": "Ana Beatriz",
        "avatar": "https://i.pravatar.cc/150?img=1800",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.6
      },
      {
        "name": "Juliana Lima",
        "avatar": "https://i.pravatar.cc/150?img=1801",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.9
      },
      {
        "name": "Roberto Alves",
        "avatar": "https://i.pravatar.cc/150?img=1802",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.5
      },
      {
        "name": "Juliana Lima",
        "avatar": "https://i.pravatar.cc/150?img=1803",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.2
      },
      {
        "name": "Roberto Alves",
        "avatar": "https://i.pravatar.cc/150?img=1804",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 5
      },
      {
        "name": "Mariana Costa",
        "avatar": "https://i.pravatar.cc/150?img=1805",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.6
      },
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=1806",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.9
      },
      {
        "name": "Felipe Santos",
        "avatar": "https://i.pravatar.cc/150?img=1807",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.5
      }
    ],
    "subscriptionPlans": [
      {
        "planName": "Daycare Ilimitado",
        "value": "R$491.00/mês",
        "services": "Inclui 4 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em tosa e Prioridade no agendamento."
      },
      {
        "planName": "Premium Trimestral",
        "value": "R$463.00/mês",
        "services": "Inclui 4 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em tosa e Prioridade no agendamento."
      },
      {
        "planName": "Daycare Ilimitado",
        "value": "R$279.00/mês",
        "services": "Inclui 5 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em tosa e Prioridade no agendamento."
      }
    ],
    "address": {
      "neighborhood": "Santa Felicidade",
      "city": "Curitiba",
      "state": "PR",
      "zip": "80010-873",
      "complement": "Sala 59",
      "number": 1902
    },
    "providerType": "Veterinária",
    "cnpj": "42.908.251/0137-98",
    "gallery": [
      "https://picsum.photos/seed/18/600/400",
      "https://picsum.photos/seed/19/600/400",
      "https://picsum.photos/seed/20/600/400",
      "https://picsum.photos/seed/21/600/400",
      "https://picsum.photos/seed/22/600/400",
      "https://picsum.photos/seed/23/600/400",
      "https://picsum.photos/seed/24/600/400",
      "https://picsum.photos/seed/25/600/400",
      "https://picsum.photos/seed/26/600/400"
    ],
    "achievements": [
      "Parceiro Verificado em Veterinária"
    ],
    "description": "O Pelo Saudável é um espaço dedicado ao bem-estar animal, oferecendo serviços de Hospedagem Noturna e Banho e Tosa Completo. Nossa missão é garantir a felicidade e saúde do seu melhor amigo.",
    "skills": [
      "Primeiros Socorros",
      "Gerenciamento de Estresse",
      "Comportamento Animal"
    ],
    "spaceFeatures": [
      "Sistema anti-fuga",
      "Aceita pets com necessidades especiais",
      "Área de banho separada"
    ],
    "availability": {
      "available": [
        "2025-11-25",
        "2025-11-27",
        "2025-11-28",
        "2025-11-30",
        "2025-12-01",
        "2025-12-02",
        "2025-12-03",
        "2025-12-04",
        "2025-12-06",
        "2025-12-08",
        "2025-12-09",
        "2025-12-10",
        "2025-12-12",
        "2025-12-13",
        "2025-12-15",
        "2025-12-16",
        "2025-12-17",
        "2025-12-18",
        "2025-12-19",
        "2025-12-21",
        "2025-12-22"
      ],
      "unavailable": [
        "2025-11-23",
        "2025-11-24",
        "2025-11-26",
        "2025-11-29",
        "2025-12-05",
        "2025-12-07",
        "2025-12-11",
        "2025-12-14",
        "2025-12-20"
      ]
    },
    "preferences": {
      "servicePreferences": "Foco em higiene e prevenção",
      "petSizes": [
        "Médio",
        "Gigante",
        "Médio"
      ],
      "acceptsCats": true
    }
  },
  {
    "id": 19,
    "nameResponsavel": "Roberto Alves",
    "companyName": "Amigo Fiel Petcare Veterinária",
    "avatarProvider": "https://i.pravatar.cc/150?img=519",
    "averagePrice": 49,
    "services": [
      {
        "name": "Passeio 1h",
        "price": 49,
        "duration": "1h"
      },
      {
        "name": "Consulta Veterinária Rotina",
        "price": 213,
        "duration": "45m"
      },
      {
        "name": "Banho e Tosa Completo",
        "price": 112,
        "duration": "2h"
      }
    ],
    "coordinates": {
      "latitude": -22.4065,
      "longitude": -52.9727
    },
    "rating": 4.1,
    "reviews": [
      {
        "name": "Mariana Costa",
        "avatar": "https://i.pravatar.cc/150?img=1900",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4
      },
      {
        "name": "Roberto Alves",
        "avatar": "https://i.pravatar.cc/150?img=1901",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.4
      },
      {
        "name": "Mariana Costa",
        "avatar": "https://i.pravatar.cc/150?img=1902",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4
      }
    ],
    "subscriptionPlans": [
      {
        "planName": "Daycare Ilimitado",
        "value": "R$449.00/mês",
        "services": "Inclui 5 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em vacinas e Prioridade no agendamento."
      }
    ],
    "address": {
      "neighborhood": "Pinheiros",
      "city": "São Paulo",
      "state": "SP",
      "zip": "01001-896",
      "complement": "Sala 83",
      "number": 177
    },
    "providerType": "Veterinária",
    "cnpj": "38.745.621/7990-18",
    "gallery": [
      "https://picsum.photos/seed/19/600/400",
      "https://picsum.photos/seed/20/600/400",
      "https://picsum.photos/seed/21/600/400",
      "https://picsum.photos/seed/22/600/400",
      "https://picsum.photos/seed/23/600/400",
      "https://picsum.photos/seed/24/600/400",
      "https://picsum.photos/seed/25/600/400"
    ],
    "achievements": [
      "Parceiro Verificado em Veterinária",
      "Certificado de Excelência em Veterinária"
    ],
    "description": "O Amigo Fiel Petcare é um espaço dedicado ao bem-estar animal, oferecendo serviços de Passeio 1h e Consulta Veterinária Rotina. Nossa missão é garantir a felicidade e saúde do seu melhor amigo.",
    "skills": [
      "Comportamento Animal",
      "Gerenciamento de Estresse"
    ],
    "spaceFeatures": [
      "Área de banho separada",
      "Área de banho separada",
      "Área de banho separada",
      "Área de banho separada"
    ],
    "availability": {
      "available": [
        "2025-11-23",
        "2025-11-24",
        "2025-11-25",
        "2025-11-26",
        "2025-11-28",
        "2025-11-29",
        "2025-12-01",
        "2025-12-02",
        "2025-12-03",
        "2025-12-04",
        "2025-12-07",
        "2025-12-08",
        "2025-12-09",
        "2025-12-10",
        "2025-12-11",
        "2025-12-12",
        "2025-12-13",
        "2025-12-14",
        "2025-12-16",
        "2025-12-17",
        "2025-12-18",
        "2025-12-19",
        "2025-12-20",
        "2025-12-21",
        "2025-12-22"
      ],
      "unavailable": [
        "2025-11-27",
        "2025-11-30",
        "2025-12-05",
        "2025-12-06",
        "2025-12-15"
      ]
    },
    "preferences": {
      "servicePreferences": "Foco em higiene e prevenção",
      "petSizes": [
        "Grande",
        "Grande"
      ],
      "acceptsCats": true
    }
  },
  {
    "id": 20,
    "nameResponsavel": "Juliana Lima",
    "companyName": "Au Au Club Creche",
    "avatarProvider": "https://i.pravatar.cc/150?img=520",
    "averagePrice": 25,
    "services": [
      {
        "name": "Hospedagem Noturna",
        "price": 114,
        "duration": "24h"
      },
      {
        "name": "Consulta Veterinária Rotina",
        "price": 244,
        "duration": "45m"
      },
      {
        "name": "Passeio 1h",
        "price": 25,
        "duration": "1h"
      },
      {
        "name": "Adestramento Básico (Sessão)",
        "price": 126,
        "duration": "1h 30m"
      },
      {
        "name": "Adestramento Básico (Sessão)",
        "price": 121,
        "duration": "1h 30m"
      }
    ],
    "coordinates": {
      "latitude": -28.6494,
      "longitude": -43.0206
    },
    "rating": 4.4,
    "reviews": [
      {
        "name": "Roberto Alves",
        "avatar": "https://i.pravatar.cc/150?img=2000",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.4
      },
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=2001",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.2
      },
      {
        "name": "Mariana Costa",
        "avatar": "https://i.pravatar.cc/150?img=2002",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.8
      },
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=2003",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4.2
      },
      {
        "name": "Juliana Lima",
        "avatar": "https://i.pravatar.cc/150?img=2004",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4.9
      },
      {
        "name": "Carlos Eduardo",
        "avatar": "https://i.pravatar.cc/150?img=2005",
        "review": "Ótimo serviço, o pet adorou! Atendimento excelente e profissional.",
        "rating": 4
      },
      {
        "name": "Juliana Lima",
        "avatar": "https://i.pravatar.cc/150?img=2006",
        "review": "Ótimo serviço, o pet adorou! Recomendo a todos.",
        "rating": 4
      }
    ],
    "subscriptionPlans": [
      {
        "planName": "Básico Mensal",
        "value": "R$389.00/mês",
        "services": "Inclui 4 serviços diferentes por mês.",
        "benefits": "Desconto de 15% em produtos e Prioridade no agendamento."
      }
    ],
    "address": {
      "neighborhood": "Trindade",
      "city": "Florianópolis",
      "state": "SC",
      "zip": "88010-954",
      "complement": "Sala 93",
      "number": 765
    },
    "providerType": "Creche",
    "cnpj": "24.947.591/7480-85",
    "gallery": [
      "https://picsum.photos/seed/20/600/400",
      "https://picsum.photos/seed/21/600/400",
      "https://picsum.photos/seed/22/600/400",
      "https://picsum.photos/seed/23/600/400",
      "https://picsum.photos/seed/24/600/400",
      "https://picsum.photos/seed/25/600/400",
      "https://picsum.photos/seed/26/600/400",
      "https://picsum.photos/seed/27/600/400",
      "https://picsum.photos/seed/28/600/400"
    ],
    "achievements": [
      "Certificado de Excelência em Creche"
    ],
    "description": "O Pelo Saudável é um espaço dedicado ao bem-estar animal, oferecendo serviços de Hospedagem Noturna e Consulta Veterinária Rotina. Nossa missão é garantir a felicidade e saúde do seu melhor amigo.",
    "skills": [
      "Gerenciamento de Estresse",
      "Cuidados Pós-Cirúrgicos",
      "Gerenciamento de Estresse"
    ],
    "spaceFeatures": [
      "Área externa ampla",
      "Vigilância 24h",
      "Área externa ampla",
      "Área externa ampla"
    ],
    "availability": {
      "available": [
        "2025-11-24",
        "2025-11-25",
        "2025-11-26",
        "2025-11-27",
        "2025-11-28",
        "2025-11-30",
        "2025-12-01",
        "2025-12-03",
        "2025-12-04",
        "2025-12-05",
        "2025-12-06",
        "2025-12-07",
        "2025-12-08",
        "2025-12-09",
        "2025-12-10",
        "2025-12-12",
        "2025-12-13",
        "2025-12-14",
        "2025-12-15",
        "2025-12-16",
        "2025-12-17",
        "2025-12-18",
        "2025-12-19",
        "2025-12-20",
        "2025-12-21",
        "2025-12-22"
      ],
      "unavailable": [
        "2025-11-23",
        "2025-11-29",
        "2025-12-02",
        "2025-12-11"
      ]
    },
    "preferences": {
      "servicePreferences": "Foco em higiene e prevenção",
      "petSizes": [
        "Gigante",
        "Pequeno"
      ],
      "acceptsCats": false
    }
  }
]