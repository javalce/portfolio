import type { WorkExperience } from '@/types';

export const workExperience: WorkExperience[] = [
  {
    title: 'Desarrollador Web',
    company: 'SPV SCALA S.L.',
    description:
      'Migré información de un esquema antiguo de base de datos de PostgreSQL a uno nuevo. Desarrollé un rest API para la subida de audios y contenidos de chats a AWS S3. Implementé funciones lambda en AWS para la transcripción y anonimización de los audios a texto.',
    startDate: '2024-10-29',
    endDate: '2025-03-25',
  },
  {
    title: 'Desarrollador Web',
    company: 'ETSE-UV',
    description:
      'Desarrollé un dashboard para consultar datos estadísticos y optimicé consultas SQL para obtención de datos. Diseñé e implementé un formulario para la recopilación de datos.',
    startDate: '2022-05-11',
    endDate: '2024-10-28',
  },
  {
    title: 'Desarrollador Web',
    company: 'NITCAI Data Management',
    description:
      'Desarrollé un sistema de tracking de poses de una persona mediante una webcam y un dashboard para la visualización de los resultados. Implementé funciones lambda en AWS para el uso de la aplicación web.',
    startDate: '2021-11-10',
    endDate: '2022-04-17',
  },
];
