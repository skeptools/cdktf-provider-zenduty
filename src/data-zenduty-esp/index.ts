// https://www.terraform.io/docs/providers/zenduty/d/esp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZendutyEspConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#esp_id DataZendutyEsp#esp_id}
  */
  readonly espId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#id DataZendutyEsp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/esp#team_id DataZendutyEsp#team_id}
  */
  readonly teamId: string;
}
export interface DataZendutyEspEscalationPoliciesRulesTargets {
}

export function dataZendutyEspEscalationPoliciesRulesTargetsToTerraform(struct?: DataZendutyEspEscalationPoliciesRulesTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataZendutyEspEscalationPoliciesRulesTargetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZendutyEspEscalationPoliciesRulesTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZendutyEspEscalationPoliciesRulesTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getNumberAttribute('target_type');
  }
}

export class DataZendutyEspEscalationPoliciesRulesTargetsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZendutyEspEscalationPoliciesRulesTargetsOutputReference {
    return new DataZendutyEspEscalationPoliciesRulesTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZendutyEspEscalationPoliciesRules {
}

export function dataZendutyEspEscalationPoliciesRulesToTerraform(struct?: DataZendutyEspEscalationPoliciesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataZendutyEspEscalationPoliciesRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZendutyEspEscalationPoliciesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZendutyEspEscalationPoliciesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delay - computed: true, optional: false, required: false
  public get delay() {
    return this.getNumberAttribute('delay');
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getNumberAttribute('position');
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataZendutyEspEscalationPoliciesRulesTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }
}

export class DataZendutyEspEscalationPoliciesRulesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZendutyEspEscalationPoliciesRulesOutputReference {
    return new DataZendutyEspEscalationPoliciesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZendutyEspEscalationPolicies {
}

export function dataZendutyEspEscalationPoliciesToTerraform(struct?: DataZendutyEspEscalationPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataZendutyEspEscalationPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZendutyEspEscalationPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZendutyEspEscalationPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // global_ep - computed: true, optional: false, required: false
  public get globalEp() {
    return this.getBooleanAttribute('global_ep');
  }

  // move_to_next - computed: true, optional: false, required: false
  public get moveToNext() {
    return this.getBooleanAttribute('move_to_next');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // repeat_policy - computed: true, optional: false, required: false
  public get repeatPolicy() {
    return this.getNumberAttribute('repeat_policy');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataZendutyEspEscalationPoliciesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // team - computed: true, optional: false, required: false
  public get team() {
    return this.getStringAttribute('team');
  }

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }
}

export class DataZendutyEspEscalationPoliciesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZendutyEspEscalationPoliciesOutputReference {
    return new DataZendutyEspEscalationPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/zenduty/d/esp zenduty_esp}
*/
export class DataZendutyEsp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenduty_esp";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/zenduty/d/esp zenduty_esp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZendutyEspConfig
  */
  public constructor(scope: Construct, id: string, config: DataZendutyEspConfig) {
    super(scope, id, {
      terraformResourceType: 'zenduty_esp',
      terraformGeneratorMetadata: {
        providerName: 'zenduty',
        providerVersion: '0.1.9',
        providerVersionConstraint: '~> 0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._espId = config.espId;
    this._id = config.id;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // escalation_policies - computed: true, optional: false, required: false
  private _escalationPolicies = new DataZendutyEspEscalationPoliciesList(this, "escalation_policies", false);
  public get escalationPolicies() {
    return this._escalationPolicies;
  }

  // esp_id - computed: false, optional: true, required: false
  private _espId?: string; 
  public get espId() {
    return this.getStringAttribute('esp_id');
  }
  public set espId(value: string) {
    this._espId = value;
  }
  public resetEspId() {
    this._espId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espIdInput() {
    return this._espId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      esp_id: cdktf.stringToTerraform(this._espId),
      id: cdktf.stringToTerraform(this._id),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }
}
