/**
*@swagger
*   /files:
*       post:
*           summary: Uploads a file
*           requestBody:
*               content:
*                   multipart/form-data:
*                       schema:
*                           type: object
*                           required:
*                               - files
*                           properties:
*                               title:
*                                   type: string
*                               files:
*                                   type: array
*                                   items:
*                                       type: string
*                                       format: binary
*           responses:
*               200:
*                   description: ok
*/