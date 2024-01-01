# `assignAccountRole` Submodule <a name="`assignAccountRole` Submodule" id="@skeptools/provider-zenduty.assignAccountRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AssignAccountRole <a name="AssignAccountRole" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/assign_account_role zenduty_assign_account_role}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new AssignAccountRole(Construct Scope, string Id, AssignAccountRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig">AssignAccountRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig">AssignAccountRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

AssignAccountRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

AssignAccountRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

AssignAccountRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.accountRoleInput">AccountRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.accountRole">AccountRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountRoleInput`<sup>Optional</sup> <a name="AccountRoleInput" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.accountRoleInput"></a>

```csharp
public string AccountRoleInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `AccountRole`<sup>Required</sup> <a name="AccountRole" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.accountRole"></a>

```csharp
public string AccountRole { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AssignAccountRoleConfig <a name="AssignAccountRoleConfig" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Zenduty;

new AssignAccountRoleConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountRole,
    string Username,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig.property.accountRole">AccountRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/assign_account_role#account_role AssignAccountRole#account_role}. |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/assign_account_role#username AssignAccountRole#username}. |
| <code><a href="#@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/assign_account_role#id AssignAccountRole#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountRole`<sup>Required</sup> <a name="AccountRole" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig.property.accountRole"></a>

```csharp
public string AccountRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/assign_account_role#account_role AssignAccountRole#account_role}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/assign_account_role#username AssignAccountRole#username}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@skeptools/provider-zenduty.assignAccountRole.AssignAccountRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/assign_account_role#id AssignAccountRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



