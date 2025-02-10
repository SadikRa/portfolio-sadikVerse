export interface IBlog {
  _id: string;
  title: string;
  thumbnails: string;
  content: string;
}

export type TProject = {
  _id: string;
  title: string;
  description: string;
  image: string;
  liveLink: string;
  technologies: string[];
};
