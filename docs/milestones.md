# Milestones

## Pre-work: Research and Interviews ( 6 days )

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

### Hybrid Database ( 30 days ) 

- Solid database API
  - The developer does here not care where the data is stored and is provided with
  - build library that uses existing Solid tools to authenticate with Solid IDPs and access Solid data


  - developing a library that stores data in a Solid compatible fashion that can be used as "classic" db library, exect that data are stored as linked data and live in the Solid specification.
- Hybrid feature: Add the feature store data either to the main app datastore or to the user datastore
- Testing

### Shared Database ( 20 days ) 

- Enable data to be shared freely
  - share data with specific users of the app 
  - make data publicly accessible
- Testing

### Data Migration ( 6  days ) 

  - Migration of data however it is stored using solid pod migrator
    - replace our internal webId with an external one ( could be a PR to the pod migrator ) 
  - Testing

### Solid Support for RemoteStorage.js ( 10 days ) 

 - Impove RemoteStorage.js to add Solid as a storage option alongside Google Drive and Dropbox


## Documentation ( 21 days )

- Full test suite
- Documentation on how to use solid-compound
- Pedagogic material
  - Build an example app that uses solid-compound
  - "Getting started"


## External Security and Accessibility Review ( 7 days )

 - fixes from the external security audit
 - accessibily

We keep a 30% margin in case our prediction are too optimistics, Otherwise, we will

## Improvement ( 14 days ) 

### Implement User Registration Initiation via Solid-OpenID Connect

 -  This enhancement will be beneficial to our framework's registration process and improves interoperability with various Identity Providers. As this improvement is tied to the solid-oidc specification it will also contribute positively to the entire Solid ecosystem. ( see https://github.com/solid/solid-oidc/issues/77)

### performance

  - Stress test and benchmark
  - Investigate alternative solutions to improve performance

## Maintenance ( 

- Provide maintenance
  - as Solid specification changes
  - developers start using solid-compound


## Showcase

- Press release
  - presentation a Solid World
  - conference FOSDEM 2024?
  - hackernews article

