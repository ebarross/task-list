export type Task = {
  id: number;
  text: string;
};

export type TaskData = {
  text: string;
};

export type Section = {
  id: number;
  title: string;
  color: string;
  tasks: Task[];
};

export type SectionData = {
  title: string;
  color: string;
};
