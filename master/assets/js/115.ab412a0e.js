(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{631:function(e,o,t){"use strict";t.r(o);var a=t(1),i=Object(a.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"adr-057-app-wiring-part-i"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adr-057-app-wiring-part-i"}},[e._v("#")]),e._v(" ADR 057: App Wiring Part I")]),e._v(" "),t("h2",{attrs:{id:"changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),t("ul",[t("li",[e._v("2022-05-04: Initial Draft")])]),e._v(" "),t("h2",{attrs:{id:"status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),t("p",[e._v("PROPOSED Partially Implemented")]),e._v(" "),t("h2",{attrs:{id:"abstract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),t("p",[e._v("In order to make it easier to build Cosmos SDK modules and apps, we propose a new app wiring system based on\ndependency injection and declarative app configurations to replace the current "),t("code",[e._v("app.go")]),e._v(" code.")]),e._v(" "),t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),t("p",[e._v("A number of factors have made the SDK and SDK apps in their current state hard to maintain. A symptom of the current\nstate of complexity is "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/c3edbb22cab8678c35e21fe0253919996b780c01/simapp/app.go",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("simapp/app.go")]),t("OutboundLink")],1),e._v("\nwhich contains almost 100 lines of imports and is otherwise over 600 lines of mostly boilerplate code that is\ngenerally copied to each new project. (Not to mention the additional boilerplate which gets copied in "),t("code",[e._v("simapp/simd")]),e._v(".)")]),e._v(" "),t("p",[e._v("The large amount of boilerplate needed to bootstrap an app has made it hard to release independently versioned go\nmodules for Cosmos SDK modules as described in "),t("RouterLink",{attrs:{to:"/architecture/adr-053-go-module-refactoring.html"}},[e._v("ADR 053: Go Module Refactoring")]),e._v(".")],1),e._v(" "),t("p",[e._v("In addition to being very verbose and repetitive, "),t("code",[e._v("app.go")]),e._v(" also exposes a large surface area for breaking changes\nas most modules instantiate themselves with positional parameters which forces breaking changes anytime a new parameter\n(even an optional one) is needed.")]),e._v(" "),t("p",[e._v("Several attempts were made to improve the current situation including "),t("RouterLink",{attrs:{to:"/architecture/adr-033-protobuf-inter-module-comm.html"}},[e._v("ADR 033: Internal-Module Communication")]),e._v("\nand "),t("a",{attrs:{href:"https://github.com/allinbits/cosmos-sdk-poc",target:"_blank",rel:"noopener noreferrer"}},[e._v("a proof-of-concept of a new SDK"),t("OutboundLink")],1),e._v(". The discussions around these\ndesigns led to the current solution described here.")],1),e._v(" "),t("h2",{attrs:{id:"decision"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),t("p",[e._v('In order to improve the current situation, a new "app wiring" paradigm has been designed to replace '),t("code",[e._v("app.go")]),e._v(" which\ninvolves:")]),e._v(" "),t("ul",[t("li",[e._v("declaration configuration of the modules in an app which can be serialized to JSON or YAML")]),e._v(" "),t("li",[e._v("a dependency-injection (DI) framework for instantiating apps from the that configuration")])]),e._v(" "),t("h3",{attrs:{id:"dependency-injection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dependency-injection"}},[e._v("#")]),e._v(" Dependency Injection")]),e._v(" "),t("p",[e._v("When examining the code in "),t("code",[e._v("app.go")]),e._v(" most of the code simply instantiates modules with dependencies provided either\nby the framework (such as store keys) or by other modules (such as keepers). It is generally pretty obvious given\nthe context what the correct dependencies actually should be, so dependency-injection is an obvious solution. Rather\nthan making developers manually resolve dependencies, a module will tell the DI container what dependency it needs\nand the container will figure out how to provide it.")]),e._v(" "),t("p",[e._v("We explored several existing DI solutions in golang and felt that the reflection-based approach in "),t("a",{attrs:{href:"https://github.com/uber-go/dig",target:"_blank",rel:"noopener noreferrer"}},[e._v("uber/dig"),t("OutboundLink")],1),e._v("\nwas closest to what we needed but not quite there. Assessing what we needed for the SDK, we designed and built\nthe Cosmos SDK "),t("a",{attrs:{href:"https://pkg.go.dev/github.com/cosmos/cosmos-sdk/depinject",target:"_blank",rel:"noopener noreferrer"}},[e._v("depinject module"),t("OutboundLink")],1),e._v(", which has the following\nfeatures:")]),e._v(" "),t("ul",[t("li",[e._v("dependency resolution and provision through functional constructors, ex: "),t("code",[e._v("func(need SomeDep) (AnotherDep, error)")])]),e._v(" "),t("li",[e._v("dependency injection "),t("code",[e._v("In")]),e._v(" and "),t("code",[e._v("Out")]),e._v(" structs which support "),t("code",[e._v("optional")]),e._v(" dependencies")]),e._v(" "),t("li",[e._v("grouped-dependencies (many-per-container) through the "),t("code",[e._v("AutoGroupType")]),e._v(" tag interface")]),e._v(" "),t("li",[e._v("module-scoped dependencies via "),t("code",[e._v("ModuleKey")]),e._v("s (where each module gets a unique dependency)")]),e._v(" "),t("li",[e._v("one-per-module dependencies through the "),t("code",[e._v("OnePerModuleType")]),e._v(" tag interface")]),e._v(" "),t("li",[e._v("sophisticated debugging information and container visualization via GraphViz")])]),e._v(" "),t("p",[e._v("Here are some examples of how these would be used in an SDK module:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("StoreKey")]),e._v(" could be a module-scoped dependency which is unique per module")]),e._v(" "),t("li",[e._v("a module's "),t("code",[e._v("AppModule")]),e._v(" instance (or the equivalent) could be a "),t("code",[e._v("OnePerModuleType")])]),e._v(" "),t("li",[e._v("CLI commands could be provided with "),t("code",[e._v("AutoGroupType")]),e._v("s")])]),e._v(" "),t("p",[e._v("Note that even though dependency resolution is dynamic and based on reflection, which could be considered a pitfall\nof this approach, the entire dependency graph should be resolved immediately on app startup and only gets resolved\nonce (except in the case of dynamic config reloading which is a separate topic). This means that if there are any\nerrors in the dependency graph, they will get reported immediately on startup so this approach is only slightly worse\nthan fully static resolution in terms of error reporting and much better in terms of code complexity.")]),e._v(" "),t("h3",{attrs:{id:"declarative-app-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#declarative-app-config"}},[e._v("#")]),e._v(" Declarative App Config")]),e._v(" "),t("p",[e._v("In order to compose modules into an app, a declarative app configuration will be used. This configuration is based off\nof protobuf and its basic structure is very simple:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"cGFja2FnZSBjb3Ntb3MuYXBwLnYxOwoKbWVzc2FnZSBDb25maWcgewogIHJlcGVhdGVkIE1vZHVsZUNvbmZpZyBtb2R1bGVzID0gMTsKfQoKbWVzc2FnZSBNb2R1bGVDb25maWcgewogIHN0cmluZyBuYW1lID0gMTsKICBnb29nbGUucHJvdG9idWYuQW55IGNvbmZpZyA9IDI7Cn0K"}}),e._v(" "),t("p",[e._v("(See also https://github.com/cosmos/cosmos-sdk/blob/6e18f582bf69e3926a1e22a6de3c35ea327aadce/proto/cosmos/app/v1alpha1/config.proto)")]),e._v(" "),t("p",[e._v("The configuration for every module is itself a protobuf message and modules will be identified and loaded based\non the protobuf type URL of their config object (ex. "),t("code",[e._v("cosmos.bank.module.v1.Module")]),e._v("). Modules are given a unique short "),t("code",[e._v("name")]),e._v("\nto share resources across different versions of the same module which might have a different protobuf package\nversions (ex. "),t("code",[e._v("cosmos.bank.module.v2.Module")]),e._v(").")]),e._v(" "),t("p",[e._v("An example app config in YAML might look like this:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"yaml",base64:"bW9kdWxlczoKICAtIG5hbWU6IGJhc2VhcHAKICAgIGNvbmZpZzoKICAgICAgJnF1b3Q7QHR5cGUmcXVvdDs6IGNvc21vcy5iYXNlYXBwLm1vZHVsZS52MS5Nb2R1bGUKICAgICAgYmVnaW5fYmxvY2tlcnM6IFtzdGFraW5nLCBhdXRoLCBiYW5rXQogICAgICBlbmRfYmxvY2tlcnM6IFtiYW5rLCBhdXRoLCBzdGFraW5nXQogICAgICBpbml0X2dlbmVzaXM6IFtiYW5rLCBhdXRoLCBzdGFraW5nXQogIC0gbmFtZTogYXV0aAogICAgY29uZmlnOgogICAgICAmcXVvdDtAdHlwZSZxdW90OzogY29zbW9zLmF1dGgubW9kdWxlLnYxLk1vZHVsZQogICAgICBiZWNoMzJfcHJlZml4OiAmcXVvdDtmb28mcXVvdDsKICAtIG5hbWU6IGJhbmsKICAgIGNvbmZpZzoKICAgICAgJnF1b3Q7QHR5cGUmcXVvdDs6IGNvc21vcy5iYW5rLm1vZHVsZS52MS5Nb2R1bGUKICAtIG5hbWU6IHN0YWtpbmcKICAgIGNvbmZpZzoKICAgICAgJnF1b3Q7QHR5cGUmcXVvdDs6IGNvc21vcy5zdGFraW5nLm1vZHVsZS52MS5Nb2R1bGUK"}}),e._v(" "),t("p",[e._v("In the above example, there is a hypothetical "),t("code",[e._v("baseapp")]),e._v(" module which contains the information around ordering of\nbegin blockers, end blockers, and init genesis. Rather than lifting these concerns up to the module config layer,\nthey are themselves handled by a module which could allow a convenient way of swapping out different versions of\nbaseapp (for instance to target different versions of tendermint), without needing to change the rest of the config.\nThe "),t("code",[e._v("baseapp")]),e._v(" module would then provide to the server framework (which sort of sits outside the ABCI app) an instance\nof "),t("code",[e._v("abci.Application")]),e._v(".")]),e._v(" "),t("p",[e._v("In this model, an app is "),t("em",[e._v("modules all the way down")]),e._v(" and the dependency injection/app config layer is very much\nprotocol-agnostic and can adapt to even major breaking changes at the protocol layer.")]),e._v(" "),t("h3",{attrs:{id:"module-protobuf-registration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#module-protobuf-registration"}},[e._v("#")]),e._v(" Module & Protobuf Registration")]),e._v(" "),t("p",[e._v("In order for the two components of dependency injection and declarative configuration to work together as described,\nwe need a way for modules to actually register themselves and provide dependencies to the container.")]),e._v(" "),t("p",[e._v("One additional complexity that needs to be handled at this layer is protobuf registry initialization. Recall that\nin both the current SDK "),t("code",[e._v("codec")]),e._v(" and the proposed "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/11802",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR 054: Protobuf Semver Compatible Codegen"),t("OutboundLink")],1),e._v(",\nprotobuf types need to be explicitly registered. Given that the app config itself is based on protobuf and\nuses protobuf "),t("code",[e._v("Any")]),e._v(" types, protobuf registration needs to happen before the app config itself can be decoded. Because\nwe don't know which protobuf "),t("code",[e._v("Any")]),e._v(" types will be needed a priori and modules themselves define those types, we need\nto decode the app config in separate phases:")]),e._v(" "),t("ol",[t("li",[e._v("parse app config JSON/YAML as raw JSON and collect required module type URLs (without doing proto JSON decoding)")]),e._v(" "),t("li",[e._v("build a "),t("a",{attrs:{href:"https://pkg.go.dev/google.golang.org/protobuf@v1.28.0/reflect/protoregistry",target:"_blank",rel:"noopener noreferrer"}},[e._v("protobuf type registry"),t("OutboundLink")],1),e._v(" based\non file descriptors and types provided by each required module")]),e._v(" "),t("li",[e._v("decode the app config as proto JSON using the protobuf type registry")])]),e._v(" "),t("p",[e._v("Because in "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/11802",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR 054: Protobuf Semver Compatible Codegen"),t("OutboundLink")],1),e._v(", each module\nshould use "),t("code",[e._v("internal")]),e._v(" generated code which is not registered with the global protobuf registry, this code should provide\nan alternate way to register protobuf types with a type registry. In the same way that "),t("code",[e._v(".pb.go")]),e._v(" files currently have a\n"),t("code",[e._v("var File_foo_proto protoreflect.FileDescriptor")]),e._v(" for the file "),t("code",[e._v("foo.proto")]),e._v(", generated code should have a new member\n"),t("code",[e._v("var Types_foo_proto TypeInfo")]),e._v(" where "),t("code",[e._v("TypeInfo")]),e._v(" is an interface or struct with all the necessary info to register both\nthe protobuf generated types and file descriptor.")]),e._v(" "),t("p",[e._v("So a module must provide dependency injection providers and protobuf types, and takes as input its module\nconfig object which uniquely identifies the module based on its type URL.")]),e._v(" "),t("p",[e._v("With this in mind, we define a global module register which allows module implementations to register themselves\nwith the following API:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUmVnaXN0ZXIgcmVnaXN0ZXJzIGEgbW9kdWxlIHdpdGggdGhlIHByb3ZpZGVkIHR5cGUgbmFtZSAoZXguIGNvc21vcy5iYW5rLm1vZHVsZS52MS5Nb2R1bGUpCi8vIGFuZCB0aGUgcHJvdmlkZWQgb3B0aW9ucy4KZnVuYyBSZWdpc3Rlcihjb25maWdUeXBlTmFtZSBwcm90b3JlZmxlY3QuRnVsbE5hbWUsIG9wdGlvbiAuLi5PcHRpb24pIHsgLi4uIH0KCnR5cGUgT3B0aW9uIHsgLyogcHJpdmF0ZSBtZXRob2RzICovIH0KCi8vIFByb3ZpZGUgcmVnaXN0ZXJzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIHByb3ZpZGVyIGZ1bmN0aW9ucyB3aGljaCB3b3JrIHdpdGggdGhlCi8vIGNvc21vcy1zZGsgY29udGFpbmVyIG1vZHVsZS4gVGhlc2UgZnVuY3Rpb25zIGNhbiBhbHNvIGFjY2VwdCBhbiBhZGRpdGlvbmFsCi8vIHBhcmFtZXRlciBmb3IgdGhlIG1vZHVsZSdzIGNvbmZpZyBvYmplY3QuCmZ1bmMgUHJvdmlkZShwcm92aWRlcnMgLi4uaW50ZXJmYWNle30pIE9wdGlvbiB7IC4uLiB9CgovLyBUeXBlcyByZWdpc3RlcnMgcHJvdG9idWYgVHlwZUluZm8ncyB3aXRoIHRoZSBwcm90b2J1ZiByZWdpc3RyeS4KZnVuYyBUeXBlcyh0eXBlcyAuLi5UeXBlSW5mbykgT3B0aW9uIHsgLi4uIH0K"}}),e._v(" "),t("p",[e._v("Ex:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBpbml0KCkgewoJbW9kdWxlLlJlZ2lzdGVyKCZxdW90O2Nvc21vcy5iYW5rLm1vZHVsZS52MS5Nb2R1bGUmcXVvdDssCgkJbW9kdWxlLlR5cGVzKAoJCQl0eXBlcy5UeXBlc190eF9wcm90bywKICAgICAgICAgICAgdHlwZXMuVHlwZXNfcXVlcnlfcHJvdG8sCiAgICAgICAgICAgIHR5cGVzLlR5cGVzX3R5cGVzX3Byb3RvLAoJICAgICksCgkgICAgbW9kdWxlLlByb3ZpZGUoCgkJCXByb3ZpZGVCYW5rTW9kdWxlLAoJICAgICkKCSkKfQoKdHlwZSBpbnB1dHMgc3RydWN0IHsKCWNvbnRhaW5lci5JbgoJCglBdXRoS2VlcGVyIGF1dGguS2VlcGVyCglEQiBvcm1kYi5Nb2R1bGVEQgp9Cgp0eXBlIG91dHB1dHMgc3RydWN0IHsKCUtlZXBlciBiYW5rLktlZXBlcgoJSGFuZGxlciBhcHAuSGFuZGxlciAvLyBhcHAuSGFuZGxlciBpcyBhIGh5cG90aGV0aWNhbCB0eXBlIHdoaWNoIHJlcGxhY2VzIHRoZSBjdXJyZW50IEFwcE1vZHVsZQp9CgpmdW5jIHByb3ZpZGVCYW5rTW9kdWxlKGNvbmZpZyB0eXBlcy5Nb2R1bGUsIGlucHV0cykgKG91dHB1dHMsIGVycm9yKSB7IC4uLiB9Cg=="}}),e._v(" "),t("p",[e._v("Note that in this module, a module configuration object "),t("em",[e._v("cannot")]),e._v(" register different dependency providers based on the\nconfiguration. This is intentional because it allows us to know globally which modules provide which dependencies. This\ncan help us figure out issues with missing dependencies in an app config if the needed modules are loaded at runtime.\nIn cases where required modules are not loaded at runtime, it may be possible to guide users to the correct module if\nthrough a global Cosmos SDK module registry.")]),e._v(" "),t("h3",{attrs:{id:"new-app-go"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-app-go"}},[e._v("#")]),e._v(" New "),t("code",[e._v("app.go")])]),e._v(" "),t("p",[e._v("With this setup, "),t("code",[e._v("app.go")]),e._v(" might now look something like this:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBtYWluCgppbXBvcnQgKAoJLy8gRWFjaCBnbyBwYWNrYWdlIHdoaWNoIHJlZ2lzdGVycyBhIG1vZHVsZSBtdXN0IGJlIGltcG9ydGVkIGp1c3QgZm9yIHNpZGUtZWZmZWN0cwoJLy8gc28gdGhhdCBtb2R1bGUgaW1wbGVtZW50YXRpb25zIGFyZSByZWdpc3RlcmVkLgoJXyAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3gvYXV0aC9tb2R1bGUmcXVvdDsKCV8gJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay94L2JhbmsvbW9kdWxlJnF1b3Q7CglfICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9zdGFraW5nL21vZHVsZSZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9jb3JlL2FwcCZxdW90OwopCgovLyBnbzplbWJlZCBhcHAueWFtbAp2YXIgYXBwQ29uZmlnWUFNTCBbXWJ5dGUKCmZ1bmMgbWFpbigpIHsKCWFwcC5SdW4oYXBwLkxvYWRZQU1MKGFwcENvbmZpZ1lBTUwpKQp9Cg=="}}),e._v(" "),t("h3",{attrs:{id:"application-to-existing-sdk-modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#application-to-existing-sdk-modules"}},[e._v("#")]),e._v(" Application to existing SDK modules")]),e._v(" "),t("p",[e._v("So far we have described a system which is largely agnostic to the specifics of the SDK such as store keys, "),t("code",[e._v("AppModule")]),e._v(",\n"),t("code",[e._v("BaseApp")]),e._v(", etc. A second app wiring ADR will be created which outlines the details of how this app wiring system will\nbe applied to the existing SDK in a way that:")]),e._v(" "),t("ol",[t("li",[e._v("is as easy to apply to existing modules as possible,")]),e._v(" "),t("li",[e._v("while also making it possible to improve existing APIs and minimize long-term technical debt")])]),e._v(" "),t("h2",{attrs:{id:"consequences"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),t("h3",{attrs:{id:"backwards-compatibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),t("p",[e._v("Modules which work with the new app wiring system do not need to drop their existing "),t("code",[e._v("AppModule")]),e._v(" and "),t("code",[e._v("NewKeeper")]),e._v("\nregistration paradigms. These two methods can live side-by-side for as long as is needed.")]),e._v(" "),t("h3",{attrs:{id:"positive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),t("ul",[t("li",[e._v("wiring up new apps will be simpler, more succinct and less error-prone")]),e._v(" "),t("li",[e._v("it will be easier to develop and test standalone SDK modules without needing to replicate all of simapp")]),e._v(" "),t("li",[e._v("it may be possible to dynamically load modules and upgrade chains without needing to do a coordinated stop and binary\nupgrade using this mechanism")]),e._v(" "),t("li",[e._v("easier plugin integration")]),e._v(" "),t("li",[e._v("easier way to manage app construction for tools like Ignite CLI")]),e._v(" "),t("li",[e._v("dependency injection framework provides more automated reasoning about dependencies in the project, with a graph visualization.")])]),e._v(" "),t("h3",{attrs:{id:"negative"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),t("ul",[t("li",[e._v("it may be confusing when a dependency is missing although error messages, the GraphViz visualization, and global\nmodule registration may help with that")])]),e._v(" "),t("h3",{attrs:{id:"neutral"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),t("ul",[t("li",[e._v("it will require work and education")])]),e._v(" "),t("h2",{attrs:{id:"further-discussions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-discussions"}},[e._v("#")]),e._v(" Further Discussions")]),e._v(" "),t("p",[e._v("As mentioned above, a second app wiring ADR will be created to describe more specifics than there is space to go\ninto here. Further discussions will also happen within the Cosmos SDK Framework Working Group and in https://github.com/cosmos/cosmos-sdk/discussions/10582.")]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ul",[t("li",[e._v("https://github.com/cosmos/cosmos-sdk/blob/c3edbb22cab8678c35e21fe0253919996b780c01/simapp/app.go")]),e._v(" "),t("li",[e._v("https://github.com/allinbits/cosmos-sdk-poc")]),e._v(" "),t("li",[e._v("https://github.com/uber-go/dig")]),e._v(" "),t("li",[e._v("https://github.com/google/wire")]),e._v(" "),t("li",[e._v("https://pkg.go.dev/github.com/cosmos/cosmos-sdk/container")]),e._v(" "),t("li",[e._v("https://github.com/cosmos/cosmos-sdk/pull/11802")])])],1)}),[],!1,null,null,null);o.default=i.exports}}]);