- Bài đặc biệt giới thiệu về CLB
- Làm front end post bài viết giống như Medium.com

### MVC and MERN

### 1. Collections / Model

- Projects

  - title
  - team
  - introUrl
  - active

- Leaders (reference http://www.adclub.org/The-Team)

  - name
  - term 
  - year
  - title
  - phoneNumber
  - active

- Events (reference http://www.adclub.org/events)
  - title
  - description
  - image
    - image file
    - image type
  - date
  - content
  - location
  - active

### 2. Controller

CRUD

- Create
- Read - Get items with Active == true
- Update
- Delete - Never really delete item: delete action = set Active to false

### 3. Route / RESTful

- URI : /api/projects

  - POST -> /api/projects = create new project
  - GET -> /api/projects?page = read all projects

- URI : /api/projects/:id

  - GET -> /api/projects/:id = read one project
  - PATCH -> /api/projects/:id = update one project
  - DELETE -> /api/projects/:id = delete one project

- URI : /api/leaders

  - POST -> /api/leaders = create new leader
  - GET -> /api/leaders?page = read all leaders

- URI : /api/leaders/:title (Vice President => vice_president)

  - GET -> /api/leaders/:title = read one leader
  - PATCH -> /api/leaders/:title = update one leader
  - DELETE -> /api/leaders/:title = delete one leader

- URI : /api/events

  - POST -> /api/events = create new event
  - GET -> /api/events?page = read all events

- URI : /api/events/:id
  - GET -> /api/events/:id = read one event
  - PATCH -> /api/events/:id = update one event
  - DELETE -> /api/events/:id = delete one event

### 4. Cooked Data

NOTHING COOK