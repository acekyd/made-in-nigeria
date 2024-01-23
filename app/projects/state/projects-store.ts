import { create } from "zustand";

export type Projects = {
  data: {
    repoName: string;
    repoLink: string;
    repoAuthor: string;
    repoAuthorLink: string;
    repoDescription: string;
  }[];
};

// actions to either update (add or remove projects if the case applies)
export type ProjectAction = {
  addProjects: (project: Projects) => void;
};

const initialProjectValue: Projects = {
  data: [],
};

export const useProjectStore = create<Projects & ProjectAction>()((set) => ({
  ...initialProjectValue,

  addProjects: (project) =>
    set(() => ({
      data: project.data,
    })),
}));
