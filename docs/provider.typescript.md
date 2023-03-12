# `provider` Submodule <a name="`provider` Submodule" id="@skeptools/provider-zenduty.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZendutyProvider <a name="ZendutyProvider" id="@skeptools/provider-zenduty.provider.ZendutyProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty zenduty}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer"></a>

```typescript
import { provider } from '@skeptools/provider-zenduty'

new provider.ZendutyProvider(scope: Construct, id: string, config: ZendutyProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProviderConfig">ZendutyProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-zenduty.provider.ZendutyProviderConfig">ZendutyProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.provider.ZendutyProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@skeptools/provider-zenduty.provider.ZendutyProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.provider.ZendutyProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.provider.ZendutyProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@skeptools/provider-zenduty.provider.ZendutyProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-zenduty.provider.ZendutyProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@skeptools/provider-zenduty.provider.ZendutyProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@skeptools/provider-zenduty.provider.ZendutyProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@skeptools/provider-zenduty.provider.ZendutyProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@skeptools/provider-zenduty.provider.ZendutyProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetBaseUrl` <a name="resetBaseUrl" id="@skeptools/provider-zenduty.provider.ZendutyProvider.resetBaseUrl"></a>

```typescript
public resetBaseUrl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@skeptools/provider-zenduty.provider.ZendutyProvider.isConstruct"></a>

```typescript
import { provider } from '@skeptools/provider-zenduty'

provider.ZendutyProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.provider.ZendutyProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@skeptools/provider-zenduty.provider.ZendutyProvider.isTerraformElement"></a>

```typescript
import { provider } from '@skeptools/provider-zenduty'

provider.ZendutyProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.provider.ZendutyProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@skeptools/provider-zenduty.provider.ZendutyProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@skeptools/provider-zenduty'

provider.ZendutyProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.provider.ZendutyProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.baseUrlInput">baseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.baseUrl">baseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.baseUrlInput"></a>

```typescript
public readonly baseUrlInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

---

##### `token`<sup>Optional</sup> <a name="token" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZendutyProviderConfig <a name="ZendutyProviderConfig" id="@skeptools/provider-zenduty.provider.ZendutyProviderConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.provider.ZendutyProviderConfig.Initializer"></a>

```typescript
import { provider } from '@skeptools/provider-zenduty'

const zendutyProviderConfig: provider.ZendutyProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProviderConfig.property.token">token</a></code> | <code>string</code> | Your Zenduty API key. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProviderConfig.property.baseUrl">baseUrl</a></code> | <code>string</code> | The base url of the Zenduty. |

---

##### `token`<sup>Required</sup> <a name="token" id="@skeptools/provider-zenduty.provider.ZendutyProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Your Zenduty API key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty#token ZendutyProvider#token}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@skeptools/provider-zenduty.provider.ZendutyProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty#alias ZendutyProvider#alias}

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@skeptools/provider-zenduty.provider.ZendutyProviderConfig.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

The base url of the Zenduty.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty#base_url ZendutyProvider#base_url}

---



