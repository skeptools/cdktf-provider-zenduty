# `dataZendutyIncidents` Submodule <a name="`dataZendutyIncidents` Submodule" id="@skeptools/provider-zenduty.dataZendutyIncidents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataZendutyIncidents <a name="DataZendutyIncidents" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/d/incidents zenduty_incidents}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer"></a>

```typescript
import { dataZendutyIncidents } from '@skeptools/provider-zenduty'

new dataZendutyIncidents.DataZendutyIncidents(scope: Construct, id: string, config?: DataZendutyIncidentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig">DataZendutyIncidentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig">DataZendutyIncidentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetNumber">resetNumber</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNumber` <a name="resetNumber" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetNumber"></a>

```typescript
public resetNumber(): void
```

##### `resetStatus` <a name="resetStatus" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isConstruct"></a>

```typescript
import { dataZendutyIncidents } from '@skeptools/provider-zenduty'

dataZendutyIncidents.DataZendutyIncidents.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformElement"></a>

```typescript
import { dataZendutyIncidents } from '@skeptools/provider-zenduty'

dataZendutyIncidents.DataZendutyIncidents.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformDataSource"></a>

```typescript
import { dataZendutyIncidents } from '@skeptools/provider-zenduty'

dataZendutyIncidents.DataZendutyIncidents.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.results">results</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList">DataZendutyIncidentsResultsList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.numberInput">numberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.number">number</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.results"></a>

```typescript
public readonly results: DataZendutyIncidentsResultsList;
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList">DataZendutyIncidentsResultsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `numberInput`<sup>Optional</sup> <a name="numberInput" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.numberInput"></a>

```typescript
public readonly numberInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `number`<sup>Required</sup> <a name="number" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.number"></a>

```typescript
public readonly number: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataZendutyIncidentsConfig <a name="DataZendutyIncidentsConfig" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.Initializer"></a>

```typescript
import { dataZendutyIncidents } from '@skeptools/provider-zenduty'

const dataZendutyIncidentsConfig: dataZendutyIncidents.DataZendutyIncidentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#id DataZendutyIncidents#id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.number">number</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#number DataZendutyIncidents#number}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#status DataZendutyIncidents#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#id DataZendutyIncidents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `number`<sup>Optional</sup> <a name="number" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.number"></a>

```typescript
public readonly number: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#number DataZendutyIncidents#number}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#status DataZendutyIncidents#status}.

---

### DataZendutyIncidentsResults <a name="DataZendutyIncidentsResults" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResults"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResults.Initializer"></a>

```typescript
import { dataZendutyIncidents } from '@skeptools/provider-zenduty'

const dataZendutyIncidentsResults: dataZendutyIncidents.DataZendutyIncidentsResults = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataZendutyIncidentsResultsList <a name="DataZendutyIncidentsResultsList" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer"></a>

```typescript
import { dataZendutyIncidents } from '@skeptools/provider-zenduty'

new dataZendutyIncidents.DataZendutyIncidentsResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.get"></a>

```typescript
public get(index: number): DataZendutyIncidentsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataZendutyIncidentsResultsOutputReference <a name="DataZendutyIncidentsResultsOutputReference" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer"></a>

```typescript
import { dataZendutyIncidents } from '@skeptools/provider-zenduty'

new dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.acknowledgedDate">acknowledgedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.assignedTo">assignedTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.assignedToName">assignedToName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.contextWindowEnd">contextWindowEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.contextWindowStart">contextWindowStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.escalationPolicyObjectName">escalationPolicyObjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.escalationPolicyObjectUniqueId">escalationPolicyObjectUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.esccalationPolicy">esccalationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.incidentKey">incidentKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.incidentNumber">incidentNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.mergedWith">mergedWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.resolvedDate">resolvedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObject">serviceObject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectAcknowledgementTimeout">serviceObjectAcknowledgementTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectAutoResolveTimeout">serviceObjectAutoResolveTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCollation">serviceObjectCollation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCollationTime">serviceObjectCollationTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCreatedBy">serviceObjectCreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCreationDate">serviceObjectCreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectDescription">serviceObjectDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectEscalationPolicy">serviceObjectEscalationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectName">serviceObjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectSla">serviceObjectSla</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectStatus">serviceObjectStatus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectSummary">serviceObjectSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTaskTemplate">serviceObjectTaskTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTeam">serviceObjectTeam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTeamPriority">serviceObjectTeamPriority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectUniqueId">serviceObjectUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.sla">sla</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.slaObject">slaObject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.status">status</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.teamPriority">teamPriority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.teamPriorityObject">teamPriorityObject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.urgency">urgency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResults">DataZendutyIncidentsResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acknowledgedDate`<sup>Required</sup> <a name="acknowledgedDate" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.acknowledgedDate"></a>

```typescript
public readonly acknowledgedDate: string;
```

- *Type:* string

---

##### `assignedTo`<sup>Required</sup> <a name="assignedTo" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.assignedTo"></a>

```typescript
public readonly assignedTo: string;
```

- *Type:* string

---

##### `assignedToName`<sup>Required</sup> <a name="assignedToName" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.assignedToName"></a>

```typescript
public readonly assignedToName: string;
```

- *Type:* string

---

##### `contextWindowEnd`<sup>Required</sup> <a name="contextWindowEnd" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.contextWindowEnd"></a>

```typescript
public readonly contextWindowEnd: string;
```

- *Type:* string

---

##### `contextWindowStart`<sup>Required</sup> <a name="contextWindowStart" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.contextWindowStart"></a>

```typescript
public readonly contextWindowStart: string;
```

- *Type:* string

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `escalationPolicyObjectName`<sup>Required</sup> <a name="escalationPolicyObjectName" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.escalationPolicyObjectName"></a>

```typescript
public readonly escalationPolicyObjectName: string;
```

- *Type:* string

---

##### `escalationPolicyObjectUniqueId`<sup>Required</sup> <a name="escalationPolicyObjectUniqueId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.escalationPolicyObjectUniqueId"></a>

```typescript
public readonly escalationPolicyObjectUniqueId: string;
```

- *Type:* string

---

##### `esccalationPolicy`<sup>Required</sup> <a name="esccalationPolicy" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.esccalationPolicy"></a>

```typescript
public readonly esccalationPolicy: string;
```

- *Type:* string

---

##### `incidentKey`<sup>Required</sup> <a name="incidentKey" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.incidentKey"></a>

```typescript
public readonly incidentKey: string;
```

- *Type:* string

---

##### `incidentNumber`<sup>Required</sup> <a name="incidentNumber" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.incidentNumber"></a>

```typescript
public readonly incidentNumber: number;
```

- *Type:* number

---

##### `mergedWith`<sup>Required</sup> <a name="mergedWith" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.mergedWith"></a>

```typescript
public readonly mergedWith: string;
```

- *Type:* string

---

##### `resolvedDate`<sup>Required</sup> <a name="resolvedDate" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.resolvedDate"></a>

```typescript
public readonly resolvedDate: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `serviceObject`<sup>Required</sup> <a name="serviceObject" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObject"></a>

```typescript
public readonly serviceObject: string;
```

- *Type:* string

---

##### `serviceObjectAcknowledgementTimeout`<sup>Required</sup> <a name="serviceObjectAcknowledgementTimeout" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectAcknowledgementTimeout"></a>

```typescript
public readonly serviceObjectAcknowledgementTimeout: number;
```

- *Type:* number

---

##### `serviceObjectAutoResolveTimeout`<sup>Required</sup> <a name="serviceObjectAutoResolveTimeout" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectAutoResolveTimeout"></a>

```typescript
public readonly serviceObjectAutoResolveTimeout: number;
```

- *Type:* number

---

##### `serviceObjectCollation`<sup>Required</sup> <a name="serviceObjectCollation" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCollation"></a>

