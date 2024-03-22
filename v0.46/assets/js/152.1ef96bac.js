(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{802:function(t,e,g){"use strict";g.r(e);var a=g(1),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,g=t._self._c||e;return g("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[g("h1",{attrs:{id:"blockchain-architecture"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-architecture"}},[t._v("#")]),t._v(" Blockchain Architecture")]),t._v(" "),g("h2",{attrs:{id:"state-machine"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#state-machine"}},[t._v("#")]),t._v(" State machine")]),t._v(" "),g("p",[t._v("At its core, a blockchain is a "),g("a",{attrs:{href:"https://en.wikipedia.org/wiki/State_machine_replication",target:"_blank",rel:"noopener noreferrer"}},[t._v("replicated deterministic state machine"),g("OutboundLink")],1),t._v(".")]),t._v(" "),g("p",[t._v("A state machine is a computer science concept whereby a machine can have multiple states, but only one at any given time. There is a "),g("code",[t._v("state")]),t._v(", which describes the current state of the system, and "),g("code",[t._v("transactions")]),t._v(", that trigger state transitions.")]),t._v(" "),g("p",[t._v("Given a state S and a transaction T, the state machine will return a new state S'.")]),t._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"Ky0tLS0tLS0tKyAgICAgICAgICAgICAgICAgKy0tLS0tLS0tKwp8ICAgICAgICB8ICAgICAgICAgICAgICAgICB8ICAgICAgICB8CnwgICBTICAgICstLS0tLS0tLS0tLS0tLS0tJmd0OysgICBTJyAgIHwKfCAgICAgICAgfCAgICBhcHBseShUKSAgICAgfCAgICAgICAgfAorLS0tLS0tLS0rICAgICAgICAgICAgICAgICArLS0tLS0tLS0rCg=="}}),t._v(" "),g("p",[t._v("In practice, the transactions are bundled in blocks to make the process more efficient. Given a state S and a block of transactions B, the state machine will return a new state S'.")]),t._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"Ky0tLS0tLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tLS0tLSsKfCAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgIHwKfCAgIFMgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0mZ3Q7IHwgICBTJyAgIHwKfCAgICAgICAgfCAgIEZvciBlYWNoIFQgaW4gQjogYXBwbHkoVCkgIHwgICAgICAgIHwKKy0tLS0tLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tLS0tLSsK"}}),t._v(" "),g("p",[t._v("In a blockchain context, the state machine is deterministic. This means that if a node is started at a given state and replays the same sequence of transactions, it will always end up with the same final state.")]),t._v(" "),g("p",[t._v("The Cosmos SDK gives developers maximum flexibility to define the state of their application, transaction types and state transition functions. The process of building state-machines with the Cosmos SDK will be described more in depth in the following sections. But first, let us see how the state-machine is replicated using "),g("strong",[t._v("Tendermint")]),t._v(".")]),t._v(" "),g("h2",{attrs:{id:"tendermint"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#tendermint"}},[t._v("#")]),t._v(" Tendermint")]),t._v(" "),g("p",[t._v("Thanks to the Cosmos SDK, developers just have to define the state machine, and "),g("a",{attrs:{href:"https://docs.tendermint.com/master/introduction/what-is-tendermint.html",target:"_blank",rel:"noopener noreferrer"}},[g("em",[t._v("Tendermint")]),g("OutboundLink")],1),t._v(" will handle replication over the network for them.")]),t._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"ICAgICAgICAgICAgICAgIF4gICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyAgXgogICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8ICAgQnVpbHQgd2l0aCBDb3Ntb3MgU0RLCiAgICAgICAgICAgICAgICB8ICB8ICBTdGF0ZS1tYWNoaW5lID0gQXBwbGljYXRpb24gIHwgIHwKICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdgogICAgICAgICAgICAgICAgfCAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rCiAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIF4KQmxvY2tjaGFpbiBub2RlIHwgIHwgICAgICAgICAgIENvbnNlbnN1cyAgICAgICAgICAgfCAgfAogICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8CiAgICAgICAgICAgICAgICB8ICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsgIHwgICBUZW5kZXJtaW50IENvcmUKICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgfAogICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgTmV0d29ya2luZyAgICAgICAgICB8ICB8CiAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHwKICAgICAgICAgICAgICAgIHYgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyAgdgo="}}),t._v(" "),g("p",[g("a",{attrs:{href:"https://docs.tendermint.com/v0.34/introduction/what-is-tendermint.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tendermint"),g("OutboundLink")],1),t._v(" is an application-agnostic engine that is responsible for handling the "),g("em",[t._v("networking")]),t._v(" and "),g("em",[t._v("consensus")]),t._v(" layers of a blockchain. In practice, this means that Tendermint is responsible for propagating and ordering transaction bytes. Tendermint Core relies on an eponymous Byzantine-Fault-Tolerant (BFT) algorithm to reach consensus on the order of transactions.")]),t._v(" "),g("p",[t._v("The Tendermint "),g("a",{attrs:{href:"https://docs.tendermint.com/v0.34/introduction/what-is-tendermint.html#consensus-overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("consensus algorithm"),g("OutboundLink")],1),t._v(" works with a set of special nodes called "),g("em",[t._v("Validators")]),t._v(". Validators are responsible for adding blocks of transactions to the blockchain. At any given block, there is a validator set V. A validator in V is chosen by the algorithm to be the proposer of the next block. This block is considered valid if more than two thirds of V signed a "),g("code",[t._v("prevote")]),t._v(" and a "),g("code",[t._v("precommit")]),t._v(" on it, and if all the transactions that it contains are valid. The validator set can be changed by rules written in the state-machine.")]),t._v(" "),g("h2",{attrs:{id:"abci"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#abci"}},[t._v("#")]),t._v(" ABCI")]),t._v(" "),g("p",[t._v("Tendermint passes transactions to the application through an interface called the "),g("a",{attrs:{href:"https://docs.tendermint.com/master/spec/abci/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ABCI"),g("OutboundLink")],1),t._v(", which the application must implement.")]),t._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"ICAgICAgICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tKwogICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgfCAgICAgQXBwbGljYXRpb24gICAgIHwKICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICstLS0tLS0tLSstLS0rLS0tLS0tLS0rCiAgICAgICAgICAgICAgICAgICAgICAgXiAgIHwKICAgICAgICAgICAgICAgICAgICAgICB8ICAgfCBBQkNJCiAgICAgICAgICAgICAgICAgICAgICAgfCAgIHYKICAgICAgICAgICAgICArLS0tLS0tLS0rLS0tKy0tLS0tLS0tKwogICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICB8ICAgICBUZW5kZXJtaW50ICAgICAgfAogICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tKwo="}}),t._v(" "),g("p",[t._v("Note that "),g("strong",[t._v("Tendermint only handles transaction bytes")]),t._v(". It has no knowledge of what these bytes mean. All Tendermint does is order these transaction bytes deterministically. Tendermint passes the bytes to the application via the ABCI, and expects a return code to inform it if the messages contained in the transactions were successfully processed or not.")]),t._v(" "),g("p",[t._v("Here are the most important messages of the ABCI:")]),t._v(" "),g("ul",[g("li",[g("code",[t._v("CheckTx")]),t._v(": When a transaction is received by Tendermint Core, it is passed to the application to check if a few basic requirements are met. "),g("code",[t._v("CheckTx")]),t._v(" is used to protect the mempool of full-nodes against spam transactions. . A special handler called the "),g("RouterLink",{attrs:{to:"/basics/gas-fees.html#antehandler"}},[g("code",[t._v("AnteHandler")])]),t._v(" is used to execute a series of validation steps such as checking for sufficient fees and validating the signatures. If the checks are valid, the transaction is added to the "),g("a",{attrs:{href:"https://docs.tendermint.com/v0.34/tendermint-core/mempool.html#mempool",target:"_blank",rel:"noopener noreferrer"}},[t._v("mempool"),g("OutboundLink")],1),t._v(" and relayed to peer nodes. Note that transactions are not processed (i.e. no modification of the state occurs) with "),g("code",[t._v("CheckTx")]),t._v(" since they have not been included in a block yet.")],1),t._v(" "),g("li",[g("code",[t._v("DeliverTx")]),t._v(": When a "),g("a",{attrs:{href:"https://docs.tendermint.com/v0.34/spec/blockchain/blockchain.html#validation",target:"_blank",rel:"noopener noreferrer"}},[t._v("valid block"),g("OutboundLink")],1),t._v(" is received by Tendermint Core, each transaction in the block is passed to the application via "),g("code",[t._v("DeliverTx")]),t._v(" in order to be processed. It is during this stage that the state transitions occur. The "),g("code",[t._v("AnteHandler")]),t._v(" executes again, along with the actual "),g("RouterLink",{attrs:{to:"/building-modules/msg-services.html"}},[g("code",[t._v("Msg")]),t._v(" service")]),t._v(" RPC for each message in the transaction.")],1),t._v(" "),g("li",[g("code",[t._v("BeginBlock")]),t._v("/"),g("code",[t._v("EndBlock")]),t._v(": These messages are executed at the beginning and the end of each block, whether the block contains transactions or not. It is useful to trigger automatic execution of logic. Proceed with caution though, as computationally expensive loops could slow down your blockchain, or even freeze it if the loop is infinite.")])]),t._v(" "),g("p",[t._v("Find a more detailed view of the ABCI methods from the "),g("a",{attrs:{href:"https://docs.tendermint.com/v0.35/introduction/what-is-tendermint.html#abci-overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tendermint docs"),g("OutboundLink")],1),t._v(".")]),t._v(" "),g("p",[t._v("Any application built on Tendermint needs to implement the ABCI interface in order to communicate with the underlying local Tendermint engine. Fortunately, you do not have to implement the ABCI interface. The Cosmos SDK provides a boilerplate implementation of it in the form of "),g("RouterLink",{attrs:{to:"/intro/sdk-design.html#baseapp"}},[t._v("baseapp")]),t._v(".")],1),t._v(" "),g("h2",{attrs:{hide:"",id:"next"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[t._v("#")]),t._v(" Next")]),t._v(" "),g("p",{attrs:{hide:""}},[t._v("Read about the "),g("RouterLink",{attrs:{to:"/intro/sdk-design.html"}},[t._v("high-level design principles of the Cosmos SDK")])],1)],1)}),[],!1,null,null,null);e.default=n.exports}}]);