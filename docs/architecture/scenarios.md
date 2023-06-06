# Scenarios

A simple Node.js Solid to-do app. A user can have multiple lists, each list can have multiple items. A user can also share their lists with other users.

## User Stories

### Active Solid User

This user is familiar with Solid. Has a WebId and a Solid Pod.

### New Solid User

This user is familiar with Solid. Has **no** WebId and **no** Solid Pod, but is willing to sign up for a WebId and create a Solid Pod.

### Non-Solid User

This user is **not** familiar with Solid and has **no** interest in creating a WebId or Solid Pod.

#### Authenticates Using Different IDP (GitHub)

This user wants to use one of their existing IDP, such as GitHub e.g.

#### Creates Account with Solid App

This user wants to create an account with the app.

1. The user visits to-do-app.example
2. Upon first visit the user is prompted to authenticate
3. The user wan

### Web Developer

#### First Iteration (Basics)

Allow simple sign up and login with the app. Create to-dos through an HTML form with a RESTful HTTP router.

1. Build user sign up and login
   1. Authentication and authorization
   2. Use credentials and a simple session cookie
2. Setup a SQL databse
3. Define database schema for users, lists, and to-dos
4. Router with CRUD API for lists and to-dos

#### Second Iteration (Advanced Authentication)

Allow external identity providers, such as GitHub, through OpenID Connect.

1. Register application with the identity provider of choice
2. Update existing user schema with new signed_up_via field and necessary fields for OAuth2/OpenID Connect

#### Third Iteration (Shared Lists)

Allow a list to be shared with other users.

1. Way to discover or pass a user id to be shared with
   1. Could be by manually sending a link to the user it should be shared with
2. New UI page with *Shared Lists*
3. Update list schema with a field for storing user ids list was shared with
   1. First step the user with shared access, could maybe just see the list or also just have full access
   2. More fine grained authorization to the list could be done with a more sophisticated authorization system

### Solid App Developer

The Solid App developer wants to create an application that can house all the different end-users. The Solid App developer is familiar with Web development and has worked with Solid before, but is not an expert with all Solid paradigms.
