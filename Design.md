Bài đặc biệt giới thiệu về CLB
Chủ nhiệm có nên trong relation members?
Làm front end post bài viết giống như Medium.com

### MVC and MERN

### 1. Collections / Model

- Articles

  - title
  - description
  - createdBy
  - content : []

- Projects

  - title
  - teamName
  - introUrl

- Leaders (reference http://www.adclub.org/The-Team)

  - name
  - title
  - phoneNumber
  - active (DELETE phải đi kèm với POST)

* Events (reference http://www.adclub.org/events)
  - title
  - description
  - imageUrl
  - date
    - startAt
    - finishAt
  - articleUrl

### 2. Controller

CRUD

- Create
- Read - Get items with Active == true
- Update
- Delete - Never really delete item: delete action = set Active to false

### 3. Route / RESTful

URI : /api/articles
POST -> /api/articles = create new article
GET -> /api/articles?pages = read all articles

URI : /api/articles/:id
GET -> /api/articles/:id = read one article
PUT -> /api/articles/:id = update one article
DELETE -> /api/articles/:id = delete one article

URI : /api/projects
POST -> /api/projects = create new project
GET -> /api/projects?page = read all projects

URI : /api/projects/:id
GET -> /api/projects/:id = read one project
PUT -> /api/projects/:id = update one project
DELETE -> /api/projects/:id = delete one project

URI : /api/leaders
POST -> /api/leaders = create new leader
GET -> /api/leaders = read all leaders

URI : /api/leaders/:title (Vice President => vice_president)
GET -> /api/leaders/:title = read one leader
PUT -> /api/leaders/:title = update one leader
DELETE -> /api/leaders/:title = delete one leader

URI : /api/events
POST -> /api/events = create new event
GET -> /api/events?page = read all events

URI : /api/events/:id
GET -> /api/events/:id = read one event
PUT -> /api/events/:id = update one event
DELETE -> /api/events/:id = delete one event

### 4. Cooked Dat
NOTHIGN TO COOK