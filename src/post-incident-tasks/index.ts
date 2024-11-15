/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostIncidentTasksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#assigned_to PostIncidentTasks#assigned_to}
  */
  readonly assignedTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#description PostIncidentTasks#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#due_in_time PostIncidentTasks#due_in_time}
  */
  readonly dueInTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#id PostIncidentTasks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#status PostIncidentTasks#status}
  */
  readonly status?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#team_id PostIncidentTasks#team_id}
  */
  readonly teamId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks#title PostIncidentTasks#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks zenduty_post_incident_tasks}
*/
export class PostIncidentTasks extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenduty_post_incident_tasks";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/zenduty/r/post_incident_tasks zenduty_post_incident_tasks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostIncidentTasksConfig
  */
  public constructor(scope: Construct, id: string, config: PostIncidentTasksConfig) {
    super(scope, id, {
      terraformResourceType: 'zenduty_post_incident_tasks',
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
    this._assignedTo = config.assignedTo;
    this._description = config.description;
    this._dueInTime = config.dueInTime;
    this._id = config.id;
    this._status = config.status;
    this._teamId = config.teamId;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_to - computed: false, optional: true, required: false
  private _assignedTo?: string; 
  public get assignedTo() {
    return this.getStringAttribute('assigned_to');
  }
  public set assignedTo(value: string) {
    this._assignedTo = value;
  }
  public resetAssignedTo() {
    this._assignedTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedToInput() {
    return this._assignedTo;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // due_in_time - computed: false, optional: true, required: false
  private _dueInTime?: string; 
  public get dueInTime() {
    return this.getStringAttribute('due_in_time');
  }
  public set dueInTime(value: string) {
    this._dueInTime = value;
  }
  public resetDueInTime() {
    this._dueInTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dueInTimeInput() {
    return this._dueInTime;
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

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assigned_to: cdktf.stringToTerraform(this._assignedTo),
      description: cdktf.stringToTerraform(this._description),
      due_in_time: cdktf.stringToTerraform(this._dueInTime),
      id: cdktf.stringToTerraform(this._id),
      status: cdktf.numberToTerraform(this._status),
      team_id: cdktf.stringToTerraform(this._teamId),
      title: cdktf.stringToTerraform(this._title),
    };
  }
}
