# `taskTemplateTasks` Submodule <a name="`taskTemplateTasks` Submodule" id="@skeptools/provider-zenduty.taskTemplateTasks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TaskTemplateTasks <a name="TaskTemplateTasks" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks zenduty_task_template_tasks}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer"></a>

```typescript
import { taskTemplateTasks } from '@skeptools/provider-zenduty'

new taskTemplateTasks.TaskTemplateTasks(scope: Construct, id: string, config: TaskTemplateTasksConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig">TaskTemplateTasksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig">TaskTemplateTasksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetDueIn">resetDueIn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetRole">resetRole</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDueIn` <a name="resetDueIn" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetDueIn"></a>

```typescript
public resetDueIn(): void
```

##### `resetId` <a name="resetId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRole` <a name="resetRole" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetRole"></a>

```typescript
public resetRole(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isConstruct"></a>

```typescript
import { taskTemplateTasks } from '@skeptools/provider-zenduty'

taskTemplateTasks.TaskTemplateTasks.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformElement"></a>

```typescript
import { taskTemplateTasks } from '@skeptools/provider-zenduty'

taskTemplateTasks.TaskTemplateTasks.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformResource"></a>

```typescript
import { taskTemplateTasks } from '@skeptools/provider-zenduty'

taskTemplateTasks.TaskTemplateTasks.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.position">position</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dueInInput">dueInInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.taskTemplateIdInput">taskTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dueIn">dueIn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.taskTemplateId">taskTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.title">title</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dueInInput`<sup>Optional</sup> <a name="dueInInput" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dueInInput"></a>

```typescript
public readonly dueInInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `taskTemplateIdInput`<sup>Optional</sup> <a name="taskTemplateIdInput" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.taskTemplateIdInput"></a>

```typescript
public readonly taskTemplateIdInput: string;
```

- *Type:* string

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dueIn`<sup>Required</sup> <a name="dueIn" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dueIn"></a>

```typescript
public readonly dueIn: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `taskTemplateId`<sup>Required</sup> <a name="taskTemplateId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.taskTemplateId"></a>

```typescript
public readonly taskTemplateId: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TaskTemplateTasksConfig <a name="TaskTemplateTasksConfig" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.Initializer"></a>

```typescript
import { taskTemplateTasks } from '@skeptools/provider-zenduty'

const taskTemplateTasksConfig: taskTemplateTasks.TaskTemplateTasksConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#description TaskTemplateTasks#description}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.taskTemplateId">taskTemplateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#task_template_id TaskTemplateTasks#task_template_id}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.teamId">teamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#team_id TaskTemplateTasks#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#title TaskTemplateTasks#title}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.dueIn">dueIn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#due_in TaskTemplateTasks#due_in}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#id TaskTemplateTasks#id}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#role TaskTemplateTasks#role}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#description TaskTemplateTasks#description}.

---

##### `taskTemplateId`<sup>Required</sup> <a name="taskTemplateId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.taskTemplateId"></a>

```typescript
public readonly taskTemplateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#task_template_id TaskTemplateTasks#task_template_id}.

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#team_id TaskTemplateTasks#team_id}.

---

##### `title`<sup>Required</sup> <a name="title" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#title TaskTemplateTasks#title}.

---

##### `dueIn`<sup>Optional</sup> <a name="dueIn" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.dueIn"></a>

```typescript
public readonly dueIn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#due_in TaskTemplateTasks#due_in}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#id TaskTemplateTasks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `role`<sup>Optional</sup> <a name="role" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#role TaskTemplateTasks#role}.

---



