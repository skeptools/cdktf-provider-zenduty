// https://www.terraform.io/docs/providers/zenduty/d/incidents
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZendutyIncidentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#id DataZendutyIncidents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#number DataZendutyIncidents#number}
  */
  readonly number?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/incidents#status DataZendutyIncidents#status}
  */
  readonly status?: string;
}
export interface DataZendutyIncidentsResults {
}

export function dataZendutyIncidentsResultsToTerraform(struct?: DataZendutyIncidentsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataZendutyIncidentsResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZendutyIncidentsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZendutyIncidentsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acknowledged_date - computed: true, optional: false, required: false
  public get acknowledgedDate() {
    return this.getStringAttribute('acknowledged_date');
  }

  // assigned_to - computed: true, optional: false, required: false
  public get assignedTo() {
    return this.getStringAttribute('assigned_to');
  }

  // assigned_to_name - computed: true, optional: false, required: false
  public get assignedToName() {
    return this.getStringAttribute('assigned_to_name');
  }

  // context_window_end - computed: true, optional: false, required: false
  public get contextWindowEnd() {
    return this.getStringAttribute('context_window_end');
  }

  // context_window_start - computed: true, optional: false, required: false
  public get contextWindowStart() {
    return this.getStringAttribute('context_window_start');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // escalation_policy_object_name - computed: true, optional: false, required: false
  public get escalationPolicyObjectName() {
    return this.getStringAttribute('escalation_policy_object_name');
  }

  // escalation_policy_object_unique_id - computed: true, optional: false, required: false
  public get escalationPolicyObjectUniqueId() {
    return this.getStringAttribute('escalation_policy_object_unique_id');
  }

  // esccalation_policy - computed: true, optional: false, required: false
  public get esccalationPolicy() {
    return this.getStringAttribute('esccalation_policy');
  }

  // incident_key - computed: true, optional: false, required: false
  public get incidentKey() {
    return this.getStringAttribute('incident_key');
  }

  // incident_number - computed: true, optional: false, required: false
  public get incidentNumber() {
    return this.getNumberAttribute('incident_number');
  }

  // merged_with - computed: true, optional: false, required: false
  public get mergedWith() {
    return this.getStringAttribute('merged_with');
  }

  // resolved_date - computed: true, optional: false, required: false
  public get resolvedDate() {
    return this.getStringAttribute('resolved_date');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // service_object - computed: true, optional: false, required: false
  public get serviceObject() {
    return this.getStringAttribute('service_object');
  }

  // service_object_acknowledgement_timeout - computed: true, optional: false, required: false
  public get serviceObjectAcknowledgementTimeout() {
    return this.getNumberAttribute('service_object_acknowledgement_timeout');
  }

  // service_object_auto_resolve_timeout - computed: true, optional: false, required: false
  public get serviceObjectAutoResolveTimeout() {
    return this.getNumberAttribute('service_object_auto_resolve_timeout');
  }

  // service_object_collation - computed: true, optional: false, required: false
  public get serviceObjectCollation() {
    return this.getNumberAttribute('service_object_collation');
  }

  // service_object_collation_time - computed: true, optional: false, required: false
  public get serviceObjectCollationTime() {
    return this.getNumberAttribute('service_object_collation_time');
  }

  // service_object_created_by - computed: true, optional: false, required: false
  public get serviceObjectCreatedBy() {
    return this.getStringAttribute('service_object_created_by');
  }

  // service_object_creation_date - computed: true, optional: false, required: false
  public get serviceObjectCreationDate() {
    return this.getStringAttribute('service_object_creation_date');
  }

  // service_object_description - computed: true, optional: false, required: false
  public get serviceObjectDescription() {
    return this.getStringAttribute('service_object_description');
  }

  // service_object_escalation_policy - computed: true, optional: false, required: false
  public get serviceObjectEscalationPolicy() {
    return this.getStringAttribute('service_object_escalation_policy');
  }

  // service_object_name - computed: true, optional: false, required: false
  public get serviceObjectName() {
    return this.getStringAttribute('service_object_name');
  }

  // service_object_sla - computed: true, optional: false, required: false
  public get serviceObjectSla() {
    return this.getStringAttribute('service_object_sla');
  }

  // service_object_status - computed: true, optional: false, required: false
  public get serviceObjectStatus() {
    return this.getNumberAttribute('service_object_status');
  }

  // service_object_summary - computed: true, optional: false, required: false
  public get serviceObjectSummary() {
    return this.getStringAttribute('service_object_summary');
  }

  // service_object_task_template - computed: true, optional: false, required: false
  public get serviceObjectTaskTemplate() {
    return this.getStringAttribute('service_object_task_template');
  }

  // service_object_team - computed: true, optional: false, required: false
  public get serviceObjectTeam() {
    return this.getStringAttribute('service_object_team');
  }

  // service_object_team_priority - computed: true, optional: false, required: false
  public get serviceObjectTeamPriority() {
    return this.getStringAttribute('service_object_team_priority');
  }

  // service_object_unique_id - computed: true, optional: false, required: false
  public get serviceObjectUniqueId() {
    return this.getStringAttribute('service_object_unique_id');
  }

  // sla - computed: true, optional: false, required: false
  public get sla() {
    return this.getStringAttribute('sla');
  }

  // sla_object - computed: true, optional: false, required: false
  public get slaObject() {
    return this.getStringAttribute('sla_object');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // team_priority - computed: true, optional: false, required: false
  public get teamPriority() {
    return this.getStringAttribute('team_priority');
  }

  // team_priority_object - computed: true, optional: false, required: false
  public get teamPriorityObject() {
    return this.getStringAttribute('team_priority_object');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }

  // urgency - computed: true, optional: false, required: false
  public get urgency() {
    return this.getNumberAttribute('urgency');
  }
}

export class DataZendutyIncidentsResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataZendutyIncidentsResultsOutputReference {
    return new DataZendutyIncidentsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/zenduty/d/incidents zenduty_incidents}
*/
export class DataZendutyIncidents extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenduty_incidents";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/zenduty/d/incidents zenduty_incidents} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZendutyIncidentsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZendutyIncidentsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zenduty_incidents',
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
    this._id = config.id;
    this._number = config.number;
    this._status = config.status;
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

  // number - computed: false, optional: true, required: false
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataZendutyIncidentsResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      number: cdktf.stringToTerraform(this._number),
      status: cdktf.stringToTerraform(this._status),
    };
  }
}
