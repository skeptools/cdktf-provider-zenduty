# `dataZendutyIncidents` Submodule <a name="`dataZendutyIncidents` Submodule" id="@skeptools/provider-zenduty.dataZendutyIncidents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataZendutyIncidents <a name="DataZendutyIncidents" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/d/incidents zenduty_incidents}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/datazendutyincidents"

datazendutyincidents.NewDataZendutyIncidents(scope Construct, id *string, config DataZendutyIncidentsConfig) DataZendutyIncidents
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig">DataZendutyIncidentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig">DataZendutyIncidentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetNumber">ResetNumber</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetId"></a>

```go
func ResetId()
```

##### `ResetNumber` <a name="ResetNumber" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetNumber"></a>

```go
func ResetNumber()
```

##### `ResetStatus` <a name="ResetStatus" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isConstruct"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/datazendutyincidents"

datazendutyincidents.DataZendutyIncidents_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformElement"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/datazendutyincidents"

datazendutyincidents.DataZendutyIncidents_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformDataSource"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/datazendutyincidents"

datazendutyincidents.DataZendutyIncidents_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.results">Results</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList">DataZendutyIncidentsResultsList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.numberInput">NumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.number">Number</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Results`<sup>Required</sup> <a name="Results" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.results"></a>

```go
func Results() DataZendutyIncidentsResultsList
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList">DataZendutyIncidentsResultsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NumberInput`<sup>Optional</sup> <a name="NumberInput" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.numberInput"></a>

```go
func NumberInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.number"></a>

```go
func Number() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataZendutyIncidentsConfig <a name="DataZendutyIncidentsConfig" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.Initializer"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/datazendutyincidents"

&datazendutyincidents.DataZendutyIncidentsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Number: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#id DataZendutyIncidents#id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.number">Number</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#number DataZendutyIncidents#number}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#status DataZendutyIncidents#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#id DataZendutyIncidents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Number`<sup>Optional</sup> <a name="Number" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.number"></a>

```go
Number *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#number DataZendutyIncidents#number}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#status DataZendutyIncidents#status}.

---

### DataZendutyIncidentsResults <a name="DataZendutyIncidentsResults" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResults"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResults.Initializer"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/datazendutyincidents"

&datazendutyincidents.DataZendutyIncidentsResults {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataZendutyIncidentsResultsList <a name="DataZendutyIncidentsResultsList" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/datazendutyincidents"

datazendutyincidents.NewDataZendutyIncidentsResultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataZendutyIncidentsResultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.get"></a>

```go
func Get(index *f64) DataZendutyIncidentsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataZendutyIncidentsResultsOutputReference <a name="DataZendutyIncidentsResultsOutputReference" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/datazendutyincidents"

datazendutyincidents.NewDataZendutyIncidentsResultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataZendutyIncidentsResultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.acknowledgedDate">AcknowledgedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.assignedTo">AssignedTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.assignedToName">AssignedToName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.contextWindowEnd">ContextWindowEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.contextWindowStart">ContextWindowStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.escalationPolicyObjectName">EscalationPolicyObjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.escalationPolicyObjectUniqueId">EscalationPolicyObjectUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.esccalationPolicy">EsccalationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.incidentKey">IncidentKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.incidentNumber">IncidentNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.mergedWith">MergedWith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.resolvedDate">ResolvedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObject">ServiceObject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectAcknowledgementTimeout">ServiceObjectAcknowledgementTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectAutoResolveTimeout">ServiceObjectAutoResolveTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCollation">ServiceObjectCollation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCollationTime">ServiceObjectCollationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCreatedBy">ServiceObjectCreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCreationDate">ServiceObjectCreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectDescription">ServiceObjectDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectEscalationPolicy">ServiceObjectEscalationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectName">ServiceObjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectSla">ServiceObjectSla</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectStatus">ServiceObjectStatus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectSummary">ServiceObjectSummary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTaskTemplate">ServiceObjectTaskTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTeam">ServiceObjectTeam</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTeamPriority">ServiceObjectTeamPriority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectUniqueId">ServiceObjectUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.sla">Sla</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.slaObject">SlaObject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.status">Status</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.teamPriority">TeamPriority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.teamPriorityObject">TeamPriorityObject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.uniqueId">UniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.urgency">Urgency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResults">DataZendutyIncidentsResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcknowledgedDate`<sup>Required</sup> <a name="AcknowledgedDate" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.acknowledgedDate"></a>

```go
func AcknowledgedDate() *string
```

- *Type:* *string

---

##### `AssignedTo`<sup>Required</sup> <a name="AssignedTo" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.assignedTo"></a>

```go
func AssignedTo() *string
```

- *Type:* *string

---

##### `AssignedToName`<sup>Required</sup> <a name="AssignedToName" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.assignedToName"></a>

```go
func AssignedToName() *string
```

- *Type:* *string

---

##### `ContextWindowEnd`<sup>Required</sup> <a name="ContextWindowEnd" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.contextWindowEnd"></a>

```go
func ContextWindowEnd() *string
```

- *Type:* *string

---

##### `ContextWindowStart`<sup>Required</sup> <a name="ContextWindowStart" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.contextWindowStart"></a>

```go
func ContextWindowStart() *string
```

- *Type:* *string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `EscalationPolicyObjectName`<sup>Required</sup> <a name="EscalationPolicyObjectName" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.escalationPolicyObjectName"></a>

```go
func EscalationPolicyObjectName() *string
```

- *Type:* *string

---

##### `EscalationPolicyObjectUniqueId`<sup>Required</sup> <a name="EscalationPolicyObjectUniqueId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.escalationPolicyObjectUniqueId"></a>

