# `sla` Submodule <a name="`sla` Submodule" id="@skeptools/provider-zenduty.sla"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sla <a name="Sla" id="@skeptools/provider-zenduty.sla.Sla"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/sla zenduty_sla}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.sla.Sla.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new Sla(Construct Scope, string Id, SlaConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.config">Config</a></code> | <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig">SlaConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-zenduty.sla.SlaConfig">SlaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.putEscalations">PutEscalations</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.resetIsActive">ResetIsActive</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@skeptools/provider-zenduty.sla.Sla.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@skeptools/provider-zenduty.sla.Sla.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@skeptools/provider-zenduty.sla.Sla.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@skeptools/provider-zenduty.sla.Sla.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@skeptools/provider-zenduty.sla.Sla.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@skeptools/provider-zenduty.sla.Sla.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@skeptools/provider-zenduty.sla.Sla.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@skeptools/provider-zenduty.sla.Sla.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@skeptools/provider-zenduty.sla.Sla.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@skeptools/provider-zenduty.sla.Sla.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@skeptools/provider-zenduty.sla.Sla.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@skeptools/provider-zenduty.sla.Sla.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-zenduty.sla.Sla.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.Sla.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-zenduty.sla.Sla.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.Sla.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-zenduty.sla.Sla.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.Sla.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-zenduty.sla.Sla.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.Sla.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-zenduty.sla.Sla.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.Sla.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-zenduty.sla.Sla.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.Sla.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-zenduty.sla.Sla.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.Sla.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-zenduty.sla.Sla.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.Sla.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-zenduty.sla.Sla.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.Sla.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@skeptools/provider-zenduty.sla.Sla.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@skeptools/provider-zenduty.sla.Sla.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.sla.Sla.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.sla.Sla.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-zenduty.sla.Sla.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.Sla.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@skeptools/provider-zenduty.sla.Sla.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.sla.Sla.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@skeptools/provider-zenduty.sla.Sla.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@skeptools/provider-zenduty.sla.Sla.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@skeptools/provider-zenduty.sla.Sla.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@skeptools/provider-zenduty.sla.Sla.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.sla.Sla.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEscalations` <a name="PutEscalations" id="@skeptools/provider-zenduty.sla.Sla.putEscalations"></a>

```csharp
private void PutEscalations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@skeptools/provider-zenduty.sla.Sla.putEscalations.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@skeptools/provider-zenduty.sla.Sla.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@skeptools/provider-zenduty.sla.Sla.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsActive` <a name="ResetIsActive" id="@skeptools/provider-zenduty.sla.Sla.resetIsActive"></a>

```csharp
private void ResetIsActive()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@skeptools/provider-zenduty.sla.Sla.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

Sla.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.sla.Sla.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@skeptools/provider-zenduty.sla.Sla.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

Sla.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.sla.Sla.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@skeptools/provider-zenduty.sla.Sla.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

Sla.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.sla.Sla.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.escalations">Escalations</a></code> | <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList">SlaEscalationsList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.acknowledgeTimeInput">AcknowledgeTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.escalationsInput">EscalationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.isActiveInput">IsActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.resolveTimeInput">ResolveTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.teamIdInput">TeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.acknowledgeTime">AcknowledgeTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.isActive">IsActive</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.resolveTime">ResolveTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.teamId">TeamId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@skeptools/provider-zenduty.sla.Sla.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@skeptools/provider-zenduty.sla.Sla.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.sla.Sla.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@skeptools/provider-zenduty.sla.Sla.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@skeptools/provider-zenduty.sla.Sla.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@skeptools/provider-zenduty.sla.Sla.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@skeptools/provider-zenduty.sla.Sla.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-zenduty.sla.Sla.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.sla.Sla.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.sla.Sla.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.sla.Sla.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.sla.Sla.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.sla.Sla.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-zenduty.sla.Sla.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Escalations`<sup>Required</sup> <a name="Escalations" id="@skeptools/provider-zenduty.sla.Sla.property.escalations"></a>

