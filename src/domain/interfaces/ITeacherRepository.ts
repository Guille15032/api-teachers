import { Teacher } from "domain/entities/Teacher";

 export interface ITeacherRepository {
    create(teacher: Teacher): Promise<Teacher>;
 }
