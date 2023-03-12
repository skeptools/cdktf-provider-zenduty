# `dataZendutyAlertrules` Submodule <a name="`dataZendutyAlertrules` Submodule" id="@skeptools/provider-zenduty.dataZendutyAlertrules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataZendutyAlertrules <a name="DataZendutyAlertrules" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/d/alertrules zenduty_alertrules}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.Initializer"></a>

```typescript
import { dataZendutyAlertrules } from '@skeptools/provider-zenduty'

new dataZendutyAlertrules.DataZendutyAlertrules(scope: Construct, id: string, config: DataZendutyAlertrulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig">DataZendutyAlertrulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig">DataZendutyAlertrulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.resetAlertRuleId">resetAlertRuleId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAlertRuleId` <a name="resetAlertRuleId" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.resetAlertRuleId"></a>

```typescript
public resetAlertRuleId(): void
```

##### `resetId` <a name="resetId" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.isConstruct"></a>

```typescript
import { dataZendutyAlertrules } from '@skeptools/provider-zenduty'

dataZendutyAlertrules.DataZendutyAlertrules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.isTerraformElement"></a>

```typescript
import { dataZendutyAlertrules } from '@skeptools/provider-zenduty'

dataZendutyAlertrules.DataZendutyAlertrules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.isTerraformDataSource"></a>

```typescript
import { dataZendutyAlertrules } from '@skeptools/provider-zenduty'

dataZendutyAlertrules.DataZendutyAlertrules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.alertrules">alertrules</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList">DataZendutyAlertrulesAlertrulesList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.alertRuleIdInput">alertRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.integrationIdInput">integrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.serviceIdInput">serviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.alertRuleId">alertRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.integrationId">integrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `alertrules`<sup>Required</sup> <a name="alertrules" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.alertrules"></a>

```typescript
public readonly alertrules: DataZendutyAlertrulesAlertrulesList;
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList">DataZendutyAlertrulesAlertrulesList</a>

---

##### `alertRuleIdInput`<sup>Optional</sup> <a name="alertRuleIdInput" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.alertRuleIdInput"></a>

```typescript
public readonly alertRuleIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.integrationIdInput"></a>

```typescript
public readonly integrationIdInput: string;
```

- *Type:* string

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.serviceIdInput"></a>

```typescript
public readonly serviceIdInput: string;
```

- *Type:* string

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `alertRuleId`<sup>Required</sup> <a name="alertRuleId" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.alertRuleId"></a>

```typescript
public readonly alertRuleId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataZendutyAlertrulesAlertrules <a name="DataZendutyAlertrulesAlertrules" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrules"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrules.Initializer"></a>

```typescript
import { dataZendutyAlertrules } from '@skeptools/provider-zenduty'

const dataZendutyAlertrulesAlertrules: dataZendutyAlertrules.DataZendutyAlertrulesAlertrules = { ... }
```


### DataZendutyAlertrulesAlertrulesActions <a name="DataZendutyAlertrulesAlertrulesActions" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActions"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActions.Initializer"></a>

```typescript
import { dataZendutyAlertrules } from '@skeptools/provider-zenduty'

const dataZendutyAlertrulesAlertrulesActions: dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActions = { ... }
```


### DataZendutyAlertrulesConfig <a name="DataZendutyAlertrulesConfig" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.Initializer"></a>

```typescript
import { dataZendutyAlertrules } from '@skeptools/provider-zenduty'

const dataZendutyAlertrulesConfig: dataZendutyAlertrules.DataZendutyAlertrulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.integrationId">integrationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/alertrules#integration_id DataZendutyAlertrules#integration_id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.serviceId">serviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/alertrules#service_id DataZendutyAlertrules#service_id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.teamId">teamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/alertrules#team_id DataZendutyAlertrules#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.alertRuleId">alertRuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/alertrules#alert_rule_id DataZendutyAlertrules#alert_rule_id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/alertrules#id DataZendutyAlertrules#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/alertrules#integration_id DataZendutyAlertrules#integration_id}.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/alertrules#service_id DataZendutyAlertrules#service_id}.

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/alertrules#team_id DataZendutyAlertrules#team_id}.

---

##### `alertRuleId`<sup>Optional</sup> <a name="alertRuleId" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.alertRuleId"></a>

```typescript
public readonly alertRuleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/alertrules#alert_rule_id DataZendutyAlertrules#alert_rule_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/alertrules#id DataZendutyAlertrules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataZendutyAlertrulesAlertrulesActionsList <a name="DataZendutyAlertrulesAlertrulesActionsList" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList.Initializer"></a>

```typescript
import { dataZendutyAlertrules } from '@skeptools/provider-zenduty'

new dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList.get"></a>

```typescript
public get(index: number): DataZendutyAlertrulesAlertrulesActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataZendutyAlertrulesAlertrulesActionsOutputReference <a name="DataZendutyAlertrulesAlertrulesActionsOutputReference" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.Initializer"></a>

```typescript
import { dataZendutyAlertrules } from '@skeptools/provider-zenduty'

new dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.actionType">actionType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.assignTo">assignTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.escalationPolicy">escalationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.sla">sla</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.teamPriority">teamPriority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActions">DataZendutyAlertrulesAlertrulesActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.actionType"></a>

```typescript
public readonly actionType: number;
```

- *Type:* number

---

##### `assignTo`<sup>Required</sup> <a name="assignTo" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.assignTo"></a>

```typescript
public readonly assignTo: string;
```

- *Type:* string

---

##### `escalationPolicy`<sup>Required</sup> <a name="escalationPolicy" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.escalationPolicy"></a>

```typescript
public readonly escalationPolicy: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `sla`<sup>Required</sup> <a name="sla" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.sla"></a>

```typescript
public readonly sla: string;
```

- *Type:* string

---

##### `teamPriority`<sup>Required</sup> <a name="teamPriority" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.teamPriority"></a>

```typescript
public readonly teamPriority: string;
```

- *Type:* string

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataZendutyAlertrulesAlertrulesActions;
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActions">DataZendutyAlertrulesAlertrulesActions</a>

---


### DataZendutyAlertrulesAlertrulesList <a name="DataZendutyAlertrulesAlertrulesList" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList.Initializer"></a>

```typescript
import { dataZendutyAlertrules } from '@skeptools/provider-zenduty'

new dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList.get"></a>

```typescript
public get(index: number): DataZendutyAlertrulesAlertrulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataZendutyAlertrulesAlertrulesOutputReference <a name="DataZendutyAlertrulesAlertrulesOutputReference" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.Initializer"></a>

```typescript
import { dataZendutyAlertrules } from '@skeptools/provider-zenduty'

new dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.property.actions">actions</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList">DataZendutyAlertrulesAlertrulesActionsList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.property.position">position</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.property.ruleJson">ruleJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.property.ruleType">ruleType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.property.stop">stop</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrules">DataZendutyAlertrulesAlertrules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.property.actions"></a>

```typescript
public readonly actions: DataZendutyAlertrulesAlertrulesActionsList;
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesActionsList">DataZendutyAlertrulesAlertrulesActionsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

---

##### `ruleJson`<sup>Required</sup> <a name="ruleJson" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.property.ruleJson"></a>

```typescript
public readonly ruleJson: string;
```

- *Type:* string

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.property.ruleType"></a>

```typescript
public readonly ruleType: number;
```

- *Type:* number

---

##### `stop`<sup>Required</sup> <a name="stop" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.property.stop"></a>

```typescript
public readonly stop: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataZendutyAlertrulesAlertrules;
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyAlertrules.DataZendutyAlertrulesAlertrules">DataZendutyAlertrulesAlertrules</a>

---



