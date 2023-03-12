# `schedules` Submodule <a name="`schedules` Submodule" id="@skeptools/provider-zenduty.schedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Schedules <a name="Schedules" id="@skeptools/provider-zenduty.schedules.Schedules"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/schedules zenduty_schedules}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.schedules.Schedules.Initializer"></a>

```typescript
import { schedules } from '@skeptools/provider-zenduty'

new schedules.Schedules(scope: Construct, id: string, config: SchedulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesConfig">SchedulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.schedules.Schedules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.schedules.Schedules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@skeptools/provider-zenduty.schedules.Schedules.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-zenduty.schedules.SchedulesConfig">SchedulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.putLayers">putLayers</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.resetLayers">resetLayers</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.resetOverrides">resetOverrides</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.resetSummary">resetSummary</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.schedules.Schedules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@skeptools/provider-zenduty.schedules.Schedules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.schedules.Schedules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.schedules.Schedules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@skeptools/provider-zenduty.schedules.Schedules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-zenduty.schedules.Schedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@skeptools/provider-zenduty.schedules.Schedules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@skeptools/provider-zenduty.schedules.Schedules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@skeptools/provider-zenduty.schedules.Schedules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.schedules.Schedules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.Schedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.schedules.Schedules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.Schedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.schedules.Schedules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.Schedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.schedules.Schedules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.Schedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.schedules.Schedules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.Schedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.schedules.Schedules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.Schedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.schedules.Schedules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.Schedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.schedules.Schedules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.Schedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.schedules.Schedules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.Schedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.schedules.Schedules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.Schedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putLayers` <a name="putLayers" id="@skeptools/provider-zenduty.schedules.Schedules.putLayers"></a>

