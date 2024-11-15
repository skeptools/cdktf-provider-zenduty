# `dataZendutyEsp` Submodule <a name="`dataZendutyEsp` Submodule" id="@skeptools/provider-zenduty.dataZendutyEsp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataZendutyEsp <a name="DataZendutyEsp" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/d/esp zenduty_esp}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.data_zenduty_esp.DataZendutyEsp;

DataZendutyEsp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .teamId(java.lang.String)
//  .espId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.teamId">teamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#team_id DataZendutyEsp#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.espId">espId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#esp_id DataZendutyEsp#esp_id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#id DataZendutyEsp#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.teamId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#team_id DataZendutyEsp#team_id}.

---

##### `espId`<sup>Optional</sup> <a name="espId" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.espId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#esp_id DataZendutyEsp#esp_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#id DataZendutyEsp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.resetEspId">resetEspId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetEspId` <a name="resetEspId" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.resetEspId"></a>

```java
public void resetEspId()
```

##### `resetId` <a name="resetId" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.data_zenduty_esp.DataZendutyEsp;

DataZendutyEsp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.data_zenduty_esp.DataZendutyEsp;

DataZendutyEsp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.data_zenduty_esp.DataZendutyEsp;

DataZendutyEsp.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.escalationPolicies">escalationPolicies</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList">DataZendutyEspEscalationPoliciesList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.espIdInput">espIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.teamIdInput">teamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.espId">espId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.teamId">teamId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `escalationPolicies`<sup>Required</sup> <a name="escalationPolicies" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.escalationPolicies"></a>

```java
public DataZendutyEspEscalationPoliciesList getEscalationPolicies();
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList">DataZendutyEspEscalationPoliciesList</a>

---

##### `espIdInput`<sup>Optional</sup> <a name="espIdInput" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.espIdInput"></a>

```java
public java.lang.String getEspIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.teamIdInput"></a>

```java
public java.lang.String getTeamIdInput();
```

- *Type:* java.lang.String

---

##### `espId`<sup>Required</sup> <a name="espId" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.espId"></a>

```java
public java.lang.String getEspId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataZendutyEspConfig <a name="DataZendutyEspConfig" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.data_zenduty_esp.DataZendutyEspConfig;

DataZendutyEspConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .teamId(java.lang.String)
//  .espId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.teamId">teamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#team_id DataZendutyEsp#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.espId">espId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#esp_id DataZendutyEsp#esp_id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#id DataZendutyEsp#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#team_id DataZendutyEsp#team_id}.

---

##### `espId`<sup>Optional</sup> <a name="espId" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.espId"></a>

```java
public java.lang.String getEspId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#esp_id DataZendutyEsp#esp_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#id DataZendutyEsp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataZendutyEspEscalationPolicies <a name="DataZendutyEspEscalationPolicies" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPolicies"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.data_zenduty_esp.DataZendutyEspEscalationPolicies;

DataZendutyEspEscalationPolicies.builder()
    .build();
```


### DataZendutyEspEscalationPoliciesRules <a name="DataZendutyEspEscalationPoliciesRules" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRules"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.data_zenduty_esp.DataZendutyEspEscalationPoliciesRules;

DataZendutyEspEscalationPoliciesRules.builder()
    .build();
```


### DataZendutyEspEscalationPoliciesRulesTargets <a name="DataZendutyEspEscalationPoliciesRulesTargets" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargets"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.data_zenduty_esp.DataZendutyEspEscalationPoliciesRulesTargets;

DataZendutyEspEscalationPoliciesRulesTargets.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataZendutyEspEscalationPoliciesList <a name="DataZendutyEspEscalationPoliciesList" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.data_zenduty_esp.DataZendutyEspEscalationPoliciesList;

new DataZendutyEspEscalationPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.get"></a>