```csharp
public SlaEscalationsList Escalations { get; }
```

- *Type:* <a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList">SlaEscalationsList</a>

---

##### `AcknowledgeTimeInput`<sup>Optional</sup> <a name="AcknowledgeTimeInput" id="@skeptools/provider-zenduty.sla.Sla.property.acknowledgeTimeInput"></a>

```csharp
public double AcknowledgeTimeInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@skeptools/provider-zenduty.sla.Sla.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EscalationsInput`<sup>Optional</sup> <a name="EscalationsInput" id="@skeptools/provider-zenduty.sla.Sla.property.escalationsInput"></a>

```csharp
public object EscalationsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@skeptools/provider-zenduty.sla.Sla.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsActiveInput`<sup>Optional</sup> <a name="IsActiveInput" id="@skeptools/provider-zenduty.sla.Sla.property.isActiveInput"></a>

```csharp
public object IsActiveInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@skeptools/provider-zenduty.sla.Sla.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResolveTimeInput`<sup>Optional</sup> <a name="ResolveTimeInput" id="@skeptools/provider-zenduty.sla.Sla.property.resolveTimeInput"></a>

```csharp
public double ResolveTimeInput { get; }
```

- *Type:* double

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@skeptools/provider-zenduty.sla.Sla.property.teamIdInput"></a>

```csharp
public string TeamIdInput { get; }
```

- *Type:* string

---

##### `AcknowledgeTime`<sup>Required</sup> <a name="AcknowledgeTime" id="@skeptools/provider-zenduty.sla.Sla.property.acknowledgeTime"></a>

