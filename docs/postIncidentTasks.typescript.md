# `postIncidentTasks` Submodule <a name="`postIncidentTasks` Submodule" id="@skeptools/provider-zenduty.postIncidentTasks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostIncidentTasks <a name="PostIncidentTasks" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks zenduty_post_incident_tasks}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer"></a>

```typescript
import { postIncidentTasks } from '@skeptools/provider-zenduty'

new postIncidentTasks.PostIncidentTasks(scope: Construct, id: string, config: PostIncidentTasksConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig">PostIncidentTasksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig">PostIncidentTasksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetAssignedTo">resetAssignedTo</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetDueInTime">resetDueInTime</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAssignedTo` <a name="resetAssignedTo" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetAssignedTo"></a>

```typescript
public resetAssignedTo(): void
```

##### `resetDueInTime` <a name="resetDueInTime" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetDueInTime"></a>

```typescript
public resetDueInTime(): void
```

##### `resetId` <a name="resetId" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStatus` <a name="resetStatus" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isConstruct"></a>

```typescript
import { postIncidentTasks } from '@skeptools/provider-zenduty'

postIncidentTasks.PostIncidentTasks.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isTerraformElement"></a>

```typescript
import { postIncidentTasks } from '@skeptools/provider-zenduty'

postIncidentTasks.PostIncidentTasks.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isTerraformResource"></a>

```typescript
import { postIncidentTasks } from '@skeptools/provider-zenduty'

postIncidentTasks.PostIncidentTasks.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.assignedToInput">assignedToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.dueInTimeInput">dueInTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.statusInput">statusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.assignedTo">assignedTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.dueInTime">dueInTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.status">status</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.title">title</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `assignedToInput`<sup>Optional</sup> <a name="assignedToInput" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.assignedToInput"></a>

```typescript
public readonly assignedToInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dueInTimeInput`<sup>Optional</sup> <a name="dueInTimeInput" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.dueInTimeInput"></a>

```typescript
public readonly dueInTimeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.statusInput"></a>

```typescript
public readonly statusInput: number;
```

- *Type:* number

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `assignedTo`<sup>Required</sup> <a name="assignedTo" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.assignedTo"></a>

```typescript
public readonly assignedTo: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dueInTime`<sup>Required</sup> <a name="dueInTime" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.dueInTime"></a>

```typescript
public readonly dueInTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.status"></a>

```typescript
public readonly status: number;
```

- *Type:* number

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostIncidentTasksConfig <a name="PostIncidentTasksConfig" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.Initializer"></a>

```typescript
import { postIncidentTasks } from '@skeptools/provider-zenduty'

const postIncidentTasksConfig: postIncidentTasks.PostIncidentTasksConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#description PostIncidentTasks#description}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.teamId">teamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#team_id PostIncidentTasks#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#title PostIncidentTasks#title}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.assignedTo">assignedTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#assigned_to PostIncidentTasks#assigned_to}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.dueInTime">dueInTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#due_in_time PostIncidentTasks#due_in_time}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#id PostIncidentTasks#id}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.status">status</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#status PostIncidentTasks#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#description PostIncidentTasks#description}.

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#team_id PostIncidentTasks#team_id}.

---

##### `title`<sup>Required</sup> <a name="title" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#title PostIncidentTasks#title}.

---

##### `assignedTo`<sup>Optional</sup> <a name="assignedTo" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.assignedTo"></a>

```typescript
public readonly assignedTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#assigned_to PostIncidentTasks#assigned_to}.

---

##### `dueInTime`<sup>Optional</sup> <a name="dueInTime" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.dueInTime"></a>

```typescript
public readonly dueInTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#due_in_time PostIncidentTasks#due_in_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#id PostIncidentTasks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.status"></a>

```typescript
public readonly status: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#status PostIncidentTasks#status}.

---



