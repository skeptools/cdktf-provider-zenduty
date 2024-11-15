# `roles` Submodule <a name="`roles` Submodule" id="@skeptools/provider-zenduty.roles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Roles <a name="Roles" id="@skeptools/provider-zenduty.roles.Roles"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/roles zenduty_roles}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.roles.Roles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.roles.Roles;

Roles.Builder.create(Construct scope, java.lang.String id)
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
    .description(java.lang.String)
    .team(java.lang.String)
    .title(java.lang.String)
//  .creationDate(java.lang.String)
//  .id(java.lang.String)
//  .rank(java.lang.Number)
//  .uniqueId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#description Roles#description}. |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.team">team</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#team Roles#team}. |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#title Roles#title}. |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.creationDate">creationDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#creation_date Roles#creation_date}. |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#id Roles#id}. |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.rank">rank</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#rank Roles#rank}. |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.uniqueId">uniqueId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#unique_id Roles#unique_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#description Roles#description}.

---

##### `team`<sup>Required</sup> <a name="team" id="@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.team"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#team Roles#team}.

---

##### `title`<sup>Required</sup> <a name="title" id="@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.title"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#title Roles#title}.

---

##### `creationDate`<sup>Optional</sup> <a name="creationDate" id="@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.creationDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#creation_date Roles#creation_date}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#id Roles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rank`<sup>Optional</sup> <a name="rank" id="@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.rank"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#rank Roles#rank}.

---

##### `uniqueId`<sup>Optional</sup> <a name="uniqueId" id="@skeptools/provider-zenduty.roles.Roles.Initializer.parameter.uniqueId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#unique_id Roles#unique_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.resetCreationDate">resetCreationDate</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.resetRank">resetRank</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.resetUniqueId">resetUniqueId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.roles.Roles.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@skeptools/provider-zenduty.roles.Roles.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.roles.Roles.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.roles.Roles.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@skeptools/provider-zenduty.roles.Roles.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-zenduty.roles.Roles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@skeptools/provider-zenduty.roles.Roles.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@skeptools/provider-zenduty.roles.Roles.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@skeptools/provider-zenduty.roles.Roles.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@skeptools/provider-zenduty.roles.Roles.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@skeptools/provider-zenduty.roles.Roles.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@skeptools/provider-zenduty.roles.Roles.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.roles.Roles.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.roles.Roles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.roles.Roles.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.roles.Roles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.roles.Roles.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.roles.Roles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.roles.Roles.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.roles.Roles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.roles.Roles.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.roles.Roles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.roles.Roles.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.roles.Roles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.roles.Roles.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.roles.Roles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.roles.Roles.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.roles.Roles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.roles.Roles.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.roles.Roles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@skeptools/provider-zenduty.roles.Roles.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@skeptools/provider-zenduty.roles.Roles.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.roles.Roles.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.roles.Roles.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.roles.Roles.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.roles.Roles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@skeptools/provider-zenduty.roles.Roles.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.roles.Roles.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@skeptools/provider-zenduty.roles.Roles.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@skeptools/provider-zenduty.roles.Roles.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@skeptools/provider-zenduty.roles.Roles.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@skeptools/provider-zenduty.roles.Roles.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.roles.Roles.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCreationDate` <a name="resetCreationDate" id="@skeptools/provider-zenduty.roles.Roles.resetCreationDate"></a>

```java
public void resetCreationDate()
```

##### `resetId` <a name="resetId" id="@skeptools/provider-zenduty.roles.Roles.resetId"></a>

```java
public void resetId()
```

##### `resetRank` <a name="resetRank" id="@skeptools/provider-zenduty.roles.Roles.resetRank"></a>

```java
public void resetRank()
```

##### `resetUniqueId` <a name="resetUniqueId" id="@skeptools/provider-zenduty.roles.Roles.resetUniqueId"></a>

```java
public void resetUniqueId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@skeptools/provider-zenduty.roles.Roles.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.roles.Roles;

Roles.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.roles.Roles.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@skeptools/provider-zenduty.roles.Roles.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.roles.Roles;

Roles.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.roles.Roles.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@skeptools/provider-zenduty.roles.Roles.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.roles.Roles;

Roles.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.roles.Roles.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.creationDateInput">creationDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.rankInput">rankInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.teamInput">teamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.uniqueIdInput">uniqueIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.rank">rank</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.team">team</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.uniqueId">uniqueId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.roles.Roles.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@skeptools/provider-zenduty.roles.Roles.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.roles.Roles.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@skeptools/provider-zenduty.roles.Roles.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@skeptools/provider-zenduty.roles.Roles.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@skeptools/provider-zenduty.roles.Roles.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@skeptools/provider-zenduty.roles.Roles.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.roles.Roles.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.roles.Roles.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.roles.Roles.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.roles.Roles.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.roles.Roles.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.roles.Roles.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.roles.Roles.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationDateInput`<sup>Optional</sup> <a name="creationDateInput" id="@skeptools/provider-zenduty.roles.Roles.property.creationDateInput"></a>

