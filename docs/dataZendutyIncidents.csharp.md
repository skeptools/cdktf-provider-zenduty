# `dataZendutyIncidents` Submodule <a name="`dataZendutyIncidents` Submodule" id="@skeptools/provider-zenduty.dataZendutyIncidents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataZendutyIncidents <a name="DataZendutyIncidents" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/d/incidents zenduty_incidents}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new DataZendutyIncidents(Construct Scope, string Id, DataZendutyIncidentsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.config">Config</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig">DataZendutyIncidentsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNumber` <a name="ResetNumber" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetNumber"></a>

```csharp
private void ResetNumber()
```

##### `ResetStatus` <a name="ResetStatus" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

DataZendutyIncidents.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

DataZendutyIncidents.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

DataZendutyIncidents.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.results">Results</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList">DataZendutyIncidentsResultsList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.numberInput">NumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.number">Number</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Results`<sup>Required</sup> <a name="Results" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.results"></a>

```csharp
public DataZendutyIncidentsResultsList Results { get; }
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList">DataZendutyIncidentsResultsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NumberInput`<sup>Optional</sup> <a name="NumberInput" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.numberInput"></a>

```csharp
public string NumberInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.number"></a>

```csharp
public string Number { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataZendutyIncidentsConfig <a name="DataZendutyIncidentsConfig" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new DataZendutyIncidentsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string Number = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#id DataZendutyIncidents#id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.number">Number</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#number DataZendutyIncidents#number}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#status DataZendutyIncidents#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#id DataZendutyIncidents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Number`<sup>Optional</sup> <a name="Number" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.number"></a>

```csharp
public string Number { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#number DataZendutyIncidents#number}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#status DataZendutyIncidents#status}.

---

### DataZendutyIncidentsResults <a name="DataZendutyIncidentsResults" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResults"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new DataZendutyIncidentsResults {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataZendutyIncidentsResultsList <a name="DataZendutyIncidentsResultsList" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new DataZendutyIncidentsResultsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.get"></a>

```csharp
private DataZendutyIncidentsResultsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataZendutyIncidentsResultsOutputReference <a name="DataZendutyIncidentsResultsOutputReference" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new DataZendutyIncidentsResultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.acknowledgedDate">AcknowledgedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.assignedTo">AssignedTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.assignedToName">AssignedToName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.contextWindowEnd">ContextWindowEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.contextWindowStart">ContextWindowStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.escalationPolicyObjectName">EscalationPolicyObjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.escalationPolicyObjectUniqueId">EscalationPolicyObjectUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.esccalationPolicy">EsccalationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.incidentKey">IncidentKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.incidentNumber">IncidentNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.mergedWith">MergedWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.resolvedDate">ResolvedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObject">ServiceObject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectAcknowledgementTimeout">ServiceObjectAcknowledgementTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectAutoResolveTimeout">ServiceObjectAutoResolveTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCollation">ServiceObjectCollation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCollationTime">ServiceObjectCollationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCreatedBy">ServiceObjectCreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCreationDate">ServiceObjectCreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectDescription">ServiceObjectDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectEscalationPolicy">ServiceObjectEscalationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectName">ServiceObjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectSla">ServiceObjectSla</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectStatus">ServiceObjectStatus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectSummary">ServiceObjectSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTaskTemplate">ServiceObjectTaskTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTeam">ServiceObjectTeam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTeamPriority">ServiceObjectTeamPriority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectUniqueId">ServiceObjectUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.sla">Sla</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.slaObject">SlaObject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.status">Status</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.summary">Summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.teamPriority">TeamPriority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.teamPriorityObject">TeamPriorityObject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.uniqueId">UniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.urgency">Urgency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResults">DataZendutyIncidentsResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcknowledgedDate`<sup>Required</sup> <a name="AcknowledgedDate" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.acknowledgedDate"></a>

```csharp
public string AcknowledgedDate { get; }
```

- *Type:* string

---

##### `AssignedTo`<sup>Required</sup> <a name="AssignedTo" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.assignedTo"></a>

```csharp
public string AssignedTo { get; }
```

- *Type:* string

---

##### `AssignedToName`<sup>Required</sup> <a name="AssignedToName" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.assignedToName"></a>

```csharp
public string AssignedToName { get; }
```

- *Type:* string

---

##### `ContextWindowEnd`<sup>Required</sup> <a name="ContextWindowEnd" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.contextWindowEnd"></a>

```csharp
public string ContextWindowEnd { get; }
```

- *Type:* string

---

##### `ContextWindowStart`<sup>Required</sup> <a name="ContextWindowStart" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.contextWindowStart"></a>

```csharp
public string ContextWindowStart { get; }
```

- *Type:* string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `EscalationPolicyObjectName`<sup>Required</sup> <a name="EscalationPolicyObjectName" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.escalationPolicyObjectName"></a>

```csharp
public string EscalationPolicyObjectName { get; }
```

- *Type:* string

---

##### `EscalationPolicyObjectUniqueId`<sup>Required</sup> <a name="EscalationPolicyObjectUniqueId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.escalationPolicyObjectUniqueId"></a>

```csharp
public string EscalationPolicyObjectUniqueId { get; }
```

- *Type:* string

---

##### `EsccalationPolicy`<sup>Required</sup> <a name="EsccalationPolicy" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.esccalationPolicy"></a>

```csharp
public string EsccalationPolicy { get; }
```

- *Type:* string

---

##### `IncidentKey`<sup>Required</sup> <a name="IncidentKey" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.incidentKey"></a>

```csharp
public string IncidentKey { get; }
```

- *Type:* string

---

##### `IncidentNumber`<sup>Required</sup> <a name="IncidentNumber" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.incidentNumber"></a>

```csharp
public double IncidentNumber { get; }
```

- *Type:* double

---

##### `MergedWith`<sup>Required</sup> <a name="MergedWith" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.mergedWith"></a>

```csharp
public string MergedWith { get; }
```

- *Type:* string

---

##### `ResolvedDate`<sup>Required</sup> <a name="ResolvedDate" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.resolvedDate"></a>

```csharp
public string ResolvedDate { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `ServiceObject`<sup>Required</sup> <a name="ServiceObject" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObject"></a>

```csharp
public string ServiceObject { get; }
```

- *Type:* string

---

##### `ServiceObjectAcknowledgementTimeout`<sup>Required</sup> <a name="ServiceObjectAcknowledgementTimeout" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectAcknowledgementTimeout"></a>

```csharp
public double ServiceObjectAcknowledgementTimeout { get; }
```

- *Type:* double

---

##### `ServiceObjectAutoResolveTimeout`<sup>Required</sup> <a name="ServiceObjectAutoResolveTimeout" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectAutoResolveTimeout"></a>

```csharp
public double ServiceObjectAutoResolveTimeout { get; }
```

- *Type:* double

---

##### `ServiceObjectCollation`<sup>Required</sup> <a name="ServiceObjectCollation" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCollation"></a>

```csharp
public double ServiceObjectCollation { get; }
```

- *Type:* double

---

##### `ServiceObjectCollationTime`<sup>Required</sup> <a name="ServiceObjectCollationTime" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCollationTime"></a>

```csharp
public double ServiceObjectCollationTime { get; }
```

- *Type:* double

---

##### `ServiceObjectCreatedBy`<sup>Required</sup> <a name="ServiceObjectCreatedBy" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCreatedBy"></a>

```csharp
public string ServiceObjectCreatedBy { get; }
```

- *Type:* string

---

##### `ServiceObjectCreationDate`<sup>Required</sup> <a name="ServiceObjectCreationDate" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCreationDate"></a>

```csharp
public string ServiceObjectCreationDate { get; }
```

- *Type:* string

---

##### `ServiceObjectDescription`<sup>Required</sup> <a name="ServiceObjectDescription" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectDescription"></a>

```csharp
public string ServiceObjectDescription { get; }
```

- *Type:* string

---

##### `ServiceObjectEscalationPolicy`<sup>Required</sup> <a name="ServiceObjectEscalationPolicy" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectEscalationPolicy"></a>

```csharp
public string ServiceObjectEscalationPolicy { get; }
```

- *Type:* string

---

##### `ServiceObjectName`<sup>Required</sup> <a name="ServiceObjectName" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectName"></a>

```csharp
public string ServiceObjectName { get; }
```

- *Type:* string

---

##### `ServiceObjectSla`<sup>Required</sup> <a name="ServiceObjectSla" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectSla"></a>

```csharp
public string ServiceObjectSla { get; }
```

- *Type:* string

---

##### `ServiceObjectStatus`<sup>Required</sup> <a name="ServiceObjectStatus" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectStatus"></a>

```csharp
public double ServiceObjectStatus { get; }
```

- *Type:* double

---

##### `ServiceObjectSummary`<sup>Required</sup> <a name="ServiceObjectSummary" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectSummary"></a>

```csharp
public string ServiceObjectSummary { get; }
```

- *Type:* string

---

##### `ServiceObjectTaskTemplate`<sup>Required</sup> <a name="ServiceObjectTaskTemplate" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTaskTemplate"></a>

```csharp
public string ServiceObjectTaskTemplate { get; }
```

- *Type:* string

---

##### `ServiceObjectTeam`<sup>Required</sup> <a name="ServiceObjectTeam" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTeam"></a>

```csharp
public string ServiceObjectTeam { get; }
```

- *Type:* string

---

##### `ServiceObjectTeamPriority`<sup>Required</sup> <a name="ServiceObjectTeamPriority" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTeamPriority"></a>

```csharp
public string ServiceObjectTeamPriority { get; }
```

- *Type:* string

---

##### `ServiceObjectUniqueId`<sup>Required</sup> <a name="ServiceObjectUniqueId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectUniqueId"></a>

```csharp
public string ServiceObjectUniqueId { get; }
```

- *Type:* string

---

##### `Sla`<sup>Required</sup> <a name="Sla" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.sla"></a>

```csharp
public string Sla { get; }
```

- *Type:* string

---

##### `SlaObject`<sup>Required</sup> <a name="SlaObject" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.slaObject"></a>

```csharp
public string SlaObject { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.status"></a>

```csharp
public double Status { get; }
```

- *Type:* double

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.summary"></a>

```csharp
public string Summary { get; }
```

- *Type:* string

---

##### `TeamPriority`<sup>Required</sup> <a name="TeamPriority" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.teamPriority"></a>

```csharp
public string TeamPriority { get; }
```

- *Type:* string

---

##### `TeamPriorityObject`<sup>Required</sup> <a name="TeamPriorityObject" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.teamPriorityObject"></a>

```csharp
public string TeamPriorityObject { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.uniqueId"></a>

```csharp
public string UniqueId { get; }
```

- *Type:* string

---

##### `Urgency`<sup>Required</sup> <a name="Urgency" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.urgency"></a>

```csharp
public double Urgency { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.internalValue"></a>

```csharp
public DataZendutyIncidentsResults InternalValue { get; }
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResults">DataZendutyIncidentsResults</a>

---



