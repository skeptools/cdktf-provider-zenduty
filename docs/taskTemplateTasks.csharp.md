# `taskTemplateTasks` Submodule <a name="`taskTemplateTasks` Submodule" id="@skeptools/provider-zenduty.taskTemplateTasks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TaskTemplateTasks <a name="TaskTemplateTasks" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks zenduty_task_template_tasks}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new TaskTemplateTasks(Construct Scope, string Id, TaskTemplateTasksConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.config">Config</a></code> | <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig">TaskTemplateTasksConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig">TaskTemplateTasksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetDueIn">ResetDueIn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetRole">ResetRole</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDueIn` <a name="ResetDueIn" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetDueIn"></a>

```csharp
private void ResetDueIn()
```

##### `ResetId` <a name="ResetId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRole` <a name="ResetRole" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetRole"></a>

```csharp
private void ResetRole()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

TaskTemplateTasks.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

TaskTemplateTasks.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

TaskTemplateTasks.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.uniqueId">UniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dueInInput">DueInInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.taskTemplateIdInput">TaskTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.teamIdInput">TeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dueIn">DueIn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.taskTemplateId">TaskTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.teamId">TeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.title">Title</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.uniqueId"></a>

```csharp
public string UniqueId { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DueInInput`<sup>Optional</sup> <a name="DueInInput" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dueInInput"></a>

```csharp
public double DueInInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `TaskTemplateIdInput`<sup>Optional</sup> <a name="TaskTemplateIdInput" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.taskTemplateIdInput"></a>

```csharp
public string TaskTemplateIdInput { get; }
```

- *Type:* string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.teamIdInput"></a>

```csharp
public string TeamIdInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DueIn`<sup>Required</sup> <a name="DueIn" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dueIn"></a>

```csharp
public double DueIn { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `TaskTemplateId`<sup>Required</sup> <a name="TaskTemplateId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.taskTemplateId"></a>

```csharp
public string TaskTemplateId { get; }
```

- *Type:* string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.teamId"></a>

```csharp
public string TeamId { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TaskTemplateTasksConfig <a name="TaskTemplateTasksConfig" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new TaskTemplateTasksConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Description,
    string TaskTemplateId,
    string TeamId,
    string Title,
    double DueIn = null,
    string Id = null,
    string Role = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#description TaskTemplateTasks#description}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.taskTemplateId">TaskTemplateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#task_template_id TaskTemplateTasks#task_template_id}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.teamId">TeamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#team_id TaskTemplateTasks#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#title TaskTemplateTasks#title}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.dueIn">DueIn</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#due_in TaskTemplateTasks#due_in}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#id TaskTemplateTasks#id}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#role TaskTemplateTasks#role}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#description TaskTemplateTasks#description}.

---

##### `TaskTemplateId`<sup>Required</sup> <a name="TaskTemplateId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.taskTemplateId"></a>

```csharp
public string TaskTemplateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#task_template_id TaskTemplateTasks#task_template_id}.

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.teamId"></a>

```csharp
public string TeamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#team_id TaskTemplateTasks#team_id}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#title TaskTemplateTasks#title}.

---

##### `DueIn`<sup>Optional</sup> <a name="DueIn" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.dueIn"></a>

```csharp
public double DueIn { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#due_in TaskTemplateTasks#due_in}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#id TaskTemplateTasks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#role TaskTemplateTasks#role}.

---



