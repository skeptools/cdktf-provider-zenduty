# `dataZendutyUsercontact` Submodule <a name="`dataZendutyUsercontact` Submodule" id="@skeptools/provider-zenduty.dataZendutyUsercontact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataZendutyUsercontact <a name="DataZendutyUsercontact" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact zenduty_usercontact}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new DataZendutyUsercontact(Construct Scope, string Id, DataZendutyUsercontactConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.Initializer.parameter.config">Config</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig">DataZendutyUsercontactConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetValue` <a name="ResetValue" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.resetValue"></a>

```csharp
private void ResetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

DataZendutyUsercontact.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

DataZendutyUsercontact.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

DataZendutyUsercontact.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.contactTypeInput">ContactTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.contactType">ContactType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.value">Value</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Name`<sup>Required</sup> <a name="Name" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ContactTypeInput`<sup>Optional</sup> <a name="ContactTypeInput" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.contactTypeInput"></a>

```csharp
public double ContactTypeInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ContactType`<sup>Required</sup> <a name="ContactType" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.contactType"></a>

```csharp
public double ContactType { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontact.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataZendutyUsercontactConfig <a name="DataZendutyUsercontactConfig" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new DataZendutyUsercontactConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double ContactType,
    string UserId,
    string Id = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.contactType">ContactType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact#contact_type DataZendutyUsercontact#contact_type}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.userId">UserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact#user_id DataZendutyUsercontact#user_id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact#id DataZendutyUsercontact#id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact#value DataZendutyUsercontact#value}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContactType`<sup>Required</sup> <a name="ContactType" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.contactType"></a>

```csharp
public double ContactType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact#contact_type DataZendutyUsercontact#contact_type}.

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact#user_id DataZendutyUsercontact#user_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact#id DataZendutyUsercontact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@skeptools/provider-zenduty.dataZendutyUsercontact.DataZendutyUsercontactConfig.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact#value DataZendutyUsercontact#value}.

---