```csharp
public double AcknowledgeTime { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@skeptools/provider-zenduty.sla.Sla.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.sla.Sla.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="@skeptools/provider-zenduty.sla.Sla.property.isActive"></a>

```csharp
public object IsActive { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@skeptools/provider-zenduty.sla.Sla.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResolveTime`<sup>Required</sup> <a name="ResolveTime" id="@skeptools/provider-zenduty.sla.Sla.property.resolveTime"></a>

```csharp
public double ResolveTime { get; }
```

- *Type:* double

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@skeptools/provider-zenduty.sla.Sla.property.teamId"></a>

```csharp
public string TeamId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@skeptools/provider-zenduty.sla.Sla.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SlaConfig <a name="SlaConfig" id="@skeptools/provider-zenduty.sla.SlaConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.sla.SlaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new SlaConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double AcknowledgeTime,
    object Escalations,
    string Name,
    double ResolveTime,
    string TeamId,
    string Description = null,
    string Id = null,
    object IsActive = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.acknowledgeTime">AcknowledgeTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#acknowledge_time Sla#acknowledge_time}. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.escalations">Escalations</a></code> | <code>object</code> | escalations block. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#name Sla#name}. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.resolveTime">ResolveTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#resolve_time Sla#resolve_time}. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.teamId">TeamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#team_id Sla#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#description Sla#description}. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#id Sla#id}. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.isActive">IsActive</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#is_active Sla#is_active}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-zenduty.sla.SlaConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.sla.SlaConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.sla.SlaConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.sla.SlaConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.sla.SlaConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.sla.SlaConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-zenduty.sla.SlaConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AcknowledgeTime`<sup>Required</sup> <a name="AcknowledgeTime" id="@skeptools/provider-zenduty.sla.SlaConfig.property.acknowledgeTime"></a>

```csharp
public double AcknowledgeTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#acknowledge_time Sla#acknowledge_time}.

---

##### `Escalations`<sup>Required</sup> <a name="Escalations" id="@skeptools/provider-zenduty.sla.SlaConfig.property.escalations"></a>

```csharp
public object Escalations { get; set; }
```

- *Type:* object

escalations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#escalations Sla#escalations}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@skeptools/provider-zenduty.sla.SlaConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#name Sla#name}.

---

##### `ResolveTime`<sup>Required</sup> <a name="ResolveTime" id="@skeptools/provider-zenduty.sla.SlaConfig.property.resolveTime"></a>

```csharp
public double ResolveTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#resolve_time Sla#resolve_time}.

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@skeptools/provider-zenduty.sla.SlaConfig.property.teamId"></a>

```csharp
public string TeamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#team_id Sla#team_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@skeptools/provider-zenduty.sla.SlaConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#description Sla#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@skeptools/provider-zenduty.sla.SlaConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#id Sla#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsActive`<sup>Optional</sup> <a name="IsActive" id="@skeptools/provider-zenduty.sla.SlaConfig.property.isActive"></a>

```csharp
public object IsActive { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#is_active Sla#is_active}.

---

### SlaEscalations <a name="SlaEscalations" id="@skeptools/provider-zenduty.sla.SlaEscalations"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.sla.SlaEscalations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new SlaEscalations {
    double Time,
    double Type,
    object Responders = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalations.property.time">Time</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#time Sla#time}. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalations.property.type">Type</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#type Sla#type}. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalations.property.responders">Responders</a></code> | <code>object</code> | responders block. |

---

##### `Time`<sup>Required</sup> <a name="Time" id="@skeptools/provider-zenduty.sla.SlaEscalations.property.time"></a>

```csharp
public double Time { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#time Sla#time}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@skeptools/provider-zenduty.sla.SlaEscalations.property.type"></a>

```csharp
public double Type { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#type Sla#type}.

---

##### `Responders`<sup>Optional</sup> <a name="Responders" id="@skeptools/provider-zenduty.sla.SlaEscalations.property.responders"></a>

```csharp
public object Responders { get; set; }
```

- *Type:* object

responders block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#responders Sla#responders}

---

### SlaEscalationsResponders <a name="SlaEscalationsResponders" id="@skeptools/provider-zenduty.sla.SlaEscalationsResponders"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.sla.SlaEscalationsResponders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new SlaEscalationsResponders {
    string User
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsResponders.property.user">User</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#user Sla#user}. |

---

##### `User`<sup>Required</sup> <a name="User" id="@skeptools/provider-zenduty.sla.SlaEscalationsResponders.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#user Sla#user}.

---

## Classes <a name="Classes" id="Classes"></a>

### SlaEscalationsList <a name="SlaEscalationsList" id="@skeptools/provider-zenduty.sla.SlaEscalationsList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new SlaEscalationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.get"></a>

```csharp
private SlaEscalationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SlaEscalationsOutputReference <a name="SlaEscalationsOutputReference" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new SlaEscalationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.putResponders">PutResponders</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.resetResponders">ResetResponders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResponders` <a name="PutResponders" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.putResponders"></a>

```csharp
private void PutResponders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.putResponders.parameter.value"></a>

- *Type:* object

---

##### `ResetResponders` <a name="ResetResponders" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.resetResponders"></a>

```csharp
private void ResetResponders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.responders">Responders</a></code> | <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList">SlaEscalationsRespondersList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.uniqueId">UniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.respondersInput">RespondersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.timeInput">TimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.typeInput">TypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.time">Time</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.type">Type</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Responders`<sup>Required</sup> <a name="Responders" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.responders"></a>

```csharp
public SlaEscalationsRespondersList Responders { get; }
```

- *Type:* <a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList">SlaEscalationsRespondersList</a>

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.uniqueId"></a>

```csharp
public string UniqueId { get; }
```

- *Type:* string

---

##### `RespondersInput`<sup>Optional</sup> <a name="RespondersInput" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.respondersInput"></a>

```csharp
public object RespondersInput { get; }
```

- *Type:* object

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.timeInput"></a>

```csharp
public double TimeInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.typeInput"></a>

```csharp
public double TypeInput { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.time"></a>

```csharp
public double Time { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.type"></a>

```csharp
public double Type { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SlaEscalationsRespondersList <a name="SlaEscalationsRespondersList" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new SlaEscalationsRespondersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.get"></a>

```csharp
private SlaEscalationsRespondersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SlaEscalationsRespondersOutputReference <a name="SlaEscalationsRespondersOutputReference" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new SlaEscalationsRespondersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



