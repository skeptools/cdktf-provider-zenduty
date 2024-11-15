# `dataZendutyIntegrations` Submodule <a name="`dataZendutyIntegrations` Submodule" id="@skeptools/provider-zenduty.dataZendutyIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataZendutyIntegrations <a name="DataZendutyIntegrations" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/d/integrations zenduty_integrations}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new DataZendutyIntegrations(Construct Scope, string Id, DataZendutyIntegrationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.config">Config</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig">DataZendutyIntegrationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig">DataZendutyIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.resetIntegrationId">ResetIntegrationId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIntegrationId` <a name="ResetIntegrationId" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.resetIntegrationId"></a>

```csharp
private void ResetIntegrationId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

DataZendutyIntegrations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

DataZendutyIntegrations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

DataZendutyIntegrations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.integrations">Integrations</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList">DataZendutyIntegrationsIntegrationsList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.integrationIdInput">IntegrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.serviceIdInput">ServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.teamIdInput">TeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.integrationId">IntegrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.teamId">TeamId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Integrations`<sup>Required</sup> <a name="Integrations" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.integrations"></a>

```csharp
public DataZendutyIntegrationsIntegrationsList Integrations { get; }
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList">DataZendutyIntegrationsIntegrationsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntegrationIdInput`<sup>Optional</sup> <a name="IntegrationIdInput" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.integrationIdInput"></a>

```csharp
public string IntegrationIdInput { get; }
```

- *Type:* string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.serviceIdInput"></a>

```csharp
public string ServiceIdInput { get; }
```

- *Type:* string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.teamIdInput"></a>

```csharp
public string TeamIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.integrationId"></a>

```csharp
public string IntegrationId { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.teamId"></a>

```csharp
public string TeamId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataZendutyIntegrationsConfig <a name="DataZendutyIntegrationsConfig" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new DataZendutyIntegrationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ServiceId,
    string TeamId,
    string Id = null,
    string IntegrationId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.serviceId">ServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#service_id DataZendutyIntegrations#service_id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.teamId">TeamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#team_id DataZendutyIntegrations#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#id DataZendutyIntegrations#id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.integrationId">IntegrationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#integration_id DataZendutyIntegrations#integration_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.serviceId"></a>

```csharp
public string ServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#service_id DataZendutyIntegrations#service_id}.

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.teamId"></a>

```csharp
public string TeamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#team_id DataZendutyIntegrations#team_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#id DataZendutyIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegrationId`<sup>Optional</sup> <a name="IntegrationId" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.integrationId"></a>

```csharp
public string IntegrationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#integration_id DataZendutyIntegrations#integration_id}.

---

### DataZendutyIntegrationsIntegrations <a name="DataZendutyIntegrationsIntegrations" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrations"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new DataZendutyIntegrationsIntegrations {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataZendutyIntegrationsIntegrationsList <a name="DataZendutyIntegrationsIntegrationsList" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new DataZendutyIntegrationsIntegrationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.get"></a>

```csharp
private DataZendutyIntegrationsIntegrationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataZendutyIntegrationsIntegrationsOutputReference <a name="DataZendutyIntegrationsIntegrationsOutputReference" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new DataZendutyIntegrationsIntegrationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.application">Application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.applicationReference">ApplicationReference</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.createIncidentsFor">CreateIncidentsFor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.defaultUrgency">DefaultUrgency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.integrationKey">IntegrationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.integrationType">IntegrationType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.summary">Summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.uniqueId">UniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.webhookUrl">WebhookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrations">DataZendutyIntegrationsIntegrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Application`<sup>Required</sup> <a name="Application" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.application"></a>

```csharp
public string Application { get; }
```

- *Type:* string

---

##### `ApplicationReference`<sup>Required</sup> <a name="ApplicationReference" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.applicationReference"></a>

```csharp
public StringMap ApplicationReference { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `CreateIncidentsFor`<sup>Required</sup> <a name="CreateIncidentsFor" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.createIncidentsFor"></a>

```csharp
public double CreateIncidentsFor { get; }
```

- *Type:* double

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `DefaultUrgency`<sup>Required</sup> <a name="DefaultUrgency" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.defaultUrgency"></a>

```csharp
public double DefaultUrgency { get; }
```

- *Type:* double

---

##### `IntegrationKey`<sup>Required</sup> <a name="IntegrationKey" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.integrationKey"></a>

```csharp
public string IntegrationKey { get; }
```

- *Type:* string

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.integrationType"></a>

```csharp
public double IntegrationType { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.summary"></a>

```csharp
public string Summary { get; }
```

- *Type:* string

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.uniqueId"></a>

```csharp
public string UniqueId { get; }
```

- *Type:* string

---

##### `WebhookUrl`<sup>Required</sup> <a name="WebhookUrl" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.webhookUrl"></a>

```csharp
public string WebhookUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.internalValue"></a>

```csharp
public DataZendutyIntegrationsIntegrations InternalValue { get; }
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrations">DataZendutyIntegrationsIntegrations</a>

---



