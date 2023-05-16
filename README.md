# Solid Compound

Solid Compound is a software library/framework for the [Solid](https://solidproject.org/) ecosystem that allows Solid developers to easily build web applications that are compatible with the [Solid specification](https://solidproject.org/TR/protocol) but also offer a way to use the web applications in a "traditional" way (without Solid), meaning, where the application authenticates users and stores their data.
With this library a developer can build web applications that have the capabilities to: 

1. store data locally in the app's own storage or in the user's [Solid Pod](https://solidproject.org/users/get-a-pod)
2. authenticate users using eg. credentials (email address/password) stored with the app or allow authentication with [Solid-OIDC](https://solidproject.org/TR/oidc)
3. keep their data securely in the app's storage or migrate their data at a later stage to a Solid Pod
4. use an existing Solid Pod or create a Solid Pod for the user with one of the existing Pod providers

## Abstract

### Solid Compound - Bridging the Gap between Traditional Web and Solid Ecosystem

Solid Compound is an innovative library designed to streamline the integration of web applications into the Solid ecosystem. It providies functionality to Solid App developers to make their Solid Apps be usable without end-users needing a Solid Pod or a WebID. This lowers the barrier of entry for new end-users and allows everyone to use newly crafted and innovative Solid applications.

Solid Compound offers a hybrid data storage approach, allowing for data to be stored either in the application's datastore (but Solid-ready) or in the user's Solid pod. It also enables user authentication either done by the application or Solid-OIDC. This merging of traditional web development with Solid-compatible systems also extends the functionality to include a feature that enables data and identity migration from an application's datastore to a user's pod when they are ready.

This hybrid approach ensures a smooth transition towards a more decentralized web, while simultaneously broadening the reach of Solid developers to users who may not yet be familiar with the Solid ecosystem.