```typescript
public putLayers(value: IResolvable | SchedulesLayers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.schedules.Schedules.putLayers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@skeptools/provider-zenduty.schedules.SchedulesLayers">SchedulesLayers</a>[]

---

##### `putOverrides` <a name="putOverrides" id="@skeptools/provider-zenduty.schedules.Schedules.putOverrides"></a>

```typescript
public putOverrides(value: IResolvable | SchedulesOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.schedules.Schedules.putOverrides.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@skeptools/provider-zenduty.schedules.SchedulesOverrides">SchedulesOverrides</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@skeptools/provider-zenduty.schedules.Schedules.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@skeptools/provider-zenduty.schedules.Schedules.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLayers` <a name="resetLayers" id="@skeptools/provider-zenduty.schedules.Schedules.resetLayers"></a>

```typescript
public resetLayers(): void
```

##### `resetOverrides` <a name="resetOverrides" id="@skeptools/provider-zenduty.schedules.Schedules.resetOverrides"></a>

```typescript
public resetOverrides(): void
```

##### `resetSummary` <a name="resetSummary" id="@skeptools/provider-zenduty.schedules.Schedules.resetSummary"></a>

```typescript
public resetSummary(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@skeptools/provider-zenduty.schedules.Schedules.isConstruct"></a>

```typescript
import { schedules } from '@skeptools/provider-zenduty'

schedules.Schedules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.schedules.Schedules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@skeptools/provider-zenduty.schedules.Schedules.isTerraformElement"></a>

```typescript
import { schedules } from '@skeptools/provider-zenduty'

schedules.Schedules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.schedules.Schedules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@skeptools/provider-zenduty.schedules.Schedules.isTerraformResource"></a>

```typescript
import { schedules } from '@skeptools/provider-zenduty'

schedules.Schedules.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.schedules.Schedules.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.layers">layers</a></code> | <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersList">SchedulesLayersList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.overrides">overrides</a></code> | <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesList">SchedulesOverridesList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.layersInput">layersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@skeptools/provider-zenduty.schedules.SchedulesLayers">SchedulesLayers</a>[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.overridesInput">overridesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@skeptools/provider-zenduty.schedules.SchedulesOverrides">SchedulesOverrides</a>[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.summaryInput">summaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.schedules.Schedules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@skeptools/provider-zenduty.schedules.Schedules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.schedules.Schedules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@skeptools/provider-zenduty.schedules.Schedules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@skeptools/provider-zenduty.schedules.Schedules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@skeptools/provider-zenduty.schedules.Schedules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@skeptools/provider-zenduty.schedules.Schedules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.schedules.Schedules.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.schedules.Schedules.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.schedules.Schedules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.schedules.Schedules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.schedules.Schedules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.schedules.Schedules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.schedules.Schedules.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `layers`<sup>Required</sup> <a name="layers" id="@skeptools/provider-zenduty.schedules.Schedules.property.layers"></a>

```typescript
public readonly layers: SchedulesLayersList;
```

- *Type:* <a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersList">SchedulesLayersList</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@skeptools/provider-zenduty.schedules.Schedules.property.overrides"></a>

```typescript
public readonly overrides: SchedulesOverridesList;
```

- *Type:* <a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesList">SchedulesOverridesList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@skeptools/provider-zenduty.schedules.Schedules.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@skeptools/provider-zenduty.schedules.Schedules.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `layersInput`<sup>Optional</sup> <a name="layersInput" id="@skeptools/provider-zenduty.schedules.Schedules.property.layersInput"></a>

```typescript
public readonly layersInput: IResolvable | SchedulesLayers[];
```

- *Type:* cdktf.IResolvable | <a href="#@skeptools/provider-zenduty.schedules.SchedulesLayers">SchedulesLayers</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@skeptools/provider-zenduty.schedules.Schedules.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="@skeptools/provider-zenduty.schedules.Schedules.property.overridesInput"></a>

```typescript
public readonly overridesInput: IResolvable | SchedulesOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@skeptools/provider-zenduty.schedules.SchedulesOverrides">SchedulesOverrides</a>[]

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@skeptools/provider-zenduty.schedules.Schedules.property.summaryInput"></a>

```typescript
public readonly summaryInput: string;
```

- *Type:* string

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@skeptools/provider-zenduty.schedules.Schedules.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@skeptools/provider-zenduty.schedules.Schedules.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@skeptools/provider-zenduty.schedules.Schedules.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.schedules.Schedules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-zenduty.schedules.Schedules.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@skeptools/provider-zenduty.schedules.Schedules.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@skeptools/provider-zenduty.schedules.Schedules.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@skeptools/provider-zenduty.schedules.Schedules.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.Schedules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.schedules.Schedules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SchedulesConfig <a name="SchedulesConfig" id="@skeptools/provider-zenduty.schedules.SchedulesConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.schedules.SchedulesConfig.Initializer"></a>

```typescript
import { schedules } from '@skeptools/provider-zenduty'

const schedulesConfig: schedules.SchedulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#name Schedules#name}. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesConfig.property.teamId">teamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#team_id Schedules#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesConfig.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#time_zone Schedules#time_zone}. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#description Schedules#description}. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#id Schedules#id}. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesConfig.property.layers">layers</a></code> | <code>cdktf.IResolvable \| <a href="#@skeptools/provider-zenduty.schedules.SchedulesLayers">SchedulesLayers</a>[]</code> | layers block. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesConfig.property.overrides">overrides</a></code> | <code>cdktf.IResolvable \| <a href="#@skeptools/provider-zenduty.schedules.SchedulesOverrides">SchedulesOverrides</a>[]</code> | overrides block. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesConfig.property.summary">summary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#summary Schedules#summary}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.schedules.SchedulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.schedules.SchedulesConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.schedules.SchedulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.schedules.SchedulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.schedules.SchedulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.schedules.SchedulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.schedules.SchedulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-zenduty.schedules.SchedulesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#name Schedules#name}.

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@skeptools/provider-zenduty.schedules.SchedulesConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#team_id Schedules#team_id}.

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@skeptools/provider-zenduty.schedules.SchedulesConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#time_zone Schedules#time_zone}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@skeptools/provider-zenduty.schedules.SchedulesConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#description Schedules#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.schedules.SchedulesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#id Schedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `layers`<sup>Optional</sup> <a name="layers" id="@skeptools/provider-zenduty.schedules.SchedulesConfig.property.layers"></a>

```typescript
public readonly layers: IResolvable | SchedulesLayers[];
```

- *Type:* cdktf.IResolvable | <a href="#@skeptools/provider-zenduty.schedules.SchedulesLayers">SchedulesLayers</a>[]

layers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#layers Schedules#layers}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@skeptools/provider-zenduty.schedules.SchedulesConfig.property.overrides"></a>

```typescript
public readonly overrides: IResolvable | SchedulesOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@skeptools/provider-zenduty.schedules.SchedulesOverrides">SchedulesOverrides</a>[]

overrides block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#overrides Schedules#overrides}

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@skeptools/provider-zenduty.schedules.SchedulesConfig.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#summary Schedules#summary}.

---

### SchedulesLayers <a name="SchedulesLayers" id="@skeptools/provider-zenduty.schedules.SchedulesLayers"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.schedules.SchedulesLayers.Initializer"></a>

```typescript
import { schedules } from '@skeptools/provider-zenduty'

const schedulesLayers: schedules.SchedulesLayers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayers.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#name Schedules#name}. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayers.property.rotationEndTime">rotationEndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#rotation_end_time Schedules#rotation_end_time}. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayers.property.rotationStartTime">rotationStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#rotation_start_time Schedules#rotation_start_time}. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayers.property.shiftLength">shiftLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#shift_length Schedules#shift_length}. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayers.property.users">users</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#users Schedules#users}. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayers.property.restrictions">restrictions</a></code> | <code>cdktf.IResolvable \| <a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictions">SchedulesLayersRestrictions</a>[]</code> | restrictions block. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayers.property.restrictionType">restrictionType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#restriction_type Schedules#restriction_type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-zenduty.schedules.SchedulesLayers.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#name Schedules#name}.

---

##### `rotationEndTime`<sup>Required</sup> <a name="rotationEndTime" id="@skeptools/provider-zenduty.schedules.SchedulesLayers.property.rotationEndTime"></a>

```typescript
public readonly rotationEndTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#rotation_end_time Schedules#rotation_end_time}.

---

##### `rotationStartTime`<sup>Required</sup> <a name="rotationStartTime" id="@skeptools/provider-zenduty.schedules.SchedulesLayers.property.rotationStartTime"></a>

```typescript
public readonly rotationStartTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#rotation_start_time Schedules#rotation_start_time}.

---

##### `shiftLength`<sup>Required</sup> <a name="shiftLength" id="@skeptools/provider-zenduty.schedules.SchedulesLayers.property.shiftLength"></a>

```typescript
public readonly shiftLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#shift_length Schedules#shift_length}.

---

##### `users`<sup>Required</sup> <a name="users" id="@skeptools/provider-zenduty.schedules.SchedulesLayers.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#users Schedules#users}.

---

##### `restrictions`<sup>Optional</sup> <a name="restrictions" id="@skeptools/provider-zenduty.schedules.SchedulesLayers.property.restrictions"></a>

```typescript
public readonly restrictions: IResolvable | SchedulesLayersRestrictions[];
```

- *Type:* cdktf.IResolvable | <a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictions">SchedulesLayersRestrictions</a>[]

restrictions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#restrictions Schedules#restrictions}

---

##### `restrictionType`<sup>Optional</sup> <a name="restrictionType" id="@skeptools/provider-zenduty.schedules.SchedulesLayers.property.restrictionType"></a>

```typescript
public readonly restrictionType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#restriction_type Schedules#restriction_type}.

---

### SchedulesLayersRestrictions <a name="SchedulesLayersRestrictions" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictions"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictions.Initializer"></a>

```typescript
import { schedules } from '@skeptools/provider-zenduty'

const schedulesLayersRestrictions: schedules.SchedulesLayersRestrictions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictions.property.duration">duration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#duration Schedules#duration}. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictions.property.startDayOfWeek">startDayOfWeek</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#start_day_of_week Schedules#start_day_of_week}. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictions.property.startTimeOfDay">startTimeOfDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#start_time_of_day Schedules#start_time_of_day}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictions.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#duration Schedules#duration}.

---

##### `startDayOfWeek`<sup>Required</sup> <a name="startDayOfWeek" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictions.property.startDayOfWeek"></a>

```typescript
public readonly startDayOfWeek: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#start_day_of_week Schedules#start_day_of_week}.

---

##### `startTimeOfDay`<sup>Required</sup> <a name="startTimeOfDay" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictions.property.startTimeOfDay"></a>

```typescript
public readonly startTimeOfDay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#start_time_of_day Schedules#start_time_of_day}.

---

### SchedulesOverrides <a name="SchedulesOverrides" id="@skeptools/provider-zenduty.schedules.SchedulesOverrides"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.schedules.SchedulesOverrides.Initializer"></a>

```typescript
import { schedules } from '@skeptools/provider-zenduty'

const schedulesOverrides: schedules.SchedulesOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverrides.property.endTime">endTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#end_time Schedules#end_time}. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverrides.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#name Schedules#name}. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverrides.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#start_time Schedules#start_time}. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverrides.property.user">user</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#user Schedules#user}. |

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@skeptools/provider-zenduty.schedules.SchedulesOverrides.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#end_time Schedules#end_time}.

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-zenduty.schedules.SchedulesOverrides.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#name Schedules#name}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@skeptools/provider-zenduty.schedules.SchedulesOverrides.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#start_time Schedules#start_time}.

---

##### `user`<sup>Required</sup> <a name="user" id="@skeptools/provider-zenduty.schedules.SchedulesOverrides.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#user Schedules#user}.

---

## Classes <a name="Classes" id="Classes"></a>

### SchedulesLayersList <a name="SchedulesLayersList" id="@skeptools/provider-zenduty.schedules.SchedulesLayersList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.schedules.SchedulesLayersList.Initializer"></a>

```typescript
import { schedules } from '@skeptools/provider-zenduty'

new schedules.SchedulesLayersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.schedules.SchedulesLayersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@skeptools/provider-zenduty.schedules.SchedulesLayersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.schedules.SchedulesLayersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.schedules.SchedulesLayersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.schedules.SchedulesLayersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.schedules.SchedulesLayersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.schedules.SchedulesLayersList.get"></a>

```typescript
public get(index: number): SchedulesLayersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.schedules.SchedulesLayersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@skeptools/provider-zenduty.schedules.SchedulesLayers">SchedulesLayers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.schedules.SchedulesLayersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.schedules.SchedulesLayersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@skeptools/provider-zenduty.schedules.SchedulesLayersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchedulesLayers[];
```

- *Type:* cdktf.IResolvable | <a href="#@skeptools/provider-zenduty.schedules.SchedulesLayers">SchedulesLayers</a>[]

---


### SchedulesLayersOutputReference <a name="SchedulesLayersOutputReference" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.Initializer"></a>

```typescript
import { schedules } from '@skeptools/provider-zenduty'

new schedules.SchedulesLayersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.putRestrictions">putRestrictions</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.resetRestrictions">resetRestrictions</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.resetRestrictionType">resetRestrictionType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRestrictions` <a name="putRestrictions" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.putRestrictions"></a>

```typescript
public putRestrictions(value: IResolvable | SchedulesLayersRestrictions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.putRestrictions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictions">SchedulesLayersRestrictions</a>[]

---

##### `resetRestrictions` <a name="resetRestrictions" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.resetRestrictions"></a>

```typescript
public resetRestrictions(): void
```

##### `resetRestrictionType` <a name="resetRestrictionType" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.resetRestrictionType"></a>

```typescript
public resetRestrictionType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.restrictions">restrictions</a></code> | <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList">SchedulesLayersRestrictionsList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.restrictionsInput">restrictionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictions">SchedulesLayersRestrictions</a>[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.restrictionTypeInput">restrictionTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.rotationEndTimeInput">rotationEndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.rotationStartTimeInput">rotationStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.shiftLengthInput">shiftLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.usersInput">usersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.restrictionType">restrictionType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.rotationEndTime">rotationEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.rotationStartTime">rotationStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.shiftLength">shiftLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.users">users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayers">SchedulesLayers</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.restrictions"></a>

```typescript
public readonly restrictions: SchedulesLayersRestrictionsList;
```

- *Type:* <a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList">SchedulesLayersRestrictionsList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `restrictionsInput`<sup>Optional</sup> <a name="restrictionsInput" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.restrictionsInput"></a>

```typescript
public readonly restrictionsInput: IResolvable | SchedulesLayersRestrictions[];
```

- *Type:* cdktf.IResolvable | <a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictions">SchedulesLayersRestrictions</a>[]

---

##### `restrictionTypeInput`<sup>Optional</sup> <a name="restrictionTypeInput" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.restrictionTypeInput"></a>

```typescript
public readonly restrictionTypeInput: number;
```

- *Type:* number

---

##### `rotationEndTimeInput`<sup>Optional</sup> <a name="rotationEndTimeInput" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.rotationEndTimeInput"></a>

```typescript
public readonly rotationEndTimeInput: string;
```

- *Type:* string

---

##### `rotationStartTimeInput`<sup>Optional</sup> <a name="rotationStartTimeInput" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.rotationStartTimeInput"></a>

```typescript
public readonly rotationStartTimeInput: string;
```

- *Type:* string

---

##### `shiftLengthInput`<sup>Optional</sup> <a name="shiftLengthInput" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.shiftLengthInput"></a>

```typescript
public readonly shiftLengthInput: number;
```

- *Type:* number

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.usersInput"></a>

```typescript
public readonly usersInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `restrictionType`<sup>Required</sup> <a name="restrictionType" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.restrictionType"></a>

```typescript
public readonly restrictionType: number;
```

- *Type:* number

---

##### `rotationEndTime`<sup>Required</sup> <a name="rotationEndTime" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.rotationEndTime"></a>

```typescript
public readonly rotationEndTime: string;
```

- *Type:* string

---

##### `rotationStartTime`<sup>Required</sup> <a name="rotationStartTime" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.rotationStartTime"></a>

```typescript
public readonly rotationStartTime: string;
```

- *Type:* string

---

##### `shiftLength`<sup>Required</sup> <a name="shiftLength" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.shiftLength"></a>

```typescript
public readonly shiftLength: number;
```

- *Type:* number

---

##### `users`<sup>Required</sup> <a name="users" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@skeptools/provider-zenduty.schedules.SchedulesLayersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SchedulesLayers | IResolvable;
```

- *Type:* <a href="#@skeptools/provider-zenduty.schedules.SchedulesLayers">SchedulesLayers</a> | cdktf.IResolvable

---


### SchedulesLayersRestrictionsList <a name="SchedulesLayersRestrictionsList" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.Initializer"></a>

```typescript
import { schedules } from '@skeptools/provider-zenduty'

new schedules.SchedulesLayersRestrictionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.get"></a>

```typescript
public get(index: number): SchedulesLayersRestrictionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictions">SchedulesLayersRestrictions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchedulesLayersRestrictions[];
```

- *Type:* cdktf.IResolvable | <a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictions">SchedulesLayersRestrictions</a>[]

---


### SchedulesLayersRestrictionsOutputReference <a name="SchedulesLayersRestrictionsOutputReference" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.Initializer"></a>

```typescript
import { schedules } from '@skeptools/provider-zenduty'

new schedules.SchedulesLayersRestrictionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.property.durationInput">durationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.property.startDayOfWeekInput">startDayOfWeekInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.property.startTimeOfDayInput">startTimeOfDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.property.startDayOfWeek">startDayOfWeek</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.property.startTimeOfDay">startTimeOfDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictions">SchedulesLayersRestrictions</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* number

---

##### `startDayOfWeekInput`<sup>Optional</sup> <a name="startDayOfWeekInput" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.property.startDayOfWeekInput"></a>

```typescript
public readonly startDayOfWeekInput: number;
```

- *Type:* number

---

##### `startTimeOfDayInput`<sup>Optional</sup> <a name="startTimeOfDayInput" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.property.startTimeOfDayInput"></a>

```typescript
public readonly startTimeOfDayInput: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `startDayOfWeek`<sup>Required</sup> <a name="startDayOfWeek" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.property.startDayOfWeek"></a>

```typescript
public readonly startDayOfWeek: number;
```

- *Type:* number

---

##### `startTimeOfDay`<sup>Required</sup> <a name="startTimeOfDay" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.property.startTimeOfDay"></a>

```typescript
public readonly startTimeOfDay: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SchedulesLayersRestrictions | IResolvable;
```

- *Type:* <a href="#@skeptools/provider-zenduty.schedules.SchedulesLayersRestrictions">SchedulesLayersRestrictions</a> | cdktf.IResolvable

---


### SchedulesOverridesList <a name="SchedulesOverridesList" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesList.Initializer"></a>

```typescript
import { schedules } from '@skeptools/provider-zenduty'

new schedules.SchedulesOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesList.get"></a>

```typescript
public get(index: number): SchedulesOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@skeptools/provider-zenduty.schedules.SchedulesOverrides">SchedulesOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchedulesOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@skeptools/provider-zenduty.schedules.SchedulesOverrides">SchedulesOverrides</a>[]

---


### SchedulesOverridesOutputReference <a name="SchedulesOverridesOutputReference" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.Initializer"></a>

```typescript
import { schedules } from '@skeptools/provider-zenduty'

new schedules.SchedulesOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@skeptools/provider-zenduty.schedules.SchedulesOverrides">SchedulesOverrides</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@skeptools/provider-zenduty.schedules.SchedulesOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SchedulesOverrides | IResolvable;
```

- *Type:* <a href="#@skeptools/provider-zenduty.schedules.SchedulesOverrides">SchedulesOverrides</a> | cdktf.IResolvable

---



