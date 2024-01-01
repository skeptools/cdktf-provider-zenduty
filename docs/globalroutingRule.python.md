# `globalroutingRule` Submodule <a name="`globalroutingRule` Submodule" id="@skeptools/provider-zenduty.globalroutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalroutingRule <a name="GlobalroutingRule" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule zenduty_globalrouting_rule}.

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import globalrouting_rule

globalroutingRule.GlobalroutingRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  router_id: str,
  actions: typing.Union[IResolvable, typing.List[GlobalroutingRuleActions]] = None,
  id: str = None,
  rule_json: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#name GlobalroutingRule#name}. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.routerId">router_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#router_id GlobalroutingRule#router_id}. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.actions">actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions">GlobalroutingRuleActions</a>]]</code> | actions block. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#id GlobalroutingRule#id}. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.ruleJson">rule_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#rule_json GlobalroutingRule#rule_json}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#name GlobalroutingRule#name}.

---

##### `router_id`<sup>Required</sup> <a name="router_id" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.routerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#router_id GlobalroutingRule#router_id}.

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.actions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions">GlobalroutingRuleActions</a>]]

actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#actions GlobalroutingRule#actions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#id GlobalroutingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule_json`<sup>Optional</sup> <a name="rule_json" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.Initializer.parameter.ruleJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#rule_json GlobalroutingRule#rule_json}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.resetRuleJson">reset_rule_json</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_actions` <a name="put_actions" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.putActions"></a>

```python
def put_actions(
  value: typing.Union[IResolvable, typing.List[GlobalroutingRuleActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.putActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions">GlobalroutingRuleActions</a>]]

---

##### `reset_actions` <a name="reset_actions" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_id` <a name="reset_id" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_rule_json` <a name="reset_rule_json" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.resetRuleJson"></a>

```python
def reset_rule_json() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.isConstruct"></a>

```python
from skeptools_cdktf_provider_zenduty import globalrouting_rule

globalroutingRule.GlobalroutingRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.isTerraformElement"></a>

```python
from skeptools_cdktf_provider_zenduty import globalrouting_rule

globalroutingRule.GlobalroutingRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.isTerraformResource"></a>

```python
from skeptools_cdktf_provider_zenduty import globalrouting_rule

globalroutingRule.GlobalroutingRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.actions">actions</a></code> | <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList">GlobalroutingRuleActionsList</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.actionsInput">actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions">GlobalroutingRuleActions</a>]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.routerIdInput">router_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.ruleJsonInput">rule_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.routerId">router_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.ruleJson">rule_json</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.actions"></a>

```python
actions: GlobalroutingRuleActionsList
```

- *Type:* <a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList">GlobalroutingRuleActionsList</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.actionsInput"></a>

```python
actions_input: typing.Union[IResolvable, typing.List[GlobalroutingRuleActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions">GlobalroutingRuleActions</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `router_id_input`<sup>Optional</sup> <a name="router_id_input" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.routerIdInput"></a>

```python
router_id_input: str
```

- *Type:* str

---

##### `rule_json_input`<sup>Optional</sup> <a name="rule_json_input" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.ruleJsonInput"></a>

```python
rule_json_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `router_id`<sup>Required</sup> <a name="router_id" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.routerId"></a>

```python
router_id: str
```

- *Type:* str

---

##### `rule_json`<sup>Required</sup> <a name="rule_json" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.ruleJson"></a>

```python
rule_json: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalroutingRuleActions <a name="GlobalroutingRuleActions" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import globalrouting_rule

globalroutingRule.GlobalroutingRuleActions(
  action_type: typing.Union[int, float],
  integration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions.property.actionType">action_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#action_type GlobalroutingRule#action_type}. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions.property.integration">integration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#integration GlobalroutingRule#integration}. |

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions.property.actionType"></a>

```python
action_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#action_type GlobalroutingRule#action_type}.

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions.property.integration"></a>

```python
integration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#integration GlobalroutingRule#integration}.

---

### GlobalroutingRuleConfig <a name="GlobalroutingRuleConfig" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import globalrouting_rule

globalroutingRule.GlobalroutingRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  router_id: str,
  actions: typing.Union[IResolvable, typing.List[GlobalroutingRuleActions]] = None,
  id: str = None,
  rule_json: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#name GlobalroutingRule#name}. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.routerId">router_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#router_id GlobalroutingRule#router_id}. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.actions">actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions">GlobalroutingRuleActions</a>]]</code> | actions block. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#id GlobalroutingRule#id}. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.ruleJson">rule_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#rule_json GlobalroutingRule#rule_json}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#name GlobalroutingRule#name}.

---

##### `router_id`<sup>Required</sup> <a name="router_id" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.routerId"></a>

```python
router_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#router_id GlobalroutingRule#router_id}.

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.actions"></a>

```python
actions: typing.Union[IResolvable, typing.List[GlobalroutingRuleActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions">GlobalroutingRuleActions</a>]]

actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#actions GlobalroutingRule#actions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#id GlobalroutingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule_json`<sup>Optional</sup> <a name="rule_json" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleConfig.property.ruleJson"></a>

```python
rule_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/globalrouting_rule#rule_json GlobalroutingRule#rule_json}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalroutingRuleActionsList <a name="GlobalroutingRuleActionsList" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import globalrouting_rule

globalroutingRule.GlobalroutingRuleActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlobalroutingRuleActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions">GlobalroutingRuleActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlobalroutingRuleActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions">GlobalroutingRuleActions</a>]]

---


### GlobalroutingRuleActionsOutputReference <a name="GlobalroutingRuleActionsOutputReference" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.Initializer"></a>

```python
from skeptools_cdktf_provider_zenduty import globalrouting_rule

globalroutingRule.GlobalroutingRuleActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.resetIntegration">reset_integration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_integration` <a name="reset_integration" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.resetIntegration"></a>

```python
def reset_integration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.actionTypeInput">action_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.integrationInput">integration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.actionType">action_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.integration">integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions">GlobalroutingRuleActions</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.actionTypeInput"></a>

```python
action_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `integration_input`<sup>Optional</sup> <a name="integration_input" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.integrationInput"></a>

```python
integration_input: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.actionType"></a>

```python
action_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `integration`<sup>Required</sup> <a name="integration" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.integration"></a>

```python
integration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GlobalroutingRuleActions, IResolvable]
```

- *Type:* typing.Union[<a href="#@skeptools/provider-zenduty.globalroutingRule.GlobalroutingRuleActions">GlobalroutingRuleActions</a>, cdktf.IResolvable]

---



