import { Router } from "express"; 
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from "./swaggerConfig";

const specs = swaggerJSDoc(swaggerOptions);
const swaggerRouter = Router();

swaggerRouter.use(swaggerUi.serve);
swaggerRouter.get('/', swaggerUi.setup(specs));

export default swaggerRouter;