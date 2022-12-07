// https://www.terraform.io/docs/providers/zenduty/r/esp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EspConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/esp#description Esp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/esp#id Esp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/esp#move_to_next Esp#move_to_next}
  */
  readonly moveToNext?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/esp#name Esp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/esp#repeat_policy Esp#repeat_policy}
  */
  readonly repeatPolicy?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/esp#summary Esp#summary}
  */
  readonly summary?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/esp#team_id Esp#team_id}
  */
  readonly teamId: string;
  /**
  * rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/esp#rules Esp#rules}
  */
  readonly rules?: EspRules[] | cdktf.IResolvable;
}
export interface EspRulesTargets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/esp#target_id Esp#target_id}
  */
  readonly targetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/esp#target_type Esp#target_type}
  */
  readonly targetType?: number;
}

export function espRulesTargetsToTerraform(struct?: EspRulesTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_id: cdktf.stringToTerraform(struct!.targetId),
    target_type: cdktf.numberToTerraform(struct!.targetType),
  }
}

export class EspRulesTargetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EspRulesTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetId = this._targetId;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EspRulesTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetId = undefined;
      this._targetType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetId = value.targetId;
      this._targetType = value.targetType;
    }
  }

  // target_id - computed: false, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: number; 
  public get targetType() {
    return this.getNumberAttribute('target_type');
  }
  public set targetType(value: number) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }
}

export class EspRulesTargetsList extends cdktf.ComplexList {
  public internalValue? : EspRulesTargets[] | cdktf.IResolvable

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
  public get(index: number): EspRulesTargetsOutputReference {
    return new EspRulesTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EspRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/esp#delay Esp#delay}
  */
  readonly delay?: number;
  /**
  * targets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/esp#targets Esp#targets}
  */
  readonly targets?: EspRulesTargets[] | cdktf.IResolvable;
}

export function espRulesToTerraform(struct?: EspRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: cdktf.numberToTerraform(struct!.delay),
    targets: cdktf.listMapper(espRulesTargetsToTerraform, true)(struct!.targets),
  }
}

export class EspRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EspRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EspRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delay = undefined;
      this._targets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delay = value.delay;
      this._targets.internalValue = value.targets;
    }
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new EspRulesTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: EspRulesTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}

export class EspRulesList extends cdktf.ComplexList {
  public internalValue? : EspRules[] | cdktf.IResolvable

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
  public get(index: number): EspRulesOutputReference {
    return new EspRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/esp zenduty_esp}
*/
export class Esp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenduty_esp";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/zenduty/r/esp zenduty_esp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EspConfig
  */
  public constructor(scope: Construct, id: string, config: EspConfig) {
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
    this._description = config.description;
    this._id = config.id;
    this._moveToNext = config.moveToNext;
    this._name = config.name;
    this._repeatPolicy = config.repeatPolicy;
    this._summary = config.summary;
    this._teamId = config.teamId;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // move_to_next - computed: false, optional: true, required: false
  private _moveToNext?: boolean | cdktf.IResolvable; 
  public get moveToNext() {
    return this.getBooleanAttribute('move_to_next');
  }
  public set moveToNext(value: boolean | cdktf.IResolvable) {
    this._moveToNext = value;
  }
  public resetMoveToNext() {
    this._moveToNext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moveToNextInput() {
    return this._moveToNext;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // repeat_policy - computed: false, optional: true, required: false
  private _repeatPolicy?: number; 
  public get repeatPolicy() {
    return this.getNumberAttribute('repeat_policy');
  }
  public set repeatPolicy(value: number) {
    this._repeatPolicy = value;
  }
  public resetRepeatPolicy() {
    this._repeatPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatPolicyInput() {
    return this._repeatPolicy;
  }

  // summary - computed: false, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
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

  // rules - computed: false, optional: true, required: false
  private _rules = new EspRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: EspRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      move_to_next: cdktf.booleanToTerraform(this._moveToNext),
      name: cdktf.stringToTerraform(this._name),
      repeat_policy: cdktf.numberToTerraform(this._repeatPolicy),
      summary: cdktf.stringToTerraform(this._summary),
      team_id: cdktf.stringToTerraform(this._teamId),
      rules: cdktf.listMapper(espRulesToTerraform, true)(this._rules.internalValue),
    };
  }
}
