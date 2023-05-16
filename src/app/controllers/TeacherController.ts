import { ITeacherRepository } from "domain/interfaces/ITeacherRepository";

export class TeacherController{
    constructor(private _teacherRepository: ITeacherRepository){}
    public create(request: Request, response: Response): Promise<Response>{
        const{name, description, email, birthDate} = request.body;
        
    }
} 
