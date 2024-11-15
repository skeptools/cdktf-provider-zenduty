# `globalroutingRule` Submodule <a name="`globalroutingRule` Submodule" id="@skeptools/provider-zenduty.globalroutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalroutingRule <a name="GlobalroutingRule" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule zenduty_globalrouting_rule}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer"></a>

```typescript
import { globalroutingRule } from '@skeptools/provider-zenduty'

new globalroutingRule.GlobalroutingRule(scope: Construct, id: string, config: GlobalroutingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig">GlobalroutingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig">GlobalroutingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.resetRuleJson">resetRuleJson</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActions` <a name="putActions" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.putActions"></a>

```typescript
public putActions(value: IResolvable | GlobalroutingRuleActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.putActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions">GlobalroutingRuleActions</a>[]

---

##### `resetActions` <a name="resetActions" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetId` <a name="resetId" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRuleJson` <a name="resetRuleJson" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.resetRuleJson"></a>

```typescript
public resetRuleJson(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.isConstruct"></a>

```typescript
import { globalroutingRule } from '@skeptools/provider-zenduty'

globalroutingRule.GlobalroutingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.isTerraformElement"></a>

```typescript
import { globalroutingRule } from '@skeptools/provider-zenduty'

globalroutingRule.GlobalroutingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.isTerraformResource"></a>

```typescript
import { globalroutingRule } from '@skeptools/provider-zenduty'

globalroutingRule.GlobalroutingRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.actions">actions</a></code> | <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList">GlobalroutingRuleActionsList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.actionsInput">actionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions">GlobalroutingRuleActions</a>[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.routerIdInput">routerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.ruleJsonInput">ruleJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.routerId">routerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.ruleJson">ruleJson</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.actions"></a>

```typescript
public readonly actions: GlobalroutingRuleActionsList;
```

- *Type:* <a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList">GlobalroutingRuleActionsList</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.actionsInput"></a>

```typescript
public readonly actionsInput: IResolvable | GlobalroutingRuleActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions">GlobalroutingRuleActions</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `routerIdInput`<sup>Optional</sup> <a name="routerIdInput" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.routerIdInput"></a>

```typescript
public readonly routerIdInput: string;
```

- *Type:* string

---

##### `ruleJsonInput`<sup>Optional</sup> <a name="ruleJsonInput" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.ruleJsonInput"></a>

```typescript
public readonly ruleJsonInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `routerId`<sup>Required</sup> <a name="routerId" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.routerId"></a>

```typescript
public readonly routerId: string;
```

- *Type:* string

---

##### `ruleJson`<sup>Required</sup> <a name="ruleJson" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.ruleJson"></a>

```typescript
public readonly ruleJson: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalroutingRuleActions <a name="GlobalroutingRuleActions" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions.Initializer"></a>

```typescript
import { globalroutingRule } from '@skeptools/provider-zenduty'

const globalroutingRuleActions: globalroutingRule.GlobalroutingRuleActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions.property.actionType">actionType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#action_type GlobalroutingRule#action_type}. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions.property.integration">integration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#integration GlobalroutingRule#integration}. |

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions.property.actionType"></a>

```typescript
public readonly actionType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#action_type GlobalroutingRule#action_type}.

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions.property.integration"></a>

```typescript
public readonly integration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#integration GlobalroutingRule#integration}.

---

### GlobalroutingRuleConfig <a name="GlobalroutingRuleConfig" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.Initializer"></a>

```typescript
import { globalroutingRule } from '@skeptools/provider-zenduty'

const globalroutingRuleConfig: globalroutingRule.GlobalroutingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#name GlobalroutingRule#name}. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.routerId">routerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#router_id GlobalroutingRule#router_id}. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.actions">actions</a></code> | <code>cdktf.IResolvable \| <a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions">GlobalroutingRuleActions</a>[]</code> | actions block. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#id GlobalroutingRule#id}. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.ruleJson">ruleJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#rule_json GlobalroutingRule#rule_json}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#name GlobalroutingRule#name}.

---

##### `routerId`<sup>Required</sup> <a name="routerId" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.routerId"></a>

```typescript
public readonly routerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#router_id GlobalroutingRule#router_id}.

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.actions"></a>

```typescript
public readonly actions: IResolvable | GlobalroutingRuleActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions">GlobalroutingRuleActions</a>[]

actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#actions GlobalroutingRule#actions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#id GlobalroutingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ruleJson`<sup>Optional</sup> <a name="ruleJson" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.ruleJson"></a>

```typescript
public readonly ruleJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#rule_json GlobalroutingRule#rule_json}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalroutingRuleActionsList <a name="GlobalroutingRuleActionsList" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.Initializer"></a>

```typescript
import { globalroutingRule } from '@skeptools/provider-zenduty'

new globalroutingRule.GlobalroutingRuleActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.get"></a>

```typescript
public get(index: number): GlobalroutingRuleActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions">GlobalroutingRuleActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlobalroutingRuleActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions">GlobalroutingRuleActions</a>[]

---


### GlobalroutingRuleActionsOutputReference <a name="GlobalroutingRuleActionsOutputReference" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.Initializer"></a>

```typescript
import { globalroutingRule } from '@skeptools/provider-zenduty'

new globalroutingRule.GlobalroutingRuleActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.resetIntegration">resetIntegration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntegration` <a name="resetIntegration" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.resetIntegration"></a>

```typescript
public resetIntegration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.integrationInput">integrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.actionType">actionType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.integration">integration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions">GlobalroutingRuleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.actionTypeInput"></a>

```typescript
public readonly actionTypeInput: number;
```

- *Type:* number

---

##### `integrationInput`<sup>Optional</sup> <a name="integrationInput" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.integrationInput"></a>

```typescript
public readonly integrationInput: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.actionType"></a>

```typescript
public readonly actionType: number;
```

- *Type:* number

---

##### `integration`<sup>Required</sup> <a name="integration" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.integration"></a>

```typescript
public readonly integration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlobalroutingRuleActions;
```

- *Type:* cdktf.IResolvable | <a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions">GlobalroutingRuleActions</a>

---



