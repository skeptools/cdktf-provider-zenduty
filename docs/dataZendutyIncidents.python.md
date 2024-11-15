# `dataZendutyIncidents` Submodule <a name="`dataZendutyIncidents` Submodule" id="@skeptools/provider-zenduty.dataZendutyIncidents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataZendutyIncidents <a name="DataZendutyIncidents" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/d/incidents zenduty_incidents}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_incidents

dataZendutyIncidents.DataZendutyIncidents(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  number: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#id DataZendutyIncidents#id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.number">number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#number DataZendutyIncidents#number}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#status DataZendutyIncidents#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#id DataZendutyIncidents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `number`<sup>Optional</sup> <a name="number" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.number"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#number DataZendutyIncidents#number}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#status DataZendutyIncidents#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetNumber">reset_number</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_number` <a name="reset_number" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetNumber"></a>

```python
def reset_number() -> None
```

##### `reset_status` <a name="reset_status" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isConstruct"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_incidents

dataZendutyIncidents.DataZendutyIncidents.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformElement"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_incidents

dataZendutyIncidents.DataZendutyIncidents.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformDataSource"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_incidents

dataZendutyIncidents.DataZendutyIncidents.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.results">results</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList">DataZendutyIncidentsResultsList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.numberInput">number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.number">number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.results"></a>

```python
results: DataZendutyIncidentsResultsList
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList">DataZendutyIncidentsResultsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `number_input`<sup>Optional</sup> <a name="number_input" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.numberInput"></a>

```python
number_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `number`<sup>Required</sup> <a name="number" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.number"></a>

```python
number: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidents.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataZendutyIncidentsConfig <a name="DataZendutyIncidentsConfig" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_incidents

dataZendutyIncidents.DataZendutyIncidentsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  number: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#id DataZendutyIncidents#id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.number">number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#number DataZendutyIncidents#number}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#status DataZendutyIncidents#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#id DataZendutyIncidents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `number`<sup>Optional</sup> <a name="number" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.number"></a>

```python
number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#number DataZendutyIncidents#number}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#status DataZendutyIncidents#status}.

---

### DataZendutyIncidentsResults <a name="DataZendutyIncidentsResults" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResults"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResults.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_incidents

dataZendutyIncidents.DataZendutyIncidentsResults()
```


## Classes <a name="Classes" id="Classes"></a>

### DataZendutyIncidentsResultsList <a name="DataZendutyIncidentsResultsList" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_incidents

dataZendutyIncidents.DataZendutyIncidentsResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataZendutyIncidentsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataZendutyIncidentsResultsOutputReference <a name="DataZendutyIncidentsResultsOutputReference" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_incidents

dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.acknowledgedDate">acknowledged_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.assignedTo">assigned_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.assignedToName">assigned_to_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.contextWindowEnd">context_window_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.contextWindowStart">context_window_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.escalationPolicyObjectName">escalation_policy_object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.escalationPolicyObjectUniqueId">escalation_policy_object_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.esccalationPolicy">esccalation_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.incidentKey">incident_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.incidentNumber">incident_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.mergedWith">merged_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.resolvedDate">resolved_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObject">service_object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectAcknowledgementTimeout">service_object_acknowledgement_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectAutoResolveTimeout">service_object_auto_resolve_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCollation">service_object_collation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCollationTime">service_object_collation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCreatedBy">service_object_created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCreationDate">service_object_creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectDescription">service_object_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectEscalationPolicy">service_object_escalation_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectName">service_object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectSla">service_object_sla</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectStatus">service_object_status</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectSummary">service_object_summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTaskTemplate">service_object_task_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTeam">service_object_team</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTeamPriority">service_object_team_priority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectUniqueId">service_object_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.sla">sla</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.slaObject">sla_object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.status">status</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.teamPriority">team_priority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.teamPriorityObject">team_priority_object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.urgency">urgency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResults">DataZendutyIncidentsResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `acknowledged_date`<sup>Required</sup> <a name="acknowledged_date" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.acknowledgedDate"></a>

```python
acknowledged_date: str
```

- *Type:* str

---

##### `assigned_to`<sup>Required</sup> <a name="assigned_to" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.assignedTo"></a>

```python
assigned_to: str
```

- *Type:* str

---

##### `assigned_to_name`<sup>Required</sup> <a name="assigned_to_name" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.assignedToName"></a>

```python
assigned_to_name: str
```

- *Type:* str

---

##### `context_window_end`<sup>Required</sup> <a name="context_window_end" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.contextWindowEnd"></a>

```python
context_window_end: str
```

- *Type:* str

---

##### `context_window_start`<sup>Required</sup> <a name="context_window_start" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.contextWindowStart"></a>

```python
context_window_start: str
```

- *Type:* str

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `escalation_policy_object_name`<sup>Required</sup> <a name="escalation_policy_object_name" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.escalationPolicyObjectName"></a>

```python
escalation_policy_object_name: str
```

- *Type:* str

---

##### `escalation_policy_object_unique_id`<sup>Required</sup> <a name="escalation_policy_object_unique_id" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.escalationPolicyObjectUniqueId"></a>

```python
escalation_policy_object_unique_id: str
```

- *Type:* str

---

##### `esccalation_policy`<sup>Required</sup> <a name="esccalation_policy" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.esccalationPolicy"></a>

```python
esccalation_policy: str
```

- *Type:* str

---

##### `incident_key`<sup>Required</sup> <a name="incident_key" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.incidentKey"></a>

```python
incident_key: str
```

- *Type:* str

---

##### `incident_number`<sup>Required</sup> <a name="incident_number" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.incidentNumber"></a>

```python
incident_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `merged_with`<sup>Required</sup> <a name="merged_with" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.mergedWith"></a>

```python
merged_with: str
```

- *Type:* str

---

##### `resolved_date`<sup>Required</sup> <a name="resolved_date" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.resolvedDate"></a>

```python
resolved_date: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `service_object`<sup>Required</sup> <a name="service_object" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObject"></a>

```python
service_object: str
```

- *Type:* str

---

##### `service_object_acknowledgement_timeout`<sup>Required</sup> <a name="service_object_acknowledgement_timeout" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectAcknowledgementTimeout"></a>

```python
service_object_acknowledgement_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_object_auto_resolve_timeout`<sup>Required</sup> <a name="service_object_auto_resolve_timeout" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectAutoResolveTimeout"></a>

```python
service_object_auto_resolve_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_object_collation`<sup>Required</sup> <a name="service_object_collation" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCollation"></a>

```python
service_object_collation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_object_collation_time`<sup>Required</sup> <a name="service_object_collation_time" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCollationTime"></a>

```python
service_object_collation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_object_created_by`<sup>Required</sup> <a name="service_object_created_by" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCreatedBy"></a>

```python
service_object_created_by: str
```

- *Type:* str

---

##### `service_object_creation_date`<sup>Required</sup> <a name="service_object_creation_date" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectCreationDate"></a>

```python
service_object_creation_date: str
```

- *Type:* str

---

##### `service_object_description`<sup>Required</sup> <a name="service_object_description" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectDescription"></a>

```python
service_object_description: str
```

- *Type:* str

---

##### `service_object_escalation_policy`<sup>Required</sup> <a name="service_object_escalation_policy" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectEscalationPolicy"></a>

```python
service_object_escalation_policy: str
```

- *Type:* str

---

##### `service_object_name`<sup>Required</sup> <a name="service_object_name" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectName"></a>

```python
service_object_name: str
```

- *Type:* str

---

##### `service_object_sla`<sup>Required</sup> <a name="service_object_sla" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectSla"></a>

```python
service_object_sla: str
```

- *Type:* str

---

##### `service_object_status`<sup>Required</sup> <a name="service_object_status" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectStatus"></a>

```python
service_object_status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_object_summary`<sup>Required</sup> <a name="service_object_summary" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectSummary"></a>

```python
service_object_summary: str
```

- *Type:* str

---

##### `service_object_task_template`<sup>Required</sup> <a name="service_object_task_template" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTaskTemplate"></a>

```python
service_object_task_template: str
```

- *Type:* str

---

##### `service_object_team`<sup>Required</sup> <a name="service_object_team" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTeam"></a>

```python
service_object_team: str
```

- *Type:* str

---

##### `service_object_team_priority`<sup>Required</sup> <a name="service_object_team_priority" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectTeamPriority"></a>

```python
service_object_team_priority: str
```

- *Type:* str

---

##### `service_object_unique_id`<sup>Required</sup> <a name="service_object_unique_id" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.serviceObjectUniqueId"></a>

```python
service_object_unique_id: str
```

- *Type:* str

---

##### `sla`<sup>Required</sup> <a name="sla" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.sla"></a>

```python
sla: str
```

- *Type:* str

---

##### `sla_object`<sup>Required</sup> <a name="sla_object" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.slaObject"></a>

```python
sla_object: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.status"></a>

```python
status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `summary`<sup>Required</sup> <a name="summary" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `team_priority`<sup>Required</sup> <a name="team_priority" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.teamPriority"></a>

```python
team_priority: str
```

- *Type:* str

---

##### `team_priority_object`<sup>Required</sup> <a name="team_priority_object" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.teamPriorityObject"></a>

```python
team_priority_object: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `urgency`<sup>Required</sup> <a name="urgency" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.urgency"></a>

```python
urgency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataZendutyIncidentsResults
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyIncidents.DataZendutyIncidentsResults">DataZendutyIncidentsResults</a>

---



