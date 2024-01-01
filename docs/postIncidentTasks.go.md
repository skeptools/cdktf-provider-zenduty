# `postIncidentTasks` Submodule <a name="`postIncidentTasks` Submodule" id="@skeptools/provider-zenduty.postIncidentTasks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostIncidentTasks <a name="PostIncidentTasks" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks zenduty_post_incident_tasks}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/postincidenttasks"

postincidenttasks.NewPostIncidentTasks(scope Construct, id *string, config PostIncidentTasksConfig) PostIncidentTasks
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig">PostIncidentTasksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig">PostIncidentTasksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetAssignedTo">ResetAssignedTo</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetDueInTime">ResetDueInTime</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAssignedTo` <a name="ResetAssignedTo" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetAssignedTo"></a>

```go
func ResetAssignedTo()
```

##### `ResetDueInTime` <a name="ResetDueInTime" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetDueInTime"></a>

```go
func ResetDueInTime()
```

##### `ResetId` <a name="ResetId" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetId"></a>

```go
func ResetId()
```

##### `ResetStatus` <a name="ResetStatus" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isConstruct"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/postincidenttasks"

postincidenttasks.PostIncidentTasks_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isTerraformElement"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/postincidenttasks"

postincidenttasks.PostIncidentTasks_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isTerraformResource"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/postincidenttasks"

postincidenttasks.PostIncidentTasks_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.uniqueId">UniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.assignedToInput">AssignedToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.dueInTimeInput">DueInTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.statusInput">StatusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.teamIdInput">TeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.assignedTo">AssignedTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.dueInTime">DueInTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.status">Status</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.title">Title</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.uniqueId"></a>

```go
func UniqueId() *string
```

- *Type:* *string

---

##### `AssignedToInput`<sup>Optional</sup> <a name="AssignedToInput" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.assignedToInput"></a>

```go
func AssignedToInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DueInTimeInput`<sup>Optional</sup> <a name="DueInTimeInput" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.dueInTimeInput"></a>

```go
func DueInTimeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.statusInput"></a>

```go
func StatusInput() *f64
```

- *Type:* *f64

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.teamIdInput"></a>

```go
func TeamIdInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `AssignedTo`<sup>Required</sup> <a name="AssignedTo" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.assignedTo"></a>

```go
func AssignedTo() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DueInTime`<sup>Required</sup> <a name="DueInTime" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.dueInTime"></a>

```go
func DueInTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.status"></a>

```go
func Status() *f64
```

- *Type:* *f64

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PostIncidentTasksConfig <a name="PostIncidentTasksConfig" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.Initializer"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/postincidenttasks"

&postincidenttasks.PostIncidentTasksConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	TeamId: *string,
	Title: *string,
	AssignedTo: *string,
	DueInTime: *string,
	Id: *string,
	Status: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#description PostIncidentTasks#description}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.teamId">TeamId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#team_id PostIncidentTasks#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#title PostIncidentTasks#title}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.assignedTo">AssignedTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#assigned_to PostIncidentTasks#assigned_to}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.dueInTime">DueInTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#due_in_time PostIncidentTasks#due_in_time}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#id PostIncidentTasks#id}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.status">Status</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#status PostIncidentTasks#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#description PostIncidentTasks#description}.

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.teamId"></a>

```go
TeamId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#team_id PostIncidentTasks#team_id}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#title PostIncidentTasks#title}.

---

##### `AssignedTo`<sup>Optional</sup> <a name="AssignedTo" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.assignedTo"></a>

```go
AssignedTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#assigned_to PostIncidentTasks#assigned_to}.

---

##### `DueInTime`<sup>Optional</sup> <a name="DueInTime" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.dueInTime"></a>

```go
DueInTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#due_in_time PostIncidentTasks#due_in_time}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#id PostIncidentTasks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.status"></a>

```go
Status *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#status PostIncidentTasks#status}.

---



