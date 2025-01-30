const express = require("express");
const userController = require("./controllers/userController");
const router = express.Router();

// Swagger UI Docs
const basicAuth = require("express-basic-auth");
const swaggerUi = require("swagger-ui-express");
const SwaggerDoc = require("../../middleware/swagger");
const Swagger = SwaggerDoc({ module: 'demo2', title: "API documentation" });
router.use(
    `/docs`,
    basicAuth({
      users: { demo: "demo" },
      challenge: true,
    }),
    swaggerUi.serveFiles(Swagger, {}),
    swaggerUi.setup(Swagger)
  );


/**
 * @swagger
 * tags:
 *   -  name: ABC
 *      description: จัดการข้อมูลผู้ใช้งาน
 *
 */

/**
 * @swagger
 * /user:
 *      get:
 *          tags: [ABC]
 *          responses:
 *              200:
 *                 description: Successfully
 */
router.get("/user", userController.userIndex);



/**
 * @swagger
 * /user/{id}:
 *      get:
 *          tags: [ABC]
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  description: รหัสหน่วยงาน
 *                  required: true
 *                  schema:
 *                      type: integer
 *              -   in: path
 *                  name: test
 *                  description: สำหรับทดสอบ
 *          responses:
 *              200:
 *                  description: Successfully
 */
router.get("/user/:id", userController.userFind);


module.exports = router;
