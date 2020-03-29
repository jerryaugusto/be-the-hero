const express = require("express");
const cors = require('cors');
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * GET: Buscar informações no back-end
 * POST: Criar Informações no back-end
 * PUT: Alterar informações no back-end
 * DELETE: Deletar informações no back-end
 */

/**
 * Tipos de parâmetros:
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar um único recurso
 * Request Body: Corpo da requisição, utilizado para criar ou alterar rescursos
 */



app.listen(3333);
