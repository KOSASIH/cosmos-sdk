(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{797:function(e,t,c){"use strict";c.r(t);var a=c(1),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[c("h1",{attrs:{id:"adr-011-generalize-genesis-accounts"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#adr-011-generalize-genesis-accounts"}},[e._v("#")]),e._v(" ADR 011: Generalize Genesis Accounts")]),e._v(" "),c("h2",{attrs:{id:"changelog"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),c("ul",[c("li",[e._v("2019-08-30: initial draft")])]),e._v(" "),c("h2",{attrs:{id:"context"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),c("p",[e._v("Currently, the SDK allows for custom account types; the "),c("code",[e._v("auth")]),e._v(" keeper stores any type fulfilling its "),c("code",[e._v("Account")]),e._v(" interface. However "),c("code",[e._v("auth")]),e._v(" does not handle exporting or loading accounts to/from a genesis file, this is done by "),c("code",[e._v("genaccounts")]),e._v(", which only handles one of 4 concrete account types ("),c("code",[e._v("BaseAccount")]),e._v(", "),c("code",[e._v("ContinuousVestingAccount")]),e._v(", "),c("code",[e._v("DelayedVestingAccount")]),e._v(" and "),c("code",[e._v("ModuleAccount")]),e._v(").")]),e._v(" "),c("p",[e._v("Projects desiring to use custom accounts (say custom vesting accounts) need to fork and modify "),c("code",[e._v("genaccounts")]),e._v(".")]),e._v(" "),c("h2",{attrs:{id:"decision"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),c("p",[e._v("In summary, we will (un)marshal all accounts (interface types) directly using amino, rather than converting to "),c("code",[e._v("genaccounts")]),e._v("’s "),c("code",[e._v("GenesisAccount")]),e._v(" type. Since doing this removes the majority of "),c("code",[e._v("genaccounts")]),e._v("'s code, we will merge "),c("code",[e._v("genaccounts")]),e._v(" into "),c("code",[e._v("auth")]),e._v(". Marshalled accounts will be stored in "),c("code",[e._v("auth")]),e._v("'s genesis state.")]),e._v(" "),c("p",[e._v("Detailed changes:")]),e._v(" "),c("h3",{attrs:{id:"_1-un-marshal-accounts-directly-using-amino"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#_1-un-marshal-accounts-directly-using-amino"}},[e._v("#")]),e._v(" 1) (Un)Marshal accounts directly using amino")]),e._v(" "),c("p",[e._v("The "),c("code",[e._v("auth")]),e._v(" module's "),c("code",[e._v("GenesisState")]),e._v(" gains a new field "),c("code",[e._v("Accounts")]),e._v(". Note these aren't of type "),c("code",[e._v("exported.Account")]),e._v(" for reasons outlined in section 3.")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gR2VuZXNpc1N0YXRlIC0gYWxsIGF1dGggc3RhdGUgdGhhdCBtdXN0IGJlIHByb3ZpZGVkIGF0IGdlbmVzaXMKdHlwZSBHZW5lc2lzU3RhdGUgc3RydWN0IHsKICAgIFBhcmFtcyAgIFBhcmFtcyAgICAgICAgICAgYGpzb246JnF1b3Q7cGFyYW1zJnF1b3Q7IHlhbWw6JnF1b3Q7cGFyYW1zJnF1b3Q7YAogICAgQWNjb3VudHMgW11HZW5lc2lzQWNjb3VudCBganNvbjomcXVvdDthY2NvdW50cyZxdW90OyB5YW1sOiZxdW90O2FjY291bnRzJnF1b3Q7YAp9Cg=="}}),e._v(" "),c("p",[e._v("Now "),c("code",[e._v("auth")]),e._v("'s "),c("code",[e._v("InitGenesis")]),e._v(" and "),c("code",[e._v("ExportGenesis")]),e._v(" (un)marshal accounts as well as the defined params.")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gSW5pdEdlbmVzaXMgLSBJbml0IHN0b3JlIHN0YXRlIGZyb20gZ2VuZXNpcyBkYXRhCmZ1bmMgSW5pdEdlbmVzaXMoY3R4IHNkay5Db250ZXh0LCBhayBBY2NvdW50S2VlcGVyLCBkYXRhIEdlbmVzaXNTdGF0ZSkgewogICAgYWsuU2V0UGFyYW1zKGN0eCwgZGF0YS5QYXJhbXMpCiAgICAvLyBsb2FkIHRoZSBhY2NvdW50cwogICAgZm9yIF8sIGEgOj0gcmFuZ2UgZGF0YS5BY2NvdW50cyB7CiAgICAgICAgYWNjIDo9IGFrLk5ld0FjY291bnQoY3R4LCBhKSAvLyBzZXQgYWNjb3VudCBudW1iZXIKICAgICAgICBhay5TZXRBY2NvdW50KGN0eCwgYWNjKQogICAgfQp9CgovLyBFeHBvcnRHZW5lc2lzIHJldHVybnMgYSBHZW5lc2lzU3RhdGUgZm9yIGEgZ2l2ZW4gY29udGV4dCBhbmQga2VlcGVyCmZ1bmMgRXhwb3J0R2VuZXNpcyhjdHggc2RrLkNvbnRleHQsIGFrIEFjY291bnRLZWVwZXIpIEdlbmVzaXNTdGF0ZSB7CiAgICBwYXJhbXMgOj0gYWsuR2V0UGFyYW1zKGN0eCkKCiAgICB2YXIgZ2VuQWNjb3VudHMgW11leHBvcnRlZC5HZW5lc2lzQWNjb3VudAogICAgYWsuSXRlcmF0ZUFjY291bnRzKGN0eCwgZnVuYyhhY2NvdW50IGV4cG9ydGVkLkFjY291bnQpIGJvb2wgewogICAgICAgIGdlbkFjY291bnQgOj0gYWNjb3VudC4oZXhwb3J0ZWQuR2VuZXNpc0FjY291bnQpCiAgICAgICAgZ2VuQWNjb3VudHMgPSBhcHBlbmQoZ2VuQWNjb3VudHMsIGdlbkFjY291bnQpCiAgICAgICAgcmV0dXJuIGZhbHNlCiAgICB9KQoKICAgIHJldHVybiBOZXdHZW5lc2lzU3RhdGUocGFyYW1zLCBnZW5BY2NvdW50cykKfQo="}}),e._v(" "),c("h3",{attrs:{id:"_2-register-custom-account-types-on-the-auth-codec"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#_2-register-custom-account-types-on-the-auth-codec"}},[e._v("#")]),e._v(" 2) Register custom account types on the "),c("code",[e._v("auth")]),e._v(" codec")]),e._v(" "),c("p",[e._v("The "),c("code",[e._v("auth")]),e._v(" codec must have all custom account types registered to marshal them. We will follow the pattern established in "),c("code",[e._v("gov")]),e._v(" for proposals.")]),e._v(" "),c("p",[e._v("An example custom account definition:")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0IGF1dGh0eXBlcyAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3gvYXV0aC90eXBlcyZxdW90OwoKLy8gUmVnaXN0ZXIgdGhlIG1vZHVsZSBhY2NvdW50IHR5cGUgd2l0aCB0aGUgYXV0aCBtb2R1bGUgY29kZWMgc28gaXQgY2FuIGRlY29kZSBtb2R1bGUgYWNjb3VudHMgc3RvcmVkIGluIGEgZ2VuZXNpcyBmaWxlCmZ1bmMgaW5pdCgpIHsKICAgIGF1dGh0eXBlcy5SZWdpc3RlckFjY291bnRUeXBlQ29kZWMoTW9kdWxlQWNjb3VudHt9LCAmcXVvdDtjb3Ntb3Mtc2RrL01vZHVsZUFjY291bnQmcXVvdDspCn0KCnR5cGUgTW9kdWxlQWNjb3VudCBzdHJ1Y3QgewogICAgLi4uCg=="}}),e._v(" "),c("p",[e._v("The "),c("code",[e._v("auth")]),e._v(" codec definition:")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dmFyIE1vZHVsZUNkYyAqY29kZWMuTGVnYWN5QW1pbm8KCmZ1bmMgaW5pdCgpIHsKICAgIE1vZHVsZUNkYyA9IGNvZGVjLk5ld0xlZ2FjeUFtaW5vKCkKICAgIC8vIHJlZ2lzdGVyIG1vZHVsZSBtc2cncyBhbmQgQWNjb3VudCBpbnRlcmZhY2UKICAgIC4uLgogICAgLy8gbGVhdmUgdGhlIGNvZGVjIHVuc2VhbGVkCn0KCi8vIFJlZ2lzdGVyQWNjb3VudFR5cGVDb2RlYyByZWdpc3RlcnMgYW4gZXh0ZXJuYWwgYWNjb3VudCB0eXBlIGRlZmluZWQgaW4gYW5vdGhlciBtb2R1bGUgZm9yIHRoZSBpbnRlcm5hbCBNb2R1bGVDZGMuCmZ1bmMgUmVnaXN0ZXJBY2NvdW50VHlwZUNvZGVjKG8gaW50ZXJmYWNle30sIG5hbWUgc3RyaW5nKSB7CiAgICBNb2R1bGVDZGMuUmVnaXN0ZXJDb25jcmV0ZShvLCBuYW1lLCBuaWwpCn0K"}}),e._v(" "),c("h3",{attrs:{id:"_3-genesis-validation-for-custom-account-types"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#_3-genesis-validation-for-custom-account-types"}},[e._v("#")]),e._v(" 3) Genesis validation for custom account types")]),e._v(" "),c("p",[e._v("Modules implement a "),c("code",[e._v("ValidateGenesis")]),e._v(" method. As "),c("code",[e._v("auth")]),e._v(" does not know of account implementations, accounts will need to validate themselves.")]),e._v(" "),c("p",[e._v("We will unmarshal accounts into a "),c("code",[e._v("GenesisAccount")]),e._v(" interface that includes a "),c("code",[e._v("Validate")]),e._v(" method.")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBHZW5lc2lzQWNjb3VudCBpbnRlcmZhY2UgewogICAgZXhwb3J0ZWQuQWNjb3VudAogICAgVmFsaWRhdGUoKSBlcnJvcgp9Cg=="}}),e._v(" "),c("p",[e._v("Then the "),c("code",[e._v("auth")]),e._v(" "),c("code",[e._v("ValidateGenesis")]),e._v(" function becomes:")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVmFsaWRhdGVHZW5lc2lzIHBlcmZvcm1zIGJhc2ljIHZhbGlkYXRpb24gb2YgYXV0aCBnZW5lc2lzIGRhdGEgcmV0dXJuaW5nIGFuCi8vIGVycm9yIGZvciBhbnkgZmFpbGVkIHZhbGlkYXRpb24gY3JpdGVyaWEuCmZ1bmMgVmFsaWRhdGVHZW5lc2lzKGRhdGEgR2VuZXNpc1N0YXRlKSBlcnJvciB7CiAgICAvLyBWYWxpZGF0ZSBwYXJhbXMKICAgIC4uLgoKICAgIC8vIFZhbGlkYXRlIGFjY291bnRzCiAgICBhZGRyTWFwIDo9IG1ha2UobWFwW3N0cmluZ11ib29sLCBsZW4oZGF0YS5BY2NvdW50cykpCiAgICBmb3IgXywgYWNjIDo9IHJhbmdlIGRhdGEuQWNjb3VudHMgewoKICAgICAgICAvLyBjaGVjayBmb3IgZHVwbGljYXRlZCBhY2NvdW50cwogICAgICAgIGFkZHJTdHIgOj0gYWNjLkdldEFkZHJlc3MoKS5TdHJpbmcoKQogICAgICAgIGlmIF8sIG9rIDo9IGFkZHJNYXBbYWRkclN0cl07IG9rIHsKICAgICAgICAgICAgcmV0dXJuIGZtdC5FcnJvcmYoJnF1b3Q7ZHVwbGljYXRlIGFjY291bnQgZm91bmQgaW4gZ2VuZXNpcyBzdGF0ZTsgYWRkcmVzczogJXMmcXVvdDssIGFkZHJTdHIpCiAgICAgICAgfQogICAgICAgIGFkZHJNYXBbYWRkclN0cl0gPSB0cnVlCgogICAgICAgIC8vIGNoZWNrIGFjY291bnQgc3BlY2lmaWMgdmFsaWRhdGlvbgogICAgICAgIGlmIGVyciA6PSBhY2MuVmFsaWRhdGUoKTsgZXJyICE9IG5pbCB7CiAgICAgICAgICAgIHJldHVybiBmbXQuRXJyb3JmKCZxdW90O2ludmFsaWQgYWNjb3VudCBmb3VuZCBpbiBnZW5lc2lzIHN0YXRlOyBhZGRyZXNzOiAlcywgZXJyb3I6ICVzJnF1b3Q7LCBhZGRyU3RyLCBlcnIuRXJyb3IoKSkKICAgICAgICB9CgogICAgfQogICAgcmV0dXJuIG5pbAp9Cg=="}}),e._v(" "),c("h3",{attrs:{id:"_4-move-add-genesis-account-cli-to-auth"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#_4-move-add-genesis-account-cli-to-auth"}},[e._v("#")]),e._v(" 4) Move add-genesis-account cli to "),c("code",[e._v("auth")])]),e._v(" "),c("p",[e._v("The "),c("code",[e._v("genaccounts")]),e._v(" module contains a cli command to add base or vesting accounts to a genesis file.")]),e._v(" "),c("p",[e._v("This will be moved to "),c("code",[e._v("auth")]),e._v(". We will leave it to projects to write their own commands to add custom accounts. An extensible cli handler, similar to "),c("code",[e._v("gov")]),e._v(", could be created but it is not worth the complexity for this minor use case.")]),e._v(" "),c("h3",{attrs:{id:"_5-update-module-and-vesting-accounts"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#_5-update-module-and-vesting-accounts"}},[e._v("#")]),e._v(" 5) Update module and vesting accounts")]),e._v(" "),c("p",[e._v("Under the new scheme, module and vesting account types need some minor updates:")]),e._v(" "),c("ul",[c("li",[e._v("Type registration on "),c("code",[e._v("auth")]),e._v("'s codec (shown above)")]),e._v(" "),c("li",[e._v("A "),c("code",[e._v("Validate")]),e._v(" method for each "),c("code",[e._v("Account")]),e._v(" concrete type")])]),e._v(" "),c("h2",{attrs:{id:"status"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),c("p",[e._v("Proposed")]),e._v(" "),c("h2",{attrs:{id:"consequences"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),c("h3",{attrs:{id:"positive"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),c("ul",[c("li",[e._v("custom accounts can be used without needing to fork "),c("code",[e._v("genaccounts")])]),e._v(" "),c("li",[e._v("reduction in lines of code")])]),e._v(" "),c("h3",{attrs:{id:"negative"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),c("h3",{attrs:{id:"neutral"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),c("ul",[c("li",[c("code",[e._v("genaccounts")]),e._v(" module no longer exists")]),e._v(" "),c("li",[e._v("accounts in genesis files are stored under "),c("code",[e._v("accounts")]),e._v(" in "),c("code",[e._v("auth")]),e._v(" rather than in the "),c("code",[e._v("genaccounts")]),e._v(" module.\n-"),c("code",[e._v("add-genesis-account")]),e._v(" cli command now in "),c("code",[e._v("auth")])])]),e._v(" "),c("h2",{attrs:{id:"references"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);