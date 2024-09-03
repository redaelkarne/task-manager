export enum TaskState {
    EN_COURS = 'EN_COURS',
    A_FAIRE = 'A_FAIRE',
    TERMINEE = 'TERMINEE'
  }
  
  export class Task {
    constructor(
      public title: string,
      public description: string,
      public state: TaskState,
      public createdAt: Date = new Date()
    ) {}
  }