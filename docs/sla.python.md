# `sla` Submodule <a name="`sla` Submodule" id="@skeptools/provider-zenduty.sla"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sla <a name="Sla" id="@skeptools/provider-zenduty.sla.Sla"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/sla zenduty_sla}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.sla.Sla.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import sla

sla.Sla(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  acknowledge_time: typing.Union[int, float],
  escalations: typing.Union[IResolvable, typing.List[SlaEscalations]],
  name: str,
  resolve_time: typing.Union[int, float],
  team_id: str,
  description: str = None,
  id: str = None,
  is_active: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.acknowledgeTime">acknowledge_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#acknowledge_time Sla#acknowledge_time}. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.escalations">escalations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.sla.SlaEscalations">SlaEscalations</a>]]</code> | escalations block. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#name Sla#name}. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.resolveTime">resolve_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#resolve_time Sla#resolve_time}. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#team_id Sla#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#description Sla#description}. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#id Sla#id}. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.isActive">is_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#is_active Sla#is_active}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acknowledge_time`<sup>Required</sup> <a name="acknowledge_time" id="@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.acknowledgeTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#acknowledge_time Sla#acknowledge_time}.

---

##### `escalations`<sup>Required</sup> <a name="escalations" id="@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.escalations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.sla.SlaEscalations">SlaEscalations</a>]]

escalations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#escalations Sla#escalations}

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#name Sla#name}.

---

##### `resolve_time`<sup>Required</sup> <a name="resolve_time" id="@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.resolveTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#resolve_time Sla#resolve_time}.

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.teamId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#team_id Sla#team_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#description Sla#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#id Sla#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_active`<sup>Optional</sup> <a name="is_active" id="@skeptools/provider-zenduty.sla.Sla.Initializer.parameter.isActive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#is_active Sla#is_active}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.putEscalations">put_escalations</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.resetIsActive">reset_is_active</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.sla.Sla.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@skeptools/provider-zenduty.sla.Sla.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.sla.Sla.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.sla.Sla.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@skeptools/provider-zenduty.sla.Sla.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@skeptools/provider-zenduty.sla.Sla.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@skeptools/provider-zenduty.sla.Sla.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@skeptools/provider-zenduty.sla.Sla.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@skeptools/provider-zenduty.sla.Sla.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@skeptools/provider-zenduty.sla.Sla.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@skeptools/provider-zenduty.sla.Sla.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@skeptools/provider-zenduty.sla.Sla.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@skeptools/provider-zenduty.sla.Sla.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.Sla.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@skeptools/provider-zenduty.sla.Sla.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.Sla.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@skeptools/provider-zenduty.sla.Sla.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.Sla.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@skeptools/provider-zenduty.sla.Sla.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.Sla.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@skeptools/provider-zenduty.sla.Sla.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.Sla.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@skeptools/provider-zenduty.sla.Sla.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.Sla.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@skeptools/provider-zenduty.sla.Sla.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.Sla.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@skeptools/provider-zenduty.sla.Sla.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.Sla.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@skeptools/provider-zenduty.sla.Sla.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.Sla.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@skeptools/provider-zenduty.sla.Sla.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@skeptools/provider-zenduty.sla.Sla.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.sla.Sla.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.sla.Sla.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@skeptools/provider-zenduty.sla.Sla.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.Sla.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@skeptools/provider-zenduty.sla.Sla.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.sla.Sla.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@skeptools/provider-zenduty.sla.Sla.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@skeptools/provider-zenduty.sla.Sla.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@skeptools/provider-zenduty.sla.Sla.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@skeptools/provider-zenduty.sla.Sla.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.sla.Sla.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_escalations` <a name="put_escalations" id="@skeptools/provider-zenduty.sla.Sla.putEscalations"></a>

```python
def put_escalations(
  value: typing.Union[IResolvable, typing.List[SlaEscalations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.sla.Sla.putEscalations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.sla.SlaEscalations">SlaEscalations</a>]]

---

##### `reset_description` <a name="reset_description" id="@skeptools/provider-zenduty.sla.Sla.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@skeptools/provider-zenduty.sla.Sla.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_active` <a name="reset_is_active" id="@skeptools/provider-zenduty.sla.Sla.resetIsActive"></a>

```python
def reset_is_active() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@skeptools/provider-zenduty.sla.Sla.isConstruct"></a>

```python
from skeptools_cdktf_provider_zenduty import sla

sla.Sla.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.sla.Sla.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@skeptools/provider-zenduty.sla.Sla.isTerraformElement"></a>

```python
from skeptools_cdktf_provider_zenduty import sla

sla.Sla.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.sla.Sla.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@skeptools/provider-zenduty.sla.Sla.isTerraformResource"></a>

```python
from skeptools_cdktf_provider_zenduty import sla

sla.Sla.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.sla.Sla.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.escalations">escalations</a></code> | <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList">SlaEscalationsList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.acknowledgeTimeInput">acknowledge_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.escalationsInput">escalations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.sla.SlaEscalations">SlaEscalations</a>]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.isActiveInput">is_active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.resolveTimeInput">resolve_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.acknowledgeTime">acknowledge_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.isActive">is_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.resolveTime">resolve_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.sla.Sla.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@skeptools/provider-zenduty.sla.Sla.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.sla.Sla.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@skeptools/provider-zenduty.sla.Sla.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@skeptools/provider-zenduty.sla.Sla.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@skeptools/provider-zenduty.sla.Sla.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@skeptools/provider-zenduty.sla.Sla.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.sla.Sla.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.sla.Sla.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.sla.Sla.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.sla.Sla.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.sla.Sla.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.sla.Sla.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.sla.Sla.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `escalations`<sup>Required</sup> <a name="escalations" id="@skeptools/provider-zenduty.sla.Sla.property.escalations"></a>

```python
escalations: SlaEscalationsList
```

- *Type:* <a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList">SlaEscalationsList</a>

---

##### `acknowledge_time_input`<sup>Optional</sup> <a name="acknowledge_time_input" id="@skeptools/provider-zenduty.sla.Sla.property.acknowledgeTimeInput"></a>

```python
acknowledge_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@skeptools/provider-zenduty.sla.Sla.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `escalations_input`<sup>Optional</sup> <a name="escalations_input" id="@skeptools/provider-zenduty.sla.Sla.property.escalationsInput"></a>

```python
escalations_input: typing.Union[IResolvable, typing.List[SlaEscalations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.sla.SlaEscalations">SlaEscalations</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@skeptools/provider-zenduty.sla.Sla.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_active_input`<sup>Optional</sup> <a name="is_active_input" id="@skeptools/provider-zenduty.sla.Sla.property.isActiveInput"></a>

```python
is_active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@skeptools/provider-zenduty.sla.Sla.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resolve_time_input`<sup>Optional</sup> <a name="resolve_time_input" id="@skeptools/provider-zenduty.sla.Sla.property.resolveTimeInput"></a>

```python
resolve_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@skeptools/provider-zenduty.sla.Sla.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `acknowledge_time`<sup>Required</sup> <a name="acknowledge_time" id="@skeptools/provider-zenduty.sla.Sla.property.acknowledgeTime"></a>

```python
acknowledge_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@skeptools/provider-zenduty.sla.Sla.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.sla.Sla.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="@skeptools/provider-zenduty.sla.Sla.property.isActive"></a>

```python
is_active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-zenduty.sla.Sla.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resolve_time`<sup>Required</sup> <a name="resolve_time" id="@skeptools/provider-zenduty.sla.Sla.property.resolveTime"></a>

```python
resolve_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@skeptools/provider-zenduty.sla.Sla.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.Sla.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.sla.Sla.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SlaConfig <a name="SlaConfig" id="@skeptools/provider-zenduty.sla.SlaConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.sla.SlaConfig.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import sla

sla.SlaConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  acknowledge_time: typing.Union[int, float],
  escalations: typing.Union[IResolvable, typing.List[SlaEscalations]],
  name: str,
  resolve_time: typing.Union[int, float],
  team_id: str,
  description: str = None,
  id: str = None,
  is_active: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.acknowledgeTime">acknowledge_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#acknowledge_time Sla#acknowledge_time}. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.escalations">escalations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.sla.SlaEscalations">SlaEscalations</a>]]</code> | escalations block. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#name Sla#name}. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.resolveTime">resolve_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#resolve_time Sla#resolve_time}. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#team_id Sla#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#description Sla#description}. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#id Sla#id}. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaConfig.property.isActive">is_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#is_active Sla#is_active}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.sla.SlaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.sla.SlaConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.sla.SlaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.sla.SlaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.sla.SlaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.sla.SlaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.sla.SlaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acknowledge_time`<sup>Required</sup> <a name="acknowledge_time" id="@skeptools/provider-zenduty.sla.SlaConfig.property.acknowledgeTime"></a>

```python
acknowledge_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#acknowledge_time Sla#acknowledge_time}.

---

##### `escalations`<sup>Required</sup> <a name="escalations" id="@skeptools/provider-zenduty.sla.SlaConfig.property.escalations"></a>

```python
escalations: typing.Union[IResolvable, typing.List[SlaEscalations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.sla.SlaEscalations">SlaEscalations</a>]]

escalations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#escalations Sla#escalations}

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-zenduty.sla.SlaConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#name Sla#name}.

---

##### `resolve_time`<sup>Required</sup> <a name="resolve_time" id="@skeptools/provider-zenduty.sla.SlaConfig.property.resolveTime"></a>

```python
resolve_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#resolve_time Sla#resolve_time}.

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@skeptools/provider-zenduty.sla.SlaConfig.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#team_id Sla#team_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@skeptools/provider-zenduty.sla.SlaConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#description Sla#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.sla.SlaConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#id Sla#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_active`<sup>Optional</sup> <a name="is_active" id="@skeptools/provider-zenduty.sla.SlaConfig.property.isActive"></a>

```python
is_active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#is_active Sla#is_active}.

---

### SlaEscalations <a name="SlaEscalations" id="@skeptools/provider-zenduty.sla.SlaEscalations"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.sla.SlaEscalations.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import sla

sla.SlaEscalations(
  time: typing.Union[int, float],
  type: typing.Union[int, float],
  responders: typing.Union[IResolvable, typing.List[SlaEscalationsResponders]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalations.property.time">time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#time Sla#time}. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalations.property.type">type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#type Sla#type}. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalations.property.responders">responders</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.sla.SlaEscalationsResponders">SlaEscalationsResponders</a>]]</code> | responders block. |

---

##### `time`<sup>Required</sup> <a name="time" id="@skeptools/provider-zenduty.sla.SlaEscalations.property.time"></a>

```python
time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#time Sla#time}.

---

##### `type`<sup>Required</sup> <a name="type" id="@skeptools/provider-zenduty.sla.SlaEscalations.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#type Sla#type}.

---

##### `responders`<sup>Optional</sup> <a name="responders" id="@skeptools/provider-zenduty.sla.SlaEscalations.property.responders"></a>

```python
responders: typing.Union[IResolvable, typing.List[SlaEscalationsResponders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.sla.SlaEscalationsResponders">SlaEscalationsResponders</a>]]

responders block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#responders Sla#responders}

---

### SlaEscalationsResponders <a name="SlaEscalationsResponders" id="@skeptools/provider-zenduty.sla.SlaEscalationsResponders"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.sla.SlaEscalationsResponders.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import sla

sla.SlaEscalationsResponders(
  user: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsResponders.property.user">user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#user Sla#user}. |

---

##### `user`<sup>Required</sup> <a name="user" id="@skeptools/provider-zenduty.sla.SlaEscalationsResponders.property.user"></a>

```python
user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/sla#user Sla#user}.

---

## Classes <a name="Classes" id="Classes"></a>

### SlaEscalationsList <a name="SlaEscalationsList" id="@skeptools/provider-zenduty.sla.SlaEscalationsList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import sla

sla.SlaEscalationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SlaEscalationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.sla.SlaEscalations">SlaEscalations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@skeptools/provider-zenduty.sla.SlaEscalationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SlaEscalations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.sla.SlaEscalations">SlaEscalations</a>]]

---


### SlaEscalationsOutputReference <a name="SlaEscalationsOutputReference" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import sla

sla.SlaEscalationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.putResponders">put_responders</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.resetResponders">reset_responders</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_responders` <a name="put_responders" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.putResponders"></a>

```python
def put_responders(
  value: typing.Union[IResolvable, typing.List[SlaEscalationsResponders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.putResponders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.sla.SlaEscalationsResponders">SlaEscalationsResponders</a>]]

---

##### `reset_responders` <a name="reset_responders" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.resetResponders"></a>

```python
def reset_responders() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.responders">responders</a></code> | <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList">SlaEscalationsRespondersList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.respondersInput">responders_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.sla.SlaEscalationsResponders">SlaEscalationsResponders</a>]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.timeInput">time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.typeInput">type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.time">time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.type">type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@skeptools/provider-zenduty.sla.SlaEscalations">SlaEscalations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `responders`<sup>Required</sup> <a name="responders" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.responders"></a>

```python
responders: SlaEscalationsRespondersList
```

- *Type:* <a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList">SlaEscalationsRespondersList</a>

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `responders_input`<sup>Optional</sup> <a name="responders_input" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.respondersInput"></a>

```python
responders_input: typing.Union[IResolvable, typing.List[SlaEscalationsResponders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.sla.SlaEscalationsResponders">SlaEscalationsResponders</a>]]

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.timeInput"></a>

```python
time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.typeInput"></a>

```python
type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time`<sup>Required</sup> <a name="time" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.time"></a>

```python
time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@skeptools/provider-zenduty.sla.SlaEscalationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SlaEscalations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@skeptools/provider-zenduty.sla.SlaEscalations">SlaEscalations</a>]

---


### SlaEscalationsRespondersList <a name="SlaEscalationsRespondersList" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import sla

sla.SlaEscalationsRespondersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SlaEscalationsRespondersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.sla.SlaEscalationsResponders">SlaEscalationsResponders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SlaEscalationsResponders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.sla.SlaEscalationsResponders">SlaEscalationsResponders</a>]]

---


### SlaEscalationsRespondersOutputReference <a name="SlaEscalationsRespondersOutputReference" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import sla

sla.SlaEscalationsRespondersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@skeptools/provider-zenduty.sla.SlaEscalationsResponders">SlaEscalationsResponders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@skeptools/provider-zenduty.sla.SlaEscalationsRespondersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SlaEscalationsResponders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@skeptools/provider-zenduty.sla.SlaEscalationsResponders">SlaEscalationsResponders</a>]

---



