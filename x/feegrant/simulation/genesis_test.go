package simulation_test

import (
	"math/rand"
	"testing"

	"github.com/gogo/protobuf/proto"
	"github.com/stretchr/testify/require"

	sdkmath "cosmossdk.io/math"
	moduletypes "github.com/cosmos/cosmos-sdk/types/module"
	moduletestutil "github.com/cosmos/cosmos-sdk/types/module/testutil"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/feegrant"
	"github.com/cosmos/cosmos-sdk/x/feegrant/module"
	"github.com/cosmos/cosmos-sdk/x/feegrant/simulation"
)

func TestRandomizedGenState(t *testing.T) {
	encCfg := moduletestutil.MakeTestEncodingConfig(module.AppModuleBasic{})
	s := rand.NewSource(1)
	r := rand.New(s)

	accounts := simtypes.RandomAccounts(r, 3)

	simState := moduletypes.SimulationState{
		AppParams:    make(simtypes.AppParams),
		Cdc:          encCfg.Codec,
		Rand:         r,
		NumBonded:    3,
		Accounts:     accounts,
		InitialStake: sdkmath.NewInt(1000),
		GenState:     make(map[string]proto.Message),
	}

	simulation.RandomizedGenState(&simState)
	feegrantGenesis, ok := simState.GenState[feegrant.ModuleName].(*feegrant.GenesisState)
	require.True(t, ok)

	require.Len(t, feegrantGenesis.Allowances, len(accounts)-1)
}
