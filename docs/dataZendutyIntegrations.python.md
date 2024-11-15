# `dataZendutyIntegrations` Submodule <a name="`dataZendutyIntegrations` Submodule" id="@skeptools/provider-zenduty.dataZendutyIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataZendutyIntegrations <a name="DataZendutyIntegrations" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/d/integrations zenduty_integrations}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_integrations

dataZendutyIntegrations.DataZendutyIntegrations(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_id: str,
  team_id: str,
  id: str = None,
  integration_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.serviceId">service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#service_id DataZendutyIntegrations#service_id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#team_id DataZendutyIntegrations#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#id DataZendutyIntegrations#id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.integrationId">integration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#integration_id DataZendutyIntegrations#integration_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.serviceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#service_id DataZendutyIntegrations#service_id}.

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.teamId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#team_id DataZendutyIntegrations#team_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#id DataZendutyIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_id`<sup>Optional</sup> <a name="integration_id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.Initializer.parameter.integrationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#integration_id DataZendutyIntegrations#integration_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.resetIntegrationId">reset_integration_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_integration_id` <a name="reset_integration_id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.resetIntegrationId"></a>

```python
def reset_integration_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.isConstruct"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_integrations

dataZendutyIntegrations.DataZendutyIntegrations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.isTerraformElement"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_integrations

dataZendutyIntegrations.DataZendutyIntegrations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.isTerraformDataSource"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_integrations

dataZendutyIntegrations.DataZendutyIntegrations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.integrations">integrations</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList">DataZendutyIntegrationsIntegrationsList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.integrationIdInput">integration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.serviceIdInput">service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.integrationId">integration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `integrations`<sup>Required</sup> <a name="integrations" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.integrations"></a>

```python
integrations: DataZendutyIntegrationsIntegrationsList
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList">DataZendutyIntegrationsIntegrationsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_id_input`<sup>Optional</sup> <a name="integration_id_input" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.integrationIdInput"></a>

```python
integration_id_input: str
```

- *Type:* str

---

##### `service_id_input`<sup>Optional</sup> <a name="service_id_input" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.serviceIdInput"></a>

```python
service_id_input: str
```

- *Type:* str

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataZendutyIntegrationsConfig <a name="DataZendutyIntegrationsConfig" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_integrations

dataZendutyIntegrations.DataZendutyIntegrationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_id: str,
  team_id: str,
  id: str = None,
  integration_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.serviceId">service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#service_id DataZendutyIntegrations#service_id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#team_id DataZendutyIntegrations#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#id DataZendutyIntegrations#id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.integrationId">integration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#integration_id DataZendutyIntegrations#integration_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#service_id DataZendutyIntegrations#service_id}.

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#team_id DataZendutyIntegrations#team_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#id DataZendutyIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_id`<sup>Optional</sup> <a name="integration_id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsConfig.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/integrations#integration_id DataZendutyIntegrations#integration_id}.

---

### DataZendutyIntegrationsIntegrations <a name="DataZendutyIntegrationsIntegrations" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrations"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrations.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_integrations

dataZendutyIntegrations.DataZendutyIntegrationsIntegrations()
```


## Classes <a name="Classes" id="Classes"></a>

### DataZendutyIntegrationsIntegrationsList <a name="DataZendutyIntegrationsIntegrationsList" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_integrations

dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataZendutyIntegrationsIntegrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataZendutyIntegrationsIntegrationsOutputReference <a name="DataZendutyIntegrationsIntegrationsOutputReference" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_integrations

dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.application">application</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.applicationReference">application_reference</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.createIncidentsFor">create_incidents_for</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.defaultUrgency">default_urgency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.integrationKey">integration_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.integrationType">integration_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.webhookUrl">webhook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrations">DataZendutyIntegrationsIntegrations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application`<sup>Required</sup> <a name="application" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.application"></a>

```python
application: str
```

- *Type:* str

---

##### `application_reference`<sup>Required</sup> <a name="application_reference" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.applicationReference"></a>

```python
application_reference: StringMap
```

- *Type:* cdktf.StringMap

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `create_incidents_for`<sup>Required</sup> <a name="create_incidents_for" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.createIncidentsFor"></a>

```python
create_incidents_for: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `default_urgency`<sup>Required</sup> <a name="default_urgency" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.defaultUrgency"></a>

```python
default_urgency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `integration_key`<sup>Required</sup> <a name="integration_key" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.integrationKey"></a>

```python
integration_key: str
```

- *Type:* str

---

##### `integration_type`<sup>Required</sup> <a name="integration_type" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.integrationType"></a>

```python
integration_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `webhook_url`<sup>Required</sup> <a name="webhook_url" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.webhookUrl"></a>

```python
webhook_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrationsOutputReference.property.internalValue"></a>

```python
internal_value: DataZendutyIntegrationsIntegrations
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyIntegrations.DataZendutyIntegrationsIntegrations">DataZendutyIntegrationsIntegrations</a>

---



