package codegen

import (
	"path/filepath"
	"strings"

	"github.com/cosmos/cosmos-proto/generator"
	"github.com/iancoleman/strcase"
	"google.golang.org/protobuf/compiler/protogen"
	"google.golang.org/protobuf/proto"

	v1alpha1 "github.com/cosmos/cosmos-sdk/api/cosmos/orm/v1alpha1"
)

var (
	tablePkg = protogen.GoImportPath("github.com/cosmos/cosmos-sdk/orm/model/ormtable")
)

type fileGen struct {
	*generator.GeneratedFile
	file *protogen.File
}

func (f fileGen) gen() error {
	f.P("// Code generated by protoc-gen-go-cosmos-orm. DO NOT EDIT.")
	f.P()
	f.P("package ", f.file.GoPackageName)
	f.genStoreInterface()
	for _, msg := range f.file.Messages {
		tableDesc := proto.GetExtension(msg.Desc.Options(), v1alpha1.E_Table).(*v1alpha1.TableDescriptor)
		if tableDesc == nil {
			continue
		}

		newTableGen(f, msg, tableDesc).gen()
	}
	f.genStoreStruct()
	f.genStoreGetters()
	f.genStoreInterfaceGuard()
	return nil
}

func (f fileGen) genStoreInterface() {
	f.P("type ", f.storeInterfaceName(), " interface {")
	for _, message := range f.file.Messages {
		// TODO skip messages without table or singleton
		tableDesc := proto.GetExtension(message.Desc.Options(), v1alpha1.E_Table).(*v1alpha1.TableDescriptor)
		if tableDesc == nil {
			continue
		}
		f.P(message.GoIdent.GoName, "()", f.messageStoreInterfaceName(message))
	}
	f.P("}")
	f.P()
}

func (f fileGen) genStoreStruct() {
	// struct
	f.P("type ", f.storeStructName(), " struct {")
	for _, message := range f.file.Messages {
		f.P(f.param(message.GoIdent.GoName), " *", f.messageStoreReceiverName(message))
	}
	f.P("}")
}

func (f fileGen) storeAccessorName() string {
	return f.storeInterfaceName()
}

func (f fileGen) storeInterfaceName() string {
	return strcase.ToCamel(f.fileShortName()) + "Store"
}

func (f fileGen) storeStructName() string {
	return strcase.ToLowerCamel(f.fileShortName()) + "Store"
}

func (f fileGen) fileShortName() string {
	filename := f.file.Proto.GetName()
	shortName := filepath.Base(filename)
	i := strings.Index(shortName, ".")
	if i > 0 {
		return shortName[:i]
	}
	return strcase.ToCamel(shortName)
}

func (f fileGen) messageStoreInterfaceName(m *protogen.Message) string {
	return m.GoIdent.GoName + "Store"
}

func (f fileGen) messageReaderInterfaceName(m *protogen.Message) string {
	return m.GoIdent.GoName + "Reader"
}

func (f fileGen) messageTableVar(m *protogen.Message) string {
	return f.param(m.GoIdent.GoName + "Table")
}

func (f fileGen) param(name string) string {
	return strcase.ToLowerCamel(name)
}

func (f fileGen) messageStoreReceiverName(m *protogen.Message) string {
	return f.param(f.messageStoreInterfaceName(m))
}

func (f fileGen) genStoreGetters() {
	for _, msg := range f.file.Messages {
		f.P("func(x ", f.storeStructName(), ") ", msg.GoIdent.GoName, "() ", f.messageStoreInterfaceName(msg), "{")
		f.P("return x.", f.param(msg.GoIdent.GoName))
		f.P("}")
	}
}

func (f fileGen) genStoreInterfaceGuard() {
	f.P("var _ ", f.storeInterfaceName(), " = ", f.storeStructName(), "{}")
}
