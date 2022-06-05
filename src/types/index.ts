export type Section = {
  id?: number;
  title: string;
  color: string;
};

export type Task = {
  id?: number;
  sectionId: number;
  text: string;
};
