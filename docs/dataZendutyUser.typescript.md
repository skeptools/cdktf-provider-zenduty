# `dataZendutyUser` Submodule <a name="`dataZendutyUser` Submodule" id="@skeptools/provider-zenduty.dataZendutyUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataZendutyUser <a name="DataZendutyUser" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/d/user zenduty_user}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.Initializer"></a>

```typescript
import { dataZendutyUser } from '@skeptools/provider-zenduty'

new dataZendutyUser.DataZendutyUser(scope: Construct, id: string, config: DataZendutyUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserConfig">DataZendutyUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserConfig">DataZendutyUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.isConstruct"></a>

```typescript
import { dataZendutyUser } from '@skeptools/provider-zenduty'

dataZendutyUser.DataZendutyUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.isTerraformElement"></a>

```typescript
import { dataZendutyUser } from '@skeptools/provider-zenduty'

dataZendutyUser.DataZendutyUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.isTerraformDataSource"></a>

```typescript
import { dataZendutyUser } from '@skeptools/provider-zenduty'

dataZendutyUser.DataZendutyUser.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.users">users</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList">DataZendutyUserUsersList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `users`<sup>Required</sup> <a name="users" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.users"></a>

```typescript
public readonly users: DataZendutyUserUsersList;
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList">DataZendutyUserUsersList</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataZendutyUserConfig <a name="DataZendutyUserConfig" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserConfig.Initializer"></a>

```typescript
import { dataZendutyUser } from '@skeptools/provider-zenduty'

const dataZendutyUserConfig: dataZendutyUser.DataZendutyUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserConfig.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/user#email DataZendutyUser#email}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/user#id DataZendutyUser#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `email`<sup>Required</sup> <a name="email" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/user#email DataZendutyUser#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/user#id DataZendutyUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataZendutyUserUsers <a name="DataZendutyUserUsers" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsers"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsers.Initializer"></a>

```typescript
import { dataZendutyUser } from '@skeptools/provider-zenduty'

const dataZendutyUserUsers: dataZendutyUser.DataZendutyUserUsers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataZendutyUserUsersList <a name="DataZendutyUserUsersList" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.Initializer"></a>

```typescript
import { dataZendutyUser } from '@skeptools/provider-zenduty'

new dataZendutyUser.DataZendutyUserUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.get"></a>

```typescript
public get(index: number): DataZendutyUserUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataZendutyUserUsersOutputReference <a name="DataZendutyUserUsersOutputReference" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.Initializer"></a>

```typescript
import { dataZendutyUser } from '@skeptools/provider-zenduty'

new dataZendutyUser.DataZendutyUserUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsers">DataZendutyUserUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataZendutyUserUsers;
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyUser.DataZendutyUserUsers">DataZendutyUserUsers</a>

---