```java
public java.lang.String getCreationDateInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@skeptools/provider-zenduty.roles.Roles.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@skeptools/provider-zenduty.roles.Roles.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `rankInput`<sup>Optional</sup> <a name="rankInput" id="@skeptools/provider-zenduty.roles.Roles.property.rankInput"></a>

```java
public java.lang.Number getRankInput();
```

- *Type:* java.lang.Number

---

##### `teamInput`<sup>Optional</sup> <a name="teamInput" id="@skeptools/provider-zenduty.roles.Roles.property.teamInput"></a>

```java
public java.lang.String getTeamInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@skeptools/provider-zenduty.roles.Roles.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `uniqueIdInput`<sup>Optional</sup> <a name="uniqueIdInput" id="@skeptools/provider-zenduty.roles.Roles.property.uniqueIdInput"></a>

```java
public java.lang.String getUniqueIdInput();
```

- *Type:* java.lang.String

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@skeptools/provider-zenduty.roles.Roles.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@skeptools/provider-zenduty.roles.Roles.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.roles.Roles.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `rank`<sup>Required</sup> <a name="rank" id="@skeptools/provider-zenduty.roles.Roles.property.rank"></a>

```java
public java.lang.Number getRank();
```

- *Type:* java.lang.Number

---

##### `team`<sup>Required</sup> <a name="team" id="@skeptools/provider-zenduty.roles.Roles.property.team"></a>

```java
public java.lang.String getTeam();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@skeptools/provider-zenduty.roles.Roles.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@skeptools/provider-zenduty.roles.Roles.property.uniqueId"></a>

```java
public java.lang.String getUniqueId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.roles.Roles.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.roles.Roles.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RolesConfig <a name="RolesConfig" id="@skeptools/provider-zenduty.roles.RolesConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.roles.RolesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.roles.RolesConfig;

RolesConfig.builder()
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
    .description(java.lang.String)
    .team(java.lang.String)
    .title(java.lang.String)
//  .creationDate(java.lang.String)
//  .id(java.lang.String)
//  .rank(java.lang.Number)
//  .uniqueId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.roles.RolesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.RolesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.RolesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.RolesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.RolesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.RolesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.RolesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.roles.RolesConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#description Roles#description}. |
| <code><a href="#@skeptools/provider-zenduty.roles.RolesConfig.property.team">team</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#team Roles#team}. |
| <code><a href="#@skeptools/provider-zenduty.roles.RolesConfig.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#title Roles#title}. |
| <code><a href="#@skeptools/provider-zenduty.roles.RolesConfig.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#creation_date Roles#creation_date}. |
| <code><a href="#@skeptools/provider-zenduty.roles.RolesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#id Roles#id}. |
| <code><a href="#@skeptools/provider-zenduty.roles.RolesConfig.property.rank">rank</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#rank Roles#rank}. |
| <code><a href="#@skeptools/provider-zenduty.roles.RolesConfig.property.uniqueId">uniqueId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#unique_id Roles#unique_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.roles.RolesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.roles.RolesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.roles.RolesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.roles.RolesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.roles.RolesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.roles.RolesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.roles.RolesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@skeptools/provider-zenduty.roles.RolesConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#description Roles#description}.

---

##### `team`<sup>Required</sup> <a name="team" id="@skeptools/provider-zenduty.roles.RolesConfig.property.team"></a>

```java
public java.lang.String getTeam();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#team Roles#team}.

---

##### `title`<sup>Required</sup> <a name="title" id="@skeptools/provider-zenduty.roles.RolesConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#title Roles#title}.

---

##### `creationDate`<sup>Optional</sup> <a name="creationDate" id="@skeptools/provider-zenduty.roles.RolesConfig.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#creation_date Roles#creation_date}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.roles.RolesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#id Roles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rank`<sup>Optional</sup> <a name="rank" id="@skeptools/provider-zenduty.roles.RolesConfig.property.rank"></a>

```java
public java.lang.Number getRank();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#rank Roles#rank}.

---

##### `uniqueId`<sup>Optional</sup> <a name="uniqueId" id="@skeptools/provider-zenduty.roles.RolesConfig.property.uniqueId"></a>

```java
public java.lang.String getUniqueId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/roles#unique_id Roles#unique_id}.

---



