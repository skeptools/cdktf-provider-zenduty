# `provider` Submodule <a name="`provider` Submodule" id="@skeptools/provider-zenduty.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZendutyProvider <a name="ZendutyProvider" id="@skeptools/provider-zenduty.provider.ZendutyProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty zenduty}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import provider

provider.ZendutyProvider(
  scope: Construct,
  id: str,
  token: str,
  alias: str = None,
  base_url: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.token">token</a></code> | <code>str</code> | Your Zenduty API key. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.baseUrl">base_url</a></code> | <code>str</code> | The base url of the Zenduty. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `token`<sup>Required</sup> <a name="token" id="@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.token"></a>

- *Type:* str

Your Zenduty API key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty#token ZendutyProvider#token}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty#alias ZendutyProvider#alias}

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@skeptools/provider-zenduty.provider.ZendutyProvider.Initializer.parameter.baseUrl"></a>

- *Type:* str

The base url of the Zenduty.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty#base_url ZendutyProvider#base_url}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.resetBaseUrl">reset_base_url</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.provider.ZendutyProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@skeptools/provider-zenduty.provider.ZendutyProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.provider.ZendutyProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.provider.ZendutyProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@skeptools/provider-zenduty.provider.ZendutyProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@skeptools/provider-zenduty.provider.ZendutyProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@skeptools/provider-zenduty.provider.ZendutyProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@skeptools/provider-zenduty.provider.ZendutyProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@skeptools/provider-zenduty.provider.ZendutyProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@skeptools/provider-zenduty.provider.ZendutyProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@skeptools/provider-zenduty.provider.ZendutyProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_base_url` <a name="reset_base_url" id="@skeptools/provider-zenduty.provider.ZendutyProvider.resetBaseUrl"></a>

```python
def reset_base_url() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@skeptools/provider-zenduty.provider.ZendutyProvider.isConstruct"></a>

```python
from skeptools_cdktf_provider_zenduty import provider

provider.ZendutyProvider.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@skeptools/provider-zenduty.provider.ZendutyProvider.isTerraformElement"></a>

```python
from skeptools_cdktf_provider_zenduty import provider

provider.ZendutyProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.provider.ZendutyProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@skeptools/provider-zenduty.provider.ZendutyProvider.isTerraformProvider"></a>

```python
from skeptools_cdktf_provider_zenduty import provider

provider.ZendutyProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.provider.ZendutyProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.token">token</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `token`<sup>Optional</sup> <a name="token" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.token"></a>

```python
token: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.provider.ZendutyProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZendutyProviderConfig <a name="ZendutyProviderConfig" id="@skeptools/provider-zenduty.provider.ZendutyProviderConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.provider.ZendutyProviderConfig.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import provider

provider.ZendutyProviderConfig(
  token: str,
  alias: str = None,
  base_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProviderConfig.property.token">token</a></code> | <code>str</code> | Your Zenduty API key. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@skeptools/provider-zenduty.provider.ZendutyProviderConfig.property.baseUrl">base_url</a></code> | <code>str</code> | The base url of the Zenduty. |

---

##### `token`<sup>Required</sup> <a name="token" id="@skeptools/provider-zenduty.provider.ZendutyProviderConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Your Zenduty API key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty#token ZendutyProvider#token}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@skeptools/provider-zenduty.provider.ZendutyProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty#alias ZendutyProvider#alias}

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@skeptools/provider-zenduty.provider.ZendutyProviderConfig.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

The base url of the Zenduty.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty#base_url ZendutyProvider#base_url}

---



