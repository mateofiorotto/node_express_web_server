import env from 'dotenv';
import envvar from 'env-var';

env.config();

//vars de entorno
export const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}

//forma vieja
// module.exports = {
//     envs
// }
