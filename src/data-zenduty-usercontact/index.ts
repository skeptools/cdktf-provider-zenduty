// https://www.terraform.io/docs/providers/zenduty/d/usercontact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZendutyUsercontactConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact#contact_type DataZendutyUsercontact#contact_type}
  */
  readonly contactType: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact#id DataZendutyUsercontact#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact#user_id DataZendutyUsercontact#user_id}
  */
  readonly userId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact#value DataZendutyUsercontact#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact zenduty_usercontact}
*/
export class DataZendutyUsercontact extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenduty_usercontact";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/zenduty/d/usercontact zenduty_usercontact} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZendutyUsercontactConfig
  */
  public constructor(scope: Construct, id: string, config: DataZendutyUsercontactConfig) {
    super(scope, id, {
      terraformResourceType: 'zenduty_usercontact',
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
    this._contactType = config.contactType;
    this._id = config.id;
    this._userId = config.userId;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_type - computed: false, optional: false, required: true
  private _contactType?: number; 
  public get contactType() {
    return this.getNumberAttribute('contact_type');
  }
  public set contactType(value: number) {
    this._contactType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactTypeInput() {
    return this._contactType;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_type: cdktf.numberToTerraform(this._contactType),
      id: cdktf.stringToTerraform(this._id),
      user_id: cdktf.stringToTerraform(this._userId),
      value: cdktf.stringToTerraform(this._value),
    };
  }
}
