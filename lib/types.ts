export interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  link: string;
  live: string | null;
  bullets?: string[];
  tech: string[];
}