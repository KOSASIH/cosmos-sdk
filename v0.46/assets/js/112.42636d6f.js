(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{834:function(e,t,o){"use strict";o.r(t);var s=o(1),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"adr-055-orm"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adr-055-orm"}},[e._v("#")]),e._v(" ADR 055: ORM")]),e._v(" "),o("h2",{attrs:{id:"changelog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),o("ul",[o("li",[e._v("2022-04-27: First draft")])]),e._v(" "),o("h2",{attrs:{id:"status"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),o("p",[e._v("ACCEPTED Implemented")]),e._v(" "),o("h2",{attrs:{id:"abstract"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),o("p",[e._v("In order to make it easier for developers to build Cosmos SDK modules and for clients to query, index and verify proofs\nagainst state data, we have implemented an ORM (object-relational mapping) layer for the Cosmos SDK.")]),e._v(" "),o("h2",{attrs:{id:"context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),o("p",[e._v("Historically modules in the Cosmos SDK have always used the key-value store directly and created various handwritten\nfunctions for managing key format as well as constructing secondary indexes. This consumes a significant amount of\ntime when building a module and is error-prone. Because key formats are non-standard, sometimes poorly documented,\nand subject to change, it is hard for clients to generically index, query and verify merkle proofs against state data.")]),e._v(" "),o("p",[e._v('The known first instance of an "ORM" in the Cosmos ecosystem was in '),o("a",{attrs:{href:"https://github.com/iov-one/weave/tree/master/orm",target:"_blank",rel:"noopener noreferrer"}},[e._v("weave"),o("OutboundLink")],1),e._v(".\nA later version was built for "),o("a",{attrs:{href:"https://github.com/regen-network/regen-ledger/tree/157181f955823149e1825263a317ad8e16096da4/orm",target:"_blank",rel:"noopener noreferrer"}},[e._v("regen-ledger"),o("OutboundLink")],1),e._v(" for\nuse in the group module and later "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/35d3312c3be306591fcba39892223f1244c8d108/x/group/internal/orm",target:"_blank",rel:"noopener noreferrer"}},[e._v("ported to the SDK"),o("OutboundLink")],1),e._v("\njust for that purpose.")]),e._v(" "),o("p",[e._v("While these earlier designs made it significantly easier to write state machines, they still required a lot of manual\nconfiguration, didn't expose state format directly to clients, and were limited in their support of different types\nof index keys, composite keys, and range queries.")]),e._v(" "),o("p",[e._v("Discussions about the design continued in https://github.com/cosmos/cosmos-sdk/discussions/9156 and more\nsophisticated proofs of concept were created in https://github.com/allinbits/cosmos-sdk-poc/tree/master/runtime/orm\nand https://github.com/cosmos/cosmos-sdk/pull/10454.")]),e._v(" "),o("h2",{attrs:{id:"decision"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),o("p",[e._v("These prior efforts culminated in the creation of the Cosmos SDK "),o("code",[e._v("orm")]),e._v(" go module which uses protobuf annotations\nfor specifying ORM table definitions. This ORM is based on the new "),o("code",[e._v("google.golang.org/protobuf/reflect/protoreflect")]),e._v("\nAPI and supports:")]),e._v(" "),o("ul",[o("li",[e._v("sorted indexes for all simple protobuf types (except "),o("code",[e._v("bytes")]),e._v(", "),o("code",[e._v("enum")]),e._v(", "),o("code",[e._v("float")]),e._v(", "),o("code",[e._v("double")]),e._v(") as well as "),o("code",[e._v("Timestamp")]),e._v(" and "),o("code",[e._v("Duration")])]),e._v(" "),o("li",[e._v("unsorted "),o("code",[e._v("bytes")]),e._v(" and "),o("code",[e._v("enum")]),e._v(" indexes")]),e._v(" "),o("li",[e._v("composite primary and secondary keys")]),e._v(" "),o("li",[e._v("unique indexes")]),e._v(" "),o("li",[e._v("auto-incrementing "),o("code",[e._v("uint64")]),e._v(" primary keys")]),e._v(" "),o("li",[e._v("complex prefix and range queries")]),e._v(" "),o("li",[e._v("paginated queries")]),e._v(" "),o("li",[e._v("complete logical decoding of KV-store data")])]),e._v(" "),o("p",[e._v("Almost all the information needed to decode state directly is specified in .proto files. Each table definition specifies\nan ID which is unique per .proto file and each index within a table is unique within that table. Clients then only need\nto know the name of a module and the prefix ORM data for a specific .proto file within that module in order to decode\nstate data directly. This additional information will be exposed directly through app configs which will be explained\nin a future ADR related to app wiring.")]),e._v(" "),o("p",[e._v("The ORM makes optimizations around storage space by not repeating values in the primary key in the key value\nwhen storing primary key records. For example, if the object "),o("code",[e._v('{"a":0,"b":1}')]),e._v(" has the primary key "),o("code",[e._v("a")]),e._v(", it will\nbe stored in the key value store as "),o("code",[e._v("Key: '0', Value: {\"b\":1}")]),e._v(" (with more efficient protobuf binary encoding).\nAlso, the generated code from https://github.com/cosmos/cosmos-proto does optimizations around the\n"),o("code",[e._v("google.golang.org/protobuf/reflect/protoreflect")]),e._v(" API to improve performance.")]),e._v(" "),o("p",[e._v("A code generator is included with the ORM which creates type safe wrappers around the ORM's dynamic "),o("code",[e._v("Table")]),e._v("\nimplementation and is the recommended way for modules to use the ORM.")]),e._v(" "),o("p",[e._v("The ORM tests provide a simplified bank module demonstration which illustrates:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/0d846ae2f0424b2eb640f6679a703b52d407813d/orm/internal/testpb/bank.proto",target:"_blank",rel:"noopener noreferrer"}},[e._v("ORM proto options"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/0d846ae2f0424b2eb640f6679a703b52d407813d/orm/internal/testpb/bank.cosmos_orm.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("Generated Code"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/0d846ae2f0424b2eb640f6679a703b52d407813d/orm/model/ormdb/module_test.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example Usage in a Module Keeper"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"consequences"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),o("h3",{attrs:{id:"backwards-compatibility"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),o("p",[e._v("State machine code that adopts the ORM will need migrations as the state layout is generally backwards incompatible.\nThese state machines will also need to migrate to https://github.com/cosmos/cosmos-proto at least for state data.")]),e._v(" "),o("h3",{attrs:{id:"positive"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),o("ul",[o("li",[e._v("easier to build modules")]),e._v(" "),o("li",[e._v("easier to add secondary indexes to state")]),e._v(" "),o("li",[e._v("possible to write a generic indexer for ORM state")]),e._v(" "),o("li",[e._v("easier to write clients that do state proofs")]),e._v(" "),o("li",[e._v("possible to automatically write query layers rather than needing to manually implement gRPC queries")])]),e._v(" "),o("h3",{attrs:{id:"negative"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),o("ul",[o("li",[e._v("worse performance than handwritten keys (for now). See "),o("a",{attrs:{href:"#further-discussions"}},[e._v("Further Discussions")]),e._v("\nfor potential improvements")])]),e._v(" "),o("h3",{attrs:{id:"neutral"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),o("h2",{attrs:{id:"further-discussions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-discussions"}},[e._v("#")]),e._v(" Further Discussions")]),e._v(" "),o("p",[e._v("Further discussions will happen within the Cosmos SDK Framework Working Group. Current planned and ongoing work includes:")]),e._v(" "),o("ul",[o("li",[e._v("automatically generate client-facing query layer")]),e._v(" "),o("li",[e._v("client-side query libraries that transparently verify light client proofs")]),e._v(" "),o("li",[e._v("index ORM data to SQL databases")]),e._v(" "),o("li",[e._v("improve performance by:\n"),o("ul",[o("li",[e._v("optimizing existing reflection based code to avoid unnecessary gets when doing deletes & updates of simple tables")]),e._v(" "),o("li",[e._v("more sophisticated code generation such as making fast path reflection even faster (avoiding "),o("code",[e._v("switch")]),e._v(" statements),\nor even fully generating code that equals handwritten performance")])])])]),e._v(" "),o("h2",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("ul",[o("li",[e._v("https://github.com/iov-one/weave/tree/master/orm).")]),e._v(" "),o("li",[e._v("https://github.com/regen-network/regen-ledger/tree/157181f955823149e1825263a317ad8e16096da4/orm")]),e._v(" "),o("li",[e._v("https://github.com/cosmos/cosmos-sdk/tree/35d3312c3be306591fcba39892223f1244c8d108/x/group/internal/orm")]),e._v(" "),o("li",[e._v("https://github.com/cosmos/cosmos-sdk/discussions/9156")]),e._v(" "),o("li",[e._v("https://github.com/allinbits/cosmos-sdk-poc/tree/master/runtime/orm")]),e._v(" "),o("li",[e._v("https://github.com/cosmos/cosmos-sdk/pull/10454")])])])}),[],!1,null,null,null);t.default=a.exports}}]);