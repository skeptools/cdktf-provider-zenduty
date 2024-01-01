# `globalrouter` Submodule <a name="`globalrouter` Submodule" id="@skeptools/provider-zenduty.globalrouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Globalrouter <a name="Globalrouter" id="@skeptools/provider-zenduty.globalrouter.Globalrouter"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouter zenduty_globalrouter}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.Initializer"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/globalrouter"

globalrouter.NewGlobalrouter(scope Construct, id *string, config GlobalrouterConfig) Globalrouter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig">GlobalrouterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig">GlobalrouterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.resetId"></a>

```go
func ResetId()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.isConstruct"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/globalrouter"

globalrouter.Globalrouter_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.isTerraformElement"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/globalrouter"

globalrouter.Globalrouter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.isTerraformResource"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/globalrouter"

globalrouter.Globalrouter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.integrationKey">IntegrationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IntegrationKey`<sup>Required</sup> <a name="IntegrationKey" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.integrationKey"></a>

```go
func IntegrationKey() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalrouterConfig <a name="GlobalrouterConfig" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.Initializer"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/globalrouter"

&globalrouter.GlobalrouterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	Name: *string,
	Id: *string,
	IsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouter#description Globalrouter#description}. |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouter#name Globalrouter#name}. |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouter#id Globalrouter#id}. |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouter#is_enabled Globalrouter#is_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouter#description Globalrouter#description}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouter#name Globalrouter#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouter#id Globalrouter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouter#is_enabled Globalrouter#is_enabled}.

---