```go
func EscalationPolicyObjectUniqueId() *string
```

- *Type:* *string

---

##### `EsccalationPolicy`<sup>Required</sup> <a name="EsccalationPolicy" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.esccalationPolicy"></a>

```go
func EsccalationPolicy() *string
```

- *Type:* *string

---

##### `IncidentKey`<sup>Required</sup> <a name="IncidentKey" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.incidentKey"></a>

```go
func IncidentKey() *string
```

- *Type:* *string

---

##### `IncidentNumber`<sup>Required</sup> <a name="IncidentNumber" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.incidentNumber"></a>

```go
func IncidentNumber() *f64
```

- *Type:* *f64

---

##### `MergedWith`<sup>Required</sup> <a name="MergedWith" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.mergedWith"></a>

```go
func MergedWith() *string
```

- *Type:* *string

---

##### `ResolvedDate`<sup>Required</sup> <a name="ResolvedDate" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.resolvedDate"></a>

```go
func ResolvedDate() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `ServiceObject`<sup>Required</sup> <a name="ServiceObject" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObject"></a>

```go
func ServiceObject() *string
```

- *Type:* *string

---

##### `ServiceObjectAcknowledgementTimeout`<sup>Required</sup> <a name="ServiceObjectAcknowledgementTimeout" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectAcknowledgementTimeout"></a>

```go
func ServiceObjectAcknowledgementTimeout() *f64
```

- *Type:* *f64

---

##### `ServiceObjectAutoResolveTimeout`<sup>Required</sup> <a name="ServiceObjectAutoResolveTimeout" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectAutoResolveTimeout"></a>

```go
func ServiceObjectAutoResolveTimeout() *f64
```

- *Type:* *f64

---

##### `ServiceObjectCollation`<sup>Required</sup> <a name="ServiceObjectCollation" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCollation"></a>

```go
func ServiceObjectCollation() *f64
```

- *Type:* *f64

---

##### `ServiceObjectCollationTime`<sup>Required</sup> <a name="ServiceObjectCollationTime" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCollationTime"></a>

```go
func ServiceObjectCollationTime() *f64
```

- *Type:* *f64

---

##### `ServiceObjectCreatedBy`<sup>Required</sup> <a name="ServiceObjectCreatedBy" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCreatedBy"></a>

```go
func ServiceObjectCreatedBy() *string
```

- *Type:* *string

---

##### `ServiceObjectCreationDate`<sup>Required</sup> <a name="ServiceObjectCreationDate" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCreationDate"></a>

```go
func ServiceObjectCreationDate() *string
```

- *Type:* *string

---

##### `ServiceObjectDescription`<sup>Required</sup> <a name="ServiceObjectDescription" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectDescription"></a>

```go
func ServiceObjectDescription() *string
```

- *Type:* *string

---

##### `ServiceObjectEscalationPolicy`<sup>Required</sup> <a name="ServiceObjectEscalationPolicy" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectEscalationPolicy"></a>

```go
func ServiceObjectEscalationPolicy() *string
```

- *Type:* *string

---

##### `ServiceObjectName`<sup>Required</sup> <a name="ServiceObjectName" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectName"></a>

```go
func ServiceObjectName() *string
```

- *Type:* *string

---

##### `ServiceObjectSla`<sup>Required</sup> <a name="ServiceObjectSla" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectSla"></a>

```go
func ServiceObjectSla() *string
```

- *Type:* *string

---

##### `ServiceObjectStatus`<sup>Required</sup> <a name="ServiceObjectStatus" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectStatus"></a>

```go
func ServiceObjectStatus() *f64
```

- *Type:* *f64

---

##### `ServiceObjectSummary`<sup>Required</sup> <a name="ServiceObjectSummary" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectSummary"></a>

```go
func ServiceObjectSummary() *string
```

- *Type:* *string

---

##### `ServiceObjectTaskTemplate`<sup>Required</sup> <a name="ServiceObjectTaskTemplate" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTaskTemplate"></a>

```go
func ServiceObjectTaskTemplate() *string
```

- *Type:* *string

---

##### `ServiceObjectTeam`<sup>Required</sup> <a name="ServiceObjectTeam" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTeam"></a>

```go
func ServiceObjectTeam() *string
```

- *Type:* *string

---

##### `ServiceObjectTeamPriority`<sup>Required</sup> <a name="ServiceObjectTeamPriority" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTeamPriority"></a>

```go
func ServiceObjectTeamPriority() *string
```

- *Type:* *string

---

##### `ServiceObjectUniqueId`<sup>Required</sup> <a name="ServiceObjectUniqueId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectUniqueId"></a>

```go
func ServiceObjectUniqueId() *string
```

- *Type:* *string

---

##### `Sla`<sup>Required</sup> <a name="Sla" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.sla"></a>

```go
func Sla() *string
```

- *Type:* *string

---

##### `SlaObject`<sup>Required</sup> <a name="SlaObject" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.slaObject"></a>

```go
func SlaObject() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.status"></a>

```go
func Status() *f64
```

- *Type:* *f64

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `TeamPriority`<sup>Required</sup> <a name="TeamPriority" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.teamPriority"></a>

```go
func TeamPriority() *string
```

- *Type:* *string

---

##### `TeamPriorityObject`<sup>Required</sup> <a name="TeamPriorityObject" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.teamPriorityObject"></a>

```go
func TeamPriorityObject() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.uniqueId"></a>

```go
func UniqueId() *string
```

- *Type:* *string

---

##### `Urgency`<sup>Required</sup> <a name="Urgency" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.urgency"></a>

```go
func Urgency() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataZendutyIncidentsResults
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResults">DataZendutyIncidentsResults</a>

---



