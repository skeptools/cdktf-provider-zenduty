/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://www.terraform.io/docs/providers/zenduty/d/roles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZendutyRolesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/roles#id DataZendutyRoles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/roles#team_id DataZendutyRoles#team_id}
  */
  readonly teamId: string;
}
export interface DataZendutyRolesRoles {
}

export function dataZendutyRolesRolesToTerraform(struct?: DataZendutyRolesRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataZendutyRolesRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZendutyRolesRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZendutyRolesRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // rank - computed: true, optional: false, required: false
  public get rank() {
    return this.getNumberAttribute('rank');
  }

  // team - computed: true, optional: false, required: false
  public get team() {
    return this.getStringAttribute('team');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }
}

export class DataZendutyRolesRolesList extends cdktf.ComplexList {

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
  public get(index: number): DataZendutyRolesRolesOutputReference {
    return new DataZendutyRolesRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/zenduty/d/roles zenduty_roles}
*/
export class DataZendutyRoles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenduty_roles";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/zenduty/d/roles zenduty_roles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZendutyRolesConfig
  */
  public constructor(scope: Construct, id: string, config: DataZendutyRolesConfig) {
    super(scope, id, {
      terraformResourceType: 'zenduty_roles',
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
    this._id = config.id;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // roles - computed: true, optional: false, required: false
  private _roles = new DataZendutyRolesRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
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
      id: cdktf.stringToTerraform(this._id),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }
}
