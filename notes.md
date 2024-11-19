- User.where.not(users) -> User.all.excluding(users)
- Generated columns
- try(:method_name) || default
- _1 for lambda arguments
- in routes use draw :api for other files
- bin/rails generate generator ApiClient
- rails routes --unused
- "production".inquiry.production? -> true
- Post.first.method(:comments).source_location

---

| Library | Use Case | Problem/Solution |
| - | - | - |
| Express | Server, routing, middlewares | Request/response |
| Ejs/pug | Templating Engine | Pod data rendered in browser |
| Solid-OIDC | Identity management | - |
| ? | Access Control | Site access control |
| bull/agenda | background jobs | |
| gulp/grunt | dev tasks | run tests etc. |
| node-cache -> CSS (persistance) | state | index to references |
| commander | cli | scripts to generate |

```sh
solid new my_app
     create
     create  README.md
     create  .gitignore
     create  package.json
     create  src
     ...
     create  tmp/cache
     ...
        run  npm ci

bin/solid server
bin/solid generate
  bin/solid generate controller <Name> <action>
    => name_controller.ts
    => route get /name/action
    => views/name/action
  bin/solid generate model
  bin/solid generate view
  bin/solid generate resource
bin/solid routes
bin/solid db:generate (default CSS)
```

Steps to build a blog/Twitter clone with Solid

- features
  - a user can write posts
  - a user can comment on a post
  - a user can delete their own post or comment
  - a user can decide the access to their post
    - public (everyone)
    - group (list of users)
    - private (only themselves)
  - an anonymous user can see public posts
  - a user can signup
- data entities
  1. Users
  2. Posts
  3. Comments
- LDO for interacting with solid data
- solid-auth-node for Solid authentication
- schema.org
- cli
  - solid new free_bird
  - solid generate model User name:text
  - solid generate model Post title:string body:text author:person
  - solid generate model Comment body:text author:person
  - solid generate controller User
  - solid generate controller Post
- authentication
  - login/register with solid
  - login/register with GitHub/Google
  - login/register with credentials -> this creates a pod with the credentials (CommunitySolidServer can already do this)
- storage
  - app uses for its own storage CommunitySolidServer, lets say references to existing users
  - app uses for users who register an account with the app, instead of using their external Solid Pod
- authorization
  - can see posts
  - can post
  - can edit post
  - etc.
- views
  - HTML templates that render Linked Data RDF
  - profiles (users)
  - posts
- router
  - shows profiles of registered users (discovery)
  - users/1/posts/1
- models
  - data access no matter where stored


### Milestone 1: Project Scaffolding and CLI

1. **Setup CLI:**
   - Create a CLI tool to scaffold new Solid projects: `solid new <project-name>`.
2. **Project Structure:**
   - Define a project structure that includes folders for models, controllers, views, routes, etc.

### Milestone 2: Model-View-Controller (MVC) Architecture

1. **Model Layer:**
   - Design an abstraction for data entities. Mapping models to schema.org entities for example
   - Create a model layer for data access, supporting various storage backends (including CommunitySolidServer).
     - LDO

2. **Controller Layer:**
   - Develop a controller layer for handling HTTP requests and interacting with the model layer.
   - Implement CRUD operations for entities.

3. **View Layer:**
   - Integrate a templating engine for rendering HTML templates.
   - Ensure views support Linked Data RDF for Solid compatibility.

### Milestone 3: Authentication and Authorization
1. **Authentication:**
   - Build authentication mechanisms supporting Solid, GitHub, Google, and custom credentials.

2. **Authorization:**
   - Define a flexible and extensible authorization system.
   - Implement default roles and permissions for common actions.

### Milestone 4: CLI for Code Generation
1. **Generate Commands:**
   - Create CLI commands for generating models, controllers, views, etc.
   - Example commands: `solid generate model User name:text`, `solid generate controller Post`.

### Milestone 5: Linked Data and Schema.org Integration
1. **Linked Data Handling:**
   - Implement libraries or utilities for handling Linked Data, including RDF serialization and parsing.

2. **Schema.org Integration:**
   - Ensure that data entities adhere to Schema.org standards for better interoperability.

### Milestone 6: Routing and Discovery
1. **Router Implementation:**
   - Develop a router system to handle URL routing and navigation.
   - Implement RESTful routes for entities.

2. **Discovery Mechanism:**
   - Create a mechanism for discovering users and posts within the application.

### Milestone 7: Access Control and Permissions
1. **Access Control Lists (ACLs):**
   - Design and implement a flexible ACL system for managing access to resources.

2. **Permission Definitions:**
   - Define permissions for common actions (view, create, edit, delete) and allow customization.

### Milestone 8: CLI Enhancements
1. **CLI Improvements:**
   - Expand CLI capabilities to support additional features as needed.
   - Example commands: `solid generate controller User`.

### Milestone 9: Documentation and Testing
1. **Framework Documentation:**
   - Create comprehensive documentation for developers using the framework.
   - Provide examples, tutorials, and API references.

2. **Testing Framework:**
   - Develop a testing framework to facilitate automated testing of applications built with the framework.

### Milestone 10: Community Engagement
1. **Community Building:**
   - Establish a community around the framework.
   - Encourage collaboration, gather feedback, and involve the community in the development process.

### Milestone 11: Continuous Improvement
1. **Iterate and Improve:**
   - Continuously iterate on the framework based on user feedback and evolving standards.
   - Stay informed about updates in the Solid ecosystem and related technologies.
