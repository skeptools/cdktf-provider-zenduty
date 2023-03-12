# `dataZendutyEsp` Submodule <a name="`dataZendutyEsp` Submodule" id="@skeptools/provider-zenduty.dataZendutyEsp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataZendutyEsp <a name="DataZendutyEsp" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/d/esp zenduty_esp}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_esp

dataZendutyEsp.DataZendutyEsp(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  team_id: str,
  esp_id: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#team_id DataZendutyEsp#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.espId">esp_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#esp_id DataZendutyEsp#esp_id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#id DataZendutyEsp#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.teamId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#team_id DataZendutyEsp#team_id}.

---

##### `esp_id`<sup>Optional</sup> <a name="esp_id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.espId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#esp_id DataZendutyEsp#esp_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#id DataZendutyEsp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.resetEspId">reset_esp_id</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_esp_id` <a name="reset_esp_id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.resetEspId"></a>

```python
def reset_esp_id() -> None
```

##### `reset_id` <a name="reset_id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.isConstruct"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_esp

dataZendutyEsp.DataZendutyEsp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.isTerraformElement"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_esp

dataZendutyEsp.DataZendutyEsp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.isTerraformDataSource"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_esp

dataZendutyEsp.DataZendutyEsp.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.escalationPolicies">escalation_policies</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList">DataZendutyEspEscalationPoliciesList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.espIdInput">esp_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.espId">esp_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `escalation_policies`<sup>Required</sup> <a name="escalation_policies" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.escalationPolicies"></a>

```python
escalation_policies: DataZendutyEspEscalationPoliciesList
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList">DataZendutyEspEscalationPoliciesList</a>

---

##### `esp_id_input`<sup>Optional</sup> <a name="esp_id_input" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.espIdInput"></a>

```python
esp_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `esp_id`<sup>Required</sup> <a name="esp_id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.espId"></a>

```python
esp_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEsp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataZendutyEspConfig <a name="DataZendutyEspConfig" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_esp

dataZendutyEsp.DataZendutyEspConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  team_id: str,
  esp_id: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#team_id DataZendutyEsp#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.espId">esp_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#esp_id DataZendutyEsp#esp_id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#id DataZendutyEsp#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#team_id DataZendutyEsp#team_id}.

---

##### `esp_id`<sup>Optional</sup> <a name="esp_id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.espId"></a>

```python
esp_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#esp_id DataZendutyEsp#esp_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#id DataZendutyEsp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataZendutyEspEscalationPolicies <a name="DataZendutyEspEscalationPolicies" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPolicies"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPolicies.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_esp

dataZendutyEsp.DataZendutyEspEscalationPolicies()
```


### DataZendutyEspEscalationPoliciesRules <a name="DataZendutyEspEscalationPoliciesRules" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRules"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRules.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_esp

dataZendutyEsp.DataZendutyEspEscalationPoliciesRules()
```


### DataZendutyEspEscalationPoliciesRulesTargets <a name="DataZendutyEspEscalationPoliciesRulesTargets" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargets"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargets.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_esp

dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargets()
```


## Classes <a name="Classes" id="Classes"></a>

### DataZendutyEspEscalationPoliciesList <a name="DataZendutyEspEscalationPoliciesList" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_esp

dataZendutyEsp.DataZendutyEspEscalationPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataZendutyEspEscalationPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataZendutyEspEscalationPoliciesOutputReference <a name="DataZendutyEspEscalationPoliciesOutputReference" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_esp

dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.globalEp">global_ep</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.moveToNext">move_to_next</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.repeatPolicy">repeat_policy</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.rules">rules</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList">DataZendutyEspEscalationPoliciesRulesList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.team">team</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPolicies">DataZendutyEspEscalationPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `global_ep`<sup>Required</sup> <a name="global_ep" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.globalEp"></a>

```python
global_ep: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `move_to_next`<sup>Required</sup> <a name="move_to_next" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.moveToNext"></a>

```python
move_to_next: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `repeat_policy`<sup>Required</sup> <a name="repeat_policy" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.repeatPolicy"></a>

```python
repeat_policy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.rules"></a>

```python
rules: DataZendutyEspEscalationPoliciesRulesList
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList">DataZendutyEspEscalationPoliciesRulesList</a>

---

##### `summary`<sup>Required</sup> <a name="summary" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `team`<sup>Required</sup> <a name="team" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.team"></a>

```python
team: str
```

- *Type:* str

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataZendutyEspEscalationPolicies
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPolicies">DataZendutyEspEscalationPolicies</a>

---


### DataZendutyEspEscalationPoliciesRulesList <a name="DataZendutyEspEscalationPoliciesRulesList" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_esp

dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataZendutyEspEscalationPoliciesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataZendutyEspEscalationPoliciesRulesOutputReference <a name="DataZendutyEspEscalationPoliciesRulesOutputReference" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_esp

dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.delay">delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.targets">targets</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList">DataZendutyEspEscalationPoliciesRulesTargetsList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRules">DataZendutyEspEscalationPoliciesRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delay`<sup>Required</sup> <a name="delay" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.delay"></a>

```python
delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position`<sup>Required</sup> <a name="position" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets`<sup>Required</sup> <a name="targets" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.targets"></a>

```python
targets: DataZendutyEspEscalationPoliciesRulesTargetsList
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList">DataZendutyEspEscalationPoliciesRulesTargetsList</a>

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataZendutyEspEscalationPoliciesRules
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRules">DataZendutyEspEscalationPoliciesRules</a>

---


### DataZendutyEspEscalationPoliciesRulesTargetsList <a name="DataZendutyEspEscalationPoliciesRulesTargetsList" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_esp

dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataZendutyEspEscalationPoliciesRulesTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataZendutyEspEscalationPoliciesRulesTargetsOutputReference <a name="DataZendutyEspEscalationPoliciesRulesTargetsOutputReference" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_esp

dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.property.targetType">target_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargets">DataZendutyEspEscalationPoliciesRulesTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.property.targetType"></a>

```python
target_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataZendutyEspEscalationPoliciesRulesTargets
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyEsp.DataZendutyEspEscalationPoliciesRulesTargets">DataZendutyEspEscalationPoliciesRulesTargets</a>

---



