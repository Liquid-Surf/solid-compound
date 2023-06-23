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

Develop an identity bridge that enables end-users to register with a Solid IDP using their existing accounts from digital identity providers (e.g., Google, Facebook, GitHub). The OIDC proxy will enhance the authentication request from an external OpenID Connect server with the necessary Solid OpenID Connect fields.

#### Milestones

- Research and understand the authentication flows and protocols of external OpenID Connect providers.
- Design and implement the OIDC proxy service that sits in front of the Solid IDP.
- Identify and enrich the authentication request from the external OIDC provider with the required Solid OpenID Connect fields.
- Implement secure communication between the OIDC proxy and the Solid IDP.
- Test the OIDC proxy functionality with various external OIDC providers and ensure seamless registration with the Solid IDP using existing accounts.

#### Amount

10000 Euro

### User Registration Initiation via Solid-OpenID Connect

When an end-user signs up for an account with a Solid IDP the registration flow does not log in the user after the registration is done. Which means when the end-user goes successfully through the Solid-OIDC registration flow of providing a username, email address and password they need to subsequently log in as well. The protocol does not do this automatically for them.

#### Milestones

- Review the existing Solid-OIDC specification and identify the necessary modifications for the pod signup protocol.
- Propose the required changes to the Solid community and gather feedback.
- Update the Solid-OIDC specification to incorporate the pod signup feature.
- Implement the changes in the Solid-OIDC library inside CSS and ensure compatibility with existing Solid applications.
- Test the pod signup functionality across different scenarios and validate its effectiveness in reducing friction for new users.

#### Amount

10000 Euro

### Multiple Pods Listed in Private Document

Develop a private file format in the user's Solid pod that allows listing and discovery of multiple storage locations.

#### Milestones

- Define the RDF-based file format for storing the information of multiple pod locations.
- Create a mechanism to generate and update the private document in the user's pod.
- Design and implement the logic to read and parse the private document to retrieve the list of storage locations.
- Integrate the private document functionality into Solid applications to enable seamless discovery of different storage options.
- Test the private document functionality with various pod providers and ensure accurate retrieval of pod location information.

#### Amount

10000 Euro

### Cookie "Where is My Pod?" Page

Develop a website page called "Where is My Pod?" that sets a cookie to remember the Solid Pod's location for an end user.

#### Milestones

- Create the "Where is My Pod?" page with a user-friendly interface.
- Implement the logic to set a cookie containing the user's Solid Pod location.
- Handle multiple pod providers and allow users to select and save their preferred pod location.
- Test the cookie functionality across different browsers and verify the accurate retrieval of pod location from the cookie.
- Provide clear instructions and links to the "Where is My Pod?" page on relevant Solid websites and applications.

#### Amount

10000 Euro

### Autofill Field Type for WebID + Browser Extension

Develop an autofill field type for the WebID attribute and create a browser extension to facilitate autofilling information in Solid Apps.

#### Milestones

- Define the field type specification for WebID autofill in Solid Apps.
- Implement the autofill functionality to automatically populate WebID fields with relevant information.
- Create a browser extension compatible with major browsers to support the autofill functionality.
- Test the autofill feature across various Solid Apps and ensure seamless integration and accurate population of WebID fields.
- Provide clear documentation and instructions on how to install and use the browser extension for autofilling WebID attributes in Solid Apps.

#### Amount

10000 Euro

