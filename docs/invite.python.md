# `invite` Submodule <a name="`invite` Submodule" id="@skeptools/provider-zenduty.invite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Invite <a name="Invite" id="@skeptools/provider-zenduty.invite.Invite"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/invite zenduty_invite}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.invite.Invite.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import invite

invite.Invite(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email_accounts: typing.Union[IResolvable, typing.List[InviteEmailAccounts]],
  team: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.emailAccounts">email_accounts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts">InviteEmailAccounts</a>]]</code> | email_accounts block. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.team">team</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#team Invite#team}. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#id Invite#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email_accounts`<sup>Required</sup> <a name="email_accounts" id="@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.emailAccounts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts">InviteEmailAccounts</a>]]

email_accounts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#email_accounts Invite#email_accounts}

---

##### `team`<sup>Required</sup> <a name="team" id="@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.team"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#team Invite#team}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.invite.Invite.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#id Invite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.putEmailAccounts">put_email_accounts</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.invite.Invite.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@skeptools/provider-zenduty.invite.Invite.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.invite.Invite.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.invite.Invite.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@skeptools/provider-zenduty.invite.Invite.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@skeptools/provider-zenduty.invite.Invite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@skeptools/provider-zenduty.invite.Invite.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@skeptools/provider-zenduty.invite.Invite.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@skeptools/provider-zenduty.invite.Invite.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@skeptools/provider-zenduty.invite.Invite.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@skeptools/provider-zenduty.invite.Invite.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@skeptools/provider-zenduty.invite.Invite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@skeptools/provider-zenduty.invite.Invite.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.invite.Invite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@skeptools/provider-zenduty.invite.Invite.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.invite.Invite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@skeptools/provider-zenduty.invite.Invite.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.invite.Invite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@skeptools/provider-zenduty.invite.Invite.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.invite.Invite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@skeptools/provider-zenduty.invite.Invite.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.invite.Invite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@skeptools/provider-zenduty.invite.Invite.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.invite.Invite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@skeptools/provider-zenduty.invite.Invite.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.invite.Invite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@skeptools/provider-zenduty.invite.Invite.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.invite.Invite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@skeptools/provider-zenduty.invite.Invite.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.invite.Invite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@skeptools/provider-zenduty.invite.Invite.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@skeptools/provider-zenduty.invite.Invite.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.invite.Invite.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.invite.Invite.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@skeptools/provider-zenduty.invite.Invite.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.invite.Invite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@skeptools/provider-zenduty.invite.Invite.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.invite.Invite.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@skeptools/provider-zenduty.invite.Invite.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@skeptools/provider-zenduty.invite.Invite.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@skeptools/provider-zenduty.invite.Invite.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@skeptools/provider-zenduty.invite.Invite.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.invite.Invite.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_email_accounts` <a name="put_email_accounts" id="@skeptools/provider-zenduty.invite.Invite.putEmailAccounts"></a>

```python
def put_email_accounts(
  value: typing.Union[IResolvable, typing.List[InviteEmailAccounts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.invite.Invite.putEmailAccounts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts">InviteEmailAccounts</a>]]

---

##### `reset_id` <a name="reset_id" id="@skeptools/provider-zenduty.invite.Invite.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@skeptools/provider-zenduty.invite.Invite.isConstruct"></a>

```python
from skeptools_cdktf_provider_zenduty import invite

invite.Invite.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.invite.Invite.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@skeptools/provider-zenduty.invite.Invite.isTerraformElement"></a>

```python
from skeptools_cdktf_provider_zenduty import invite

invite.Invite.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.invite.Invite.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@skeptools/provider-zenduty.invite.Invite.isTerraformResource"></a>

```python
from skeptools_cdktf_provider_zenduty import invite