```typescript
public readonly serviceObjectCollation: number;
```

- *Type:* number

---

##### `serviceObjectCollationTime`<sup>Required</sup> <a name="serviceObjectCollationTime" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCollationTime"></a>

```typescript
public readonly serviceObjectCollationTime: number;
```

- *Type:* number

---

##### `serviceObjectCreatedBy`<sup>Required</sup> <a name="serviceObjectCreatedBy" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCreatedBy"></a>

```typescript
public readonly serviceObjectCreatedBy: string;
```

- *Type:* string

---

##### `serviceObjectCreationDate`<sup>Required</sup> <a name="serviceObjectCreationDate" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCreationDate"></a>

```typescript
public readonly serviceObjectCreationDate: string;
```

- *Type:* string

---

##### `serviceObjectDescription`<sup>Required</sup> <a name="serviceObjectDescription" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectDescription"></a>

```typescript
public readonly serviceObjectDescription: string;
```

- *Type:* string

---

##### `serviceObjectEscalationPolicy`<sup>Required</sup> <a name="serviceObjectEscalationPolicy" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectEscalationPolicy"></a>

```typescript
public readonly serviceObjectEscalationPolicy: string;
```

- *Type:* string

---

##### `serviceObjectName`<sup>Required</sup> <a name="serviceObjectName" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectName"></a>

```typescript
public readonly serviceObjectName: string;
```

- *Type:* string

---

##### `serviceObjectSla`<sup>Required</sup> <a name="serviceObjectSla" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectSla"></a>

```typescript
public readonly serviceObjectSla: string;
```

- *Type:* string

---

##### `serviceObjectStatus`<sup>Required</sup> <a name="serviceObjectStatus" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectStatus"></a>

```typescript
public readonly serviceObjectStatus: number;
```

- *Type:* number

---

##### `serviceObjectSummary`<sup>Required</sup> <a name="serviceObjectSummary" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectSummary"></a>

```typescript
public readonly serviceObjectSummary: string;
```

- *Type:* string

---

##### `serviceObjectTaskTemplate`<sup>Required</sup> <a name="serviceObjectTaskTemplate" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTaskTemplate"></a>

```typescript
public readonly serviceObjectTaskTemplate: string;
```

- *Type:* string

---

##### `serviceObjectTeam`<sup>Required</sup> <a name="serviceObjectTeam" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTeam"></a>

```typescript
public readonly serviceObjectTeam: string;
```

- *Type:* string

---

##### `serviceObjectTeamPriority`<sup>Required</sup> <a name="serviceObjectTeamPriority" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTeamPriority"></a>

```typescript
public readonly serviceObjectTeamPriority: string;
```

- *Type:* string

---

##### `serviceObjectUniqueId`<sup>Required</sup> <a name="serviceObjectUniqueId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectUniqueId"></a>

```typescript
public readonly serviceObjectUniqueId: string;
```

- *Type:* string

---

##### `sla`<sup>Required</sup> <a name="sla" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.sla"></a>

```typescript
public readonly sla: string;
```

- *Type:* string

---

##### `slaObject`<sup>Required</sup> <a name="slaObject" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.slaObject"></a>

```typescript
public readonly slaObject: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.status"></a>

```typescript
public readonly status: number;
```

- *Type:* number

---

##### `summary`<sup>Required</sup> <a name="summary" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `teamPriority`<sup>Required</sup> <a name="teamPriority" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.teamPriority"></a>

```typescript
public readonly teamPriority: string;
```

- *Type:* string

---

##### `teamPriorityObject`<sup>Required</sup> <a name="teamPriorityObject" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.teamPriorityObject"></a>

```typescript
public readonly teamPriorityObject: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `urgency`<sup>Required</sup> <a name="urgency" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.urgency"></a>

```typescript
public readonly urgency: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataZendutyIncidentsResults;
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResults">DataZendutyIncidentsResults</a>

---



