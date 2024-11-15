# `taskTemplateTasks` Submodule <a name="`taskTemplateTasks` Submodule" id="@skeptools/provider-zenduty.taskTemplateTasks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TaskTemplateTasks <a name="TaskTemplateTasks" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks zenduty_task_template_tasks}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/tasktemplatetasks"

tasktemplatetasks.NewTaskTemplateTasks(scope Construct, id *string, config TaskTemplateTasksConfig) TaskTemplateTasks
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig">TaskTemplateTasksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig">TaskTemplateTasksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetDueIn">ResetDueIn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetRole">ResetRole</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDueIn` <a name="ResetDueIn" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetDueIn"></a>

```go
func ResetDueIn()
```

##### `ResetId` <a name="ResetId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetId"></a>

```go
func ResetId()
```

##### `ResetRole` <a name="ResetRole" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetRole"></a>

```go
func ResetRole()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isConstruct"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/tasktemplatetasks"

tasktemplatetasks.TaskTemplateTasks_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformElement"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/tasktemplatetasks"

tasktemplatetasks.TaskTemplateTasks_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformResource"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/tasktemplatetasks"

tasktemplatetasks.TaskTemplateTasks_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.position">Position</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.uniqueId">UniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dueInInput">DueInInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.taskTemplateIdInput">TaskTemplateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.teamIdInput">TeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dueIn">DueIn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.taskTemplateId">TaskTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.title">Title</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.position"></a>

```go
func Position() *f64
```

- *Type:* *f64

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.uniqueId"></a>

```go
func UniqueId() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DueInInput`<sup>Optional</sup> <a name="DueInInput" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dueInInput"></a>

```go
func DueInInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `TaskTemplateIdInput`<sup>Optional</sup> <a name="TaskTemplateIdInput" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.taskTemplateIdInput"></a>

```go
func TaskTemplateIdInput() *string
```

- *Type:* *string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.teamIdInput"></a>

```go
func TeamIdInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DueIn`<sup>Required</sup> <a name="DueIn" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dueIn"></a>

```go
func DueIn() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `TaskTemplateId`<sup>Required</sup> <a name="TaskTemplateId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.taskTemplateId"></a>

```go
func TaskTemplateId() *string
```

- *Type:* *string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TaskTemplateTasksConfig <a name="TaskTemplateTasksConfig" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.Initializer"></a>

```go
import "github.com/skeptools/cdktf-provider-zenduty-go/zenduty/tasktemplatetasks"

&tasktemplatetasks.TaskTemplateTasksConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	TaskTemplateId: *string,
	TeamId: *string,
	Title: *string,
	DueIn: *f64,
	Id: *string,
	Role: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#description TaskTemplateTasks#description}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.taskTemplateId">TaskTemplateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#task_template_id TaskTemplateTasks#task_template_id}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.teamId">TeamId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#team_id TaskTemplateTasks#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#title TaskTemplateTasks#title}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.dueIn">DueIn</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#due_in TaskTemplateTasks#due_in}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#id TaskTemplateTasks#id}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#role TaskTemplateTasks#role}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#description TaskTemplateTasks#description}.

---

##### `TaskTemplateId`<sup>Required</sup> <a name="TaskTemplateId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.taskTemplateId"></a>

```go
TaskTemplateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#task_template_id TaskTemplateTasks#task_template_id}.

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.teamId"></a>

```go
TeamId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#team_id TaskTemplateTasks#team_id}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#title TaskTemplateTasks#title}.

---

##### `DueIn`<sup>Optional</sup> <a name="DueIn" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.dueIn"></a>

```go
DueIn *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#due_in TaskTemplateTasks#due_in}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#id TaskTemplateTasks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#role TaskTemplateTasks#role}.

---



