# Solid Compound

Solid Compound is a software library/framework for the [Solid](https://solidproject.org/) ecosystem that allows Solid developers to easily build web applications that are compatible with the [Solid specification](https://solidproject.org/TR/protocol) but also offer a way to use the web applications in a "traditional" way (without Solid), meaning, where the application authenticates users and stores their data.
With this library a developer can build web applications that have the capabilities to: 

1. store data locally in the app's own storage or in the user's [Solid Pod](https://solidproject.org/users/get-a-pod)
2. authenticate users using eg. credentials (email address/password) stored with the app or allow authentication with Solid-OIDC[4]
3. keep their data securely in the app's storage or migrate their data at a later stage to a Solid Pod
4. use an existing Solid Pod or create a Solid Pod for the user with one of the existing Pod providers

