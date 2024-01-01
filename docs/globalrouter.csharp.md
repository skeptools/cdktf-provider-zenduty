# `globalrouter` Submodule <a name="`globalrouter` Submodule" id="@skeptools/provider-zenduty.globalrouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Globalrouter <a name="Globalrouter" id="@skeptools/provider-zenduty.globalrouter.Globalrouter"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouter zenduty_globalrouter}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new Globalrouter(Construct Scope, string Id, GlobalrouterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.Initializer.parameter.config">Config</a></code> | <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig">GlobalrouterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig">GlobalrouterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

Globalrouter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

Globalrouter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

Globalrouter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.integrationKey">IntegrationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IntegrationKey`<sup>Required</sup> <a name="IntegrationKey" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.integrationKey"></a>

```csharp
public string IntegrationKey { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.Globalrouter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@skeptools/provider-zenduty.globalrouter.Globalrouter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalrouterConfig <a name="GlobalrouterConfig" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new GlobalrouterConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Description,
    string Name,
    string Id = null,
    object IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouter#description Globalrouter#description}. |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouter#name Globalrouter#name}. |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouter#id Globalrouter#id}. |
| <code><a href="#@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouter#is_enabled Globalrouter#is_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouter#description Globalrouter#description}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouter#name Globalrouter#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouter#id Globalrouter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@skeptools/provider-zenduty.globalrouter.GlobalrouterConfig.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouter#is_enabled Globalrouter#is_enabled}.

---



