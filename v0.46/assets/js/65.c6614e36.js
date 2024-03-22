(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{765:function(e,t,a){"use strict";a.r(t);var s=a(1),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-creation-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-creation-process"}},[e._v("#")]),e._v(" ADR Creation Process")]),e._v(" "),a("ol",[a("li",[e._v("Copy the "),a("code",[e._v("adr-template.md")]),e._v(" file. Use the following filename pattern: "),a("code",[e._v("adr-next_number-title.md")])]),e._v(" "),a("li",[e._v("Create a draft Pull Request if you want to get an early feedback.")]),e._v(" "),a("li",[e._v("Make sure the context and a solution is clear and well documented.")]),e._v(" "),a("li",[e._v("Add an entry to a list in the "),a("RouterLink",{attrs:{to:"/architecture/"}},[e._v("README")]),e._v(" file.")],1),e._v(" "),a("li",[e._v("Create a Pull Request to propose a new ADR.")])]),e._v(" "),a("h2",{attrs:{id:"adr-life-cycle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-life-cycle"}},[e._v("#")]),e._v(" ADR life cycle")]),e._v(" "),a("p",[e._v("ADR creation is an "),a("strong",[e._v("iterative")]),e._v(" process. Instead of trying to solve all decisions in a single ADR pull request, we MUST firstly understand the problem and collect feedback through a GitHub Issue.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Every proposal SHOULD start with a new GitHub Issue or be a result of existing Issues. The Issue should contain just a brief proposal summary.")])]),e._v(" "),a("li",[a("p",[e._v("Once the motivation is validated, a GitHub Pull Request (PR) is created with a new document based on the "),a("code",[e._v("adr-template.md")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("An ADR doesn't have to arrive to "),a("code",[e._v("main")]),e._v(" with an "),a("em",[e._v("accepted")]),e._v(" status in a single PR. If the motivation is clear and the solution is sound, we SHOULD be able to merge it and keep a "),a("em",[e._v("proposed")]),e._v(" status. It's preferable to have an iterative approach rather than long, not merged Pull Requests.")])]),e._v(" "),a("li",[a("p",[e._v("If a "),a("em",[e._v("proposed")]),e._v(" ADR is merged, then it should clearly document outstanding issues either in ADR document notes or in a GitHub Issue.")])]),e._v(" "),a("li",[a("p",[e._v("The PR SHOULD always be merged. In the case of a faulty ADR, we still prefer to  merge it with a "),a("em",[e._v("rejected")]),e._v(" status. The only time the ADR SHOULD NOT be merged is if the author abandons it.")])]),e._v(" "),a("li",[a("p",[e._v("Merged ADRs SHOULD NOT be pruned.")])])]),e._v(" "),a("h3",{attrs:{id:"adr-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-status"}},[e._v("#")]),e._v(" ADR status")]),e._v(" "),a("p",[e._v("Status has two components:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"e0NPTlNFTlNVUyBTVEFUVVN9IHtJTVBMRU1FTlRBVElPTiBTVEFUVVN9Cg=="}}),e._v(" "),a("p",[e._v("IMPLEMENTATION STATUS is either "),a("code",[e._v("Implemented")]),e._v(" or "),a("code",[e._v("Not Implemented")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"consensus-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consensus-status"}},[e._v("#")]),e._v(" Consensus Status")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"RFJBRlQgLSZndDsgUFJPUE9TRUQgLSZndDsgTEFTVCBDQUxMIHl5eXktbW0tZGQgLSZndDsgQUNDRVBURUQgfCBSRUpFQ1RFRCAtJmd0OyBTVVBFUlNFREVEIGJ5IEFEUi14eHgKICAgICAgICAgICAgICAgICAgXCAgICAgICAgfAogICAgICAgICAgICAgICAgICAgXCAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgdiAgICAgIHYKICAgICAgICAgICAgICAgICAgICAgQUJBTkRPTkVECg=="}}),e._v(" "),a("ul",[a("li",[a("code",[e._v("DRAFT")]),e._v(": [optional] an ADR which is work in progress, not being ready for a general review. This is to present an early work and get an early feedback in a Draft Pull Request form.")]),e._v(" "),a("li",[a("code",[e._v("PROPOSED")]),e._v(": an ADR covering a full solution architecture and still in the review - project stakeholders haven't reached an agreed yet.")]),e._v(" "),a("li",[a("code",[e._v("LAST CALL <date for the last call>")]),e._v(": [optional] clear notify that we are close to accept updates. Changing a status to "),a("code",[e._v("LAST CALL")]),e._v(" means that social consensus (of Cosmos SDK maintainers) has been reached and we still want to give it a time to let the community react or analyze.")]),e._v(" "),a("li",[a("code",[e._v("ACCEPTED")]),e._v(": ADR which will represent a currently implemented or to be implemented architecture design.")]),e._v(" "),a("li",[a("code",[e._v("REJECTED")]),e._v(": ADR can go from PROPOSED or ACCEPTED to rejected if the consensus among project stakeholders will decide so.")]),e._v(" "),a("li",[a("code",[e._v("SUPERSEEDED by ADR-xxx")]),e._v(": ADR which has been superseded by a new ADR.")]),e._v(" "),a("li",[a("code",[e._v("ABANDONED")]),e._v(": the ADR is no longer pursued by the original authors.")])]),e._v(" "),a("h2",{attrs:{id:"language-used-in-adr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#language-used-in-adr"}},[e._v("#")]),e._v(" Language used in ADR")]),e._v(" "),a("ul",[a("li",[e._v("The context/background should be written in the present tense.")]),e._v(" "),a("li",[e._v("Avoid using a first, personal form.")])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);