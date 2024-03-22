(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{777:function(e,a,t){"use strict";t.r(a);var i=t(1),l=Object(i.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"adr-007-specialization-groups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adr-007-specialization-groups"}},[e._v("#")]),e._v(" ADR 007: Specialization Groups")]),e._v(" "),t("h2",{attrs:{id:"changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),t("ul",[t("li",[e._v("2019 Jul 31: Initial Draft")])]),e._v(" "),t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),t("p",[e._v('This idea was first conceived of in order to fulfill the use case of the\ncreation of a decentralized Computer Emergency Response Team (dCERT), whose\nmembers would be elected by a governing community and would fulfill the role of\ncoordinating the community under emergency situations. This thinking\ncan be further abstracted into the conception of "blockchain specialization\ngroups".')]),e._v(" "),t("p",[e._v("The creation of these groups are the beginning of specialization capabilities\nwithin a wider blockchain community which could be used to enable a certain\nlevel of delegated responsibilities. Examples of specialization which could be\nbeneficial to a blockchain community include: code auditing, emergency response,\ncode development etc. This type of community organization paves the way for\nindividual stakeholders to delegate votes by issue type, if in the future\ngovernance proposals include a field for issue type.")]),e._v(" "),t("h2",{attrs:{id:"decision"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),t("p",[e._v("A specialization group can be broadly broken down into the following functions\n(herein containing examples):")]),e._v(" "),t("ul",[t("li",[e._v("Membership Admittance")]),e._v(" "),t("li",[e._v("Membership Acceptance")]),e._v(" "),t("li",[e._v("Membership Revocation\n"),t("ul",[t("li",[e._v("(probably) Without Penalty\n"),t("ul",[t("li",[e._v("member steps down (self-Revocation)")]),e._v(" "),t("li",[e._v("replaced by new member from governance")])])]),e._v(" "),t("li",[e._v("(probably) With Penalty\n"),t("ul",[t("li",[e._v("due to breach of soft-agreement (determined through governance)")]),e._v(" "),t("li",[e._v("due to breach of hard-agreement (determined by code)")])])])])]),e._v(" "),t("li",[e._v("Execution of Duties\n"),t("ul",[t("li",[e._v("Special transactions which only execute for members of a specialization\ngroup (for example, dCERT members voting to turn off transaction routes in\nan emergency scenario)")])])]),e._v(" "),t("li",[e._v("Compensation\n"),t("ul",[t("li",[e._v("Group compensation (further distribution decided by the specialization group)")]),e._v(" "),t("li",[e._v("Individual compensation for all constituents of a group from the\ngreater community")])])])]),e._v(" "),t("p",[e._v("Membership admittance to a specialization group could take place over a wide\nvariety of mechanisms. The most obvious example is through a general vote among\nthe entire community, however in certain systems a community may want to allow\nthe members already in a specialization group to internally elect new members,\nor maybe the community may assign a permission to a particular specialization\ngroup to appoint members to other 3rd party groups. The sky is really the limit\nas to how membership admittance can be structured. We attempt to capture\nsome of these possiblities in a common interface dubbed the "),t("code",[e._v("Electionator")]),e._v(". For\nits initial implementation as a part of this ADR we recommend that the general\nelection abstraction ("),t("code",[e._v("Electionator")]),e._v(") is provided as well as a basic\nimplementation of that abstraction which allows for a continuous election of\nmembers of a specialization group.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:" golang",base64:"Ly8gVGhlIEVsZWN0aW9uYXRvciBhYnN0cmFjdGlvbiBjb3ZlcnMgdGhlIGNvbmNlcHQgc3BhY2UgZm9yCi8vIGEgd2lkZSB2YXJpZXR5IG9mIGVsZWN0aW9uIGtpbmRzLiAgCnR5cGUgRWxlY3Rpb25hdG9yIGludGVyZmFjZSB7CgogICAgLy8gaXMgdGhlIGVsZWN0aW9uIG9iamVjdCBhY2NlcHRpbmcgdm90ZXMuCiAgICBBY3RpdmUoKSBib29sCgogICAgLy8gZnVuY3Rpb25hbGl0eSB0byBleGVjdXRlIGZvciB3aGVuIGEgdm90ZSBpcyBjYXN0IGluIHRoaXMgZWxlY3Rpb24sIGhlcmUKICAgIC8vIHRoZSB2b3RlIGZpZWxkIGlzIGFudGljaXBhdGVkIHRvIGJlIG1hcnNoYWxsZWQgaW50byBhIHZvdGUgdHlwZSB1c2VkCiAgICAvLyBieSBhbiBlbGVjdGlvbi4KICAgIC8vCiAgICAvLyBOT1RFIFRoZXJlIGFyZSBubyBleHBsaWNpdCBpZHMgaGVyZS4gSnVzdCB2b3RlcyB3aGljaCBwZXJ0YWluIHNwZWNpZmljYWxseQogICAgLy8gdG8gb25lIGVsZWN0aW9uYXRvci4gQW55b25lIGNhbiBjcmVhdGUgYW5kIHNlbmQgYSB2b3RlIHRvIHRoZSBlbGVjdGlvbmF0b3IgaXRlbQogICAgLy8gd2hpY2ggd2lsbCBwcmVzdW1hYmx5IGF0dGVtcHQgdG8gbWFyc2hhbCB0aG9zZSBieXRlcyBpbnRvIGEgcGFydGljdWxhciBzdHJ1Y3QKICAgIC8vIGFuZCBhcHBseSB0aGUgdm90ZSBpbmZvcm1hdGlvbiBpbiBzb21lIGFyYml0cmFyeSB3YXkuIFRoZXJlIGNhbiBiZSBtdWx0aXBsZQogICAgLy8gRWxlY3Rpb25hdG9ycyB3aXRoaW4gdGhlIENvc21vcy1IdWIgZm9yIG11bHRpcGxlIHNwZWNpYWxpemF0aW9uIGdyb3Vwcywgdm90ZXMKICAgIC8vIHdvdWxkIG5lZWQgdG8gYmUgcm91dGVkIHRvIHRoZSBFbGVjdGlvbmF0b3IgdXBzdHJlYW0gb2YgaGVyZS4KICAgIFZvdGUoYWRkciBzZGsuQWNjQWRkcmVzcywgdm90ZSBbXWJ5dGUpCgogICAgLy8gaGVyZSBsaWVzIGFsbCBmdW5jdGlvbmFsaXR5IHRvIGF1dGhlbnRpY2F0ZSBhbmQgZXhlY3V0ZSBjaGFuZ2VzIGZvcgogICAgLy8gd2hlbiBhIG1lbWJlciBhY2NlcHRzIGJlaW5nIGVsZWN0ZWQKICAgIEFjY2VwdEVsZWN0aW9uKHNkay5BY2NBZGRyZXNzKQoKICAgIC8vIFJlZ2lzdGVyIGEgcmV2b2tlciBvYmplY3QKICAgIFJlZ2lzdGVyUmV2b2tlcihSZXZva2VyKQoKICAgIC8vIE5vIG1vcmUgcmV2b2tlcnMgbWF5IGJlIHJlZ2lzdGVyZWQgYWZ0ZXIgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQKICAgIFNlYWxSZXZva2VycygpCgogICAgLy8gcmVnaXN0ZXIgaG9va3MgdG8gY2FsbCB3aGVuIGFuIGVsZWN0aW9uIGFjdGlvbnMgb2NjdXIKICAgIFJlZ2lzdGVySG9va3MoRWxlY3Rpb25hdG9ySG9va3MpCgogICAgLy8gcXVlcnkgZm9yIHRoZSBjdXJyZW50IHdpbm5lcihzKSBvZiB0aGlzIGVsZWN0aW9uIGJhc2VkIG9uIGFyYml0cmFyeQogICAgLy8gZWxlY3Rpb24gcnVsZXNldAogICAgUXVlcnlFbGVjdGVkKCkgW11zZGsuQWNjQWRkcmVzcwoKICAgIC8vIHF1ZXJ5IG1ldGFkYXRhIGZvciBhbiBhZGRyZXNzIGluIHRoZSBlbGVjdGlvbiB0aGlzCiAgICAvLyBjb3VsZCBpbmNsdWRlIGZvciBleGFtcGxlIHBvc2l0aW9uIHRoYXQgYW4gYWRkcmVzcwogICAgLy8gaXMgYmVpbmcgZWxlY3RlZCBmb3Igd2l0aGluIGEgZ3JvdXAKICAgIC8vCiAgICAvLyB0aGlzIG1ldGFkYXRhIG1heSBiZSBkaXJlY3RseSByZWxhdGVkIHRvCiAgICAvLyB2b3RpbmcgaW5mb3JtYXRpb24gYW5kL29yIHByaXZpbGVnZXMgZW5hYmxlZAogICAgLy8gdG8gbWVtYmVycyB3aXRoaW4gYSBncm91cC4KICAgIFF1ZXJ5TWV0YWRhdGEoc2RrLkFjY0FkZHJlc3MpIFtdYnl0ZQp9CgovLyBFbGVjdGlvbmF0b3JIb29rcywgb25jZSByZWdpc3RlcmVkIHdpdGggYW4gRWxlY3Rpb25hdG9yLAovLyB0cmlnZ2VyIGV4ZWN1dGlvbiBvZiByZWxldmFudCBpbnRlcmZhY2UgZnVuY3Rpb25zIHdoZW4KLy8gRWxlY3Rpb25hdG9yIGV2ZW50cyBvY2N1ci4KdHlwZSBFbGVjdGlvbmF0b3JIb29rcyBpbnRlcmZhY2UgewogICAgQWZ0ZXJWb3RlQ2FzdChhZGRyIHNkay5BY2NBZGRyZXNzLCB2b3RlIFtdYnl0ZSkKICAgIEFmdGVyTWVtYmVyQWNjZXB0ZWQoYWRkciBzZGsuQWNjQWRkcmVzcykKICAgIEFmdGVyTWVtYmVyUmV2b2tlZChhZGRyIHNkay5BY2NBZGRyZXNzLCBjYXVzZSBbXWJ5dGUpCn0KCi8vIFJldm9rZXIgZGVmaW5lcyB0aGUgZnVuY3Rpb24gcmVxdWlyZWQgZm9yIGEgbWVtYmVyc2hpcCByZXZvY2F0aW9uIHJ1bGUtc2V0Ci8vIHVzZWQgYnkgYSBzcGVjaWFsaXphdGlvbiBncm91cC4gVGhpcyBjb3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBzZWxmIHJldm9raW5nLAovLyBhbmQgZXZpZGVuY2UgYmFzZWQgcmV2b2tpbmcsIGV0Yy4gUmV2b2tlcnMgdHlwZXMgbWF5IGJlIGNyZWF0ZWQgYW5kCi8vIHJldXNlZCBmb3IgZGlmZmVyZW50IGVsZWN0aW9uIHR5cGVzLgovLwovLyBXaGVuIHJldm9raW5nIHRoZSAmcXVvdDtjYXVzZSZxdW90OyBieXRlcyBtYXkgYmUgYXJiaXRyYXJpbHkgbWFyc2hhbGxlZCBpbnRvIGV2aWRlbmNlLAovLyBtZW1vcywgZXRjLgp0eXBlIFJldm9rZXIgaW50ZXJmYWNlIHsKICAgIFJldm9rZU5hbWUoKSBzdHJpbmcgICAgICAvLyBpZGVudGlmaWVyIGZvciB0aGlzIHJldm9rZXIgdHlwZQogICAgUmV2b2tlTWVtYmVyKGFkZHIgc2RrLkFjY0FkZHJlc3MsIGNhdXNlIFtdYnl0ZSkgZXJyb3IKfQo="}}),e._v(" "),t("p",[e._v("Certain level of commonality likely exists between the existing code within\n"),t("code",[e._v("x/governance")]),e._v(" and required functionality of elections. This common\nfunctionality should be abstracted during implementation. Similarly for each\nvote implementation client CLI/REST functionality should be abstracted\nto be reused for multiple elections.")]),e._v(" "),t("p",[e._v("The specialization group abstraction firstly extends the "),t("code",[e._v("Electionator")]),e._v("\nbut also further defines traits of the group.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:" golang",base64:"dHlwZSBTcGVjaWFsaXphdGlvbkdyb3VwIGludGVyZmFjZSB7CiAgICBFbGVjdGlvbmF0b3IKICAgIEdldE5hbWUoKSBzdHJpbmcKICAgIEdldERlc2NyaXB0aW9uKCkgc3RyaW5nCgogICAgLy8gZ2VuZXJhbCBzb2Z0IGNvbnRyYWN0IHRoZSBncm91cCBpcyBleHBlY3RlZAogICAgLy8gdG8gZnVsZmlsbCB3aXRoIHRoZSBncmVhdGVyIGNvbW11bml0eQogICAgR2V0Q29udHJhY3QoKSBzdHJpbmcKCiAgICAvLyBtZXNzYWdlcyB3aGljaCBjYW4gYmUgZXhlY3V0ZWQgYnkgdGhlIG1lbWJlcnMgb2YgdGhlIGdyb3VwCiAgICBIYW5kbGVyKGN0eCBzZGsuQ29udGV4dCwgbXNnIHNkay5Nc2cpIHNkay5SZXN1bHQKCiAgICAvLyBsb2dpYyB0byBiZSBleGVjdXRlZCBhdCBlbmRibG9jaywgdGhpcyBtYXkgZm9yIGluc3RhbmNlCiAgICAvLyBpbmNsdWRlIHBheW1lbnQgb2YgYSBzdGlwZW5kIHRvIHRoZSBncm91cCBtZW1iZXJzCiAgICAvLyBmb3IgcGFydGljaXBhdGlvbiBpbiB0aGUgc2VjdXJpdHkgZ3JvdXAuCiAgICBFbmRCbG9ja2VyKGN0eCBzZGsuQ29udGV4dCkKfQo="}}),e._v(" "),t("h2",{attrs:{id:"status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),t("blockquote",[t("p",[e._v("Proposed")])]),e._v(" "),t("h2",{attrs:{id:"consequences"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),t("h3",{attrs:{id:"positive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),t("ul",[t("li",[e._v("increases specialization capabilities of a blockchain")]),e._v(" "),t("li",[e._v("improve abstractions in "),t("code",[e._v("x/gov/")]),e._v(" such that they can be used with specialization groups")])]),e._v(" "),t("h3",{attrs:{id:"negative"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),t("ul",[t("li",[e._v("could be used to increase centralization within a community")])]),e._v(" "),t("h3",{attrs:{id:"neutral"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/architecture/adr-008-dCERT-group.html"}},[e._v("dCERT ADR")])],1)])],1)}),[],!1,null,null,null);a.default=l.exports}}]);