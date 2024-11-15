# `dataZendutyUsercontact` Submodule <a name="`dataZendutyUsercontact` Submodule" id="@skeptools/provider-zenduty.dataZendutyUsercontact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataZendutyUsercontact <a name="DataZendutyUsercontact" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact zenduty_usercontact}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.Initializer"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/datazendutyusercontact"

datazendutyusercontact.NewDataZendutyUsercontact(scope Construct, id *string, config DataZendutyUsercontactConfig) DataZendutyUsercontact
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig">DataZendutyUsercontactConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig">DataZendutyUsercontactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.resetId"></a>

```go
func ResetId()
```

##### `ResetValue` <a name="ResetValue" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.resetValue"></a>

```go
func ResetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.isConstruct"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/datazendutyusercontact"

datazendutyusercontact.DataZendutyUsercontact_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.isTerraformElement"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/datazendutyusercontact"

datazendutyusercontact.DataZendutyUsercontact_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.isTerraformDataSource"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/datazendutyusercontact"

datazendutyusercontact.DataZendutyUsercontact_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.contactTypeInput">ContactTypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.contactType">ContactType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.value">Value</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Name`<sup>Required</sup> <a name="Name" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ContactTypeInput`<sup>Optional</sup> <a name="ContactTypeInput" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.contactTypeInput"></a>

```go
func ContactTypeInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ContactType`<sup>Required</sup> <a name="ContactType" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.contactType"></a>

```go
func ContactType() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataZendutyUsercontactConfig <a name="DataZendutyUsercontactConfig" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.Initializer"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/datazendutyusercontact"

&datazendutyusercontact.DataZendutyUsercontactConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContactType: *f64,
	UserId: *string,
	Id: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.contactType">ContactType</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact#contact_type DataZendutyUsercontact#contact_type}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.userId">UserId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact#user_id DataZendutyUsercontact#user_id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact#id DataZendutyUsercontact#id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact#value DataZendutyUsercontact#value}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContactType`<sup>Required</sup> <a name="ContactType" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.contactType"></a>

```go
ContactType *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact#contact_type DataZendutyUsercontact#contact_type}.

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact#user_id DataZendutyUsercontact#user_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact#id DataZendutyUsercontact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact#value DataZendutyUsercontact#value}.

---



