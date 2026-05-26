import mateoAvatarAsset from '@/assets/mateo-avatar.webp';

const mateoAvatar = typeof mateoAvatarAsset === 'string' ? mateoAvatarAsset : mateoAvatarAsset.src;

export interface Author {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  sameAs: string[];
}

export const authors = {
  mateo: {
    name: 'Matéo Drouillard',
    role: "Fondateur d'UpvotePartners",
    bio: "Matéo Drouillard est le fondateur d'UpvotePartners, agence spécialisée en marketing Reddit et en GEO (Generative Engine Optimization). Il accompagne des startups pour transformer Reddit en canal d'acquisition organique et faire citer leur marque par les moteurs d'IA comme ChatGPT et Perplexity.",
    avatar: mateoAvatar,
    sameAs: ['https://www.linkedin.com/in/mateodrouillard/'],
  },
} as const satisfies Record<string, Author>;

export type AuthorKey = keyof typeof authors;

export function getAuthor(key: string): Author {
  return authors[key as AuthorKey] ?? authors.mateo;
}
