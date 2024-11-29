import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleApphubApplicationArgsAttributesBusinessOwners {
  display_name?: string;
  email: string;
}
export interface GoogleApphubApplicationArgsAttributesCriticality {
  type: string;
}
export interface GoogleApphubApplicationArgsAttributesDeveloperOwners {
  display_name?: string;
  email: string;
}
export interface GoogleApphubApplicationArgsAttributesEnvironment {
  type: string;
}
export interface GoogleApphubApplicationArgsAttributesOperatorOwners {
  display_name?: string;
  email: string;
}
export interface GoogleApphubApplicationArgsAttributes {
  business_owners: GoogleApphubApplicationArgsAttributesBusinessOwners;
  criticality: GoogleApphubApplicationArgsAttributesCriticality;
  developer_owners: GoogleApphubApplicationArgsAttributesDeveloperOwners;
  environment: GoogleApphubApplicationArgsAttributesEnvironment;
  operator_owners: GoogleApphubApplicationArgsAttributesOperatorOwners;
}
export interface GoogleApphubApplicationArgsScope {
  type: string;
}
export interface GoogleApphubApplicationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleApphubApplicationArgs {
  application_id: string;
  description?: string;
  display_name?: string;
  location: string;
  attributes: GoogleApphubApplicationArgsAttributes;
  scope: GoogleApphubApplicationArgsScope;
  timeouts: GoogleApphubApplicationArgsTimeouts;
}
export class google_apphub_application extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly state!: string;
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApphubApplicationArgs) {
    super(config, "resource", args, resourceName, "google_apphub_application");
  }
}