import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleApphubApplicationArgsattributesBusinessOwners {
  display_name?: string;
  email: string;
}
export interface GoogleApphubApplicationArgsattributescriticality {
  type: string;
}
export interface GoogleApphubApplicationArgsattributesDeveloperOwners {
  display_name?: string;
  email: string;
}
export interface GoogleApphubApplicationArgsattributesenvironment {
  type: string;
}
export interface GoogleApphubApplicationArgsattributesOperatorOwners {
  display_name?: string;
  email: string;
}
export interface GoogleApphubApplicationArgsattributes {
  business_owners: GoogleApphubApplicationArgsattributesBusinessOwners;
  criticality: GoogleApphubApplicationArgsattributescriticality;
  developer_owners: GoogleApphubApplicationArgsattributesDeveloperOwners;
  environment: GoogleApphubApplicationArgsattributesenvironment;
  operator_owners: GoogleApphubApplicationArgsattributesOperatorOwners;
}
export interface GoogleApphubApplicationArgsscope {
  type: string;
}
export interface GoogleApphubApplicationArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleApphubApplicationArgs {
  application_id: string;
  description?: string;
  display_name?: string;
  location: string;
  attributes: GoogleApphubApplicationArgsattributes;
  scope: GoogleApphubApplicationArgsscope;
  timeouts: GoogleApphubApplicationArgstimeouts;
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