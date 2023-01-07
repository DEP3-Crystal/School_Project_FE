import { SchedulerEvent } from "@progress/kendo-angular-scheduler";


export class SessionWithoutRef{
    id?: Number;
    title!: string;
    description?: string;
    start!: Date;
    end!: Date;
    regDate!:Date;
    isOptional?: boolean;
    difficultyLevel?: string;
    keywords?: string;
    ratingSum?: number;
    ratingCount?: number;
  
  }