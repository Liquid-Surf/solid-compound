# Milestones

## Pre-work: Research and Interviews (7 days)

- Talk to Solid (App) developers
  - Understand current struggles
  - Help define interfaces to enable our project
  - List of potential candidates
    - Noel De Martin
    - Jeff Zucker
    - Michiel De Jong
    - Jackson Morgan
- Figure out how existing libraries can be used and what needs to be adapted
- Investigation on Solid data mover (Pod Migrator)
- API for creating pods with external pod providers

## Development

### Create WebID/Solid Pod API (15 days)

- With a local instance of CSS running along side Solid app
- Externally with a user picked Solid Pod provider
- Internally create WebID without CSS
- Testing

### Hybrid Storage (25 days)

- Internal storage
  - Either simply stored data in a locally running CSS instance
  - or create functionality to store RDF without hosting s Solid server and store in eg. Browser DB or SQLite. Use WebID from previous step for linking data with others
- External storage
  - Browser
  - With Solid Pod
  - With RemoteStorage compatible system
- Testing

### Access Data (25 days)

- Authentication and authorization
  - Integrate solid-client-authn for authenticating with Solid Pods
  - Integrate with other OAuth2 identity providers, such as GitHub
  - Provide basic auth
- Data Access Abstraction
  - Easy access to data wherever it resides
    - on top of existing Solid access libraries (if using LDflex, extend with write)
- Public data and sharing
  - Ensures that Solid concept of freely sharing is still applicable
  - Enable data to be shared freely
    - share data with specific users of the app
    - make data publicly accessible
- Testing

### Synchronization/migration feature (10 days)

- Synchronize WebIDs
- Transfer data from/to
  - RemoteStorage
  - Browser
  - Solid Pod
  - DB
- Testing

### Solid Support for RemoteStorage.js (10 days)

- Improve RemoteStorage.js to add Solid as a storage option alongside Google Drive and Dropbox

## Documentation (14 days)

- Full test suite
- Documentation on how to use solid-compound
- Pedagogic material
  - Build an example app that uses solid-compound
  - "Getting started"

## External Security and Accessibility Review (7 days)

- Improve project based on external security audit
- Accessibility

We keep a 30% margin in case our prediction are too optimistics, Otherwise, we will

## Improvement (14 days)

### Implement User Registration Initiation via Solid-OpenID Connect

- Implement OpenID Connect Prompt Create
  - This enhancement will be beneficial to our framework's registration process and improves interoperability with various Identity Providers.
  - As this improvement is tied to the solid-oidc specification it will also contribute positively to the entire Solid ecosystem.
- <https://github.com/solid/solid-oidc/issues/77>

### Performance

- Stress test and benchmark
- Investigate alternative solutions to improve performance

## Maintenance (14 days)

- Provide maintenance
  - as Solid specification changes
  - as developers start using solid-compound

## Showcase (6 days)

- Press release
  - Presentation at Solid World
  - Conference FOSDEM 2024
  - Hacker News article
