import { Teacher } from './../../domain/entities/Teacher';
import { ITeacherRepository} from "./../../domain/interfaces/ITeacherRepository";
import { Request, Response } from "express";

export class TeacherController {
    constructor(private _teacherRepository: ITeacherRepository) {}


public async create(request: Request, response: Response): Promise<Response> {

        /**
     * @swagger
     * /api/teachers:
     *   post:
     *     summary: Crea un nuevo profesor
     *     description: Crea un nuevo profesor con los datos proporcionados.
     *     tags:
     *       - Profesores
     *     requestBody:
     *       description: Datos del profesor a crear
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Teacher'
     *     responses:
     *       '201':
     *         description: Profesor creado exitosamente.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Teacher'
     *       '500':
     *         description: Error interno del servidor.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 errorMessage:
     *                   type: string
     *                   description: Descripción del error.
     *                 code:
     *                   type: integer
     *                   description: Código de error.
     *             example:
     *               errorMessage: Houston tenemos un problema!
     *               code: 9999
     */

    try {
        const { name, description, email, birthDate } = request.body;
        const teacher: Teacher = new Teacher(name, description, email, new Date(birthDate));
        const createdTeacher = await this._teacherRepository.create(teacher);
        return response.status(201).json(createdTeacher);
    } catch (error) {
        return response.status(500).json({
            errorMessage: 'Lo sentimos, ha ocurrido un error',
            code: 9999
        });
    }
}

}

