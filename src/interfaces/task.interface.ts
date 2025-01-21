export enum TaskState {
    Pending = "pending",
    InProgress = "in progress",
    Completed = "completed"
}

export interface ITask {
    _id:       string;
    task:      string;
    state:     TaskState;
    dueDate:   Date;
    user:      string;
    createdAt: Date;
    updatedAt: Date;
}