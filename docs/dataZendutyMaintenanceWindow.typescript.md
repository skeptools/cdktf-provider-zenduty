# `dataZendutyMaintenanceWindow` Submodule <a name="`dataZendutyMaintenanceWindow` Submodule" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataZendutyMaintenanceWindow <a name="DataZendutyMaintenanceWindow" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/d/maintenance_window zenduty_maintenance_window}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.Initializer"></a>

```typescript
import { dataZendutyMaintenanceWindow } from '@skeptools/provider-zenduty'

new dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow(scope: Construct, id: string, config: DataZendutyMaintenanceWindowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig">DataZendutyMaintenanceWindowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig">DataZendutyMaintenanceWindowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.isConstruct"></a>

```typescript
import { dataZendutyMaintenanceWindow } from '@skeptools/provider-zenduty'

dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.isTerraformElement"></a>

```typescript
import { dataZendutyMaintenanceWindow } from '@skeptools/provider-zenduty'

dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.isTerraformDataSource"></a>

```typescript
import { dataZendutyMaintenanceWindow } from '@skeptools/provider-zenduty'

dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.maintenanceWindows">maintenanceWindows</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList">DataZendutyMaintenanceWindowMaintenanceWindowsList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `maintenanceWindows`<sup>Required</sup> <a name="maintenanceWindows" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.maintenanceWindows"></a>

```typescript
public readonly maintenanceWindows: DataZendutyMaintenanceWindowMaintenanceWindowsList;
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList">DataZendutyMaintenanceWindowMaintenanceWindowsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataZendutyMaintenanceWindowConfig <a name="DataZendutyMaintenanceWindowConfig" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig.Initializer"></a>

```typescript
import { dataZendutyMaintenanceWindow } from '@skeptools/provider-zenduty'

const dataZendutyMaintenanceWindowConfig: dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig.property.teamId">teamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/maintenance_window#team_id DataZendutyMaintenanceWindow#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/maintenance_window#id DataZendutyMaintenanceWindow#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/maintenance_window#team_id DataZendutyMaintenanceWindow#team_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/maintenance_window#id DataZendutyMaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataZendutyMaintenanceWindowMaintenanceWindows <a name="DataZendutyMaintenanceWindowMaintenanceWindows" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindows"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindows.Initializer"></a>

```typescript
import { dataZendutyMaintenanceWindow } from '@skeptools/provider-zenduty'

const dataZendutyMaintenanceWindowMaintenanceWindows: dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindows = { ... }
```


### DataZendutyMaintenanceWindowMaintenanceWindowsServices <a name="DataZendutyMaintenanceWindowMaintenanceWindowsServices" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServices"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServices.Initializer"></a>

```typescript
import { dataZendutyMaintenanceWindow } from '@skeptools/provider-zenduty'

const dataZendutyMaintenanceWindowMaintenanceWindowsServices: dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServices = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataZendutyMaintenanceWindowMaintenanceWindowsList <a name="DataZendutyMaintenanceWindowMaintenanceWindowsList" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.Initializer"></a>

```typescript
import { dataZendutyMaintenanceWindow } from '@skeptools/provider-zenduty'

new dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.get"></a>

```typescript
public get(index: number): DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference <a name="DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.Initializer"></a>

```typescript
import { dataZendutyMaintenanceWindow } from '@skeptools/provider-zenduty'

new dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.repeatInterval">repeatInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.repeatUntil">repeatUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.services">services</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList">DataZendutyMaintenanceWindowMaintenanceWindowsServicesList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindows">DataZendutyMaintenanceWindowMaintenanceWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `repeatInterval`<sup>Required</sup> <a name="repeatInterval" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.repeatInterval"></a>

```typescript
public readonly repeatInterval: number;
```

- *Type:* number

---

##### `repeatUntil`<sup>Required</sup> <a name="repeatUntil" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.repeatUntil"></a>

```typescript
public readonly repeatUntil: string;
```

- *Type:* string

---

##### `services`<sup>Required</sup> <a name="services" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.services"></a>

```typescript
public readonly services: DataZendutyMaintenanceWindowMaintenanceWindowsServicesList;
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList">DataZendutyMaintenanceWindowMaintenanceWindowsServicesList</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataZendutyMaintenanceWindowMaintenanceWindows;
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindows">DataZendutyMaintenanceWindowMaintenanceWindows</a>

---


### DataZendutyMaintenanceWindowMaintenanceWindowsServicesList <a name="DataZendutyMaintenanceWindowMaintenanceWindowsServicesList" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.Initializer"></a>

```typescript
import { dataZendutyMaintenanceWindow } from '@skeptools/provider-zenduty'

new dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.get"></a>

```typescript
public get(index: number): DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference <a name="DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.Initializer"></a>

```typescript
import { dataZendutyMaintenanceWindow } from '@skeptools/provider-zenduty'

new dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServices">DataZendutyMaintenanceWindowMaintenanceWindowsServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataZendutyMaintenanceWindowMaintenanceWindowsServices;
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyMaintenanceWindow.DataZendutyMaintenanceWindowMaintenanceWindowsServices">DataZendutyMaintenanceWindowMaintenanceWindowsServices</a>

---



