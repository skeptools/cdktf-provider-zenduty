# `invite` Submodule <a name="`invite` Submodule" id="@skeptools/provider-zenduty.invite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Invite <a name="Invite" id="@skeptools/provider-zenduty.invite.Invite"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/invite zenduty_invite}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.invite.Invite.Initializer"></a>

```typescript
import { invite } from '@skeptools/provider-zenduty'

new invite.Invite(scope: Construct, id: string, config: InviteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-zenduty.invite.InviteConfig">InviteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-zenduty.invite.InviteConfig">InviteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.putEmailAccounts">putEmailAccounts</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.invite.Invite.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@skeptools/provider-zenduty.invite.Invite.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.invite.Invite.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.invite.Invite.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@skeptools/provider-zenduty.invite.Invite.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-zenduty.invite.Invite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@skeptools/provider-zenduty.invite.Invite.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@skeptools/provider-zenduty.invite.Invite.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@skeptools/provider-zenduty.invite.Invite.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@skeptools/provider-zenduty.invite.Invite.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@skeptools/provider-zenduty.invite.Invite.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@skeptools/provider-zenduty.invite.Invite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.invite.Invite.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.invite.Invite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.invite.Invite.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.invite.Invite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.invite.Invite.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.invite.Invite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.invite.Invite.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.invite.Invite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.invite.Invite.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.invite.Invite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.invite.Invite.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.invite.Invite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.invite.Invite.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.invite.Invite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.invite.Invite.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.invite.Invite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.invite.Invite.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.invite.Invite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@skeptools/provider-zenduty.invite.Invite.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@skeptools/provider-zenduty.invite.Invite.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.invite.Invite.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.invite.Invite.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.invite.Invite.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.invite.Invite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@skeptools/provider-zenduty.invite.Invite.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.invite.Invite.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@skeptools/provider-zenduty.invite.Invite.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@skeptools/provider-zenduty.invite.Invite.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@skeptools/provider-zenduty.invite.Invite.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@skeptools/provider-zenduty.invite.Invite.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.invite.Invite.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEmailAccounts` <a name="putEmailAccounts" id="@skeptools/provider-zenduty.invite.Invite.putEmailAccounts"></a>

```typescript
public putEmailAccounts(value: IResolvable | InviteEmailAccounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.invite.Invite.putEmailAccounts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts">InviteEmailAccounts</a>[]

---

##### `resetId` <a name="resetId" id="@skeptools/provider-zenduty.invite.Invite.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@skeptools/provider-zenduty.invite.Invite.isConstruct"></a>

```typescript
import { invite } from '@skeptools/provider-zenduty'

invite.Invite.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.invite.Invite.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@skeptools/provider-zenduty.invite.Invite.isTerraformElement"></a>

```typescript
import { invite } from '@skeptools/provider-zenduty'

invite.Invite.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.invite.Invite.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@skeptools/provider-zenduty.invite.Invite.isTerraformResource"></a>

```typescript
import { invite } from '@skeptools/provider-zenduty'

