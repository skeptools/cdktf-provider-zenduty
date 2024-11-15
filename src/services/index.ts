/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://www.terraform.io/docs/providers/zenduty/r/services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/services#collation Services#collation}
  */
  readonly collation?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/services#collation_time Services#collation_time}
  */
  readonly collationTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/services#description Services#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/services#escalation_policy Services#escalation_policy}
  */
  readonly escalationPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/services#id Services#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/services#name Services#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/services#sla Services#sla}
  */
  readonly sla?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/services#summary Services#summary}
  */
  readonly summary?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/services#task_template Services#task_template}
  */
  readonly taskTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/services#team_id Services#team_id}
  */
  readonly teamId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/r/services#team_priority Services#team_priority}
  */
  readonly teamPriority?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/zenduty/r/services zenduty_services}
*/
export class Services extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenduty_services";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/zenduty/r/services zenduty_services} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicesConfig
  */
  public constructor(scope: Construct, id: string, config: ServicesConfig) {
    super(scope, id, {
      terraformResourceType: 'zenduty_services',
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
    this._collation = config.collation;
    this._collationTime = config.collationTime;
    this._description = config.description;
    this._escalationPolicy = config.escalationPolicy;
    this._id = config.id;
    this._name = config.name;
    this._sla = config.sla;
    this._summary = config.summary;
    this._taskTemplate = config.taskTemplate;
    this._teamId = config.teamId;
    this._teamPriority = config.teamPriority;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collation - computed: false, optional: true, required: false
  private _collation?: number; 
  public get collation() {
    return this.getNumberAttribute('collation');
  }
  public set collation(value: number) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
  }

  // collation_time - computed: false, optional: true, required: false
  private _collationTime?: number; 
  public get collationTime() {
    return this.getNumberAttribute('collation_time');
  }
  public set collationTime(value: number) {
    this._collationTime = value;
  }
  public resetCollationTime() {
    this._collationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationTimeInput() {
    return this._collationTime;
  }

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

  // escalation_policy - computed: false, optional: false, required: true
  private _escalationPolicy?: string; 
  public get escalationPolicy() {
    return this.getStringAttribute('escalation_policy');
  }
  public set escalationPolicy(value: string) {
    this._escalationPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationPolicyInput() {
    return this._escalationPolicy;
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

  // sla - computed: false, optional: true, required: false
  private _sla?: string; 
  public get sla() {
    return this.getStringAttribute('sla');
  }
  public set sla(value: string) {
    this._sla = value;
  }
  public resetSla() {
    this._sla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaInput() {
    return this._sla;
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

  // task_template - computed: false, optional: true, required: false
  private _taskTemplate?: string; 
  public get taskTemplate() {
    return this.getStringAttribute('task_template');
  }
  public set taskTemplate(value: string) {
    this._taskTemplate = value;
  }
  public resetTaskTemplate() {
    this._taskTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTemplateInput() {
    return this._taskTemplate;
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

  // team_priority - computed: false, optional: true, required: false
  private _teamPriority?: string; 
  public get teamPriority() {
    return this.getStringAttribute('team_priority');
  }
  public set teamPriority(value: string) {
    this._teamPriority = value;
  }
  public resetTeamPriority() {
    this._teamPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamPriorityInput() {
    return this._teamPriority;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collation: cdktf.numberToTerraform(this._collation),
      collation_time: cdktf.numberToTerraform(this._collationTime),
      description: cdktf.stringToTerraform(this._description),
      escalation_policy: cdktf.stringToTerraform(this._escalationPolicy),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      sla: cdktf.stringToTerraform(this._sla),
      summary: cdktf.stringToTerraform(this._summary),
      task_template: cdktf.stringToTerraform(this._taskTemplate),
      team_id: cdktf.stringToTerraform(this._teamId),
      team_priority: cdktf.stringToTerraform(this._teamPriority),
    };
  }
}
