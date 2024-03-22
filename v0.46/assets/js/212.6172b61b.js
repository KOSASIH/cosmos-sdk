(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{708:function(a,t,e){"use strict";e.r(t);var c=e(1),s=Object(c.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"client"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[a._v("#")]),a._v(" Client")]),a._v(" "),e("h2",{attrs:{id:"cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[a._v("#")]),a._v(" CLI")]),a._v(" "),e("p",[a._v("A user can query and interact with the "),e("code",[a._v("feegrant")]),a._v(" module using the CLI.")]),a._v(" "),e("h3",{attrs:{id:"query"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[a._v("#")]),a._v(" Query")]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("query")]),a._v(" commands allow users to query "),e("code",[a._v("feegrant")]),a._v(" state.")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"c2ltZCBxdWVyeSBmZWVncmFudCAtLWhlbHAK"}}),a._v(" "),e("h4",{attrs:{id:"grant"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grant"}},[a._v("#")]),a._v(" grant")]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("grant")]),a._v(" command allows users to query a grant for a given granter-grantee pair.")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"c2ltZCBxdWVyeSBmZWVncmFudCBncmFudCBbZ3JhbnRlcl0gW2dyYW50ZWVdIFtmbGFnc10K"}}),a._v(" "),e("p",[a._v("Example:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"c2ltZCBxdWVyeSBmZWVncmFudCBncmFudCBjb3Ntb3MxLi4gY29zbW9zMS4uCg=="}}),a._v(" "),e("p",[a._v("Example Output:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"yml",base64:"YWxsb3dhbmNlOgogICdAdHlwZSc6IC9jb3Ntb3MuZmVlZ3JhbnQudjFiZXRhMS5CYXNpY0FsbG93YW5jZQogIGV4cGlyYXRpb246IG51bGwKICBzcGVuZF9saW1pdDoKICAtIGFtb3VudDogJnF1b3Q7MTAwJnF1b3Q7CiAgICBkZW5vbTogc3Rha2UKZ3JhbnRlZTogY29zbW9zMS4uCmdyYW50ZXI6IGNvc21vczEuLgo="}}),a._v(" "),e("h4",{attrs:{id:"grants"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grants"}},[a._v("#")]),a._v(" grants")]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("grants")]),a._v(" command allows users to query all grants for a given grantee.")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"c2ltZCBxdWVyeSBmZWVncmFudCBncmFudHMgW2dyYW50ZWVdIFtmbGFnc10K"}}),a._v(" "),e("p",[a._v("Example:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"c2ltZCBxdWVyeSBmZWVncmFudCBncmFudHMgY29zbW9zMS4uCg=="}}),a._v(" "),e("p",[a._v("Example Output:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"yml",base64:"YWxsb3dhbmNlczoKLSBhbGxvd2FuY2U6CiAgICAnQHR5cGUnOiAvY29zbW9zLmZlZWdyYW50LnYxYmV0YTEuQmFzaWNBbGxvd2FuY2UKICAgIGV4cGlyYXRpb246IG51bGwKICAgIHNwZW5kX2xpbWl0OgogICAgLSBhbW91bnQ6ICZxdW90OzEwMCZxdW90OwogICAgICBkZW5vbTogc3Rha2UKICBncmFudGVlOiBjb3Ntb3MxLi4KICBncmFudGVyOiBjb3Ntb3MxLi4KcGFnaW5hdGlvbjoKICBuZXh0X2tleTogbnVsbAogIHRvdGFsOiAmcXVvdDswJnF1b3Q7Cg=="}}),a._v(" "),e("h3",{attrs:{id:"transactions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[a._v("#")]),a._v(" Transactions")]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("tx")]),a._v(" commands allow users to interact with the "),e("code",[a._v("feegrant")]),a._v(" module.")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"c2ltZCB0eCBmZWVncmFudCAtLWhlbHAK"}}),a._v(" "),e("h4",{attrs:{id:"grant-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grant-2"}},[a._v("#")]),a._v(" grant")]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("grant")]),a._v(" command allows users to grant fee allowances to another account. The fee allowance can have an expiration date, a total spend limit, and/or a periodic spend limit.")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"c2ltZCB0eCBmZWVncmFudCBncmFudCBbZ3JhbnRlcl0gW2dyYW50ZWVdIFtmbGFnc10K"}}),a._v(" "),e("p",[a._v("Example (one-time spend limit):")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"c2ltZCB0eCBmZWVncmFudCBncmFudCBjb3Ntb3MxLi4gY29zbW9zMS4uIC0tc3BlbmQtbGltaXQgMTAwc3Rha2UK"}}),a._v(" "),e("p",[a._v("Example (periodic spend limit):")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"c2ltZCB0eCBmZWVncmFudCBncmFudCBjb3Ntb3MxLi4gY29zbW9zMS4uIC0tcGVyaW9kIDM2MDAgLS1wZXJpb2QtbGltaXQgMTBzdGFrZQo="}}),a._v(" "),e("h4",{attrs:{id:"revoke"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#revoke"}},[a._v("#")]),a._v(" revoke")]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("revoke")]),a._v(" command allows users to revoke a granted fee allowance.")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"c2ltZCB0eCBmZWVncmFudCByZXZva2UgW2dyYW50ZXJdIFtncmFudGVlXSBbZmxhZ3NdCg=="}}),a._v(" "),e("p",[a._v("Example:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"c2ltZCB0eCBmZWVncmFudCByZXZva2UgY29zbW9zMS4uIGNvc21vczEuLgo="}}),a._v(" "),e("h2",{attrs:{id:"grpc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[a._v("#")]),a._v(" gRPC")]),a._v(" "),e("p",[a._v("A user can query the "),e("code",[a._v("feegrant")]),a._v(" module using gRPC endpoints.")]),a._v(" "),e("h3",{attrs:{id:"allowance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allowance"}},[a._v("#")]),a._v(" Allowance")]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("Allowance")]),a._v(" endpoint allows users to query a granted fee allowance.")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y29zbW9zLmZlZWdyYW50LnYxYmV0YTEuUXVlcnkvQWxsb3dhbmNlCg=="}}),a._v(" "),e("p",[a._v("Example:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Z3JwY3VybCAtcGxhaW50ZXh0IFwKICAgIC1kICd7JnF1b3Q7Z3JhbnRlZSZxdW90OzomcXVvdDtjb3Ntb3MxLi4mcXVvdDssJnF1b3Q7Z3JhbnRlciZxdW90OzomcXVvdDtjb3Ntb3MxLi4mcXVvdDt9JyBcCiAgICBsb2NhbGhvc3Q6OTA5MCBcCiAgICBjb3Ntb3MuZmVlZ3JhbnQudjFiZXRhMS5RdWVyeS9BbGxvd2FuY2UK"}}),a._v(" "),e("p",[a._v("Example Output:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2FsbG93YW5jZSZxdW90OzogewogICAgJnF1b3Q7Z3JhbnRlciZxdW90OzogJnF1b3Q7Y29zbW9zMS4uJnF1b3Q7LAogICAgJnF1b3Q7Z3JhbnRlZSZxdW90OzogJnF1b3Q7Y29zbW9zMS4uJnF1b3Q7LAogICAgJnF1b3Q7YWxsb3dhbmNlJnF1b3Q7OiB7JnF1b3Q7QHR5cGUmcXVvdDs6JnF1b3Q7L2Nvc21vcy5mZWVncmFudC52MWJldGExLkJhc2ljQWxsb3dhbmNlJnF1b3Q7LCZxdW90O3NwZW5kTGltaXQmcXVvdDs6W3smcXVvdDtkZW5vbSZxdW90OzomcXVvdDtzdGFrZSZxdW90OywmcXVvdDthbW91bnQmcXVvdDs6JnF1b3Q7MTAwJnF1b3Q7fV19CiAgfQp9Cg=="}}),a._v(" "),e("h3",{attrs:{id:"allowances"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allowances"}},[a._v("#")]),a._v(" Allowances")]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("Allowances")]),a._v(" endpoint allows users to query all granted fee allowances for a given grantee.")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y29zbW9zLmZlZWdyYW50LnYxYmV0YTEuUXVlcnkvQWxsb3dhbmNlcwo="}}),a._v(" "),e("p",[a._v("Example:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Z3JwY3VybCAtcGxhaW50ZXh0IFwKICAgIC1kICd7JnF1b3Q7YWRkcmVzcyZxdW90OzomcXVvdDtjb3Ntb3MxLi4mcXVvdDt9JyBcCiAgICBsb2NhbGhvc3Q6OTA5MCBcCiAgICBjb3Ntb3MuZmVlZ3JhbnQudjFiZXRhMS5RdWVyeS9BbGxvd2FuY2VzCg=="}}),a._v(" "),e("p",[a._v("Example Output:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2FsbG93YW5jZXMmcXVvdDs6IFsKICAgIHsKICAgICAgJnF1b3Q7Z3JhbnRlciZxdW90OzogJnF1b3Q7Y29zbW9zMS4uJnF1b3Q7LAogICAgICAmcXVvdDtncmFudGVlJnF1b3Q7OiAmcXVvdDtjb3Ntb3MxLi4mcXVvdDssCiAgICAgICZxdW90O2FsbG93YW5jZSZxdW90OzogeyZxdW90O0B0eXBlJnF1b3Q7OiZxdW90Oy9jb3Ntb3MuZmVlZ3JhbnQudjFiZXRhMS5CYXNpY0FsbG93YW5jZSZxdW90OywmcXVvdDtzcGVuZExpbWl0JnF1b3Q7Olt7JnF1b3Q7ZGVub20mcXVvdDs6JnF1b3Q7c3Rha2UmcXVvdDssJnF1b3Q7YW1vdW50JnF1b3Q7OiZxdW90OzEwMCZxdW90O31dfQogICAgfQogIF0sCiAgJnF1b3Q7cGFnaW5hdGlvbiZxdW90OzogewogICAgJnF1b3Q7dG90YWwmcXVvdDs6ICZxdW90OzEmcXVvdDsKICB9Cn0K"}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);