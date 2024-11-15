# `taskTemplateTasks` Submodule <a name="`taskTemplateTasks` Submodule" id="@skeptools/provider-zenduty.taskTemplateTasks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TaskTemplateTasks <a name="TaskTemplateTasks" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks zenduty_task_template_tasks}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import task_template_tasks

taskTemplateTasks.TaskTemplateTasks(
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
  task_template_id: str,
  team_id: str,
  title: str,
  due_in: typing.Union[int, float] = None,
  id: str = None,
  role: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#description TaskTemplateTasks#description}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.taskTemplateId">task_template_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#task_template_id TaskTemplateTasks#task_template_id}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#team_id TaskTemplateTasks#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#title TaskTemplateTasks#title}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.dueIn">due_in</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#due_in TaskTemplateTasks#due_in}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#id TaskTemplateTasks#id}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#role TaskTemplateTasks#role}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#description TaskTemplateTasks#description}.

---

##### `task_template_id`<sup>Required</sup> <a name="task_template_id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.taskTemplateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#task_template_id TaskTemplateTasks#task_template_id}.

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.teamId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#team_id TaskTemplateTasks#team_id}.

---

##### `title`<sup>Required</sup> <a name="title" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#title TaskTemplateTasks#title}.

---

##### `due_in`<sup>Optional</sup> <a name="due_in" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.dueIn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#due_in TaskTemplateTasks#due_in}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#id TaskTemplateTasks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `role`<sup>Optional</sup> <a name="role" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#role TaskTemplateTasks#role}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetDueIn">reset_due_in</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetRole">reset_role</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_due_in` <a name="reset_due_in" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetDueIn"></a>

```python
def reset_due_in() -> None
```

##### `reset_id` <a name="reset_id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_role` <a name="reset_role" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.resetRole"></a>

```python
def reset_role() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isConstruct"></a>

```python
from skeptools_cdktf_provider_zenduty import task_template_tasks

taskTemplateTasks.TaskTemplateTasks.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformElement"></a>

```python
from skeptools_cdktf_provider_zenduty import task_template_tasks

taskTemplateTasks.TaskTemplateTasks.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformResource"></a>

```python
from skeptools_cdktf_provider_zenduty import task_template_tasks

taskTemplateTasks.TaskTemplateTasks.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dueInInput">due_in_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.taskTemplateIdInput">task_template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dueIn">due_in</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.taskTemplateId">task_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.title">title</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `due_in_input`<sup>Optional</sup> <a name="due_in_input" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dueInInput"></a>

```python
due_in_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `task_template_id_input`<sup>Optional</sup> <a name="task_template_id_input" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.taskTemplateIdInput"></a>

```python
task_template_id_input: str
```

- *Type:* str

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `due_in`<sup>Required</sup> <a name="due_in" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.dueIn"></a>

```python
due_in: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `task_template_id`<sup>Required</sup> <a name="task_template_id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.taskTemplateId"></a>

```python
task_template_id: str
```

- *Type:* str

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.title"></a>

```python
title: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasks.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TaskTemplateTasksConfig <a name="TaskTemplateTasksConfig" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import task_template_tasks

taskTemplateTasks.TaskTemplateTasksConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  task_template_id: str,
  team_id: str,
  title: str,
  due_in: typing.Union[int, float] = None,
  id: str = None,
  role: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#description TaskTemplateTasks#description}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.taskTemplateId">task_template_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#task_template_id TaskTemplateTasks#task_template_id}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#team_id TaskTemplateTasks#team_id}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#title TaskTemplateTasks#title}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.dueIn">due_in</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#due_in TaskTemplateTasks#due_in}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#id TaskTemplateTasks#id}. |
| <code><a href="#@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#role TaskTemplateTasks#role}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#description TaskTemplateTasks#description}.

---

##### `task_template_id`<sup>Required</sup> <a name="task_template_id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.taskTemplateId"></a>

```python
task_template_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#task_template_id TaskTemplateTasks#task_template_id}.

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#team_id TaskTemplateTasks#team_id}.

---

##### `title`<sup>Required</sup> <a name="title" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#title TaskTemplateTasks#title}.

---

##### `due_in`<sup>Optional</sup> <a name="due_in" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.dueIn"></a>

```python
due_in: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#due_in TaskTemplateTasks#due_in}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#id TaskTemplateTasks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `role`<sup>Optional</sup> <a name="role" id="@skeptools/provider-zenduty.taskTemplateTasks.TaskTemplateTasksConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/task_template_tasks#role TaskTemplateTasks#role}.

---



