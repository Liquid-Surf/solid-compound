# Proposal

## Solid Compound Library

### Info

Your name (max. 100 characters) Theo Meyer and Jan Schill
Email address <thwrk@proton.me> <janschill@proton.me>
Phone numbers
Organisation (max. 100 characters)
Country France & Denmark

### Project

Project name (max. 100 characters) Solid Compound Library

### Abstract: Can you explain the whole project and its expected outcome(s). (1200 characters)

We want to build a software library/framework for the Solid[1] ecosystem that allows Solid developers to easily build web applications that are compatible with the Solid specification[2] but also offer a way to use the web applications in a "traditional" way (without Solid), meaning, where the application authenticates users and stores their data.
With this library a developer can build web applications that have the capabilities to:

1. store data locally in the app's own storage or in the user's Solid Pod[3]
2. authenticate users using eg. credentials (email address/password) stored with the app or allow authentication with Solid-OIDC[4]
3. keep their data securely in the app's storage or migrate their data at a later stage to a Solid Pod
4. use an existing Solid Pod or create a Solid Pod for the user with one of the existing Pod providers

Some of the functionalities already exist in the ecosystem. Where we see the innovation in this idea is to investigate how these efforts can be combined and improved on to offer an approachable tool for developers. We believe that such a tool could smooth the current steep learning curve for both users and developers, and therefore contribute to the adoption of Solid.

### Have you been involved with projects or organizations relevant to this project before? And if so, can you tell us a bit about your contributions?

Jan has made a research project and Master's thesis[1] on Solid at CERN where he has built two Solid components. One component was integrated with one of CERN's traditional web applications to enable commenting. The comments are then stored in the comment author's Solid Pod[2]. The other component is a function that can extract data from a WebId profile document and populate an HTML form[3]. Another Solid App that he has built as a side project is a Solid App store, where Solid developers can promote their Solid Apps[4].

Theo has also done his Master's thesis at CERN on Solid, focussing on the Community Solid Server[5] (abrievated CSS) . He has built two CSS components ( easy-token, profile-viewer). He also tinkering with solid on <https://liquid.surf>, experimenting alternative to WebIds syntax[6], and mainly working on a Solid server based on CSS and Penny, with an incentive on ease of use[7].

Both our projects Solidapp.store and liquid.surf could make use of a framework such as Solid Compound.

[1: https://github.com/janschill/cern-solid-code-investigation]
[2: https://github.com/janschill/solid-comment]
[3: https://github.com/janschill/solid-autocomplete]
[4: https://solidapp.store]
[5: https://gitlab.com/joeitu/cern-solid]
[6: https://alias.liquid.surf]
[7: https://pod.liquid.surf]

### Requested support

Requested Amount 50.000 (in Euro)

#### Explain what the requested budget will be used for?

#### Does the project have other funding sources, both past and present?

(If you want, you can in addition attach a budget at the bottom of the form)

daily fee: 350euro
50000/350 = 143 days budget

Part 1: Pre-work / state of the art (5% 7 days):

- Investigation on existing solutions such as soukai (DONE) (fork soukai or start from scratch)
- How should the data be stored? (full Pod act as a DB, SPARQL, relational database)
- Investigation on Solid data mover (Pod Migrator)
- API for creating pods
- Migrating authentication from credentials to Solid-OIDC

Part 2: Solid Database (25% ~ 36 days):

- Solid database library
  - developing a library that stores data in a Solid compatible fashion that can be used as "classic" db library, exect that data are stored as linked data and live in the Solid specification.
- Testing

Part 3: Hybrid Database (25% ~ 36 days):

- Hybrid feature: Add the feature store data either to the main app datastore or to the user datastore
- Testing

Part 4: Documenting (15% ~ 21 days):

- Full test suite
- Documentation on how to use the library
- pedagogic material
  - build an example app that uses the library
  - "Getting started"

We keep a 30% margin in case our prediction are too optimistics,
Otherwise, we will

Part 5: Improvement (10% ~ 14 days):

- Stress test and benchmark
- Investigate alternative solutions to improve performance

Part 6: Maintenance (10%)

- Provide maintenance as Solid specification changes

Part 7: Showcase (10%):

(including travel expenses)

- Press release
  - presentation a Solid World
  - conference FOSDEM 2024?
  - hackernews article

#### Compare your own project with existing or historical efforts

- Soukai-Solid:
  - "This library allows you to store and read data from a Solid POD using the Soukai ODM. Before going into Solid specifics, you should be familiar with Soukai basics so make sure to read the Soukai documentation first."
  - Soukai-solid is the closest project to our. If we first though of building our library on top soukai, we decided - after a talk with the main developer Noel De Martin - that the best decision was to build the librairy from scratch for multiple reason. In particular, it is build similarly to active record and is not mature enough to build on librairy on top of it, and it is build with active record.
  - <https://github.com/NoelDeMartin/soukai-solid>

- LDO
  - "LDO (Linked Data Objects) is a library that lets you easily manipulate RDF as if it were a standard TypeScript object that follows a ShEx shape you define."
  - <https://github.com/o-development/ldo>
- Pod Migrator
  - "Solid application and specification to forward and/or move solid data"
  - <https://github.com/pdsinterop/solid-migrator>

#### What are significant technical challenges you expect to solve during the project, if any?

Our foremost challenge is to abstract the complexities of Solid and provide a developer-friendly API, similar to traditional databases. Our objective is to make Solid more accessible, and providing a great developer experience is paramount to encourage widespread adoption of the library.

While our initial priority is to build a working and easy-to-use library, we would like in a second time to improve compatibility and performance.

The data migration tool presents a challenge, as multiple PODs exist and they may not all be fully compliant with the specifications[]. Our primary goal is to be compatible with the Community Solid Server, and if time and budget allow, we aim to extend compatibility to other data stores within the Solid ecosystem.

Finally, due to its file system and decentralized nature, Solid is known to have performance issues[]. We recognize that performance is a critical factor in the success of any library, therefore we intend to investigate ways to improve performance in the future.


#### Describe the ecosystem of the project, and how you will engage with relevant actors and promote the outcomes?

The Solid specification is still evolving, with its core developers actively considering feedback from the community. Testing the specification in a real-life application is a valuable opportunity to uncover new edge cases that can be reported back to the Solid community and contribute to its overall development. Also, in building the library, we aim to leverage existing solutions and build upon the work of others in the open source community, thus benefiting other open source projects as well.

### Refs

- <https://nlnet.nl/propose/>
- <https://nlnet.nl/entrust/>
- <https://nlnet.nl/assure/>
- <https://github.com/jeff-zucker/Solid-file-client>
