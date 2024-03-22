(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{675:function(e,a,o){"use strict";o.r(a);var t=o(1),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"concepts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),o("h2",{attrs:{id:"plan"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#plan"}},[e._v("#")]),e._v(" Plan")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("x/upgrade")]),e._v(" module defines a "),o("code",[e._v("Plan")]),e._v(" type in which a live upgrade is scheduled\nto occur. A "),o("code",[e._v("Plan")]),e._v(" can be scheduled at a specific block height.\nA "),o("code",[e._v("Plan")]),e._v(" is created once a (frozen) release candidate along with an appropriate upgrade\n"),o("code",[e._v("Handler")]),e._v(" (see below) is agreed upon, where the "),o("code",[e._v("Name")]),e._v(" of a "),o("code",[e._v("Plan")]),e._v(" corresponds to a\nspecific "),o("code",[e._v("Handler")]),e._v(". Typically, a "),o("code",[e._v("Plan")]),e._v(" is created through a governance proposal\nprocess, where if voted upon and passed, will be scheduled. The "),o("code",[e._v("Info")]),e._v(" of a "),o("code",[e._v("Plan")]),e._v("\nmay contain various metadata about the upgrade, typically application specific\nupgrade info to be included on-chain such as a git commit that validators could\nautomatically upgrade to.")]),e._v(" "),o("h3",{attrs:{id:"sidecar-process"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sidecar-process"}},[e._v("#")]),e._v(" Sidecar Process")]),e._v(" "),o("p",[e._v("If an operator running the application binary also runs a sidecar process to assist\nin the automatic download and upgrade of a binary, the "),o("code",[e._v("Info")]),e._v(" allows this process to\nbe seamless. Namely, the "),o("code",[e._v("x/upgrade")]),e._v(" module fulfills the\n"),o("a",{attrs:{href:"https://github.com/regen-network/cosmosd#upgradeable-binary-specification",target:"_blank",rel:"noopener noreferrer"}},[e._v("cosmosd Upgradeable Binary Specification"),o("OutboundLink")],1),e._v("\nspecification and "),o("code",[e._v("cosmosd")]),e._v(" can optionally be used to fully automate the upgrade\nprocess for node operators. By populating the "),o("code",[e._v("Info")]),e._v(" field with the necessary information,\nbinaries can automatically be downloaded. See "),o("a",{attrs:{href:"https://github.com/regen-network/cosmosd#auto-download",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v("\nfor more info.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBQbGFuIHN0cnVjdCB7CiAgTmFtZSAgIHN0cmluZwogIEhlaWdodCBpbnQ2NAogIEluZm8gICBzdHJpbmcKfQo="}}),e._v(" "),o("h2",{attrs:{id:"handler"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#handler"}},[e._v("#")]),e._v(" Handler")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("x/upgrade")]),e._v(" module facilitates upgrading from major version X to major version Y. To\naccomplish this, node operators must first upgrade their current binary to a new\nbinary that has a corresponding "),o("code",[e._v("Handler")]),e._v(" for the new version Y. It is assumed that\nthis version has fully been tested and approved by the community at large. This\n"),o("code",[e._v("Handler")]),e._v(" defines what state migrations need to occur before the new binary Y\ncan successfully run the chain. Naturally, this "),o("code",[e._v("Handler")]),e._v(" is application specific\nand not defined on a per-module basis. Registering a "),o("code",[e._v("Handler")]),e._v(" is done via\n"),o("code",[e._v("Keeper#SetUpgradeHandler")]),e._v(" in the application.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBVcGdyYWRlSGFuZGxlciBmdW5jKENvbnRleHQsIFBsYW4sIFZlcnNpb25NYXApIChWZXJzaW9uTWFwLCBlcnJvcikK"}}),e._v(" "),o("p",[e._v("During each "),o("code",[e._v("EndBlock")]),e._v(" execution, the "),o("code",[e._v("x/upgrade")]),e._v(" module checks if there exists a\n"),o("code",[e._v("Plan")]),e._v(" that should execute (is scheduled at that height). If so, the corresponding\n"),o("code",[e._v("Handler")]),e._v(" is executed. If the "),o("code",[e._v("Plan")]),e._v(" is expected to execute but no "),o("code",[e._v("Handler")]),e._v(" is registered\nor if the binary was upgraded too early, the node will gracefully panic and exit.")]),e._v(" "),o("h2",{attrs:{id:"storeloader"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#storeloader"}},[e._v("#")]),e._v(" StoreLoader")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("x/upgrade")]),e._v(" module also facilitates store migrations as part of the upgrade. The\n"),o("code",[e._v("StoreLoader")]),e._v(" sets the migrations that need to occur before the new binary can\nsuccessfully run the chain. This "),o("code",[e._v("StoreLoader")]),e._v(" is also application specific and\nnot defined on a per-module basis. Registering this "),o("code",[e._v("StoreLoader")]),e._v(" is done via\n"),o("code",[e._v("app#SetStoreLoader")]),e._v(" in the application.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBVcGdyYWRlU3RvcmVMb2FkZXIgKHVwZ3JhZGVIZWlnaHQgaW50NjQsIHN0b3JlVXBncmFkZXMgKnN0b3JlLlN0b3JlVXBncmFkZXMpIGJhc2VhcHAuU3RvcmVMb2FkZXIK"}}),e._v(" "),o("p",[e._v("If there's a planned upgrade and the upgrade height is reached, the old binary writes "),o("code",[e._v("UpgradeInfo")]),e._v(" to the disk before panic'ing.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBVcGdyYWRlSW5mbyBzdHJ1Y3QgewogIE5hbWUgICAgc3RyaW5nCiAgSGVpZ2h0ICBpbnQ2NAp9Cg=="}}),e._v(" "),o("p",[e._v("This information is critical to ensure the "),o("code",[e._v("StoreUpgrades")]),e._v(" happens smoothly at correct height and\nexpected upgrade. It eliminiates the chances for the new binary to execute "),o("code",[e._v("StoreUpgrades")]),e._v(" multiple\ntimes everytime on restart. Also if there are multiple upgrades planned on same height, the "),o("code",[e._v("Name")]),e._v("\nwill ensure these "),o("code",[e._v("StoreUpgrades")]),e._v(" takes place only in planned upgrade handler.")]),e._v(" "),o("h2",{attrs:{id:"proposal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proposal"}},[e._v("#")]),e._v(" Proposal")]),e._v(" "),o("p",[e._v("Typically, a "),o("code",[e._v("Plan")]),e._v(" is proposed and submitted through governance via a "),o("code",[e._v("SoftwareUpgradeProposal")]),e._v(".\nThis proposal prescribes to the standard governance process. If the proposal passes,\nthe "),o("code",[e._v("Plan")]),e._v(", which targets a specific "),o("code",[e._v("Handler")]),e._v(", is persisted and scheduled. The\nupgrade can be delayed or hastened by updating the "),o("code",[e._v("Plan.Height")]),e._v(" in a new proposal.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBTb2Z0d2FyZVVwZ3JhZGVQcm9wb3NhbCBzdHJ1Y3QgewogIFRpdGxlICAgICAgIHN0cmluZwogIERlc2NyaXB0aW9uIHN0cmluZwogIFBsYW4gICAgICAgIFBsYW4KfQo="}}),e._v(" "),o("h3",{attrs:{id:"cancelling-upgrade-proposals"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cancelling-upgrade-proposals"}},[e._v("#")]),e._v(" Cancelling Upgrade Proposals")]),e._v(" "),o("p",[e._v("Upgrade proposals can be cancelled. There exists a "),o("code",[e._v("CancelSoftwareUpgrade")]),e._v(" proposal\ntype, which can be voted on and passed and will remove the scheduled upgrade "),o("code",[e._v("Plan")]),e._v(".\nOf course this requires that the upgrade was known to be a bad idea well before the\nupgrade itself, to allow time for a vote.")]),e._v(" "),o("p",[e._v("If such a possibility is desired, the upgrade height is to be\n"),o("code",[e._v("2 * (VotingPeriod + DepositPeriod) + (SafetyDelta)")]),e._v(" from the beginning of the\nupgrade proposal. The "),o("code",[e._v("SafetyDelta")]),e._v(" is the time available from the success of an\nupgrade proposal and the realization it was a bad idea (due to external social consensus).")]),e._v(" "),o("p",[e._v("A "),o("code",[e._v("CancelSoftwareUpgrade")]),e._v(" proposal can also be made while the original\n"),o("code",[e._v("SoftwareUpgradeProposal")]),e._v(" is still being voted upon, as long as the "),o("code",[e._v("VotingPeriod")]),e._v("\nends after the "),o("code",[e._v("SoftwareUpgradeProposal")]),e._v(".")])],1)}),[],!1,null,null,null);a.default=n.exports}}]);