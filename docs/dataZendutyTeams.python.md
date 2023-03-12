# `dataZendutyTeams` Submodule <a name="`dataZendutyTeams` Submodule" id="@skeptools/provider-zenduty.dataZendutyTeams"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataZendutyTeams <a name="DataZendutyTeams" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/d/teams zenduty_teams}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_teams

dataZendutyTeams.DataZendutyTeams(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  team_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/teams#id DataZendutyTeams#id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer.parameter.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/teams#team_id DataZendutyTeams#team_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/teams#id DataZendutyTeams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `team_id`<sup>Optional</sup> <a name="team_id" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.Initializer.parameter.teamId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/teams#team_id DataZendutyTeams#team_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.resetTeamId">reset_team_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_team_id` <a name="reset_team_id" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.resetTeamId"></a>

```python
def reset_team_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.isConstruct"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_teams

dataZendutyTeams.DataZendutyTeams.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.isTerraformElement"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_teams

dataZendutyTeams.DataZendutyTeams.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.isTerraformDataSource"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_teams

dataZendutyTeams.DataZendutyTeams.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.teams">teams</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList">DataZendutyTeamsTeamsList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `teams`<sup>Required</sup> <a name="teams" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.teams"></a>

```python
teams: DataZendutyTeamsTeamsList
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList">DataZendutyTeamsTeamsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeams.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataZendutyTeamsConfig <a name="DataZendutyTeamsConfig" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsConfig.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_teams

dataZendutyTeams.DataZendutyTeamsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  team_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/teams#id DataZendutyTeams#id}. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsConfig.property.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/teams#team_id DataZendutyTeams#team_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/teams#id DataZendutyTeams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `team_id`<sup>Optional</sup> <a name="team_id" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsConfig.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/teams#team_id DataZendutyTeams#team_id}.

---

### DataZendutyTeamsTeams <a name="DataZendutyTeamsTeams" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeams"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeams.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_teams

dataZendutyTeams.DataZendutyTeamsTeams()
```


### DataZendutyTeamsTeamsMembers <a name="DataZendutyTeamsTeamsMembers" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembers"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembers.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_teams

dataZendutyTeams.DataZendutyTeamsTeamsMembers()
```


### DataZendutyTeamsTeamsRoles <a name="DataZendutyTeamsTeamsRoles" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRoles"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRoles.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_teams

dataZendutyTeams.DataZendutyTeamsTeamsRoles()
```


## Classes <a name="Classes" id="Classes"></a>

### DataZendutyTeamsTeamsList <a name="DataZendutyTeamsTeamsList" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_teams

dataZendutyTeams.DataZendutyTeamsTeamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataZendutyTeamsTeamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataZendutyTeamsTeamsMembersList <a name="DataZendutyTeamsTeamsMembersList" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_teams

dataZendutyTeams.DataZendutyTeamsTeamsMembersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataZendutyTeamsTeamsMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataZendutyTeamsTeamsMembersOutputReference <a name="DataZendutyTeamsTeamsMembersOutputReference" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_teams

dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.property.joiningDate">joining_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.property.role">role</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.property.team">team</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.property.user">user</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembers">DataZendutyTeamsTeamsMembers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `joining_date`<sup>Required</sup> <a name="joining_date" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.property.joiningDate"></a>

```python
joining_date: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.property.role"></a>

```python
role: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `team`<sup>Required</sup> <a name="team" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.property.team"></a>

```python
team: str
```

- *Type:* str

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.property.user"></a>

```python
user: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersOutputReference.property.internalValue"></a>

```python
internal_value: DataZendutyTeamsTeamsMembers
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembers">DataZendutyTeamsTeamsMembers</a>

---


### DataZendutyTeamsTeamsOutputReference <a name="DataZendutyTeamsTeamsOutputReference" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_teams

dataZendutyTeams.DataZendutyTeamsTeamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.property.account">account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.property.members">members</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList">DataZendutyTeamsTeamsMembersList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.property.roles">roles</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList">DataZendutyTeamsTeamsRolesList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeams">DataZendutyTeamsTeams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account`<sup>Required</sup> <a name="account" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.property.account"></a>

```python
account: str
```

- *Type:* str

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.property.members"></a>

```python
members: DataZendutyTeamsTeamsMembersList
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsMembersList">DataZendutyTeamsTeamsMembersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.property.roles"></a>

```python
roles: DataZendutyTeamsTeamsRolesList
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList">DataZendutyTeamsTeamsRolesList</a>

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsOutputReference.property.internalValue"></a>

```python
internal_value: DataZendutyTeamsTeams
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeams">DataZendutyTeamsTeams</a>

---


### DataZendutyTeamsTeamsRolesList <a name="DataZendutyTeamsTeamsRolesList" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_teams

dataZendutyTeams.DataZendutyTeamsTeamsRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataZendutyTeamsTeamsRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataZendutyTeamsTeamsRolesOutputReference <a name="DataZendutyTeamsTeamsRolesOutputReference" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import data_zenduty_teams

dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.property.rank">rank</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.property.team">team</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRoles">DataZendutyTeamsTeamsRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `rank`<sup>Required</sup> <a name="rank" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.property.rank"></a>

```python
rank: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `team`<sup>Required</sup> <a name="team" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.property.team"></a>

```python
team: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRolesOutputReference.property.internalValue"></a>

```python
internal_value: DataZendutyTeamsTeamsRoles
```

- *Type:* <a href="#@skeptools/provider-zenduty.dataZendutyTeams.DataZendutyTeamsTeamsRoles">DataZendutyTeamsTeamsRoles</a>

---



