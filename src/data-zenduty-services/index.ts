// https://www.terraform.io/docs/providers/zenduty/d/services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZendutyServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/services#id DataZendutyServices#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/services#service_id DataZendutyServices#service_id}
  */
  readonly serviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/services#team_id DataZendutyServices#team_id}
  */
  readonly teamId: string;
}
export interface DataZendutyServicesServices {
}

export function dataZendutyServicesServicesToTerraform(struct?: DataZendutyServicesServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataZendutyServicesServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZendutyServicesServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZendutyServicesServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acknowledgement_timeout - computed: true, optional: false, required: false
  public get acknowledgementTimeout() {
    return this.getNumberAttribute('acknowledgement_timeout');
  }

  // auto_resolve_timeout - computed: true, optional: false, required: false
  public get autoResolveTimeout() {
    return this.getNumberAttribute('auto_resolve_timeout');
  }

  // collation - computed: true, optional: false, required: false
  public get collation() {
    return this.getNumberAttribute('collation');
  }

  // collation_time - computed: true, optional: false, required: false
  public get collationTime() {
    return this.getNumberAttribute('collation_time');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // escalation_policy - computed: true, optional: false, required: false
  public get escalationPolicy() {
    return this.getStringAttribute('escalation_policy');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sla - computed: true, optional: false, required: false
  public get sla() {
    return this.getStringAttribute('sla');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // task_template - computed: true, optional: false, required: false
  public get taskTemplate() {
    return this.getStringAttribute('task_template');
  }

  // team - computed: true, optional: false, required: false
  public get team() {
    return this.getStringAttribute('team');
  }

  // team_priority - computed: true, optional: false, required: false
  public get teamPriority() {
    return this.getStringAttribute('team_priority');
  }

  // under_maintenance - computed: true, optional: false, required: false
  public get underMaintenance() {
    return this.getBooleanAttribute('under_maintenance');
  }

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }
}

export class DataZendutyServicesServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataZendutyServicesServicesOutputReference {
    return new DataZendutyServicesServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/zenduty/d/services zenduty_services}
*/
export class DataZendutyServices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenduty_services";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/zenduty/d/services zenduty_services} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZendutyServicesConfig
  */
  public constructor(scope: Construct, id: string, config: DataZendutyServicesConfig) {
    super(scope, id, {
      terraformResourceType: 'zenduty_services',
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
    this._serviceId = config.serviceId;
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

  // service_id - computed: false, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // services - computed: true, optional: false, required: false
  private _services = new DataZendutyServicesServicesList(this, "services", false);
  public get services() {
    return this._services;
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
      service_id: cdktf.stringToTerraform(this._serviceId),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }
}
