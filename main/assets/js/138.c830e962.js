(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{625:function(e,t,a){"use strict";a.r(t);var o=a(1),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"command-line-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-line-interface"}},[e._v("#")]),e._v(" Command-Line Interface")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("This document describes how command-line interface (CLI) works on a high-level, for an "),a("RouterLink",{attrs:{to:"/basics/app-anatomy.html"}},[a("strong",[e._v("application")])]),e._v(". A separate document for implementing a CLI for a Cosmos SDK "),a("RouterLink",{attrs:{to:"/building-modules/intro.html"}},[a("strong",[e._v("module")])]),e._v(" can be found "),a("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#cli"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"command-line-interface-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-line-interface-2"}},[e._v("#")]),e._v(" Command-Line Interface")]),e._v(" "),a("h3",{attrs:{id:"example-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-command"}},[e._v("#")]),e._v(" Example Command")]),e._v(" "),a("p",[e._v("There is no set way to create a CLI, but Cosmos SDK modules typically use the "),a("a",{attrs:{href:"https://github.com/spf13/cobra",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cobra Library"),a("OutboundLink")],1),e._v(". Building a CLI with Cobra entails defining commands, arguments, and flags. "),a("a",{attrs:{href:"#commands"}},[a("strong",[e._v("Commands")])]),e._v(" understand the actions users wish to take, such as "),a("code",[e._v("tx")]),e._v(" for creating a transaction and "),a("code",[e._v("query")]),e._v(" for querying the application. Each command can also have nested subcommands, necessary for naming the specific transaction type. Users also supply "),a("strong",[e._v("Arguments")]),e._v(", such as account numbers to send coins to, and "),a("a",{attrs:{href:"#flags"}},[a("strong",[e._v("Flags")])]),e._v(" to modify various aspects of the commands, such as gas prices or which node to broadcast to.")]),e._v(" "),a("p",[e._v("Here is an example of a command a user might enter to interact with the simapp CLI "),a("code",[e._v("simd")]),e._v(" in order to send some tokens:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCBiYW5rIHNlbmQgJE1ZX1ZBTElEQVRPUl9BRERSRVNTICRSRUNJUElFTlQgMTAwMHN0YWtlIC0tZ2FzIGF1dG8gLS1nYXMtcHJpY2VzICZsdDtnYXNQcmljZXMmZ3Q7Cg=="}}),e._v(" "),a("p",[e._v("The first four strings specify the command:")]),e._v(" "),a("ul",[a("li",[e._v("The root command for the entire application "),a("code",[e._v("simd")]),e._v(".")]),e._v(" "),a("li",[e._v("The subcommand "),a("code",[e._v("tx")]),e._v(", which contains all commands that let users create transactions.")]),e._v(" "),a("li",[e._v("The subcommand "),a("code",[e._v("bank")]),e._v(" to indicate which module to route the command to ("),a("RouterLink",{attrs:{to:"/x/bank/spec/"}},[a("code",[e._v("x/bank")])]),e._v(" module in this case).")],1),e._v(" "),a("li",[e._v("The type of transaction "),a("code",[e._v("send")]),e._v(".")])]),e._v(" "),a("p",[e._v("The next two strings are arguments: the "),a("code",[e._v("from_address")]),e._v(" the user wishes to send from, the "),a("code",[e._v("to_address")]),e._v(" of the recipient, and the "),a("code",[e._v("amount")]),e._v(" they want to send. Finally, the last few strings of the command are optional flags to indicate how much the user is willing to pay in fees (calculated using the amount of gas used to execute the transaction and the gas prices provided by the user).")]),e._v(" "),a("p",[e._v("The CLI interacts with a "),a("RouterLink",{attrs:{to:"/core/node.html"}},[e._v("node")]),e._v(" to handle this command. The interface itself is defined in a "),a("code",[e._v("main.go")]),e._v(" file.")],1),e._v(" "),a("h3",{attrs:{id:"building-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-the-cli"}},[e._v("#")]),e._v(" Building the CLI")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("main.go")]),e._v(" file needs to have a "),a("code",[e._v("main()")]),e._v(" function that creates a root command, to which all the application commands will be added as subcommands. The root command additionally handles:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("setting configurations")]),e._v(" by reading in configuration files (e.g. the Cosmos SDK config file).")]),e._v(" "),a("li",[a("strong",[e._v("adding any flags")]),e._v(" to it, such as "),a("code",[e._v("--chain-id")]),e._v(".")]),e._v(" "),a("li",[a("strong",[e._v("instantiating the "),a("code",[e._v("codec")])]),e._v(" by calling the application's "),a("code",[e._v("MakeCodec()")]),e._v(" function (called "),a("code",[e._v("MakeTestEncodingConfig")]),e._v(" in "),a("code",[e._v("simapp")]),e._v("). The "),a("RouterLink",{attrs:{to:"/core/encoding.html"}},[a("code",[e._v("codec")])]),e._v(" is used to encode and decode data structures for the application - stores can only persist "),a("code",[e._v("[]byte")]),e._v("s so the developer must define a serialization format for their data structures or use the default, Protobuf.")],1),e._v(" "),a("li",[a("strong",[e._v("adding subcommand")]),e._v(" for all the possible user interactions, including "),a("a",{attrs:{href:"#transaction-commands"}},[e._v("transaction commands")]),e._v(" and "),a("a",{attrs:{href:"#query-commands"}},[e._v("query commands")]),e._v(".")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("main()")]),e._v(" function finally creates an executor and "),a("a",{attrs:{href:"https://pkg.go.dev/github.com/spf13/cobra#Command.Execute",target:"_blank",rel:"noopener noreferrer"}},[e._v("execute"),a("OutboundLink")],1),e._v(" the root command. See an example of "),a("code",[e._v("main()")]),e._v(" function from the "),a("code",[e._v("simapp")]),e._v(" application:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBtYWluKCkgewoJcm9vdENtZCwgXyA6PSBjbWQuTmV3Um9vdENtZCgpCgoJaWYgZXJyIDo9IHN2cmNtZC5FeGVjdXRlKHJvb3RDbWQsICZxdW90OyZxdW90Oywgc2ltYXBwLkRlZmF1bHROb2RlSG9tZSk7IGVyciAhPSBuaWwgewoJCXN3aXRjaCBlIDo9IGVyci4odHlwZSkgewoJCWNhc2Ugc2VydmVyLkVycm9yQ29kZToKCQkJb3MuRXhpdChlLkNvZGUpCgoJCWRlZmF1bHQ6CgkJCW9zLkV4aXQoMSkKCQl9Cgl9Cn0="}})],1),e._v(" "),a("p",[e._v("The rest of the document will detail what needs to be implemented for each step and include smaller portions of code from the "),a("code",[e._v("simapp")]),e._v(" CLI files.")]),e._v(" "),a("h2",{attrs:{id:"adding-commands-to-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-commands-to-the-cli"}},[e._v("#")]),e._v(" Adding Commands to the CLI")]),e._v(" "),a("p",[e._v("Every application CLI first constructs a root command, then adds functionality by aggregating subcommands (often with further nested subcommands) using "),a("code",[e._v("rootCmd.AddCommand()")]),e._v(". The bulk of an application's unique capabilities lies in its transaction and query commands, called "),a("code",[e._v("TxCmd")]),e._v(" and "),a("code",[e._v("QueryCmd")]),e._v(" respectively.")]),e._v(" "),a("h3",{attrs:{id:"root-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#root-command"}},[e._v("#")]),e._v(" Root Command")]),e._v(" "),a("p",[e._v("The root command (called "),a("code",[e._v("rootCmd")]),e._v(') is what the user first types into the command line to indicate which application they wish to interact with. The string used to invoke the command (the "Use" field) is typically the name of the application suffixed with '),a("code",[e._v("-d")]),e._v(", e.g. "),a("code",[e._v("simd")]),e._v(" or "),a("code",[e._v("gaiad")]),e._v(". The root command typically includes the following commands to support basic functionality in the application.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Status")]),e._v(" command from the Cosmos SDK rpc client tools, which prints information about the status of the connected "),a("RouterLink",{attrs:{to:"/core/node.html"}},[a("code",[e._v("Node")])]),e._v(". The Status of a node includes "),a("code",[e._v("NodeInfo")]),e._v(","),a("code",[e._v("SyncInfo")]),e._v(" and "),a("code",[e._v("ValidatorInfo")]),e._v(".")],1),e._v(" "),a("li",[a("strong",[e._v("Keys")]),e._v(" "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0-rc1/client/keys",target:"_blank",rel:"noopener noreferrer"}},[e._v("commands"),a("OutboundLink")],1),e._v(" from the Cosmos SDK client tools, which includes a collection of subcommands for using the key functions in the Cosmos SDK crypto tools, including adding a new key and saving it to the keyring, listing all public keys stored in the keyring, and deleting a key. For example, users can type "),a("code",[e._v("simd keys add <name>")]),e._v(" to add a new key and save an encrypted copy to the keyring, using the flag "),a("code",[e._v("--recover")]),e._v(" to recover a private key from a seed phrase or the flag "),a("code",[e._v("--multisig")]),e._v(" to group multiple keys together to create a multisig key. For full details on the "),a("code",[e._v("add")]),e._v(" key command, see the code "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0-rc1/client/keys/add.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". For more details about usage of "),a("code",[e._v("--keyring-backend")]),e._v(" for storage of key credentials look at the "),a("RouterLink",{attrs:{to:"/run-node/keyring.html"}},[e._v("keyring docs")]),e._v(".")],1),e._v(" "),a("li",[a("strong",[e._v("Server")]),e._v(" commands from the Cosmos SDK server package. These commands are responsible for providing the mechanisms necessary to start an ABCI Tendermint application and provides the CLI framework (based on "),a("a",{attrs:{href:"github.com/spf13/cobra"}},[e._v("cobra")]),e._v(") necessary to fully bootstrap an application. The package exposes two core functions: "),a("code",[e._v("StartCmd")]),e._v(" and "),a("code",[e._v("ExportCmd")]),e._v(" which creates commands to start the application and export state respectively. Click "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0-rc1/server",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" to learn more.")]),e._v(" "),a("li",[a("a",{attrs:{href:"#transaction-commands"}},[a("strong",[e._v("Transaction")])]),e._v(" commands.")]),e._v(" "),a("li",[a("a",{attrs:{href:"#query-commands"}},[a("strong",[e._v("Query")])]),e._v(" commands.")])]),e._v(" "),a("p",[e._v("Next is an example "),a("code",[e._v("rootCmd")]),e._v(" function from the "),a("code",[e._v("simapp")]),e._v(" application. It instantiates the root command, adds a "),a("a",{attrs:{href:"#flags"}},[a("em",[e._v("persistent")]),e._v(" flag")]),e._v(" and "),a("code",[e._v("PreRun")]),e._v(" function to be run before every execution, and adds all of the necessary subcommands.")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTmV3Um9vdENtZCBjcmVhdGVzIGEgbmV3IHJvb3QgY29tbWFuZCBmb3Igc2ltZC4gSXQgaXMgY2FsbGVkIG9uY2UgaW4gdGhlCi8vIG1haW4gZnVuY3Rpb24uCmZ1bmMgTmV3Um9vdENtZCgpICgqY29icmEuQ29tbWFuZCwgcGFyYW1zLkVuY29kaW5nQ29uZmlnKSB7CgllbmNvZGluZ0NvbmZpZyA6PSBzaW1hcHAuTWFrZVRlc3RFbmNvZGluZ0NvbmZpZygpCglpbml0Q2xpZW50Q3R4IDo9IGNsaWVudC5Db250ZXh0e30uCgkJV2l0aENvZGVjKGVuY29kaW5nQ29uZmlnLkNvZGVjKS4KCQlXaXRoSW50ZXJmYWNlUmVnaXN0cnkoZW5jb2RpbmdDb25maWcuSW50ZXJmYWNlUmVnaXN0cnkpLgoJCVdpdGhUeENvbmZpZyhlbmNvZGluZ0NvbmZpZy5UeENvbmZpZykuCgkJV2l0aExlZ2FjeUFtaW5vKGVuY29kaW5nQ29uZmlnLkFtaW5vKS4KCQlXaXRoSW5wdXQob3MuU3RkaW4pLgoJCVdpdGhBY2NvdW50UmV0cmlldmVyKHR5cGVzLkFjY291bnRSZXRyaWV2ZXJ7fSkuCgkJV2l0aEhvbWVEaXIoc2ltYXBwLkRlZmF1bHROb2RlSG9tZSkuCgkJV2l0aFZpcGVyKCZxdW90OyZxdW90OykgLy8gSW4gc2ltYXBwLCB3ZSBkb24ndCB1c2UgYW55IHByZWZpeCBmb3IgZW52IHZhcmlhYmxlcy4KCglyb290Q21kIDo9ICZhbXA7Y29icmEuQ29tbWFuZHsKCQlVc2U6ICAgJnF1b3Q7c2ltZCZxdW90OywKCQlTaG9ydDogJnF1b3Q7c2ltdWxhdGlvbiBhcHAmcXVvdDssCgkJUGVyc2lzdGVudFByZVJ1bkU6IGZ1bmMoY21kICpjb2JyYS5Db21tYW5kLCBfIFtdc3RyaW5nKSBlcnJvciB7CgkJCS8vIHNldCB0aGUgZGVmYXVsdCBjb21tYW5kIG91dHB1dHMKCQkJY21kLlNldE91dChjbWQuT3V0T3JTdGRvdXQoKSkKCQkJY21kLlNldEVycihjbWQuRXJyT3JTdGRlcnIoKSkKCgkJCWluaXRDbGllbnRDdHgsIGVyciA6PSBjbGllbnQuUmVhZFBlcnNpc3RlbnRDb21tYW5kRmxhZ3MoaW5pdENsaWVudEN0eCwgY21kLkZsYWdzKCkpCgkJCWlmIGVyciAhPSBuaWwgewoJCQkJcmV0dXJuIGVycgoJCQl9CgoJCQlpbml0Q2xpZW50Q3R4LCBlcnIgPSBjb25maWcuUmVhZEZyb21DbGllbnRDb25maWcoaW5pdENsaWVudEN0eCkKCQkJaWYgZXJyICE9IG5pbCB7CgkJCQlyZXR1cm4gZXJyCgkJCX0KCgkJCWlmIGVyciA6PSBjbGllbnQuU2V0Q21kQ2xpZW50Q29udGV4dEhhbmRsZXIoaW5pdENsaWVudEN0eCwgY21kKTsgZXJyICE9IG5pbCB7CgkJCQlyZXR1cm4gZXJyCgkJCX0KCgkJCWN1c3RvbUFwcFRlbXBsYXRlLCBjdXN0b21BcHBDb25maWcgOj0gaW5pdEFwcENvbmZpZygpCgkJCWN1c3RvbVRNQ29uZmlnIDo9IGluaXRUZW5kZXJtaW50Q29uZmlnKCkKCgkJCXJldHVybiBzZXJ2ZXIuSW50ZXJjZXB0Q29uZmlnc1ByZVJ1bkhhbmRsZXIoY21kLCBjdXN0b21BcHBUZW1wbGF0ZSwgY3VzdG9tQXBwQ29uZmlnLCBjdXN0b21UTUNvbmZpZykKCQl9LAoJfQoKCWluaXRSb290Q21kKHJvb3RDbWQsIGVuY29kaW5nQ29uZmlnKQoKCXJldHVybiByb290Q21kLCBlbmNvZGluZ0NvbmZpZwp9"}})],1),e._v(" "),a("p",[a("code",[e._v("rootCmd")]),e._v(" has a function called "),a("code",[e._v("initAppConfig()")]),e._v(" which is useful for setting the application's custom configs.\nBy default app uses Tendermint app config template from Cosmos SDK, which can be over-written via "),a("code",[e._v("initAppConfig()")]),e._v(".\nHere's an example code to override default "),a("code",[e._v("app.toml")]),e._v(" template.")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gaW5pdEFwcENvbmZpZyBoZWxwcyB0byBvdmVycmlkZSBkZWZhdWx0IGFwcENvbmZpZyB0ZW1wbGF0ZSBhbmQgY29uZmlncy4KLy8gcmV0dXJuICZxdW90OyZxdW90OywgbmlsIGlmIG5vIGN1c3RvbSBjb25maWd1cmF0aW9uIGlzIHJlcXVpcmVkIGZvciB0aGUgYXBwbGljYXRpb24uCmZ1bmMgaW5pdEFwcENvbmZpZygpIChzdHJpbmcsIGludGVyZmFjZXt9KSB7CgkvLyBUaGUgZm9sbG93aW5nIGNvZGUgc25pcHBldCBpcyBqdXN0IGZvciByZWZlcmVuY2UuCgoJLy8gV0FTTUNvbmZpZyBkZWZpbmVzIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSB3YXNtIG1vZHVsZS4KCXR5cGUgV0FTTUNvbmZpZyBzdHJ1Y3QgewoJCS8vIFRoaXMgaXMgdGhlIG1heGltdW0gc2RrIGdhcyAod2FzbSBhbmQgc3RvcmFnZSkgdGhhdCB3ZSBhbGxvdyBmb3IgYW55IHgvd2FzbSAmcXVvdDtzbWFydCZxdW90OyBxdWVyaWVzCgkJUXVlcnlHYXNMaW1pdCB1aW50NjQgYG1hcHN0cnVjdHVyZTomcXVvdDtxdWVyeV9nYXNfbGltaXQmcXVvdDtgCgoJCS8vIEFkZHJlc3MgZGVmaW5lcyB0aGUgZ1JQQy13ZWIgc2VydmVyIHRvIGxpc3RlbiBvbgoJCUxydVNpemUgdWludDY0IGBtYXBzdHJ1Y3R1cmU6JnF1b3Q7bHJ1X3NpemUmcXVvdDtgCgl9CgoJdHlwZSBDdXN0b21BcHBDb25maWcgc3RydWN0IHsKCQlzZXJ2ZXJjb25maWcuQ29uZmlnCgoJCVdBU00gV0FTTUNvbmZpZyBgbWFwc3RydWN0dXJlOiZxdW90O3dhc20mcXVvdDtgCgl9CgoJLy8gT3B0aW9uYWxseSBhbGxvdyB0aGUgY2hhaW4gZGV2ZWxvcGVyIHRvIG92ZXJ3cml0ZSB0aGUgU0RLJ3MgZGVmYXVsdAoJLy8gc2VydmVyIGNvbmZpZy4KCXNydkNmZyA6PSBzZXJ2ZXJjb25maWcuRGVmYXVsdENvbmZpZygpCgkvLyBUaGUgU0RLJ3MgZGVmYXVsdCBtaW5pbXVtIGdhcyBwcmljZSBpcyBzZXQgdG8gJnF1b3Q7JnF1b3Q7IChlbXB0eSB2YWx1ZSkgaW5zaWRlCgkvLyBhcHAudG9tbC4gSWYgbGVmdCBlbXB0eSBieSB2YWxpZGF0b3JzLCB0aGUgbm9kZSB3aWxsIGhhbHQgb24gc3RhcnR1cC4KCS8vIEhvd2V2ZXIsIHRoZSBjaGFpbiBkZXZlbG9wZXIgY2FuIHNldCBhIGRlZmF1bHQgYXBwLnRvbWwgdmFsdWUgZm9yIHRoZWlyCgkvLyB2YWxpZGF0b3JzIGhlcmUuCgkvLwoJLy8gSW4gc3VtbWFyeToKCS8vIC0gaWYgeW91IGxlYXZlIHNydkNmZy5NaW5HYXNQcmljZXMgPSAmcXVvdDsmcXVvdDssIGFsbCB2YWxpZGF0b3JzIE1VU1QgdHdlYWsgdGhlaXIKCS8vICAgb3duIGFwcC50b21sIGNvbmZpZywKCS8vIC0gaWYgeW91IHNldCBzcnZDZmcuTWluR2FzUHJpY2VzIG5vbi1lbXB0eSwgdmFsaWRhdG9ycyBDQU4gdHdlYWsgdGhlaXIKCS8vICAgb3duIGFwcC50b21sIHRvIG92ZXJyaWRlLCBvciB1c2UgdGhpcyBkZWZhdWx0IHZhbHVlLgoJLy8KCS8vIEluIHNpbWFwcCwgd2Ugc2V0IHRoZSBtaW4gZ2FzIHByaWNlcyB0byAwLgoJc3J2Q2ZnLk1pbkdhc1ByaWNlcyA9ICZxdW90OzBzdGFrZSZxdW90OwoKCWN1c3RvbUFwcENvbmZpZyA6PSBDdXN0b21BcHBDb25maWd7CgkJQ29uZmlnOiAqc3J2Q2ZnLAoJCVdBU006IFdBU01Db25maWd7CgkJCUxydVNpemU6ICAgICAgIDEsCgkJCVF1ZXJ5R2FzTGltaXQ6IDMwMDAwMCwKCQl9LAoJfQoKCWN1c3RvbUFwcFRlbXBsYXRlIDo9IHNlcnZlcmNvbmZpZy5EZWZhdWx0Q29uZmlnVGVtcGxhdGUgKyBgClt3YXNtXQojIFRoaXMgaXMgdGhlIG1heGltdW0gc2RrIGdhcyAod2FzbSBhbmQgc3RvcmFnZSkgdGhhdCB3ZSBhbGxvdyBmb3IgYW55IHgvd2FzbSAmcXVvdDtzbWFydCZxdW90OyBxdWVyaWVzCnF1ZXJ5X2dhc19saW1pdCA9IDMwMDAwMAojIFRoaXMgaXMgdGhlIG51bWJlciBvZiB3YXNtIHZtIGluc3RhbmNlcyB3ZSBrZWVwIGNhY2hlZCBpbiBtZW1vcnkgZm9yIHNwZWVkLXVwCiMgV2FybmluZzogdGhpcyBpcyBjdXJyZW50bHkgdW5zdGFibGUgYW5kIG1heSBsZWFkIHRvIGNyYXNoZXMsIGJlc3QgdG8ga2VlcCBmb3IgMCB1bmxlc3MgdGVzdGluZyBsb2NhbGx5CmxydV9zaXplID0gMGAKCglyZXR1cm4gY3VzdG9tQXBwVGVtcGxhdGUsIGN1c3RvbUFwcENvbmZpZwp9"}})],1),e._v(" "),a("p",[e._v("The "),a("code",[e._v("initAppConfig()")]),e._v(" also allows overriding the default Cosmos SDK's "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0-rc1/server/config/config.go#L235",target:"_blank",rel:"noopener noreferrer"}},[e._v("server config"),a("OutboundLink")],1),e._v(". One example is the "),a("code",[e._v("min-gas-prices")]),e._v(" config, which defines the minimum gas prices a validator is willing to accept for processing a transaction. By default, the Cosmos SDK sets this parameter to "),a("code",[e._v('""')]),e._v(" (empty string), which forces all validators to tweak their own "),a("code",[e._v("app.toml")]),e._v(" and set a non-empty value, or else the node will halt on startup. This might not be the best UX for validators, so the chain developer can set a default "),a("code",[e._v("app.toml")]),e._v(" value for validators inside this "),a("code",[e._v("initAppConfig()")]),e._v(" function.")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CS8vIE9wdGlvbmFsbHkgYWxsb3cgdGhlIGNoYWluIGRldmVsb3BlciB0byBvdmVyd3JpdGUgdGhlIFNESydzIGRlZmF1bHQKCS8vIHNlcnZlciBjb25maWcuCglzcnZDZmcgOj0gc2VydmVyY29uZmlnLkRlZmF1bHRDb25maWcoKQoJLy8gVGhlIFNESydzIGRlZmF1bHQgbWluaW11bSBnYXMgcHJpY2UgaXMgc2V0IHRvICZxdW90OyZxdW90OyAoZW1wdHkgdmFsdWUpIGluc2lkZQoJLy8gYXBwLnRvbWwuIElmIGxlZnQgZW1wdHkgYnkgdmFsaWRhdG9ycywgdGhlIG5vZGUgd2lsbCBoYWx0IG9uIHN0YXJ0dXAuCgkvLyBIb3dldmVyLCB0aGUgY2hhaW4gZGV2ZWxvcGVyIGNhbiBzZXQgYSBkZWZhdWx0IGFwcC50b21sIHZhbHVlIGZvciB0aGVpcgoJLy8gdmFsaWRhdG9ycyBoZXJlLgoJLy8KCS8vIEluIHN1bW1hcnk6CgkvLyAtIGlmIHlvdSBsZWF2ZSBzcnZDZmcuTWluR2FzUHJpY2VzID0gJnF1b3Q7JnF1b3Q7LCBhbGwgdmFsaWRhdG9ycyBNVVNUIHR3ZWFrIHRoZWlyCgkvLyAgIG93biBhcHAudG9tbCBjb25maWcsCgkvLyAtIGlmIHlvdSBzZXQgc3J2Q2ZnLk1pbkdhc1ByaWNlcyBub24tZW1wdHksIHZhbGlkYXRvcnMgQ0FOIHR3ZWFrIHRoZWlyCgkvLyAgIG93biBhcHAudG9tbCB0byBvdmVycmlkZSwgb3IgdXNlIHRoaXMgZGVmYXVsdCB2YWx1ZS4KCS8vCgkvLyBJbiBzaW1hcHAsIHdlIHNldCB0aGUgbWluIGdhcyBwcmljZXMgdG8gMC4KCXNydkNmZy5NaW5HYXNQcmljZXMgPSAmcXVvdDswc3Rha2UmcXVvdDs="}})],1),e._v(" "),a("p",[e._v("The root-level "),a("code",[e._v("status")]),e._v(" and "),a("code",[e._v("keys")]),e._v(" subcommands are common across most applications and do not interact with application state. The bulk of an application's functionality - what users can actually "),a("em",[e._v("do")]),e._v(" with it - is enabled by its "),a("code",[e._v("tx")]),e._v(" and "),a("code",[e._v("query")]),e._v(" commands.")]),e._v(" "),a("h3",{attrs:{id:"transaction-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-commands"}},[e._v("#")]),e._v(" Transaction Commands")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/core/transactions.html"}},[e._v("Transactions")]),e._v(" are objects wrapping "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[a("code",[e._v("Msg")]),e._v("s")]),e._v(" that trigger state changes. To enable the creation of transactions using the CLI interface, a function "),a("code",[e._v("txCommand")]),e._v(" is generally added to the "),a("code",[e._v("rootCmd")]),e._v(":")],1),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CS8vIGFkZCBrZXliYXNlLCBhdXhpbGlhcnkgUlBDLCBxdWVyeSwgYW5kIHR4IGNoaWxkIGNvbW1hbmRzCglyb290Q21kLkFkZENvbW1hbmQoCgkJcnBjLlN0YXR1c0NvbW1hbmQoKSwKCQlxdWVyeUNvbW1hbmQoKSwKCQl0eENvbW1hbmQoKSwKCQlrZXlzLkNvbW1hbmRzKHNpbWFwcC5EZWZhdWx0Tm9kZUhvbWUpLAoJKQ=="}})],1),e._v(" "),a("p",[e._v("This "),a("code",[e._v("txCommand")]),e._v(" function adds all the transaction available to end-users for the application. This typically includes:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Sign command")]),e._v(" from the "),a("RouterLink",{attrs:{to:"/x/auth/spec/"}},[a("code",[e._v("auth")])]),e._v(" module that signs messages in a transaction. To enable multisig, add the "),a("code",[e._v("auth")]),e._v(" module's "),a("code",[e._v("MultiSign")]),e._v(" command. Since every transaction requires some sort of signature in order to be valid, the signing command is necessary for every application.")],1),e._v(" "),a("li",[a("strong",[e._v("Broadcast command")]),e._v(" from the Cosmos SDK client tools, to broadcast transactions.")]),e._v(" "),a("li",[a("strong",[e._v("All "),a("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#transaction-commands"}},[e._v("module transaction commands")])],1),e._v(" the application is dependent on, retrieved by using the "),a("RouterLink",{attrs:{to:"/building-modules/module-manager.html#basic-manager"}},[e._v("basic module manager's")]),e._v(" "),a("code",[e._v("AddTxCommands()")]),e._v(" function.")],1)]),e._v(" "),a("p",[e._v("Here is an example of a "),a("code",[e._v("txCommand")]),e._v(" aggregating these subcommands from the "),a("code",[e._v("simapp")]),e._v(" application:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyB0eENvbW1hbmQoKSAqY29icmEuQ29tbWFuZCB7CgljbWQgOj0gJmFtcDtjb2JyYS5Db21tYW5kewoJCVVzZTogICAgICAgICAgICAgICAgICAgICAgICAmcXVvdDt0eCZxdW90OywKCQlTaG9ydDogICAgICAgICAgICAgICAgICAgICAgJnF1b3Q7VHJhbnNhY3Rpb25zIHN1YmNvbW1hbmRzJnF1b3Q7LAoJCURpc2FibGVGbGFnUGFyc2luZzogICAgICAgICBmYWxzZSwKCQlTdWdnZXN0aW9uc01pbmltdW1EaXN0YW5jZTogMiwKCQlSdW5FOiAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50LlZhbGlkYXRlQ21kLAoJfQoKCWNtZC5BZGRDb21tYW5kKAoJCWF1dGhjbWQuR2V0U2lnbkNvbW1hbmQoKSwKCQlhdXRoY21kLkdldFNpZ25CYXRjaENvbW1hbmQoKSwKCQlhdXRoY21kLkdldE11bHRpU2lnbkNvbW1hbmQoKSwKCQlhdXRoY21kLkdldE11bHRpU2lnbkJhdGNoQ21kKCksCgkJYXV0aGNtZC5HZXRWYWxpZGF0ZVNpZ25hdHVyZXNDb21tYW5kKCksCgkJYXV0aGNtZC5HZXRCcm9hZGNhc3RDb21tYW5kKCksCgkJYXV0aGNtZC5HZXRFbmNvZGVDb21tYW5kKCksCgkJYXV0aGNtZC5HZXREZWNvZGVDb21tYW5kKCksCgkJYXV0aGNtZC5HZXRBdXhUb0ZlZUNvbW1hbmQoKSwKCSkKCglzaW1hcHAuTW9kdWxlQmFzaWNzLkFkZFR4Q29tbWFuZHMoY21kKQoJY21kLlBlcnNpc3RlbnRGbGFncygpLlN0cmluZyhmbGFncy5GbGFnQ2hhaW5JRCwgJnF1b3Q7JnF1b3Q7LCAmcXVvdDtUaGUgbmV0d29yayBjaGFpbiBJRCZxdW90OykKCglyZXR1cm4gY21kCn0="}})],1),e._v(" "),a("h3",{attrs:{id:"query-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-commands"}},[e._v("#")]),e._v(" Query Commands")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#queries"}},[a("strong",[e._v("Queries")])]),e._v(" are objects that allow users to retrieve information about the application's state. To enable the creation of queries using the CLI interface, a function "),a("code",[e._v("queryCommand")]),e._v(" is generally added to the "),a("code",[e._v("rootCmd")]),e._v(":")],1),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CS8vIGFkZCBrZXliYXNlLCBhdXhpbGlhcnkgUlBDLCBxdWVyeSwgYW5kIHR4IGNoaWxkIGNvbW1hbmRzCglyb290Q21kLkFkZENvbW1hbmQoCgkJcnBjLlN0YXR1c0NvbW1hbmQoKSwKCQlxdWVyeUNvbW1hbmQoKSwKCQl0eENvbW1hbmQoKSwKCQlrZXlzLkNvbW1hbmRzKHNpbWFwcC5EZWZhdWx0Tm9kZUhvbWUpLAoJKQ=="}})],1),e._v(" "),a("p",[e._v("This "),a("code",[e._v("queryCommand")]),e._v(" function adds all the queries available to end-users for the application. This typically includes:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("QueryTx")]),e._v(" and/or other transaction query commands] from the "),a("code",[e._v("auth")]),e._v(" module which allow the user to search for a transaction by inputting its hash, a list of tags, or a block height. These queries allow users to see if transactions have been included in a block.")]),e._v(" "),a("li",[a("strong",[e._v("Account command")]),e._v(" from the "),a("code",[e._v("auth")]),e._v(" module, which displays the state (e.g. account balance) of an account given an address.")]),e._v(" "),a("li",[a("strong",[e._v("Validator command")]),e._v(" from the Cosmos SDK rpc client tools, which displays the validator set of a given height.")]),e._v(" "),a("li",[a("strong",[e._v("Block command")]),e._v(" from the Cosmos SDK rpc client tools, which displays the block data for a given height.")]),e._v(" "),a("li",[a("strong",[e._v("All "),a("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#query-commands"}},[e._v("module query commands")])],1),e._v(" the application is dependent on, retrieved by using the "),a("RouterLink",{attrs:{to:"/building-modules/module-manager.html#basic-manager"}},[e._v("basic module manager's")]),e._v(" "),a("code",[e._v("AddQueryCommands()")]),e._v(" function.")],1)]),e._v(" "),a("p",[e._v("Here is an example of a "),a("code",[e._v("queryCommand")]),e._v(" aggregating subcommands from the "),a("code",[e._v("simapp")]),e._v(" application:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBxdWVyeUNvbW1hbmQoKSAqY29icmEuQ29tbWFuZCB7CgljbWQgOj0gJmFtcDtjb2JyYS5Db21tYW5kewoJCVVzZTogICAgICAgICAgICAgICAgICAgICAgICAmcXVvdDtxdWVyeSZxdW90OywKCQlBbGlhc2VzOiAgICAgICAgICAgICAgICAgICAgW11zdHJpbmd7JnF1b3Q7cSZxdW90O30sCgkJU2hvcnQ6ICAgICAgICAgICAgICAgICAgICAgICZxdW90O1F1ZXJ5aW5nIHN1YmNvbW1hbmRzJnF1b3Q7LAoJCURpc2FibGVGbGFnUGFyc2luZzogICAgICAgICBmYWxzZSwKCQlTdWdnZXN0aW9uc01pbmltdW1EaXN0YW5jZTogMiwKCQlSdW5FOiAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50LlZhbGlkYXRlQ21kLAoJfQoKCWNtZC5BZGRDb21tYW5kKAoJCWF1dGhjbWQuR2V0QWNjb3VudENtZCgpLAoJCXJwYy5WYWxpZGF0b3JDb21tYW5kKCksCgkJcnBjLkJsb2NrQ29tbWFuZCgpLAoJCWF1dGhjbWQuUXVlcnlUeHNCeUV2ZW50c0NtZCgpLAoJCWF1dGhjbWQuUXVlcnlUeENtZCgpLAoJKQoKCXNpbWFwcC5Nb2R1bGVCYXNpY3MuQWRkUXVlcnlDb21tYW5kcyhjbWQpCgljbWQuUGVyc2lzdGVudEZsYWdzKCkuU3RyaW5nKGZsYWdzLkZsYWdDaGFpbklELCAmcXVvdDsmcXVvdDssICZxdW90O1RoZSBuZXR3b3JrIGNoYWluIElEJnF1b3Q7KQoKCXJldHVybiBjbWQKfQ=="}})],1),e._v(" "),a("h2",{attrs:{id:"flags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flags"}},[e._v("#")]),e._v(" Flags")]),e._v(" "),a("p",[e._v("Flags are used to modify commands; developers can include them in a "),a("code",[e._v("flags.go")]),e._v(" file with their CLI. Users can explicitly include them in commands or pre-configure them by inside their "),a("RouterLink",{attrs:{to:"/run-node/run-node.html#configuring-the-node-using-apptoml"}},[a("code",[e._v("app.toml")])]),e._v(". Commonly pre-configured flags include the "),a("code",[e._v("--node")]),e._v(" to connect to and "),a("code",[e._v("--chain-id")]),e._v(" of the blockchain the user wishes to interact with.")],1),e._v(" "),a("p",[e._v("A "),a("em",[e._v("persistent")]),e._v(" flag (as opposed to a "),a("em",[e._v("local")]),e._v(" flag) added to a command transcends all of its children: subcommands will inherit the configured values for these flags. Additionally, all flags have default values when they are added to commands; some toggle an option off but others are empty values that the user needs to override to create valid commands. A flag can be explicitly marked as "),a("em",[e._v("required")]),e._v(" so that an error is automatically thrown if the user does not provide a value, but it is also acceptable to handle unexpected missing flags differently.")]),e._v(" "),a("p",[e._v("Flags are added to commands directly (generally in the "),a("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#flags"}},[e._v("module's CLI file")]),e._v(" where module commands are defined) and no flag except for the "),a("code",[e._v("rootCmd")]),e._v(" persistent flags has to be added at application level. It is common to add a "),a("em",[e._v("persistent")]),e._v(" flag for "),a("code",[e._v("--chain-id")]),e._v(", the unique identifier of the blockchain the application pertains to, to the root command. Adding this flag can be done in the "),a("code",[e._v("main()")]),e._v(" function. Adding this flag makes sense as the chain ID should not be changing across commands in this application CLI. Here is an example from the "),a("code",[e._v("simapp")]),e._v(" application:")],1),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CWNtZC5QZXJzaXN0ZW50RmxhZ3MoKS5TdHJpbmcoZmxhZ3MuRmxhZ0NoYWluSUQsICZxdW90OyZxdW90OywgJnF1b3Q7VGhlIG5ldHdvcmsgY2hhaW4gSUQmcXVvdDsp"}})],1),e._v(" "),a("h2",{attrs:{id:"environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[e._v("#")]),e._v(" Environment variables")]),e._v(" "),a("p",[e._v("Each flag is bound to it's respecteve named environment variable. Then name of the environment variable consist of two parts - capital case "),a("code",[e._v("basename")]),e._v(" followed by flag name of the flag. "),a("code",[e._v("-")]),e._v(" must be substituted with "),a("code",[e._v("_")]),e._v(". For example flag "),a("code",[e._v("--home")]),e._v(" for application with basename "),a("code",[e._v("GAIA")]),e._v(" is bound to "),a("code",[e._v("GAIA_HOME")]),e._v(". It allows reducing the amount of flags typed for routine operations. For example instead of:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Z2FpYSAtLWhvbWU9Li8gLS1ub2RlPSZsdDtub2RlIGFkZHJlc3MmZ3Q7IC0tY2hhaW4taWQ9JnF1b3Q7dGVzdGNoYWluLTEmcXVvdDsgLS1rZXlyaW5nLWJhY2tlbmQ9dGVzdCB0eCAuLi4gLS1mcm9tPSZsdDtrZXkgbmFtZSZndDsK"}}),e._v(" "),a("p",[e._v("this will be more convenient:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"IyBkZWZpbmUgZW52IHZhcmlhYmxlcyBpbiAuZW52LCAuZW52cmMgZXRjCkdBSUFfSE9NRT0mbHQ7cGF0aCB0byBob21lJmd0OwpHQUlBX05PREU9Jmx0O25vZGUgYWRkcmVzcyZndDsKR0FJQV9DSEFJTl9JRD0mcXVvdDt0ZXN0Y2hhaW4tMSZxdW90OwpHQUlBX0tFWVJJTkdfQkFDS0VORD0mcXVvdDt0ZXN0JnF1b3Q7CgojIGFuZCBsYXRlciBqdXN0IHVzZQpnYWlhIHR4IC4uLiAtLWZyb209Jmx0O2tleSBuYW1lJmd0Owo="}}),e._v(" "),a("h2",{attrs:{id:"configurations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurations"}},[e._v("#")]),e._v(" Configurations")]),e._v(" "),a("p",[e._v("It is vital that the root command of an application uses "),a("code",[e._v("PersistentPreRun()")]),e._v(" cobra command property for executing the command, so all child commands have access to the server and client contexts. These contexts are set as their default values initially and maybe modified, scoped to the command, in their respective "),a("code",[e._v("PersistentPreRun()")]),e._v(" functions. Note that the "),a("code",[e._v("client.Context")]),e._v(' is typically pre-populated with "default" values that may be useful for all commands to inherit and override if necessary.')]),e._v(" "),a("p",[e._v("Here is an example of an "),a("code",[e._v("PersistentPreRun()")]),e._v(" function from "),a("code",[e._v("simapp")]),e._v(":")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CQlQZXJzaXN0ZW50UHJlUnVuRTogZnVuYyhjbWQgKmNvYnJhLkNvbW1hbmQsIF8gW11zdHJpbmcpIGVycm9yIHsKCQkJLy8gc2V0IHRoZSBkZWZhdWx0IGNvbW1hbmQgb3V0cHV0cwoJCQljbWQuU2V0T3V0KGNtZC5PdXRPclN0ZG91dCgpKQoJCQljbWQuU2V0RXJyKGNtZC5FcnJPclN0ZGVycigpKQoKCQkJaW5pdENsaWVudEN0eCwgZXJyIDo9IGNsaWVudC5SZWFkUGVyc2lzdGVudENvbW1hbmRGbGFncyhpbml0Q2xpZW50Q3R4LCBjbWQuRmxhZ3MoKSkKCQkJaWYgZXJyICE9IG5pbCB7CgkJCQlyZXR1cm4gZXJyCgkJCX0KCgkJCWluaXRDbGllbnRDdHgsIGVyciA9IGNvbmZpZy5SZWFkRnJvbUNsaWVudENvbmZpZyhpbml0Q2xpZW50Q3R4KQoJCQlpZiBlcnIgIT0gbmlsIHsKCQkJCXJldHVybiBlcnIKCQkJfQoKCQkJaWYgZXJyIDo9IGNsaWVudC5TZXRDbWRDbGllbnRDb250ZXh0SGFuZGxlcihpbml0Q2xpZW50Q3R4LCBjbWQpOyBlcnIgIT0gbmlsIHsKCQkJCXJldHVybiBlcnIKCQkJfQoKCQkJY3VzdG9tQXBwVGVtcGxhdGUsIGN1c3RvbUFwcENvbmZpZyA6PSBpbml0QXBwQ29uZmlnKCkKCQkJY3VzdG9tVE1Db25maWcgOj0gaW5pdFRlbmRlcm1pbnRDb25maWcoKQoKCQkJcmV0dXJuIHNlcnZlci5JbnRlcmNlcHRDb25maWdzUHJlUnVuSGFuZGxlcihjbWQsIGN1c3RvbUFwcFRlbXBsYXRlLCBjdXN0b21BcHBDb25maWcsIGN1c3RvbVRNQ29uZmlnKQoJCX0s"}})],1),e._v(" "),a("p",[e._v("The "),a("code",[e._v("SetCmdClientContextHandler")]),e._v(" call reads persistent flags via "),a("code",[e._v("ReadPersistentCommandFlags")]),e._v(" which creates a "),a("code",[e._v("client.Context")]),e._v(" and sets that on the root command's "),a("code",[e._v("Context")]),e._v(".")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("InterceptConfigsPreRunHandler")]),e._v(" call creates a viper literal, default "),a("code",[e._v("server.Context")]),e._v(", and a logger and sets that on the root command's "),a("code",[e._v("Context")]),e._v(". The "),a("code",[e._v("server.Context")]),e._v(" will be modified and saved to disk via the internal "),a("code",[e._v("interceptConfigs")]),e._v(" call, which either reads or creates a Tendermint configuration based on the home path provided. In addition, "),a("code",[e._v("interceptConfigs")]),e._v(" also reads and loads the application configuration, "),a("code",[e._v("app.toml")]),e._v(", and binds that to the "),a("code",[e._v("server.Context")]),e._v(" viper literal. This is vital so the application can get access to not only the CLI flags, but also to the application configuration values provided by this file.")]),e._v(" "),a("h2",{attrs:{hide:"",id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),a("p",{attrs:{hide:""}},[e._v("Learn about "),a("RouterLink",{attrs:{to:"/core/events.html"}},[e._v("events")])],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);