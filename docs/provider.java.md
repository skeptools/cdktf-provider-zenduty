# `provider` Submodule <a name="`provider` Submodule" id="@skeptools/provider-zenduty.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZendutyProvider <a name="ZendutyProvider" id="@skeptools/provider-zenduty.provider.ZendutyProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty zenduty}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.provider.ZendutyProvider;

ZendutyProvider.Builder.create(Construct scope, java.lang.String id)
    .token(java.lang.String)
//  .alias(java.lang.String)
//  .baseUrl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | Your Zenduty API key. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | The base url of the Zenduty. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `token`<sup>Required</sup> <a name="token" id="@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.token"></a>

- *Type:* java.lang.String

Your Zenduty API key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty#token ZendutyProvider#token}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty#alias ZendutyProvider#alias}

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.baseUrl"></a>

- *Type:* java.lang.String

The base url of the Zenduty.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty#base_url ZendutyProvider#base_url}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@skeptools/provider-zenduty.provider.ZendutyProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@skeptools/provider-zenduty.provider.ZendutyProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.provider.ZendutyProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.provider.ZendutyProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@skeptools/provider-zenduty.provider.ZendutyProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-zenduty.provider.ZendutyProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@skeptools/provider-zenduty.provider.ZendutyProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@skeptools/provider-zenduty.provider.ZendutyProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@skeptools/provider-zenduty.provider.ZendutyProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@skeptools/provider-zenduty.provider.ZendutyProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@skeptools/provider-zenduty.provider.ZendutyProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetBaseUrl` <a name="resetBaseUrl" id="@skeptools/provider-zenduty.provider.ZendutyProvider.resetBaseUrl"></a>

```java
public void resetBaseUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@skeptools/provider-zenduty.provider.ZendutyProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.provider.ZendutyProvider;

ZendutyProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@skeptools/provider-zenduty.provider.ZendutyProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.provider.ZendutyProvider;

ZendutyProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.provider.ZendutyProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@skeptools/provider-zenduty.provider.ZendutyProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.provider.ZendutyProvider;

ZendutyProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.provider.ZendutyProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.baseUrlInput">baseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.baseUrlInput"></a>

```java
public java.lang.String getBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

---

##### `token`<sup>Optional</sup> <a name="token" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZendutyProviderConfig <a name="ZendutyProviderConfig" id="@skeptools/provider-zenduty.provider.ZendutyProviderConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.provider.ZendutyProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.zenduty.provider.ZendutyProviderConfig;

ZendutyProviderConfig.builder()
    .token(java.lang.String)
//  .alias(java.lang.String)
//  .baseUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProviderConfig.property.token">token</a></code> | <code>java.lang.String</code> | Your Zenduty API key. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProviderConfig.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | The base url of the Zenduty. |

---

##### `token`<sup>Required</sup> <a name="token" id="@skeptools/provider-zenduty.provider.ZendutyProviderConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Your Zenduty API key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty#token ZendutyProvider#token}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@skeptools/provider-zenduty.provider.ZendutyProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty#alias ZendutyProvider#alias}

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@skeptools/provider-zenduty.provider.ZendutyProviderConfig.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

The base url of the Zenduty.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty#base_url ZendutyProvider#base_url}

---



