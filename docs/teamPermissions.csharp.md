# `teamPermissions` Submodule <a name="`teamPermissions` Submodule" id="@skeptools/provider-zenduty.teamPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamPermissions <a name="TeamPermissions" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/team_permissions zenduty_team_permissions}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new TeamPermissions(Construct Scope, string Id, TeamPermissionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.Initializer.parameter.config">Config</a></code> | <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig">TeamPermissionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig">TeamPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

TeamPermissions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

TeamPermissions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

TeamPermissions.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.permissionsInput">PermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.teamIdInput">TeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.permissions">Permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.teamId">TeamId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.permissionsInput"></a>

```csharp
public string[] PermissionsInput { get; }
```

- *Type:* string[]

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.teamIdInput"></a>

```csharp
public string TeamIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.permissions"></a>

```csharp
public string[] Permissions { get; }
```

- *Type:* string[]

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.teamId"></a>

```csharp
public string TeamId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamPermissionsConfig <a name="TeamPermissionsConfig" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new TeamPermissionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Permissions,
    string TeamId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig.property.permissions">Permissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/team_permissions#permissions TeamPermissions#permissions}. |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig.property.teamId">TeamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/team_permissions#team_id TeamPermissions#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/team_permissions#id TeamPermissions#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig.property.permissions"></a>

```csharp
public string[] Permissions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/team_permissions#permissions TeamPermissions#permissions}.

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig.property.teamId"></a>

```csharp
public string TeamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/team_permissions#team_id TeamPermissions#team_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@skeptools/provider-zenduty.teamPermissions.TeamPermissionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/team_permissions#id TeamPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



