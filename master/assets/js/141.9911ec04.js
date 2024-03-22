(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{818:function(e,t,s){"use strict";s.r(t);var o=s(1),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),s("p",{attrs:{synopsis:""}},[s("code",[e._v("Event")]),e._v("s are objects that contain information about the execution of the application. They are mainly used by service providers like block explorers and wallet to track the execution of various messages and index transactions.")]),e._v(" "),s("h2",{attrs:{id:"pre-requisite-readings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),s("ul",[s("li",{attrs:{prereq:""}},[s("RouterLink",{attrs:{to:"/basics/app-anatomy.html"}},[e._v("Anatomy of a Cosmos SDK application")])],1),e._v(" "),s("li",{attrs:{prereq:""}},[s("a",{attrs:{href:"https://docs.tendermint.com/master/spec/abci/abci.html#events",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint Documentation on Events"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"typed-events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typed-events"}},[e._v("#")]),e._v(" Typed Events")]),e._v(" "),s("p",[e._v("Events are implemented in the Cosmos SDK as an alias of the ABCI "),s("code",[e._v("Event")]),e._v(" type and\ntake the form of: "),s("code",[e._v("{eventType}.{attributeKey}={attributeValue}")]),e._v(".")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gRXZlbnQgYWxsb3dzIGFwcGxpY2F0aW9uIGRldmVsb3BlcnMgdG8gYXR0YWNoIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gdG8KLy8gUmVzcG9uc2VCZWdpbkJsb2NrLCBSZXNwb25zZUVuZEJsb2NrLCBSZXNwb25zZUNoZWNrVHggYW5kIFJlc3BvbnNlRGVsaXZlclR4LgovLyBMYXRlciwgdHJhbnNhY3Rpb25zIG1heSBiZSBxdWVyaWVkIHVzaW5nIHRoZXNlIGV2ZW50cy4KbWVzc2FnZSBFdmVudCB7CiAgc3RyaW5nICAgICAgICAgICAgICAgICAgdHlwZSAgICAgICA9IDE7CiAgcmVwZWF0ZWQgRXZlbnRBdHRyaWJ1dGUgYXR0cmlidXRlcyA9IDIgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2UsIChnb2dvcHJvdG8uanNvbnRhZykgPSAmcXVvdDthdHRyaWJ1dGVzLG9taXRlbXB0eSZxdW90O107Cn0="}})],1),e._v(" "),s("p",[e._v("An Event contains:")]),e._v(" "),s("ul",[s("li",[e._v("A "),s("code",[e._v("type")]),e._v(" to categorize the Event at a high-level; for example, the Cosmos SDK uses the "),s("code",[e._v('"message"')]),e._v(" type to filter Events by "),s("code",[e._v("Msg")]),e._v("s.")]),e._v(" "),s("li",[e._v("A list of "),s("code",[e._v("attributes")]),e._v(" are key-value pairs that give more information about the categorized Event. For example, for the "),s("code",[e._v('"message"')]),e._v(" type, we can filter Events by key-value pairs using "),s("code",[e._v("message.action={some_action}")]),e._v(", "),s("code",[e._v("message.module={some_module}")]),e._v(" or "),s("code",[e._v("message.sender={some_sender}")]),e._v(".")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[e._v("To parse the attribute values as strings, make sure to add "),s("code",[e._v("'")]),e._v(" (single quotes) around each attribute value.")])]),e._v(" "),s("p",[s("em",[e._v("Typed Events")]),e._v(" are Protobuf-defined "),s("RouterLink",{attrs:{to:"/architecture/adr-032-typed-events.html"}},[e._v("messages")]),e._v(" used by the Cosmos SDK\nfor emitting and querying Events. They are defined in a "),s("code",[e._v("event.proto")]),e._v(" file, on a "),s("strong",[e._v("per-module basis")]),e._v(".\nThey are triggered from the module's Protobuf "),s("RouterLink",{attrs:{to:"/building-modules/msg-services.html"}},[s("code",[e._v("Msg")]),e._v(" service")]),e._v("\nby using the "),s("a",{attrs:{href:"#eventmanager"}},[s("code",[e._v("EventManager")])]),e._v(", where they are read as "),s("code",[e._v("proto.Message")]),e._v(".")],1),e._v(" "),s("p",[e._v("In addition, each module documents its Events under "),s("code",[e._v("spec/xx_events.md")]),e._v(".")]),e._v(" "),s("p",[e._v("Lastly, Events are returned to the underlying consensus engine in the response of the following ABCI messages:")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/core/baseapp.html#beginblock"}},[s("code",[e._v("BeginBlock")])])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/core/baseapp.html#endblock"}},[s("code",[e._v("EndBlock")])])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/core/baseapp.html#checktx"}},[s("code",[e._v("CheckTx")])])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/core/baseapp.html#delivertx"}},[s("code",[e._v("DeliverTx")])])],1)]),e._v(" "),s("h3",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("p",[e._v("The following examples show how to query Events using the Cosmos SDK.")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Event")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("tx.height=23")])]),e._v(" "),s("td",[e._v("Query all transactions at height 23")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("message.action='/cosmos.bank.v1beta1.Msg/Send'")])]),e._v(" "),s("td",[e._v("Query all transactions containing a x/bank "),s("code",[e._v("Send")]),e._v(" "),s("RouterLink",{attrs:{to:"/building-modules/msg-services.html"}},[e._v("Service "),s("code",[e._v("Msg")])]),e._v(". Note the "),s("code",[e._v("'")]),e._v("s around the value.")],1)]),e._v(" "),s("tr",[s("td",[s("code",[e._v("message.action='send'")])]),e._v(" "),s("td",[e._v("Query all transactions containing a x/bank "),s("code",[e._v("Send")]),e._v(" "),s("RouterLink",{attrs:{to:"/building-modules/msg-services.html#legacy-amino-msgs"}},[e._v("legacy "),s("code",[e._v("Msg")])]),e._v(". Note the "),s("code",[e._v("'")]),e._v("s around the value.")],1)]),e._v(" "),s("tr",[s("td",[s("code",[e._v("message.module='bank'")])]),e._v(" "),s("td",[e._v("Query all transactions containing messages from the x/bank module. Note the "),s("code",[e._v("'")]),e._v("s around the value.")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("create_validator.validator='cosmosval1...'")])]),e._v(" "),s("td",[e._v("x/staking-specific Event, see "),s("RouterLink",{attrs:{to:"/cosmos-sdk/x/staking/spec/07_events.html"}},[e._v("x/staking SPEC")]),e._v(".")],1)])])]),e._v(" "),s("h2",{attrs:{id:"eventmanager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eventmanager"}},[e._v("#")]),e._v(" EventManager")]),e._v(" "),s("p",[e._v("In Cosmos SDK applications, Events are managed by an abstraction called the "),s("code",[e._v("EventManager")]),e._v(".\nInternally, the "),s("code",[e._v("EventManager")]),e._v(" tracks a list of Events for the entire execution flow of a\ntransaction or "),s("code",[e._v("BeginBlock")]),e._v("/"),s("code",[e._v("EndBlock")]),e._v(".")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQovLyBFdmVudCBNYW5hZ2VyCi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KCi8vIEV2ZW50TWFuYWdlciBpbXBsZW1lbnRzIGEgc2ltcGxlIHdyYXBwZXIgYXJvdW5kIGEgc2xpY2Ugb2YgRXZlbnQgb2JqZWN0cyB0aGF0Ci8vIGNhbiBiZSBlbWl0dGVkIGZyb20uCnR5cGUgRXZlbnRNYW5hZ2VyIHN0cnVjdCB7CglldmVudHMgRXZlbnRzCn0="}})],1),e._v(" "),s("p",[e._v("The "),s("code",[e._v("EventManager")]),e._v(" comes with a set of useful methods to manage Events. The method\nthat is used most by module and application developers is "),s("code",[e._v("EmitTypedEvent")]),e._v(" that tracks\nan Event in the "),s("code",[e._v("EventManager")]),e._v(".")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gRW1pdFR5cGVkRXZlbnQgdGFrZXMgdHlwZWQgZXZlbnQgYW5kIGVtaXRzIGNvbnZlcnRpbmcgaXQgaW50byBFdmVudApmdW5jIChlbSAqRXZlbnRNYW5hZ2VyKSBFbWl0VHlwZWRFdmVudCh0ZXYgcHJvdG8uTWVzc2FnZSkgZXJyb3IgewoJZXZlbnQsIGVyciA6PSBUeXBlZEV2ZW50VG9FdmVudCh0ZXYpCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gZXJyCgl9CgoJZW0uRW1pdEV2ZW50KGV2ZW50KQoJcmV0dXJuIG5pbAp9"}})],1),e._v(" "),s("p",[e._v("Module developers should handle Event emission via the "),s("code",[e._v("EventManager#EmitTypedEvent")]),e._v(" in each message\n"),s("code",[e._v("Handler")]),e._v(" and in each "),s("code",[e._v("BeginBlock")]),e._v("/"),s("code",[e._v("EndBlock")]),e._v(" handler. The "),s("code",[e._v("EventManager")]),e._v(" is accessed via\nthe "),s("RouterLink",{attrs:{to:"/core/context.html"}},[s("code",[e._v("Context")])]),e._v(", where Event should be already registered, and emitted like this:")],1),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CWVyciA9IGN0eC5FdmVudE1hbmFnZXIoKS5FbWl0VHlwZWRFdmVudCgmYW1wO2dyb3VwLkV2ZW50Q3JlYXRlR3JvdXB7R3JvdXBJZDogZ3JvdXBJRH0pCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gbmlsLCBlcnIKCX0="}})],1),e._v(" "),s("p",[e._v("Module's "),s("code",[e._v("handler")]),e._v(" function should also set a new "),s("code",[e._v("EventManager")]),e._v(" to the "),s("code",[e._v("context")]),e._v(" to isolate emitted Events per "),s("code",[e._v("message")]),e._v(":")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBOZXdIYW5kbGVyKGtlZXBlciBLZWVwZXIpIHNkay5IYW5kbGVyIHsKICAgIHJldHVybiBmdW5jKGN0eCBzZGsuQ29udGV4dCwgbXNnIHNkay5Nc2cpICgqc2RrLlJlc3VsdCwgZXJyb3IpIHsKICAgICAgICBjdHggPSBjdHguV2l0aEV2ZW50TWFuYWdlcihzZGsuTmV3RXZlbnRNYW5hZ2VyKCkpCiAgICAgICAgc3dpdGNoIG1zZyA6PSBtc2cuKHR5cGUpIHsK"}}),e._v(" "),s("p",[e._v("See the "),s("RouterLink",{attrs:{to:"/building-modules/msg-services.html"}},[s("code",[e._v("Msg")]),e._v(" services")]),e._v(" concept doc for a more detailed\nview on how to typically implement Events and use the "),s("code",[e._v("EventManager")]),e._v(" in modules.")],1),e._v(" "),s("h2",{attrs:{id:"subscribing-to-events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subscribing-to-events"}},[e._v("#")]),e._v(" Subscribing to Events")]),e._v(" "),s("p",[e._v("You can use Tendermint's "),s("a",{attrs:{href:"https://docs.tendermint.com/master/tendermint-core/subscription.html#subscribing-to-events-via-websocket",target:"_blank",rel:"noopener noreferrer"}},[e._v("Websocket"),s("OutboundLink")],1),e._v(" to subscribe to Events by calling the "),s("code",[e._v("subscribe")]),e._v(" RPC method:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2pzb25ycGMmcXVvdDs6ICZxdW90OzIuMCZxdW90OywKICAmcXVvdDttZXRob2QmcXVvdDs6ICZxdW90O3N1YnNjcmliZSZxdW90OywKICAmcXVvdDtpZCZxdW90OzogJnF1b3Q7MCZxdW90OywKICAmcXVvdDtwYXJhbXMmcXVvdDs6IHsKICAgICZxdW90O3F1ZXJ5JnF1b3Q7OiAmcXVvdDt0bS5ldmVudD0nZXZlbnRDYXRlZ29yeScgQU5EIGV2ZW50VHlwZS5ldmVudEF0dHJpYnV0ZT0nYXR0cmlidXRlVmFsdWUnJnF1b3Q7CiAgfQp9Cg=="}}),e._v(" "),s("p",[e._v("The main "),s("code",[e._v("eventCategory")]),e._v(" you can subscribe to are:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("NewBlock")]),e._v(": Contains Events triggered during "),s("code",[e._v("BeginBlock")]),e._v(" and "),s("code",[e._v("EndBlock")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("Tx")]),e._v(": Contains Events triggered during "),s("code",[e._v("DeliverTx")]),e._v(" (i.e. transaction processing).")]),e._v(" "),s("li",[s("code",[e._v("ValidatorSetUpdates")]),e._v(": Contains validator set updates for the block.")])]),e._v(" "),s("p",[e._v("These Events are triggered from the "),s("code",[e._v("state")]),e._v(" package after a block is committed. You can get the\nfull list of Event categories "),s("a",{attrs:{href:"https://pkg.go.dev/github.com/tendermint/tendermint/types#pkg-constants",target:"_blank",rel:"noopener noreferrer"}},[e._v("on the Tendermint Go documentation"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("type")]),e._v(" and "),s("code",[e._v("attribute")]),e._v(" value of the "),s("code",[e._v("query")]),e._v(" allow you to filter the specific Event you are looking for. For example, a "),s("code",[e._v("Mint")]),e._v(" transaction triggers an Event of type "),s("code",[e._v("EventMint")]),e._v(" and has an "),s("code",[e._v("Id")]),e._v(" and an "),s("code",[e._v("Owner")]),e._v(" as "),s("code",[e._v("attributes")]),e._v(" (as defined in the "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0-rc1/proto/cosmos/nft/v1beta1/event.proto#L14-L19",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("events.proto")]),e._v(" file of the "),s("code",[e._v("NFT")]),e._v(" module"),s("OutboundLink")],1),e._v(").")]),e._v(" "),s("p",[e._v("Subscribing to this Event would be done like so:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2pzb25ycGMmcXVvdDs6ICZxdW90OzIuMCZxdW90OywKICAmcXVvdDttZXRob2QmcXVvdDs6ICZxdW90O3N1YnNjcmliZSZxdW90OywKICAmcXVvdDtpZCZxdW90OzogJnF1b3Q7MCZxdW90OywKICAmcXVvdDtwYXJhbXMmcXVvdDs6IHsKICAgICZxdW90O3F1ZXJ5JnF1b3Q7OiAmcXVvdDt0bS5ldmVudD0nVHgnIEFORCBtaW50Lm93bmVyPSdvd25lckFkZHJlc3MnJnF1b3Q7CiAgfQp9Cg=="}}),e._v(" "),s("p",[e._v("where "),s("code",[e._v("ownerAddress")]),e._v(" is an address following the "),s("RouterLink",{attrs:{to:"/basics/accounts.html#addresses"}},[s("code",[e._v("AccAddress")])]),e._v(" format.")],1),e._v(" "),s("h2",{attrs:{id:"events-deprecated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events-deprecated"}},[e._v("#")]),e._v(" Events (Deprecated)")]),e._v(" "),s("p",[e._v("Previously, the Cosmos SDK supported emitting Events that were defined in "),s("code",[e._v("types/events.go")]),e._v(". It is the responsibility of the module developer to define Event types and Event attributes. Except in the "),s("code",[e._v("spec/XX_events.md")]),e._v(" file, these Event types and attributes are unfortunately not easily discoverable,")]),e._v(" "),s("p",[e._v("This is why this methods as been deprecated, and replaced by _"),s("a",{attrs:{href:"#typed-events"}},[e._v("Typed Events")]),e._v(".")]),e._v(" "),s("p",[e._v("To learn more about the previous way of defining events, please refer to the "),s("a",{attrs:{href:"https://docs.cosmos.network/v0.45/core/events.html#events-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("previous SDK documentation"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{hide:"",id:"next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),s("p",{attrs:{hide:""}},[e._v("Learn about Cosmos SDK "),s("RouterLink",{attrs:{to:"/core/telemetry.html"}},[e._v("telemetry")])],1)],1)}),[],!1,null,null,null);t.default=a.exports}}]);