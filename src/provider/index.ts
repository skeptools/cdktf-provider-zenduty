// https://www.terraform.io/docs/providers/zenduty
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZendutyProviderConfig {
  /**
  * The base url of the Zenduty
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty#base_url ZendutyProvider#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Your Zenduty API key
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty#token ZendutyProvider#token}
  */
  readonly token: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/zenduty#alias ZendutyProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/zenduty zenduty}
*/
export class ZendutyProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenduty";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/zenduty zenduty} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZendutyProviderConfig
  */
  public constructor(scope: Construct, id: string, config: ZendutyProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'zenduty',
      terraformGeneratorMetadata: {
        providerName: 'zenduty',
        providerVersion: '0.1.9',
        providerVersionConstraint: '~> 0'
      },
      terraformProviderSource: 'Zenduty/zenduty'
    });
    this._baseUrl = config.baseUrl;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this._baseUrl;
  }
  public set baseUrl(value: string | undefined) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_url: cdktf.stringToTerraform(this._baseUrl),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
