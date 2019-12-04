export interface Task
{
    name:       string;
    dueDate:    string;
    category:   string;

    dateCreated: number; //for sorting
}