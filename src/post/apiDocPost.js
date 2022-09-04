/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:            
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *      name: Authorization
 *      in: header
 */


/**
 * @swagger
 * /post:
 *  get:
 *    tags:
 *      - Post
 *    summary: API untuk untuk mendapatkan semua post
 *    responses:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                user_id:
 *                  type: integer
 *                title:
 *                  type: string
 *                body:
 *                  type: string
 *                image:
 *                  type: string
 *                updatedAt:
 *                  type: string
 *                createdAt:
 *                  type: string
 */

/**
 * @swagger
 * /posts?writer=1:
 *  get:
 *    tags:
 *      - Post
 *    summary: API untuk untuk mendapatkan post dari penulis
 *    parameters:
 *        - in : query
 *          name: writer
 *          required: true
 *          schema: 
 *              type: integer
 *          description: id penulis
 *    responses:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                user_id:
 *                  type: integer
 *                title:
 *                  type: string
 *                body:
 *                  type: string
 *                image:
 *                  type: string
 *                updatedAt:
 *                  type: string
 *                createdAt:
 *                  type: string
 */

/**
 * @swagger
 * /post/{id}:
 *  get:
 *    tags:
 *      - Post
 *    summary: API untuk untuk mendapatkan post tunggal
 *    parameters:
 *        - in : path
 *          name: id
 *          required: true
 *          schema: 
 *              type: integer
 *              minimum: 1
 *          description: id postingan
 * 
 *    responses:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                user_id:
 *                  type: integer
 *                title:
 *                  type: string
 *                body:
 *                  type: string
 *                image:
 *                  type: string
 *                updatedAt:
 *                  type: string
 *                createdAt:
 *                  type: string
 */

/**
 * @swagger
 * /post/create:
 *  post:
 *    tags:
 *      - Post
 *    security: 
 *      - bearerAuth: []
 *    summary: API untuk untuk membuat postingan
 *    requestBody: 
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      title:
 *                          type: string
 *                      body:
 *                          type: string
 *                      image:
 *                          type: string
 * 
 *    responses:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                user_id:
 *                  type: integer
 *                title:
 *                  type: string
 *                body:
 *                  type: string
 *                image:
 *                  type: string
 *                updatedAt:
 *                  type: string
 *                createdAt:
 *                  type: string
 */

/**
 * @swagger
 * /post/update/{id}:
 *  put:
 *    tags:
 *      - Post
 *    security: 
 *      - bearerAuth: []
 *    summary: API untuk untuk membuat postingan
 *    parameters:
 *        - in : path
 *          name: id
 *          required: true
 *          schema: 
 *              type: integer
 *              minimum: 1
 *          description: id postingan
 *    requestBody: 
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      title:
 *                          type: string
 *                      body:
 *                          type: string
 *                      image:
 *                          type: string
 * 
 *    responses:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                user_id:
 *                  type: integer
 *                title:
 *                  type: string
 *                body:
 *                  type: string
 *                image:
 *                  type: string
 *                updatedAt:
 *                  type: string
 *                createdAt:
 *                  type: string
 */