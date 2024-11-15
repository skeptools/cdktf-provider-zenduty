# `dataZendutyPriorities` Submodule <a name="`dataZendutyPriorities` Submodule" id="@skeptools/provider-zenduty.dataZendutyPriorities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataZendutyPriorities <a name="DataZendutyPriorities" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/d/priorities zenduty_priorities}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.Initializer"></a>

```typescript
import { dataZendutyPriorities } from '@skeptools/provider-zenduty'

new dataZendutyPriorities.DataZendutyPriorities(scope: Construct, id: string, config: DataZendutyPrioritiesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesConfig">DataZendutyPrioritiesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesConfig">DataZendutyPrioritiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.isConstruct"></a>

```typescript
import { dataZendutyPriorities } from '@skeptools/provider-zenduty'

dataZendutyPriorities.DataZendutyPriorities.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.isTerraformElement"></a>

```typescript
import { dataZendutyPriorities } from '@skeptools/provider-zenduty'

dataZendutyPriorities.DataZendutyPriorities.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.isTerraformDataSource"></a>

```typescript
import { dataZendutyPriorities } from '@skeptools/provider-zenduty'

dataZendutyPriorities.DataZendutyPriorities.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.priorities">priorities</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList">DataZendutyPrioritiesPrioritiesList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `priorities`<sup>Required</sup> <a name="priorities" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.priorities"></a>

```typescript
public readonly priorities: DataZendutyPrioritiesPrioritiesList;
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList">DataZendutyPrioritiesPrioritiesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPriorities.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataZendutyPrioritiesConfig <a name="DataZendutyPrioritiesConfig" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesConfig.Initializer"></a>

```typescript
import { dataZendutyPriorities } from '@skeptools/provider-zenduty'

const dataZendutyPrioritiesConfig: dataZendutyPriorities.DataZendutyPrioritiesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesConfig.property.teamId">teamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/priorities#team_id DataZendutyPriorities#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/priorities#id DataZendutyPriorities#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/priorities#team_id DataZendutyPriorities#team_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/priorities#id DataZendutyPriorities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataZendutyPrioritiesPriorities <a name="DataZendutyPrioritiesPriorities" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPriorities"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPriorities.Initializer"></a>

```typescript
import { dataZendutyPriorities } from '@skeptools/provider-zenduty'

const dataZendutyPrioritiesPriorities: dataZendutyPriorities.DataZendutyPrioritiesPriorities = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataZendutyPrioritiesPrioritiesList <a name="DataZendutyPrioritiesPrioritiesList" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.Initializer"></a>

```typescript
import { dataZendutyPriorities } from '@skeptools/provider-zenduty'

new dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.get"></a>

```typescript
public get(index: number): DataZendutyPrioritiesPrioritiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataZendutyPrioritiesPrioritiesOutputReference <a name="DataZendutyPrioritiesPrioritiesOutputReference" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.Initializer"></a>

```typescript
import { dataZendutyPriorities } from '@skeptools/provider-zenduty'

new dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.property.color">color</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.property.team">team</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPriorities">DataZendutyPrioritiesPriorities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `color`<sup>Required</sup> <a name="color" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.property.color"></a>

```typescript
public readonly color: string;
```

- *Type:* string

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `team`<sup>Required</sup> <a name="team" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.property.team"></a>

```typescript
public readonly team: string;
```

- *Type:* string

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPrioritiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataZendutyPrioritiesPriorities;
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyPriorities.DataZendutyPrioritiesPriorities">DataZendutyPrioritiesPriorities</a>

---



