/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://www.terraform.io/docs/providers/zenduty/r/schedules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchedulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#description Schedules#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#id Schedules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#name Schedules#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#summary Schedules#summary}
  */
  readonly summary?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#team_id Schedules#team_id}
  */
  readonly teamId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#time_zone Schedules#time_zone}
  */
  readonly timeZone: string;
  /**
  * layers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#layers Schedules#layers}
  */
  readonly layers?: SchedulesLayers[] | cdktf.IResolvable;
  /**
  * overrides block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#overrides Schedules#overrides}
  */
  readonly overrides?: SchedulesOverrides[] | cdktf.IResolvable;
}
export interface SchedulesLayersRestrictions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#duration Schedules#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#start_day_of_week Schedules#start_day_of_week}
  */
  readonly startDayOfWeek: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#start_time_of_day Schedules#start_time_of_day}
  */
  readonly startTimeOfDay: string;
}

export function schedulesLayersRestrictionsToTerraform(struct?: SchedulesLayersRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    start_day_of_week: cdktf.numberToTerraform(struct!.startDayOfWeek),
    start_time_of_day: cdktf.stringToTerraform(struct!.startTimeOfDay),
  }
}

export class SchedulesLayersRestrictionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchedulesLayersRestrictions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._startDayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDayOfWeek = this._startDayOfWeek;
    }
    if (this._startTimeOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeOfDay = this._startTimeOfDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulesLayersRestrictions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._startDayOfWeek = undefined;
      this._startTimeOfDay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._startDayOfWeek = value.startDayOfWeek;
      this._startTimeOfDay = value.startTimeOfDay;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // start_day_of_week - computed: false, optional: false, required: true
  private _startDayOfWeek?: number; 
  public get startDayOfWeek() {
    return this.getNumberAttribute('start_day_of_week');
  }
  public set startDayOfWeek(value: number) {
    this._startDayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDayOfWeekInput() {
    return this._startDayOfWeek;
  }

  // start_time_of_day - computed: false, optional: false, required: true
  private _startTimeOfDay?: string; 
  public get startTimeOfDay() {
    return this.getStringAttribute('start_time_of_day');
  }
  public set startTimeOfDay(value: string) {
    this._startTimeOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeOfDayInput() {
    return this._startTimeOfDay;
  }
}

export class SchedulesLayersRestrictionsList extends cdktf.ComplexList {
  public internalValue? : SchedulesLayersRestrictions[] | cdktf.IResolvable

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
  public get(index: number): SchedulesLayersRestrictionsOutputReference {
    return new SchedulesLayersRestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchedulesLayers {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#name Schedules#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#restriction_type Schedules#restriction_type}
  */
  readonly restrictionType?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#rotation_end_time Schedules#rotation_end_time}
  */
  readonly rotationEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#rotation_start_time Schedules#rotation_start_time}
  */
  readonly rotationStartTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#shift_length Schedules#shift_length}
  */
  readonly shiftLength: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#users Schedules#users}
  */
  readonly users: string[];
  /**
  * restrictions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#restrictions Schedules#restrictions}
  */
  readonly restrictions?: SchedulesLayersRestrictions[] | cdktf.IResolvable;
}

export function schedulesLayersToTerraform(struct?: SchedulesLayers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    restriction_type: cdktf.numberToTerraform(struct!.restrictionType),
    rotation_end_time: cdktf.stringToTerraform(struct!.rotationEndTime),
    rotation_start_time: cdktf.stringToTerraform(struct!.rotationStartTime),
    shift_length: cdktf.numberToTerraform(struct!.shiftLength),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
    restrictions: cdktf.listMapper(schedulesLayersRestrictionsToTerraform, true)(struct!.restrictions),
  }
}

export class SchedulesLayersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchedulesLayers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._restrictionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictionType = this._restrictionType;
    }
    if (this._rotationEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationEndTime = this._rotationEndTime;
    }
    if (this._rotationStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationStartTime = this._rotationStartTime;
    }
    if (this._shiftLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.shiftLength = this._shiftLength;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    if (this._restrictions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictions = this._restrictions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulesLayers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._restrictionType = undefined;
      this._rotationEndTime = undefined;
      this._rotationStartTime = undefined;
      this._shiftLength = undefined;
      this._users = undefined;
      this._restrictions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._restrictionType = value.restrictionType;
      this._rotationEndTime = value.rotationEndTime;
      this._rotationStartTime = value.rotationStartTime;
      this._shiftLength = value.shiftLength;
      this._users = value.users;
      this._restrictions.internalValue = value.restrictions;
    }
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

  // restriction_type - computed: false, optional: true, required: false
  private _restrictionType?: number; 
  public get restrictionType() {
    return this.getNumberAttribute('restriction_type');
  }
  public set restrictionType(value: number) {
    this._restrictionType = value;
  }
  public resetRestrictionType() {
    this._restrictionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionTypeInput() {
    return this._restrictionType;
  }

  // rotation_end_time - computed: false, optional: true, required: false
  private _rotationEndTime?: string; 
  public get rotationEndTime() {
    return this.getStringAttribute('rotation_end_time');
  }
  public set rotationEndTime(value: string) {
    this._rotationEndTime = value;
  }
  public resetRotationEndTime() {
    this._rotationEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationEndTimeInput() {
    return this._rotationEndTime;
  }

  // rotation_start_time - computed: false, optional: false, required: true
  private _rotationStartTime?: string; 
  public get rotationStartTime() {
    return this.getStringAttribute('rotation_start_time');
  }
  public set rotationStartTime(value: string) {
    this._rotationStartTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationStartTimeInput() {
    return this._rotationStartTime;
  }

  // shift_length - computed: false, optional: false, required: true
  private _shiftLength?: number; 
  public get shiftLength() {
    return this.getNumberAttribute('shift_length');
  }
  public set shiftLength(value: number) {
    this._shiftLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shiftLengthInput() {
    return this._shiftLength;
  }

  // users - computed: false, optional: false, required: true
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // restrictions - computed: false, optional: true, required: false
  private _restrictions = new SchedulesLayersRestrictionsList(this, "restrictions", false);
  public get restrictions() {
    return this._restrictions;
  }
  public putRestrictions(value: SchedulesLayersRestrictions[] | cdktf.IResolvable) {
    this._restrictions.internalValue = value;
  }
  public resetRestrictions() {
    this._restrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions.internalValue;
  }
}

export class SchedulesLayersList extends cdktf.ComplexList {
  public internalValue? : SchedulesLayers[] | cdktf.IResolvable

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
  public get(index: number): SchedulesLayersOutputReference {
    return new SchedulesLayersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchedulesOverrides {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#end_time Schedules#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#name Schedules#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#start_time Schedules#start_time}
  */
  readonly startTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/schedules#user Schedules#user}
  */
  readonly user: string;
}

export function schedulesOverridesToTerraform(struct?: SchedulesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    name: cdktf.stringToTerraform(struct!.name),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export class SchedulesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchedulesOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulesOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._name = undefined;
      this._startTime = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._name = value.name;
      this._startTime = value.startTime;
      this._user = value.user;
    }
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class SchedulesOverridesList extends cdktf.ComplexList {
  public internalValue? : SchedulesOverrides[] | cdktf.IResolvable

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
  public get(index: number): SchedulesOverridesOutputReference {
    return new SchedulesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/schedules zenduty_schedules}
*/
export class Schedules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenduty_schedules";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/zenduty/r/schedules zenduty_schedules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchedulesConfig
  */
  public constructor(scope: Construct, id: string, config: SchedulesConfig) {
    super(scope, id, {
      terraformResourceType: 'zenduty_schedules',
      terraformGeneratorMetadata: {
        providerName: 'zenduty',
        providerVersion: '0.2.5',
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
    this._name = config.name;
    this._summary = config.summary;
    this._teamId = config.teamId;
    this._timeZone = config.timeZone;
    this._layers.internalValue = config.layers;
    this._overrides.internalValue = config.overrides;
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

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // layers - computed: false, optional: true, required: false
  private _layers = new SchedulesLayersList(this, "layers", false);
  public get layers() {
    return this._layers;
  }
  public putLayers(value: SchedulesLayers[] | cdktf.IResolvable) {
    this._layers.internalValue = value;
  }
  public resetLayers() {
    this._layers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layersInput() {
    return this._layers.internalValue;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new SchedulesOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: SchedulesOverrides[] | cdktf.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      summary: cdktf.stringToTerraform(this._summary),
      team_id: cdktf.stringToTerraform(this._teamId),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      layers: cdktf.listMapper(schedulesLayersToTerraform, true)(this._layers.internalValue),
      overrides: cdktf.listMapper(schedulesOverridesToTerraform, true)(this._overrides.internalValue),
    };
  }
}
