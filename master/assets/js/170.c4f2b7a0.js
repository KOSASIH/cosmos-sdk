(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{790:function(e,a,t){"use strict";t.r(a);var l=t(1),n=Object(l.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"state"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),t("h2",{attrs:{id:"grant"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grant"}},[e._v("#")]),e._v(" Grant")]),e._v(" "),t("p",[e._v("Grants are identified by combining granter address (the address bytes of the granter), grantee address (the address bytes of the grantee) and Authorization type (its type URL). Hence we only allow one grant for the (granter, grantee, Authorization) triple.")]),e._v(" "),t("ul",[t("li",[e._v("Grant: "),t("code",[e._v("0x01 | granter_address_len (1 byte) | granter_address_bytes | grantee_address_len (1 byte) | grantee_address_bytes | msgType_bytes-> ProtocolBuffer(AuthorizationGrant)")])])]),e._v(" "),t("p",[e._v("The grant object encapsulates an "),t("code",[e._v("Authorization")]),e._v(" type and an expiration timestamp:")]),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gR3JhbnQgZ2l2ZXMgcGVybWlzc2lvbnMgdG8gZXhlY3V0ZQovLyB0aGUgcHJvdmlkZSBtZXRob2Qgd2l0aCBleHBpcmF0aW9uIHRpbWUuCm1lc3NhZ2UgR3JhbnQgewogIGdvb2dsZS5wcm90b2J1Zi5BbnkgYXV0aG9yaXphdGlvbiA9IDEgWyhjb3Ntb3NfcHJvdG8uYWNjZXB0c19pbnRlcmZhY2UpID0gJnF1b3Q7QXV0aG9yaXphdGlvbiZxdW90O107CiAgLy8gdGltZSB3aGVuIHRoZSBncmFudCB3aWxsIGV4cGlyZSBhbmQgd2lsbCBiZSBwcnVuZWQuIElmIG51bGwsIHRoZW4gdGhlIGdyYW50CiAgLy8gZG9lc24ndCBoYXZlIGEgdGltZSBleHBpcmF0aW9uIChvdGhlciBjb25kaXRpb25zICBpbiBgYXV0aG9yaXphdGlvbmAKICAvLyBtYXkgYXBwbHkgdG8gaW52YWxpZGF0ZSB0aGUgZ3JhbnQpCiAgZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCBleHBpcmF0aW9uID0gMiBbKGdvZ29wcm90by5zdGR0aW1lKSA9IHRydWUsIChnb2dvcHJvdG8ubnVsbGFibGUpID0gdHJ1ZV07Cn0="}})],1),e._v(" "),t("h2",{attrs:{id:"grantqueue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grantqueue"}},[e._v("#")]),e._v(" GrantQueue")]),e._v(" "),t("p",[e._v("We are maintaining a queue for authz pruning, whenever a grant created an item will be added to "),t("code",[e._v("GrantQueue")]),e._v(" with a key of granter, grantee, expiration and value added as array of msg type urls.")]),e._v(" "),t("ul",[t("li",[e._v("GrantQueue: "),t("code",[e._v("0x02 | granter_address_len (1 byte) | granter_address_bytes | grantee_address_len (1 byte) | grantee_address_bytes | expiration_bytes -> ProtocalBuffer([]string{msgTypeUrls})")])])]),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gR3JhbnRRdWV1ZUtleSAtIHJldHVybiBncmFudCBxdWV1ZSBzdG9yZSBrZXkuIElmIGEgZ2l2ZW4gZ3JhbnQgZG9lc24ndCBoYXZlIGEgZGVmaW5lZAovLyBleHBpcmF0aW9uLCB0aGVuIGl0IHNob3VsZCBub3QgYmUgdXNlZCBpbiB0aGUgcHJ1bmluZyBxdWV1ZS4KLy8gS2V5IGZvcm1hdCBpczoKLy8gICAgIDB4MDImbHQ7Z3JhbnRfZXhwaXJhdGlvbl9CeXRlcyZndDs6IEdyYW50UXVldWVJdGVtCmZ1bmMgR3JhbnRRdWV1ZUtleShleHBpcmF0aW9uIHRpbWUuVGltZSwgZ3JhbnRlciBzZGsuQWNjQWRkcmVzcywgZ3JhbnRlZSBzZGsuQWNjQWRkcmVzcykgW11ieXRlIHsKCWV4cCA6PSBzZGsuRm9ybWF0VGltZUJ5dGVzKGV4cGlyYXRpb24pCglncmFudGVyID0gYWRkcmVzcy5NdXN0TGVuZ3RoUHJlZml4KGdyYW50ZXIpCglncmFudGVlID0gYWRkcmVzcy5NdXN0TGVuZ3RoUHJlZml4KGdyYW50ZWUpCgoJcmV0dXJuIHNkay5BcHBlbmRMZW5ndGhQcmVmaXhlZEJ5dGVzKEdyYW50UXVldWVQcmVmaXgsIGV4cCwgZ3JhbnRlciwgZ3JhbnRlZSkKfQoKLy8gR3JhbnRRdWV1ZVRpbWVQcmVmaXggLSByZXR1cm4gZ3JhbnQgcXVldWUgdGltZSBwcmVmaXgKZnVuYyBHcmFudFF1ZXVlVGltZVByZWZpeChleHBpcmF0aW9uIHRpbWUuVGltZSkgW11ieXRlIHsKCXJldHVybiBhcHBlbmQoR3JhbnRRdWV1ZVByZWZpeCwgc2RrLkZvcm1hdFRpbWVCeXRlcyhleHBpcmF0aW9uKS4uLikKfQ=="}})],1)])}),[],!1,null,null,null);a.default=n.exports}}]);