invite.Invite.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.invite.Invite.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.emailAccounts">emailAccounts</a></code> | <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList">InviteEmailAccountsList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.emailAccountsInput">emailAccountsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts">InviteEmailAccounts</a>[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.teamInput">teamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.team">team</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.invite.Invite.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@skeptools/provider-zenduty.invite.Invite.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.invite.Invite.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@skeptools/provider-zenduty.invite.Invite.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@skeptools/provider-zenduty.invite.Invite.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@skeptools/provider-zenduty.invite.Invite.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@skeptools/provider-zenduty.invite.Invite.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.invite.Invite.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.invite.Invite.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.invite.Invite.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.invite.Invite.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.invite.Invite.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.invite.Invite.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.invite.Invite.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `emailAccounts`<sup>Required</sup> <a name="emailAccounts" id="@skeptools/provider-zenduty.invite.Invite.property.emailAccounts"></a>

```typescript
public readonly emailAccounts: InviteEmailAccountsList;
```

- *Type:* <a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList">InviteEmailAccountsList</a>

---

##### `emailAccountsInput`<sup>Optional</sup> <a name="emailAccountsInput" id="@skeptools/provider-zenduty.invite.Invite.property.emailAccountsInput"></a>

```typescript
public readonly emailAccountsInput: IResolvable | InviteEmailAccounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts">InviteEmailAccounts</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@skeptools/provider-zenduty.invite.Invite.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `teamInput`<sup>Optional</sup> <a name="teamInput" id="@skeptools/provider-zenduty.invite.Invite.property.teamInput"></a>

```typescript
public readonly teamInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.invite.Invite.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `team`<sup>Required</sup> <a name="team" id="@skeptools/provider-zenduty.invite.Invite.property.team"></a>

```typescript
public readonly team: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.invite.Invite.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InviteConfig <a name="InviteConfig" id="@skeptools/provider-zenduty.invite.InviteConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.invite.InviteConfig.Initializer"></a>

```typescript
import { invite } from '@skeptools/provider-zenduty'

const inviteConfig: invite.InviteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteConfig.property.emailAccounts">emailAccounts</a></code> | <code>cdktf.IResolvable \| <a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts">InviteEmailAccounts</a>[]</code> | email_accounts block. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteConfig.property.team">team</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#team Invite#team}. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#id Invite#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.invite.InviteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.invite.InviteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.invite.InviteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.invite.InviteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.invite.InviteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.invite.InviteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.invite.InviteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `emailAccounts`<sup>Required</sup> <a name="emailAccounts" id="@skeptools/provider-zenduty.invite.InviteConfig.property.emailAccounts"></a>

```typescript
public readonly emailAccounts: IResolvable | InviteEmailAccounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts">InviteEmailAccounts</a>[]

email_accounts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#email_accounts Invite#email_accounts}

---

##### `team`<sup>Required</sup> <a name="team" id="@skeptools/provider-zenduty.invite.InviteConfig.property.team"></a>

```typescript
public readonly team: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#team Invite#team}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.invite.InviteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#id Invite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### InviteEmailAccounts <a name="InviteEmailAccounts" id="@skeptools/provider-zenduty.invite.InviteEmailAccounts"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.invite.InviteEmailAccounts.Initializer"></a>

```typescript
import { invite } from '@skeptools/provider-zenduty'

const inviteEmailAccounts: invite.InviteEmailAccounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#email Invite#email}. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts.property.firstName">firstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#first_name Invite#first_name}. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts.property.lastName">lastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#last_name Invite#last_name}. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts.property.role">role</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#role Invite#role}. |

---

##### `email`<sup>Required</sup> <a name="email" id="@skeptools/provider-zenduty.invite.InviteEmailAccounts.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#email Invite#email}.

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@skeptools/provider-zenduty.invite.InviteEmailAccounts.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#first_name Invite#first_name}.

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@skeptools/provider-zenduty.invite.InviteEmailAccounts.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#last_name Invite#last_name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@skeptools/provider-zenduty.invite.InviteEmailAccounts.property.role"></a>

```typescript
public readonly role: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#role Invite#role}.

---

## Classes <a name="Classes" id="Classes"></a>

### InviteEmailAccountsList <a name="InviteEmailAccountsList" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.Initializer"></a>

```typescript
import { invite } from '@skeptools/provider-zenduty'

new invite.InviteEmailAccountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.get"></a>

```typescript
public get(index: number): InviteEmailAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts">InviteEmailAccounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InviteEmailAccounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts">InviteEmailAccounts</a>[]

---


### InviteEmailAccountsOutputReference <a name="InviteEmailAccountsOutputReference" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.Initializer"></a>

```typescript
import { invite } from '@skeptools/provider-zenduty'

new invite.InviteEmailAccountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.roleInput">roleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.role">role</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts">InviteEmailAccounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: number;
```

- *Type:* number

---

##### `email`<sup>Required</sup> <a name="email" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.role"></a>

```typescript
public readonly role: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InviteEmailAccounts;
```

- *Type:* cdktf.IResolvable | <a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts">InviteEmailAccounts</a>

---



