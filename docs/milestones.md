# Milestones

## Pre-work: Research and Interviews

- Talk to Solid (App) developers
  - Understand current struggles
  - Help define interfaces to enable our project
  - List of potential candidates
    - Noel De Martin
    - Jeff Zucker
    - Michiel De Jong
    - Jackson Morgan (LDO, O-Chat, IDP in CSS)
- Figure out how existing libraries can be used and what needs to be adapted
- Investigation on Solid data mover (Pod Migrator)
- API for creating pods with external pod providers

## Development

### Hybrid Database

- Solid database library
  -


  - developing a library that stores data in a Solid compatible fashion that can be used as "classic" db library, exect that data are stored as linked data and live in the Solid specification.
- Hybrid feature: Add the feature store data either to the main app datastore or to the user datastore
- Testing

### Shared Database

- Enable data to be shared freely
- Testing

### Data Migration

Migration of data however it is stored

-
- Testing

## Documentation

- Full test suite
- Documentation on how to use the library
- Pedagogic material
  - Build an example app that uses the library
  - "Getting started"

### Improvement (10% ~ 14 days)

- Stress test and benchmark
- Investigate alternative solutions to improve performance

### Maintenance (10%)

- Provide maintenance
  - as Solid specification changes
  - developers start using solid-compound

## External Security and Accessibility Review

## Showcase

- Press release
  - presentation a Solid World
  - conference FOSDEM 2024?
  - hackernews article

## Solid Support for RemoteStorage.js

## Implement User Registration Initiation via Solid-OpenID Connect
 -  Implement https://github.com/solid/solid-oidc/issues/77 to enhance the registration flow within solid-oidc. This enhancement will be beneficial to our framework's registration process and improves interoperability with various Identity Providers. As this improvement is tied to the solid-oidc specification it will also contribute positively to the entire Solid ecosystem.
