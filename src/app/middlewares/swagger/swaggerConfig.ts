 import { Options, SwaggerDefinition } from 'swagger-jsdoc';

 const swaggerDefinition: SwaggerDefinition = {
    openapi:'3.0.0',

    info: {
        version: '1.0.0',  //Buscar que es semantic version
        title: 'API de profesores usando TypeScript para la Universidad Pontificia Bolivariana',
        description: 'En esta api se pueden crear profesores para tener un listado de toda la universidad'
    },

    servers: [
        {
            url: 'http://localhost:3000/api'
        }
    ]
 };
 

 const swaggerOptions: Options = {
    swaggerDefinition,
    apis: [
        './src/app/routes/*.ts',
        './src/app/controllers/*.ts',
        './src/domain/entities/*.ts'
    ]
 };

 export default swaggerOptions;