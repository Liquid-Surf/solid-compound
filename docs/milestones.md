Sure, I've corrected some typos and made a few adjustments for clarity:

# Milestones

## Pre-work: Research and Interview

- Talk to Solid (App) developers
  - Understand current struggles
  - Help define interfaces to enable our project
  - List of potential candidates
    - Noel De Martin
    - Jeff Zucker
    - Michiel De Jong
    - Jackson Morgan
    - Angelo Veltens
    - Ruben Verborgh
- Figure out how existing libraries can be used and what needs to be adapted
- Investigation on Solid data mover (Pod Migrator)
- API for creating pods with external pod providers
- Other things Solid could need to improve onboarding?

## Improve Onboarding with Solid

### OIDC Proxy

Develop an identity bridge that enables end-users to register with a Solid IDP using their existing accounts from digital identity providers (e.g., Google, Facebook, GitHub). The OIDC proxy will enhance the authentication request from an external OpenID Connect / OAuth server with the necessary Solid OpenID Connect fields.

#### Milestones

  - Design and implement the OIDC proxy service using Express and TypeScript that sits in front of the Solid IDP. (5 days)
  - Integrate the above into CSS in the form of a CSS component, create a CSS recipe using componentjs. (2 days)
  - Identify and enrich the authentication request from the external OIDC provider with the required Solid OpenID Connect fields. (5 days)
  - Implement secure communication between the OIDC proxy and the Solid IDP. (3 days)
  - Write robust tests of the OIDC proxy functionality with various external OIDC providers and ensure seamless registration with the Solid IDP using existing accounts. (3 days)
  - Write documentation. (2 days)

#### Amount

20 days * 350 = 7000 Euro

### FedCM + WebID

The Federated Credential Management (FedCM) API allows web developers to query for user registered IDPs. Essentially, allowing end-users to select from their preferred IDPs in Solid Apps, not needing to remember their IDP nor be presented by a list of IDPs the web developer decided to show.

#### Milestones

- ✓ Build a proof of concept to allow querying the browser for "registered" IdPs (3 days)
- ✓ Write a blog post about the PoC (1 day)
- ✓ Build a test suite that checks an IdP's for FedCM compatibility (3 days)
- ✓ Integrate FedCM's HTTP API endpoints in CSS (2 days)
- ✓ Build a test client using Solid-OIDC + FedCM (1 day)
- Write a blog post on why FedCM is not compatible with Solid yet (1 day)
- Write a blog post on the potential of FedCM for the decentralized authentication ecosystem (1 day)
  - Share the blog post and reach out to the relevant community, answer questions, etc. (1 day)
- Add a proxy to handle DPoP tokens (2 days)

#### Amount

15 days * 350 = 5250 Euro

### User Registration Initiation via Solid-OpenID Connect

When an end-user signs up for an account with a Solid IDP, the registration flow does not log in the user after the registration is done. Which means when the end-user goes successfully through the Solid-OIDC registration flow of providing a username, email address, and password, they need to subsequently log in as well. The protocol does not do this automatically for them.

#### Milestones

- Review the existing Solid-OIDC specification and identify the necessary modifications for the pod signup protocol (2 days)
- Propose the required changes to the Solid community and gather feedback. (1 day)
- Update the Solid-OIDC specification to incorporate the pod signup feature. (2 days)
- Implement the changes in the Solid-OIDC library inside CSS and ensure compatibility with existing Solid applications. (10 days)
- Write Tests and documentation. (3 days)
- Test the pod signup functionality across different scenarios and validate its effectiveness in reducing friction for new users. (2 days)

#### Amount

20 days * 350 = 7000 Euro

### Multiple Pods Listed in Private Document

Develop a private file format in the user's Solid pod that allows listing and discovery of multiple storage locations.

#### Milestones

- Define the RDF-based file format for storing the information of multiple pod locations. (2 days)
- Create a CSS component to generate and update the private document in the user's pod. (4 days)
- Design and implement the logic to read and parse the private document to retrieve the list of storage locations, in the form of TypeScript code snippets usable by solid-app (4 days)
- Integrate the private document functionality into Solid applications to enable seamless discovery of different storage options, in the form of TypeScript code snippets usable by solid-app. (3 days)
- Test the private document functionality with various pod providers and ensure accurate retrieval of pod location information. (1 day)
- Write tests and documentation (4 days)
- Showcase the PoC and propose a contribution to the solid specification (2 days)

#### Amount

20 days * 350 = 7000 Euro

### Pivot / SolidCommunity.net Integration and Bug Fix

Keep the above project up to date and secure by providing maintenance.

#### Milestones

 - Provide a CORS proxy server (3 days) [Link](https://github.com/solid-contrib/pivot/issues/12)
 - Integrate the authentication proxy to pivot (0.5 days)
 - Include a `pim:storage` link in the webid profile document (2 days)
 - Integrate private storage into pivot (0.5 days)
 - Integrate the registration flow into pivot (0.5 days)
 - Integrate FedCM into pivot (0.5 days)
 - Display containers even if trailing slash is missing from the URL (3 days) [Link](https://github.com/CommunitySolidServer/CommunitySolidServer/issues/1208#issuecomment-1523120156)

#### Amount

10 days * 350 = 3500 Euro

Remains: 55 days

### Browser Extension

Build a browser extension to remember WebID and IdP (as a FedCM fallback).

Certainly! Here are the milestones for developing a browser extension to remember the Solid WebID and IDP used on particular Solid Apps:

## Browser Extension Development for Solid WebID and IDP Remembering

### Milestones

 - Define the architecture of the browser extension.
   - Decide on the storage mechanism for saving WebID and IDP information.
   - Determine how the extension will interact with Solid Apps.
- Implement Basic Extension Structure
- Storage Mechanism
   - Implement a storage mechanism for saving WebID and IDP information.
- Integration with Browser
   - Implement the necessary code to integrate the extension with the browser.
   - Ensure compatibility with popular browsers (e.g., Chrome, Firefox).
- Web App Interaction
   - Develop functionality to detect the WebID and IDP used on a particular Solid App.
   - Implement logic to save and update this information in the extension.
- Remembering Functionality
   - Implement the core functionality to remember the last used WebID and IDP for each Solid App.
- Options and Settings
   - Create a settings page for the extension.
   - Allow users to configure preferences, such as enabling/disabling remembering functionality.
- Testing
   - Conduct thorough testing of the extension in different browsers.
   - Test the extension with various Solid Apps to ensure compatibility.
- Documentation 
   - Create comprehensive documentation for users and developers.
   - Include installation instructions, usage guidelines, and any additional information.
- Publish the extension on relevant browser extension stores (e.g., Chrome Web Store, Firefox Add-ons).

### Solid App Development Framework

In this milestone, we are providing a framework to build a Solid App. It will be based on Express.

- Define the project structure of a Solid App
- Model-View-Controller
  - Abstraction for data entities
  - Layer for data access, from the app's storage or remote
  - RESTful routing
  - CRUD operations on models
  - Template engine rendering models
  - Form creator for data entities
- Authentication and Authorization
  - Creating a pod with the app
    - Sign up with credentials
    - Sign up using the previously developed OIDC Proxy
  - Sign up with Solid-OIDC
- Storage
  - Use CSS for app's persistence
- CLI for code generation
- Wiring existing libraries together (LDO, solid-client-authn-node)
- Write documentation
- Provide an example development of a blog app

### User Migration
