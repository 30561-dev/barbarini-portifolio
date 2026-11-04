import { SocialLink } from '../types';

/**
 * Configure aqui seus links e redes sociais.
 * Os links marcados com isPlaceholder: true indicam que estão aguardando
 * a inserção do endereço oficial do Edson Barbarini.
 */
export const personalLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    label: 'Repositórios & Código',
    // Substitua pelo seu perfil oficial do GitHub: https://github.com/seu-usuario
    url: 'https://github.com/',
    usernameDisplay: 'github.com/edsonbarbarini',
    isPlaceholder: true,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    label: 'Conexões Profissionais',
    // Substitua pelo seu perfil oficial do LinkedIn: https://linkedin.com/in/seu-usuario
    url: 'https://linkedin.com/in/',
    usernameDisplay: 'linkedin.com/in/edsonbarbarini',
    isPlaceholder: true,
  },
  {
    id: 'email',
    name: 'E-mail',
    label: 'Contato Direto',
    // Substitua pelo seu endereço de e-mail oficial: mailto:seu-email@dominio.com
    url: 'mailto:edson.barbarini@exemplo.com',
    usernameDisplay: 'edson.barbarini@exemplo.com',
    isPlaceholder: true,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    label: 'Rede Social',
    // Substitua pelo seu perfil do Instagram: https://instagram.com/seu-usuario
    url: 'https://instagram.com/',
    usernameDisplay: '@edsonbarbarini',
    isPlaceholder: true,
  },
];

export const contactConfig = {
  // E-mail padrão para contato direto — edite quando estiver com o seu endereço real
  contactEmail: 'edson.barbarini@exemplo.com',
  isEmailPlaceholder: true,
  location: 'Campinas, SP — Aeroporto de Viracopos (VCP)',
  coordinates: '23°00\'27"S 47°08\'04"W',
  status: 'Disponível para projetos e aprendizado',
};