```java
public DataZendutyEspEscalationPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataZendutyEspEscalationPoliciesOutputReference <a name="DataZendutyEspEscalationPoliciesOutputReference" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.data_zenduty_esp.DataZendutyEspEscalationPoliciesOutputReference;

new DataZendutyEspEscalationPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.globalEp">globalEp</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.moveToNext">moveToNext</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.repeatPolicy">repeatPolicy</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.rules">rules</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList">DataZendutyEspEscalationPoliciesRulesList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.summary">summary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.team">team</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.uniqueId">uniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPolicies">DataZendutyEspEscalationPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `globalEp`<sup>Required</sup> <a name="globalEp" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.globalEp"></a>

```java
public IResolvable getGlobalEp();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `moveToNext`<sup>Required</sup> <a name="moveToNext" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.moveToNext"></a>

```java
public IResolvable getMoveToNext();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `repeatPolicy`<sup>Required</sup> <a name="repeatPolicy" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.repeatPolicy"></a>

```java
public java.lang.Number getRepeatPolicy();
```

- *Type:* java.lang.Number

---

##### `rules`<sup>Required</sup> <a name="rules" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.rules"></a>

```java
public DataZendutyEspEscalationPoliciesRulesList getRules();
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList">DataZendutyEspEscalationPoliciesRulesList</a>

---

##### `summary`<sup>Required</sup> <a name="summary" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

---

##### `team`<sup>Required</sup> <a name="team" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.team"></a>

```java
public java.lang.String getTeam();
```

- *Type:* java.lang.String

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.uniqueId"></a>

```java
public java.lang.String getUniqueId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.internalValue"></a>

```java
public DataZendutyEspEscalationPolicies getInternalValue();
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPolicies">DataZendutyEspEscalationPolicies</a>

---


### DataZendutyEspEscalationPoliciesRulesList <a name="DataZendutyEspEscalationPoliciesRulesList" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.data_zenduty_esp.DataZendutyEspEscalationPoliciesRulesList;

new DataZendutyEspEscalationPoliciesRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.get"></a>

```java
public DataZendutyEspEscalationPoliciesRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataZendutyEspEscalationPoliciesRulesOutputReference <a name="DataZendutyEspEscalationPoliciesRulesOutputReference" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.data_zenduty_esp.DataZendutyEspEscalationPoliciesRulesOutputReference;

new DataZendutyEspEscalationPoliciesRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.delay">delay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.targets">targets</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList">DataZendutyEspEscalationPoliciesRulesTargetsList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.uniqueId">uniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRules">DataZendutyEspEscalationPoliciesRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `delay`<sup>Required</sup> <a name="delay" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.delay"></a>

```java
public java.lang.Number getDelay();
```

- *Type:* java.lang.Number

---

##### `position`<sup>Required</sup> <a name="position" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `targets`<sup>Required</sup> <a name="targets" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.targets"></a>

```java
public DataZendutyEspEscalationPoliciesRulesTargetsList getTargets();
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList">DataZendutyEspEscalationPoliciesRulesTargetsList</a>

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.uniqueId"></a>

```java
public java.lang.String getUniqueId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.internalValue"></a>

```java
public DataZendutyEspEscalationPoliciesRules getInternalValue();
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRules">DataZendutyEspEscalationPoliciesRules</a>

---


### DataZendutyEspEscalationPoliciesRulesTargetsList <a name="DataZendutyEspEscalationPoliciesRulesTargetsList" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.data_zenduty_esp.DataZendutyEspEscalationPoliciesRulesTargetsList;

new DataZendutyEspEscalationPoliciesRulesTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.get"></a>

```java
public DataZendutyEspEscalationPoliciesRulesTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataZendutyEspEscalationPoliciesRulesTargetsOutputReference <a name="DataZendutyEspEscalationPoliciesRulesTargetsOutputReference" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.data_zenduty_esp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference;

new DataZendutyEspEscalationPoliciesRulesTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.property.targetType">targetType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargets">DataZendutyEspEscalationPoliciesRulesTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.property.targetType"></a>

```java
public java.lang.Number getTargetType();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.property.internalValue"></a>

```java
public DataZendutyEspEscalationPoliciesRulesTargets getInternalValue();
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargets">DataZendutyEspEscalationPoliciesRulesTargets</a>

---



