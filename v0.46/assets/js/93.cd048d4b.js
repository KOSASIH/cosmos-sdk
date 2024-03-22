(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{728:function(e,g,I){"use strict";I.r(g);var C=I(1),t=Object(C.a)({},(function(){var e=this,g=e.$createElement,I=e._self._c||g;return I("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[I("h1",{attrs:{id:"adr-032-typed-events"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#adr-032-typed-events"}},[e._v("#")]),e._v(" ADR 032: Typed Events")]),e._v(" "),I("h2",{attrs:{id:"changelog"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),I("ul",[I("li",[e._v("28-Sept-2020: Initial Draft")])]),e._v(" "),I("h2",{attrs:{id:"authors"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#authors"}},[e._v("#")]),e._v(" Authors")]),e._v(" "),I("ul",[I("li",[e._v("Anil Kumar (@anilcse)")]),e._v(" "),I("li",[e._v("Jack Zampolin (@jackzampolin)")]),e._v(" "),I("li",[e._v("Adam Bozanich (@boz)")])]),e._v(" "),I("h2",{attrs:{id:"status"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),I("p",[e._v("Proposed")]),e._v(" "),I("h2",{attrs:{id:"abstract"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),I("p",[e._v("Currently in the Cosmos SDK, events are defined in the handlers for each message as well as "),I("code",[e._v("BeginBlock")]),e._v(" and "),I("code",[e._v("EndBlock")]),e._v(". Each module doesn't have types defined for each event, they are implemented as "),I("code",[e._v("map[string]string")]),e._v(". Above all else this makes these events difficult to consume as it requires a great deal of raw string matching and parsing. This proposal focuses on updating the events to use "),I("strong",[e._v("typed events")]),e._v(" defined in each module such that emiting and subscribing to events will be much easier. This workflow comes from the experience of the Akash Network team.")]),e._v(" "),I("h2",{attrs:{id:"context"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),I("p",[e._v("Currently in the Cosmos SDK, events are defined in the handlers for each message, meaning each module doesn't have a cannonical set of types for each event. Above all else this makes these events difficult to consume as it requires a great deal of raw string matching and parsing. This proposal focuses on updating the events to use "),I("strong",[e._v("typed events")]),e._v(" defined in each module such that emiting and subscribing to events will be much easier. This workflow comes from the experience of the Akash Network team.")]),e._v(" "),I("p",[I("a",{attrs:{href:"http://github.com/ovrclk/akash",target:"_blank",rel:"noopener noreferrer"}},[e._v("Our platform"),I("OutboundLink")],1),e._v(" requires a number of programatic on chain interactions both on the provider (datacenter - to bid on new orders and listen for leases created) and user (application developer - to send the app manifest to the provider) side. In addition the Akash team is now maintaining the IBC "),I("a",{attrs:{href:"https://github.com/ovrclk/relayer",target:"_blank",rel:"noopener noreferrer"}},[I("code",[e._v("relayer")]),I("OutboundLink")],1),e._v(", another very event driven process. In working on these core pieces of infrastructure, and integrating lessons learned from Kubernetes developement, our team has developed a standard method for defining and consuming typed events in Cosmos SDK modules. We have found that it is extremely useful in building this type of event driven application.")]),e._v(" "),I("p",[e._v("As the Cosmos SDK gets used more extensively for apps like "),I("code",[e._v("peggy")]),e._v(", other peg zones, IBC, DeFi, etc... there will be an exploding demand for event driven applications to support new features desired by users. We propose upstreaming our findings into the Cosmos SDK to enable all Cosmos SDK applications to quickly and easily build event driven apps to aid their core application. Wallets, exchanges, explorers, and defi protocols all stand to benefit from this work.")]),e._v(" "),I("p",[e._v("If this proposal is accepted, users will be able to build event driven Cosmos SDK apps in go by just writing "),I("code",[e._v("EventHandler")]),e._v("s for their specific event types and passing them to "),I("code",[e._v("EventEmitters")]),e._v(" that are defined in the Cosmos SDK.")]),e._v(" "),I("p",[e._v("The end of this proposal contains a detailed example of how to consume events after this refactor.")]),e._v(" "),I("p",[e._v("This proposal is specifically about how to consume these events as a client of the blockchain, not for intermodule communication.")]),e._v(" "),I("h2",{attrs:{id:"decision"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),I("p",[I("strong",[e._v("Step-1")]),e._v(":  Implement additional functionality in the "),I("code",[e._v("types")]),e._v(" package: "),I("code",[e._v("EmitTypedEvent")]),e._v(" and "),I("code",[e._v("ParseTypedEvent")]),e._v(" functions")]),e._v(" "),I("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gdHlwZXMvZXZlbnRzLmdvCgovLyBFbWl0VHlwZWRFdmVudCB0YWtlcyB0eXBlZCBldmVudCBhbmQgZW1pdHMgY29udmVydGluZyBpdCBpbnRvIHNkay5FdmVudApmdW5jIChlbSAqRXZlbnRNYW5hZ2VyKSBFbWl0VHlwZWRFdmVudChldmVudCBwcm90by5NZXNzYWdlKSBlcnJvciB7CglldnRUeXBlIDo9IHByb3RvLk1lc3NhZ2VOYW1lKGV2ZW50KQoJZXZ0SlNPTiwgZXJyIDo9IGNvZGVjLlByb3RvTWFyc2hhbEpTT04oZXZlbnQpCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gZXJyCgl9CgoJdmFyIGF0dHJNYXAgbWFwW3N0cmluZ11qc29uLlJhd01lc3NhZ2UKCWVyciA9IGpzb24uVW5tYXJzaGFsKGV2dEpTT04sICZhbXA7YXR0ck1hcCkKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiBlcnIKCX0KCgl2YXIgYXR0cnMgW11hYmNpLkV2ZW50QXR0cmlidXRlCglmb3IgaywgdiA6PSByYW5nZSBhdHRyTWFwIHsKCQlhdHRycyA9IGFwcGVuZChhdHRycywgYWJjaS5FdmVudEF0dHJpYnV0ZXsKCQkJS2V5OiAgIFtdYnl0ZShrKSwKCQkJVmFsdWU6IHYsCgkJfSkKCX0KCgllbS5FbWl0RXZlbnQoRXZlbnR7CgkJVHlwZTogICAgICAgZXZ0VHlwZSwKCQlBdHRyaWJ1dGVzOiBhdHRycywKCX0pCgoJcmV0dXJuIG5pbAp9CgovLyBQYXJzZVR5cGVkRXZlbnQgY29udmVydHMgYWJjaS5FdmVudCBiYWNrIHRvIHR5cGVkIGV2ZW50CmZ1bmMgUGFyc2VUeXBlZEV2ZW50KGV2ZW50IGFiY2kuRXZlbnQpIChwcm90by5NZXNzYWdlLCBlcnJvcikgewoJY29uY3JldGVHb1R5cGUgOj0gcHJvdG8uTWVzc2FnZVR5cGUoZXZlbnQuVHlwZSkKCWlmIGNvbmNyZXRlR29UeXBlID09IG5pbCB7CgkJcmV0dXJuIG5pbCwgZm10LkVycm9yZigmcXVvdDtmYWlsZWQgdG8gcmV0cmlldmUgdGhlIG1lc3NhZ2Ugb2YgdHlwZSAlcSZxdW90OywgZXZlbnQuVHlwZSkKCX0KCgl2YXIgdmFsdWUgcmVmbGVjdC5WYWx1ZQoJaWYgY29uY3JldGVHb1R5cGUuS2luZCgpID09IHJlZmxlY3QuUHRyIHsKCQl2YWx1ZSA9IHJlZmxlY3QuTmV3KGNvbmNyZXRlR29UeXBlLkVsZW0oKSkKCX0gZWxzZSB7CgkJdmFsdWUgPSByZWZsZWN0Llplcm8oY29uY3JldGVHb1R5cGUpCiAgICB9CgoJcHJvdG9Nc2csIG9rIDo9IHZhbHVlLkludGVyZmFjZSgpLihwcm90by5NZXNzYWdlKQoJaWYgIW9rIHsKCQlyZXR1cm4gbmlsLCBmbXQuRXJyb3JmKCZxdW90OyVxIGRvZXMgbm90IGltcGxlbWVudCBwcm90by5NZXNzYWdlJnF1b3Q7LCBldmVudC5UeXBlKQoJfQoKCWF0dHJNYXAgOj0gbWFrZShtYXBbc3RyaW5nXWpzb24uUmF3TWVzc2FnZSkKCWZvciBfLCBhdHRyIDo9IHJhbmdlIGV2ZW50LkF0dHJpYnV0ZXMgewoJCWF0dHJNYXBbc3RyaW5nKGF0dHIuS2V5KV0gPSBhdHRyLlZhbHVlCgl9CgoJYXR0ckJ5dGVzLCBlcnIgOj0ganNvbi5NYXJzaGFsKGF0dHJNYXApCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gbmlsLCBlcnIKCX0KCgllcnIgPSBqc29ucGIuVW5tYXJzaGFsKHN0cmluZ3MuTmV3UmVhZGVyKHN0cmluZyhhdHRyQnl0ZXMpKSwgcHJvdG9Nc2cpCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gbmlsLCBlcnIKCX0KCglyZXR1cm4gcHJvdG9Nc2csIG5pbAp9Cg=="}}),e._v(" "),I("p",[e._v("Here, the "),I("code",[e._v("EmitTypedEvent")]),e._v(" is a method on "),I("code",[e._v("EventManager")]),e._v(" which takes typed event as input and apply json serialization on it. Then it maps the JSON key/value pairs to "),I("code",[e._v("event.Attributes")]),e._v(" and emits it in form of "),I("code",[e._v("sdk.Event")]),e._v(". "),I("code",[e._v("Event.Type")]),e._v(" will be the type URL of the proto message.")]),e._v(" "),I("p",[e._v("When we subscribe to emitted events on the tendermint websocket, they are emitted in the form of an "),I("code",[e._v("abci.Event")]),e._v(". "),I("code",[e._v("ParseTypedEvent")]),e._v(" parses the event back to it's original proto message.")]),e._v(" "),I("p",[I("strong",[e._v("Step-2")]),e._v(": Add proto definitions for typed events for msgs in each module:")]),e._v(" "),I("p",[e._v("For example, let's take "),I("code",[e._v("MsgSubmitProposal")]),e._v(" of "),I("code",[e._v("gov")]),e._v(" module and implement this event's type.")]),e._v(" "),I("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gcHJvdG8vY29zbW9zL2dvdi92MWJldGExL2dvdi5wcm90bwovLyBBZGQgdHlwZWQgZXZlbnQgZGVmaW5pdGlvbgoKcGFja2FnZSBjb3Ntb3MuZ292LnYxYmV0YTE7CgptZXNzYWdlIEV2ZW50U3VibWl0UHJvcG9zYWwgewogICAgc3RyaW5nIGZyb21fYWRkcmVzcyAgID0gMTsKICAgIHVpbnQ2NCBwcm9wb3NhbF9pZCAgICA9IDI7CiAgICBUZXh0UHJvcG9zYWwgcHJvcG9zYWwgPSAzOwp9Cg=="}}),e._v(" "),I("p",[I("strong",[e._v("Step-3")]),e._v(": Refactor event emission to use the typed event created and emit using "),I("code",[e._v("sdk.EmitTypedEvent")]),e._v(":")]),e._v(" "),I("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9nb3YvaGFuZGxlci5nbwpmdW5jIGhhbmRsZU1zZ1N1Ym1pdFByb3Bvc2FsKGN0eCBzZGsuQ29udGV4dCwga2VlcGVyIGtlZXBlci5LZWVwZXIsIG1zZyB0eXBlcy5Nc2dTdWJtaXRQcm9wb3NhbEkpICgqc2RrLlJlc3VsdCwgZXJyb3IpIHsKICAgIC4uLgogICAgdHlwZXMuQ29udGV4dC5FdmVudE1hbmFnZXIoKS5FbWl0VHlwZWRFdmVudCgKICAgICAgICAmYW1wO0V2ZW50U3VibWl0UHJvcG9zYWx7CiAgICAgICAgICAgIEZyb21BZGRyZXNzOiBmcm9tQWRkcmVzcywKICAgICAgICAgICAgUHJvcG9zYWxJZDogaWQsCiAgICAgICAgICAgIFByb3Bvc2FsOiBwcm9wb3NhbCwKICAgICAgICB9LAogICAgKQogICAgLi4uCn0K"}}),e._v(" "),I("h3",{attrs:{id:"how-to-subscribe-to-these-typed-events-in-client"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#how-to-subscribe-to-these-typed-events-in-client"}},[e._v("#")]),e._v(" How to subscribe to these typed events in "),I("code",[e._v("Client")])]),e._v(" "),I("blockquote",[I("p",[e._v("NOTE: Full code example below")])]),e._v(" "),I("p",[e._v("Users will be able to subscribe using "),I("code",[e._v("client.Context.Client.Subscribe")]),e._v(" and consume events which are emitted using "),I("code",[e._v("EventHandler")]),e._v("s.")]),e._v(" "),I("p",[e._v("Akash Network has built a simple "),I("a",{attrs:{href:"https://github.com/ovrclk/akash/blob/90d258caeb933b611d575355b8df281208a214f8/pubsub/bus.go#L20",target:"_blank",rel:"noopener noreferrer"}},[I("code",[e._v("pubsub")]),I("OutboundLink")],1),e._v(". This can be used to subscribe to "),I("code",[e._v("abci.Events")]),e._v(" and "),I("a",{attrs:{href:"https://github.com/ovrclk/akash/blob/90d258caeb933b611d575355b8df281208a214f8/events/publish.go#L21",target:"_blank",rel:"noopener noreferrer"}},[e._v("publish"),I("OutboundLink")],1),e._v(" them as typed events.")]),e._v(" "),I("p",[e._v("Please see the below code sample for more detail on this flow looks for clients.")]),e._v(" "),I("h2",{attrs:{id:"consequences"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),I("h3",{attrs:{id:"positive"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),I("ul",[I("li",[e._v("Improves consistency of implementation for the events currently in the Cosmos SDK")]),e._v(" "),I("li",[e._v("Provides a much more ergonomic way to handle events and facilitates writing event driven applications")]),e._v(" "),I("li",[e._v("This implementation will support a middleware ecosystem of "),I("code",[e._v("EventHandler")]),e._v("s")])]),e._v(" "),I("h3",{attrs:{id:"negative"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),I("h2",{attrs:{id:"detailed-code-example-of-publishing-events"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#detailed-code-example-of-publishing-events"}},[e._v("#")]),e._v(" Detailed code example of publishing events")]),e._v(" "),I("p",[e._v("This ADR also proposes adding affordances to emit and consume these events. This way developers will only need to write\n"),I("code",[e._v("EventHandler")]),e._v("s which define the actions they desire to take.")]),e._v(" "),I("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gRXZlbnRFbWl0dGVyIGlzIGEgdHlwZSB0aGF0IGRlc2NyaWJlcyBldmVudCBlbWl0dGVyIGZ1bmN0aW9ucwovLyBUaGlzIHNob3VsZCBiZSBkZWZpbmVkIGluIGB0eXBlcy9ldmVudHMuZ29gCnR5cGUgRXZlbnRFbWl0dGVyIGZ1bmMoY29udGV4dC5Db250ZXh0LCBjbGllbnQuQ29udGV4dCwgLi4uRXZlbnRIYW5kbGVyKSBlcnJvcgoKLy8gRXZlbnRIYW5kbGVyIGlzIGEgdHlwZSBvZiBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgZXZlbnRzIGNvbWluZyBvdXQgb2YgdGhlIGV2ZW50IGJ1cwovLyBUaGlzIHNob3VsZCBiZSBkZWZpbmVkIGluIGB0eXBlcy9ldmVudHMuZ29gCnR5cGUgRXZlbnRIYW5kbGVyIGZ1bmMocHJvdG8uTWVzc2FnZSkgZXJyb3IKCi8vIFNhbXBsZSB1c2Ugb2YgdGhlIGZ1bmN0aW9ucyBiZWxvdwpmdW5jIG1haW4oKSB7CiAgICBjdHgsIGNhbmNlbCA6PSBjb250ZXh0LldpdGhDYW5jZWwoY29udGV4dC5CYWNrZ3JvdW5kKCkpCgogICAgaWYgZXJyIDo9IFR4RW1pdHRlcihjdHgsIGNsaWVudC5Db250ZXh0e30uV2l0aE5vZGVVUkkoJnF1b3Q7dGNwOi8vbG9jYWxob3N0OjI2NjU3JnF1b3Q7KSwgU3VibWl0UHJvcG9zYWxFdmVudEhhbmRsZXIpOyBlcnIgIT0gbmlsIHsKICAgICAgICBjYW5jZWwoKQogICAgICAgIHBhbmljKGVycikKICAgIH0KCiAgICByZXR1cm4KfQoKLy8gU3VibWl0UHJvcG9zYWxFdmVudEhhbmRsZXIgaXMgYW4gZXhhbXBsZSBvZiBhbiBldmVudCBoYW5kbGVyIHRoYXQgcHJpbnRzIHByb3Bvc2FsIGRldGFpbHMKLy8gd2hlbiBhbnkgRXZlbnRTdWJtaXRQcm9wb3NhbCBpcyBlbWl0dGVkLgpmdW5jIFN1Ym1pdFByb3Bvc2FsRXZlbnRIYW5kbGVyKGV2IHByb3RvLk1lc3NhZ2UpIChlcnIgZXJyb3IpIHsKICAgIHN3aXRjaCBldmVudCA6PSBldi4odHlwZSkgewogICAgLy8gSGFuZGxlIGdvdmVybmFuY2UgcHJvcG9zYWwgZXZlbnRzIGNyZWF0aW9uIGV2ZW50cwogICAgY2FzZSBnb3Z0eXBlcy5FdmVudFN1Ym1pdFByb3Bvc2FsOgogICAgICAgIC8vIFVzZXJzIGRlZmluZSBidXNpbmVzcyBsb2dpYyBoZXJlIGUuZy4KICAgICAgICBmbXQuUHJpbnRsbihldi5Gcm9tQWRkcmVzcywgZXYuUHJvcG9zYWxJZCwgZXYuUHJvcG9zYWwpCiAgICAgICAgcmV0dXJuIG5pbAogICAgZGVmYXVsdDoKICAgICAgICByZXR1cm4gbmlsCiAgICB9Cn0KCi8vIFR4RW1pdHRlciBpcyBhbiBleGFtcGxlIG9mIGFuIGV2ZW50IGVtaXR0ZXIgdGhhdCBlbWl0cyBqdXN0IHRyYW5zYWN0aW9uIGV2ZW50cy4gVGhpcyBjYW4gYW5kCi8vIHNob3VsZCBiZSBpbXBsZW1lbnRlZCBzb21ld2hlcmUgaW4gdGhlIENvc21vcyBTREsuIFRoZSBDb3Ntb3MgU0RLIGNhbiBpbmNsdWRlIGFuIEV2ZW50RW1pdHRlcnMgZm9yIHRtLmV2ZW50PSdUeCcKLy8gYW5kL29yIHRtLmV2ZW50PSdOZXdCbG9jaycgKHRoZSBuZXcgYmxvY2sgZXZlbnRzIG1heSBjb250YWluIHR5cGVkIGV2ZW50cykKZnVuYyBUeEVtaXR0ZXIoY3R4IGNvbnRleHQuQ29udGV4dCwgY2xpQ3R4IGNsaWVudC5Db250ZXh0LCBlaHMgLi4uRXZlbnRIYW5kbGVyKSAoZXJyIGVycm9yKSB7CiAgICAvLyBJbnN0YW50aWF0ZSBhbmQgc3RhcnQgdGVuZGVybWludCBSUEMgY2xpZW50CiAgICBjbGllbnQsIGVyciA6PSBjbGlDdHguR2V0Tm9kZSgpCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9CgogICAgaWYgZXJyID0gY2xpZW50LlN0YXJ0KCk7IGVyciAhPSBuaWwgewogICAgICAgIHJldHVybiBlcnIKICAgIH0KCiAgICAvLyBTdGFydCB0aGUgcHVic3ViIGJ1cwogICAgYnVzIDo9IHB1YnN1Yi5OZXdCdXMoKQogICAgZGVmZXIgYnVzLkNsb3NlKCkKCiAgICAvLyBJbml0aWFsaXplIGEgbmV3IGVycm9yIGdyb3VwCiAgICBlZywgY3R4IDo9IGVycmdyb3VwLldpdGhDb250ZXh0KGN0eCkKCiAgICAvLyBQdWJsaXNoIGNoYWluIGV2ZW50cyB0byB0aGUgcHVic3ViIGJ1cwogICAgZWcuR28oZnVuYygpIGVycm9yIHsKICAgICAgICByZXR1cm4gUHVibGlzaENoYWluVHhFdmVudHMoY3R4LCBjbGllbnQsIGJ1cywgc2ltYXBwLk1vZHVsZUJhc2ljcykKICAgIH0pCgogICAgLy8gU3Vic2NyaWJlIHRvIHRoZSBidXMgZXZlbnRzCiAgICBzdWJzY3JpYmVyLCBlcnIgOj0gYnVzLlN1YnNjcmliZSgpCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9CgoJLy8gSGFuZGxlIGFsbCB0aGUgZXZlbnRzIGNvbWluZyBvdXQgb2YgdGhlIGJ1cwoJZWcuR28oZnVuYygpIGVycm9yIHsKICAgICAgICB2YXIgZXJyIGVycm9yCiAgICAgICAgZm9yIHsKICAgICAgICAgICAgc2VsZWN0IHsKICAgICAgICAgICAgY2FzZSAmbHQ7LWN0eC5Eb25lKCk6CiAgICAgICAgICAgICAgICByZXR1cm4gbmlsCiAgICAgICAgICAgIGNhc2UgJmx0Oy1zdWJzY3JpYmVyLkRvbmUoKToKICAgICAgICAgICAgICAgIHJldHVybiBuaWwKICAgICAgICAgICAgY2FzZSBldiA6PSAmbHQ7LXN1YnNjcmliZXIuRXZlbnRzKCk6CiAgICAgICAgICAgICAgICBmb3IgXywgZWggOj0gcmFuZ2UgZWhzIHsKICAgICAgICAgICAgICAgICAgICBpZiBlcnIgPSBlaChldik7IGVyciAhPSBuaWwgewogICAgICAgICAgICAgICAgICAgICAgICBicmVhawogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICByZXR1cm4gbmlsCgl9KQoKCXJldHVybiBncm91cC5XYWl0KCkKfQoKLy8gUHVibGlzaENoYWluVHhFdmVudHMgZXZlbnRzIHVzaW5nIHRtY2xpZW50LiBXYWl0cyBvbiBjb250ZXh0IHNodXRkb3duIHNpZ25hbHMgdG8gZXhpdC4KZnVuYyBQdWJsaXNoQ2hhaW5UeEV2ZW50cyhjdHggY29udGV4dC5Db250ZXh0LCBjbGllbnQgdG1jbGllbnQuRXZlbnRzQ2xpZW50LCBidXMgcHVic3ViLkJ1cywgbWIgbW9kdWxlLkJhc2ljTWFuYWdlcikgKGVyciBlcnJvcikgewogICAgLy8gU3Vic2NyaWJlIHRvIHRyYW5zYWN0aW9uIGV2ZW50cwogICAgdHhjaCwgZXJyIDo9IGNsaWVudC5TdWJzY3JpYmUoY3R4LCAmcXVvdDt0eGV2ZW50cyZxdW90OywgJnF1b3Q7dG0uZXZlbnQ9J1R4JyZxdW90OywgMTAwKQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcmV0dXJuIGVycgogICAgfQoKICAgIC8vIFVuc3Vic2NyaWJlIGZyb20gdHJhbnNhY3Rpb24gZXZlbnRzIG9uIGZ1bmN0aW9uIGV4aXQKICAgIGRlZmVyIGZ1bmMoKSB7CiAgICAgICAgZXJyID0gY2xpZW50LlVuc3Vic2NyaWJlQWxsKGN0eCwgJnF1b3Q7dHhldmVudHMmcXVvdDspCiAgICB9KCkKCiAgICAvLyBVc2UgZXJyZ3JvdXAgdG8gbWFuYWdlIGNvbmN1cnJlbmN5CiAgICBnLCBjdHggOj0gZXJyZ3JvdXAuV2l0aENvbnRleHQoY3R4KQoKICAgIC8vIFB1Ymxpc2ggdHJhbnNhY3Rpb24gZXZlbnRzIGluIGEgZ29yb3V0aW5lCiAgICBnLkdvKGZ1bmMoKSBlcnJvciB7CiAgICAgICAgdmFyIGVyciBlcnJvcgogICAgICAgIGZvciB7CiAgICAgICAgICAgIHNlbGVjdCB7CiAgICAgICAgICAgIGNhc2UgJmx0Oy1jdHguRG9uZSgpOgogICAgICAgICAgICAgICAgYnJlYWsKICAgICAgICAgICAgY2FzZSBlZCA6PSAmbHQ7LWNoOgogICAgICAgICAgICAgICAgc3dpdGNoIGV2dCA6PSBlZC5EYXRhLih0eXBlKSB7CiAgICAgICAgICAgICAgICBjYXNlIHRtdHlwZXMuRXZlbnREYXRhVHg6CiAgICAgICAgICAgICAgICAgICAgaWYgIWV2dC5SZXN1bHQuSXNPSygpIHsKICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWUKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgLy8gcmFuZ2Ugb3ZlciBldmVudHMsIHBhcnNlIHRoZW0gdXNpbmcgdGhlIGJhc2ljIG1hbmFnZXIgYW5kCiAgICAgICAgICAgICAgICAgICAgLy8gc2VuZCB0aGVtIHRvIHRoZSBwdWJzdWIgYnVzCiAgICAgICAgICAgICAgICAgICAgZm9yIF8sIGFiY2lFdiA6PSByYW5nZSBldmVudHMgewogICAgICAgICAgICAgICAgICAgICAgICB0eXBlZEV2ZW50LCBlcnIgOj0gc2RrLlBhcnNlVHlwZWRFdmVudChhYmNpRXYpCiAgICAgICAgICAgICAgICAgICAgICAgIGlmIGVyciAhPSBuaWwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVyCiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgaWYgZXJyIDo9IGJ1cy5QdWJsaXNoKHR5cGVkRXZlbnQpOyBlcnIgIT0gbmlsIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1cy5DbG9zZSgpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4KICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZQogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICByZXR1cm4gZXJyCgl9KQoKICAgIC8vIEV4aXQgb24gZXJyb3Igb3IgY29udGV4dCBjYW5jZWxhdGlvbgogICAgcmV0dXJuIGcuV2FpdCgpCn0K"}}),e._v(" "),I("h2",{attrs:{id:"references"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),I("ul",[I("li",[I("a",{attrs:{href:"https://github.com/ovrclk/akash/blob/90d258caeb933b611d575355b8df281208a214f8/events/publish.go#L19-L58",target:"_blank",rel:"noopener noreferrer"}},[e._v("Publish Custom Events via a bus"),I("OutboundLink")],1)]),e._v(" "),I("li",[I("a",{attrs:{href:"https://github.com/ovrclk/deploy/blob/bf6c633ab6c68f3026df59efd9982d6ca1bf0561/cmd/event-handlers.go#L57",target:"_blank",rel:"noopener noreferrer"}},[e._v("Consuming the events in "),I("code",[e._v("Client")]),I("OutboundLink")],1)])])],1)}),[],!1,null,null,null);g.default=t.exports}}]);