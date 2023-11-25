/**
 * @swagger
 * tags:
 *   - name: Tags
 *     description: API para operações relacionadas ao leitor RFID MID40
 */
const express = require("express");
const router = express.Router();

const tagController = require("../controllers/tagController");

/**
 * @swagger
 * /api:
 *   get:
 *     summary: Verifica se o servidor está em execução
 *     tags: [Tags]
 *     responses:
 *       '200':
 *         description: O servidor está em execução
 */
router.get("/", tagController.serverRunning);
/**
 * @swagger
 * /api/tags:
 *   get:
 *     summary: Retorna todas as tags cadastradas no banco
 *     tags: [Tags]
 *     responses:
 *       '200':
 *         description: Lista todas as tags registradas
 */
router.get("/tags", tagController.getAllTags);
/**
 * @swagger
 * /api/tags/lastTag:
 *   get:
 *     summary: Retorna a última tag cadastrada no banco
 *     tags: [Tags]
 *     responses:
 *       '200':
 *         description: Retorna a última tag registrada
 */
router.get("/tags/lastTag", tagController.getLastTag);
/**
 * @swagger
 * /api/tags:
 *   post:
 *     summary: Adiciona uma nova tag ao banco
 *     tags: [Tags]
 *     responses:
 *       '200':
 *         description: Tag adicionada com sucesso
 */
router.post("/tags", tagController.addTag);
router.post("/tags/removeAll", tagController.removeTags);

module.exports = router;
