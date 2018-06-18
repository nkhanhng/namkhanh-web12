1. Models:
- Design backend service:
    - nodejs
    - MVC
    - RESTful API

- Collection / Model:
    - User:
        - username
        - password
        - Name:
        - avatar:
        - email:
        - active:
    
    - Image:
        - ImageUrl
        - View
        - Like
        - CreatedAt
        - CreatedBy
        - Title
        - Description
        - active:
        - Comment:
            - Content
            - CreatedBy
            - CreatedAt

2. Controller:
    - CRUD
        + Create
        + Read 
        + Update 
        + Delete

3. Router:
    - Router server-side không trả về HTML, chỉ trả về dữ liệu.(JSON)
    - RESTful:
        -   GET -> Read : /api/images -> Read all image

            GET -> Read : /api/images?page=1 -> Read all image by page
            

            POST -> Create: /api/images -> Create new image

            PUT -> Update: /api/images/:id -> Update image with id

            DELETE -> Delete: /api/images/:id -> Delete image

            POST -> /api/images/:id/comments 

            DELETE -> /api/images/:Imageid/comments/:commentId

            POST -> /api/images/:id/like

            DELETE -> /api/images/:id/like

4. Cooked Data:
    GET -> User:
        - username
        - ava
        - Name
    
    POST -> Image:
        - ImageUrl
        - CreatedBy
        - Title
        - Description

#Authentication / Authorization