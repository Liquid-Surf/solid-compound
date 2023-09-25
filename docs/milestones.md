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

- Research and understand the authentication flows and protocols of external OpenID Connect providers. ( 2 days ) 
- Design and implement the OIDC proxy service that sits in front of the Solid IDP. ( 10 days )
- Identify and enrich the authentication request from the external OIDC provider with the required Solid OpenID Connect fields. ( 5 days ) 
- Implement secure communication between the OIDC proxy and the Solid IDP. ( 5 days )
- Write robust tests of the OIDC proxy functionality with various external OIDC providers and ensure seamless registration with the Solid IDP using existing accounts. ( 5 days )
- Write documentation. ( 2 days ) 

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

### FedCM + WebID

The Federated Credential Management (FedCM) API allows web developers to query for user registered IDPs. Essentially, allowing end-users to select from their prefered IDPs in Solid Apps, not needing to remember their IDP nor be presented by a list of IDPs the web developer decided to show.

#### Milestones

- In-depth evaluation of Solid's IDP infrastructure and FedCM to identify potential integration points and ensure a harmonious fit
- Collaborate closely with the Solid and FedCM community to design a customized protocol for Solid IDPs to seamlessly interface with the FedCM API. This protocol will prioritize the privacy and security principles that both Solid and FedCM endorse
- Develop an intuitive user interface that empowers individuals to effortlessly manage their Solid identity and consent to federated authentication, all while maintaining a user-centric design approach
- Implement a beta version of the integrated system and subject it to rigorous security audits. Collect feedback from early users and security experts to ensure that the solution not only works seamlessly but also safeguards user privacy

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
