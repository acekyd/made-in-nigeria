export interface IRepository {
  name: {name: string, link: string};
  description: string;
  creator: {name: string, link: string};
  stacks?: [{key: string, value: number}]
}