invite.Invite.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.invite.Invite.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.emailAccounts">email_accounts</a></code> | <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList">InviteEmailAccountsList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.emailAccountsInput">email_accounts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts">InviteEmailAccounts</a>]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.teamInput">team_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.team">team</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.invite.Invite.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@skeptools/provider-zenduty.invite.Invite.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.invite.Invite.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@skeptools/provider-zenduty.invite.Invite.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@skeptools/provider-zenduty.invite.Invite.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@skeptools/provider-zenduty.invite.Invite.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@skeptools/provider-zenduty.invite.Invite.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.invite.Invite.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.invite.Invite.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.invite.Invite.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.invite.Invite.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.invite.Invite.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.invite.Invite.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.invite.Invite.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email_accounts`<sup>Required</sup> <a name="email_accounts" id="@skeptools/provider-zenduty.invite.Invite.property.emailAccounts"></a>

```python
email_accounts: InviteEmailAccountsList
```

- *Type:* <a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList">InviteEmailAccountsList</a>

---

##### `email_accounts_input`<sup>Optional</sup> <a name="email_accounts_input" id="@skeptools/provider-zenduty.invite.Invite.property.emailAccountsInput"></a>

```python
email_accounts_input: typing.Union[IResolvable, typing.List[InviteEmailAccounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts">InviteEmailAccounts</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@skeptools/provider-zenduty.invite.Invite.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `team_input`<sup>Optional</sup> <a name="team_input" id="@skeptools/provider-zenduty.invite.Invite.property.teamInput"></a>

```python
team_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.invite.Invite.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `team`<sup>Required</sup> <a name="team" id="@skeptools/provider-zenduty.invite.Invite.property.team"></a>

```python
team: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.Invite.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.invite.Invite.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### InviteConfig <a name="InviteConfig" id="@skeptools/provider-zenduty.invite.InviteConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.invite.InviteConfig.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import invite

invite.InviteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email_accounts: typing.Union[IResolvable, typing.List[InviteEmailAccounts]],
  team: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteConfig.property.emailAccounts">email_accounts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts">InviteEmailAccounts</a>]]</code> | email_accounts block. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteConfig.property.team">team</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#team Invite#team}. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#id Invite#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.invite.InviteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.invite.InviteConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.invite.InviteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.invite.InviteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.invite.InviteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.invite.InviteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.invite.InviteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email_accounts`<sup>Required</sup> <a name="email_accounts" id="@skeptools/provider-zenduty.invite.InviteConfig.property.emailAccounts"></a>

```python
email_accounts: typing.Union[IResolvable, typing.List[InviteEmailAccounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts">InviteEmailAccounts</a>]]

email_accounts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#email_accounts Invite#email_accounts}

---

##### `team`<sup>Required</sup> <a name="team" id="@skeptools/provider-zenduty.invite.InviteConfig.property.team"></a>

```python
team: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#team Invite#team}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.invite.InviteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#id Invite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### InviteEmailAccounts <a name="InviteEmailAccounts" id="@skeptools/provider-zenduty.invite.InviteEmailAccounts"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.invite.InviteEmailAccounts.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import invite

invite.InviteEmailAccounts(
  email: str,
  first_name: str,
  last_name: str,
  role: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#email Invite#email}. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts.property.firstName">first_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#first_name Invite#first_name}. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts.property.lastName">last_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#last_name Invite#last_name}. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts.property.role">role</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#role Invite#role}. |

---

##### `email`<sup>Required</sup> <a name="email" id="@skeptools/provider-zenduty.invite.InviteEmailAccounts.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#email Invite#email}.

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@skeptools/provider-zenduty.invite.InviteEmailAccounts.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#first_name Invite#first_name}.

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@skeptools/provider-zenduty.invite.InviteEmailAccounts.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#last_name Invite#last_name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@skeptools/provider-zenduty.invite.InviteEmailAccounts.property.role"></a>

```python
role: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/invite#role Invite#role}.

---

## Classes <a name="Classes" id="Classes"></a>

### InviteEmailAccountsList <a name="InviteEmailAccountsList" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import invite

invite.InviteEmailAccountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> InviteEmailAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts">InviteEmailAccounts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[InviteEmailAccounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts">InviteEmailAccounts</a>]]

---


### InviteEmailAccountsOutputReference <a name="InviteEmailAccountsOutputReference" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import invite

invite.InviteEmailAccountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.roleInput">role_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.role">role</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts">InviteEmailAccounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.roleInput"></a>

```python
role_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `email`<sup>Required</sup> <a name="email" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.role"></a>

```python
role: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@skeptools/provider-zenduty.invite.InviteEmailAccountsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, InviteEmailAccounts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@skeptools/provider-zenduty.invite.InviteEmailAccounts">InviteEmailAccounts</a>]

---



