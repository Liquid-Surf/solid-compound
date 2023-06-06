# Scenarios

A simple Node.js Solid to-do app. A user can have multiple lists, each list can have multiple items. A user can also share their lists with other users.

## User Stories

### Active Solid User

This user is familiar with Solid. Has a WebId and a Solid Pod.

1. The user visits the domain where the app is hosted
2. Upon first visit the user is prompted to authenticate
3. The user provides their Solid Pod address
4. The user is redirected to the Solid Pod's IDP to authenticate
5. The user is then again redirected to the app
6. Creates a list
7. Creates to-dos
8. Expects those to be stored in their newly created Solid Pod and can be still seen when returning to the site.

### New Solid User

This user is familiar with Solid. Has **no** WebId and **no** Solid Pod, but is willing to sign up for a WebId and create a Solid Pod.

1. The user visits the domain where the app is hosted
2. Upon first visit the user is prompted to authenticate
3. The user wants to create a WebId and Solid Pod
4. The user goes through a flow of providing a username for their WebId and Solid Pod
5. Picks from a list of existing Solid Pod providers (the app lets the user know if creation is not possible due to username *collision*)
6. To finalize the registration the user is redirected to their chosen Solid Pod provider's IDP
7. The user is then again redirected to the app
8. Creates a list
9. Creates to-dos
10. Expects those to be stored in their newly created Solid Pod and can be still seen when returning to the site.

### Non-Solid User

This user is **not** familiar with Solid and has **no** interest in creating a WebId or Solid Pod.

#### Creates Account with Solid App

This user wants to create an account with the app.

1. The user visits the domain where the app is hosted
2. Upon first visit the user is prompted to authenticate
3. The user wants to create an account with the app
4. Signs up with email address and password
5. Creates a list
6. Creates to-dos
7. Expects those to be stored with the app and can be still seen when returning to the site.

#### Authenticates Using Different IDP (GitHub)

This user wants to use one of their existing IDP, such as GitHub e.g.

1. The user visits the domain where the app is hosted
2. Upon first visit the user is prompted to authenticate
3. The user goes through an external sign up flow (OAuth2)
4. Creates a list
5. Creates to-dos
6. Expects those to be stored with the app and can be still seen when returning to the site.

#### Stores Data in External Storage Provider (Dropbox, Google Drive)

This user wants to use one of their existing hosted storage solutions such as Dropbox.

1. The user visits the domain where the app is hosted
2. Upon first visit the user is prompted to *optionally* authenticate
3. Creates a list
4. Creates to-dos
5. Uses RemoteStorage.js widget to sync their data to Dropbox/Google Drive
6. Upon returning to the site either uses their authenticate session to have the app fetch existing data or goes through the synchronize flow from step 5.

### Web Developer

This web developer is creating the to-do app in *regular* MVC manner.

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
