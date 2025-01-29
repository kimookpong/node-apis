const express = require("express");
const userController = require("./controllers/userController");
const swaggerUi = require("swagger-ui-express");
const SwaggerDoc = require("../../middleware/swagger");
const router = express.Router();

// Swagger UI setup
const swaggerDocument = new SwaggerDoc({module:"abc"});
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument.getSwaggerSpec()));
/**
 * @swagger
 * tags:
 *   -  name: Users
 *      description: จัดการข้อมูลผู้ใช้งาน
 *   -  name: Doc
 *      description: ข้อมูลเอกสาร
 *  
 */

/**
 * @swagger
 * /user:
 *      get:
 *          tags: [Doc]
 *          responses:
 *              200:
 *                 description: Successfully
 */
router.get("/user", userController.userIndex);

/**
 * @swagger
 * /user/{id}:
 *      get:
 *          tags: [Users]
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  required: true
 *                  schema:
 *                      type: integer
 *          responses:
 *              200:
 *                  description: Successfully
 */
router.get("/user/:id", userController.userFind);

/**
 * @swagger
 * /user/{id}:
 *      delete:
 *          tags: [Users]
 *          parameters:
 *              -   in: รหัสหน่วยงาน
 *                  name: id
 *                  required: true
 *                  schema:
 *                      type: integer
 *          responses:
 *              200:
 *                  description: Successfully
 */
router.delete("/user/:id", userController.userDetele);

module.exports = router;
