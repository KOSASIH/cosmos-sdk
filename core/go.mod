module cosmossdk.io/core

go 1.18

require (
	cosmossdk.io/api v0.1.0-alpha8
	cosmossdk.io/depinject v1.0.0-alpha.4
	github.com/cosmos/cosmos-proto v1.0.0-beta.4
	google.golang.org/protobuf v1.33.0
	gotest.tools/v3 v3.5.1
	sigs.k8s.io/yaml v1.3.0
)

require (
	github.com/golang/protobuf v1.5.3 // indirect
	github.com/google/go-cmp v0.6.0 // indirect
	github.com/kr/text v0.2.0 // indirect
	github.com/pkg/errors v0.9.1 // indirect
	golang.org/x/exp v0.0.0-20220428152302-39d4317da171 // indirect
	golang.org/x/net v0.23.0 // indirect
	golang.org/x/sys v0.18.0 // indirect
	golang.org/x/text v0.14.0 // indirect
	google.golang.org/genproto/googleapis/rpc v0.0.0-20240123012728-ef4313101c80 // indirect
	google.golang.org/grpc v1.62.1 // indirect
	gopkg.in/yaml.v2 v2.4.0 // indirect
)

replace (
	cosmossdk.io/api => ../api
	cosmossdk.io/depinject => ../depinject
)
