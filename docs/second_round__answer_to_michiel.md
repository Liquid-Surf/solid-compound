> You requested 50000 euro. Can you provide some more detail on how you arrived at this amount? Could you provide a breakdown of the main tasks, and the associated effort? What rates did you use?

  We utilized a 350-euro per day per developer daily fee for the following tasks:

   1.  Pre-work (5%, 7 days)
   2.  Solid Database development (25%, 36 days)
   3.  Hybrid Database feature (25%, 36 days)
   4.  Documentation and example app (15%, 21 days)
   5.  Improvement (10%, 14 days)
   6.  Maintenance (10%)
   7.  Communication and Showcase (10%)

  Total days: 143 days

With this budget, we aim to deliver a complete and well-finished product, incorporating documentation and maintenance.
The current estimation is based on our best judgment, but it is always difficult to know exactly how much time we will need to develop such a product and strike a balance between rapid delivery and a hard-to-maintain product or long-term sustainability.
We could aim for a smaller budget by eliminating steps 4, 5, 6, and 7, focusing solely on the development of a first POC. However, we believe that writing a successful library entails more than just constructing its core mechanics.

> If the library enables Solid to be used as if it is any other database, would this still help towards the interoperability goal of Solid: that different apps share a data model and read&write the same data?

Yes, behind the scenes the library would still store the data in an interoperable format such as RDF. Which makes it so attractive for users who do not have a Solid pod in the beginning but later want to migrate to one. The library will have all the data ready to be migrated to a Solid pod.


> As you say, your work is most similar to Soukai-solid; which you decided not to build on primarily because it is (1) built similarly to active record, (2) not mature enough, and (3) built on active record. Since reason 2, immaturity, sounds like something that you could contribute to, we are left with 1 and 3 (which sound roughly the same) as reasons to start from scratch. Clearly your developer-friendly API would thus be different from the ActiveRecord pattern; but could you give a description of what this API would then look like? (“similar to traditional databases” is broad — are we talking of a SQL-like API?)

We apologize for the confusing typo that we missed during our proofreading; indeed, steps 1 and 3 are similar.

We cannot provide specific API details at this stage, as the final design may either have a perfect bijection to an already established pattern or be strongly inspired by one. This is still subject to investigation. Drawing from our academic and professional experience in web development, we believe we have a good understanding of what a user-friendly data storage API should look like. We will take inspiration from the tools we have worked with and enjoyed using. A few options are available to use and need to be investigated. Using Comunica's library could be a good way to leverage the full potential of a knowledge graph, but could be exorbitant. Otherwise, a document based DB close to MongoDB could be an option, as we aim to store data in a Solid pod. 


> You further mention LDO and pod-migrator, without further comparison to your own proposal. Especially LDO sounds highly similar in its goals; could you reflect on its differences and unsuitability for your purpose?

LDO and LDFlex both provide good means of handling RDF within JavaScript, and it is highly probable that we will build our tool atop one of them. However, they do not handle authentication and do not offer the primary feature of our project: hybrid data storage. Our library aims to also facilitate the developer experience in these specific areas.
While authentication will be more a work of gluing bricks together. The hybrid storage feature we will have to build from scratch.

The pod-migrator project effectively addresses one of our concerns, which is the transition of data from one Solid pod to another. When using Solid Compound the data will be ready to be transferred using pod-migrator.

Our objective is not to reinvent the wheel, but build on top of the previously mentioned projects. By providing a new user case, it is inevitable that we will contribute to those projects, especially when addressing edge cases that emerge when developing our library.

> Could you also reflect on LDFlex; which is not mentioned in your proposal but shares the goal of improving developer experience? (See https://github.com/LDflex/LDflex/ and https://ruben.verborgh.org/blog/2018/12/28/designing-a-linked-data-developer-experience/)

From Ruben Verborgh's blog post

>The next leap for LDflex is obviously write: making it as easy to add or change data as it is to read. Because of the flexibility of Linked Data, writing comes with several challenges, such as where to store that data and how.

If we decide to build on top of LDflex rather than LDO, adding writing capabilies to LDflex will be one of the major contributions we can make to the library. However, it seems for the moment that LDO is more suited for our use-case. 
In any case we see our library as an extension of LDflex or LDO. We believe in the Unix philosophy of small tools with unique responsibility.  

>Besides your own projects that you mention, which other (types of) projects do expect to have a need for Solid Compound, that the mentioned other tools do not fulfill?

Currently, developers well-versed in Solid who wish to build an app face two choices: construct it in a traditional manner that users are accustomed to or create a Solid-compatible app. The latter introduces a significant entry barrier to the app, as users must be Solid-savvy and possess a pod. Consequently, if developers aim to attract users, they will likely opt for the first choice.

Our library allows developers to circumvent this issue and enjoy the best of both worlds. None of the mentioned tools provide an easy way to construct such a hybrid app without undertaking a workload similar to that of building this project.

>Have you validated this need with developers of other projects?

We've garnered favorable responses for our project, and we're convinced that this library can significantly aid in transitioning web apps to the Solid ecosystem. We're more than happy to engage in more formal concept validation through interviews and surveys targeting our audience to reinforce this hypothesis.
We had a talk with [Noel De Martin](https://noeldemartin.com/), author of several Solid apps and solid-soukai. He had mentioned an interest and possible future use of Solid Compound.

