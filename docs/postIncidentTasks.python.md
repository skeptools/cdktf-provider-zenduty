# `postIncidentTasks` Submodule <a name="`postIncidentTasks` Submodule" id="@skeptools/provider-zenduty.postIncidentTasks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostIncidentTasks <a name="PostIncidentTasks" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks zenduty_post_incident_tasks}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import post_incident_tasks

postIncidentTasks.PostIncidentTasks(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  team_id: str,
  title: str,
  assigned_to: str = None,
  due_in_time: str = None,
  id: str = None,
  status: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#description PostIncidentTasks#description}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#team_id PostIncidentTasks#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#title PostIncidentTasks#title}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.assignedTo">assigned_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#assigned_to PostIncidentTasks#assigned_to}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.dueInTime">due_in_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#due_in_time PostIncidentTasks#due_in_time}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#id PostIncidentTasks#id}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.status">status</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#status PostIncidentTasks#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#description PostIncidentTasks#description}.

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.teamId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#team_id PostIncidentTasks#team_id}.

---

##### `title`<sup>Required</sup> <a name="title" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#title PostIncidentTasks#title}.

---

##### `assigned_to`<sup>Optional</sup> <a name="assigned_to" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.assignedTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#assigned_to PostIncidentTasks#assigned_to}.

---

##### `due_in_time`<sup>Optional</sup> <a name="due_in_time" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.dueInTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#due_in_time PostIncidentTasks#due_in_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#id PostIncidentTasks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.Initializer.parameter.status"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#status PostIncidentTasks#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetAssignedTo">reset_assigned_to</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetDueInTime">reset_due_in_time</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_assigned_to` <a name="reset_assigned_to" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetAssignedTo"></a>

```python
def reset_assigned_to() -> None
```

##### `reset_due_in_time` <a name="reset_due_in_time" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetDueInTime"></a>

```python
def reset_due_in_time() -> None
```

##### `reset_id` <a name="reset_id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_status` <a name="reset_status" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isConstruct"></a>

```python
from skeptools_cdktf_provider_zenduty import post_incident_tasks

postIncidentTasks.PostIncidentTasks.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isTerraformElement"></a>

```python
from skeptools_cdktf_provider_zenduty import post_incident_tasks

postIncidentTasks.PostIncidentTasks.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isTerraformResource"></a>

```python
from skeptools_cdktf_provider_zenduty import post_incident_tasks

postIncidentTasks.PostIncidentTasks.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.assignedToInput">assigned_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.dueInTimeInput">due_in_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.statusInput">status_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.assignedTo">assigned_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.dueInTime">due_in_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.status">status</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.title">title</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `assigned_to_input`<sup>Optional</sup> <a name="assigned_to_input" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.assignedToInput"></a>

```python
assigned_to_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `due_in_time_input`<sup>Optional</sup> <a name="due_in_time_input" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.dueInTimeInput"></a>

```python
due_in_time_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.statusInput"></a>

```python
status_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `assigned_to`<sup>Required</sup> <a name="assigned_to" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.assignedTo"></a>

```python
assigned_to: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `due_in_time`<sup>Required</sup> <a name="due_in_time" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.dueInTime"></a>

```python
due_in_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.status"></a>

```python
status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.title"></a>

```python
title: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasks.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PostIncidentTasksConfig <a name="PostIncidentTasksConfig" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import post_incident_tasks

postIncidentTasks.PostIncidentTasksConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  team_id: str,
  title: str,
  assigned_to: str = None,
  due_in_time: str = None,
  id: str = None,
  status: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#description PostIncidentTasks#description}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#team_id PostIncidentTasks#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#title PostIncidentTasks#title}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.assignedTo">assigned_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#assigned_to PostIncidentTasks#assigned_to}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.dueInTime">due_in_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#due_in_time PostIncidentTasks#due_in_time}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#id PostIncidentTasks#id}. |
| <code><a href="#@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.status">status</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#status PostIncidentTasks#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#description PostIncidentTasks#description}.

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#team_id PostIncidentTasks#team_id}.

---

##### `title`<sup>Required</sup> <a name="title" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#title PostIncidentTasks#title}.

---

##### `assigned_to`<sup>Optional</sup> <a name="assigned_to" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.assignedTo"></a>

```python
assigned_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#assigned_to PostIncidentTasks#assigned_to}.

---

##### `due_in_time`<sup>Optional</sup> <a name="due_in_time" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.dueInTime"></a>

```python
due_in_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#due_in_time PostIncidentTasks#due_in_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#id PostIncidentTasks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@skeptools/provider-zenduty.postIncidentTasks.PostIncidentTasksConfig.property.status"></a>

```python
status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#status PostIncidentTasks#status}.

---



