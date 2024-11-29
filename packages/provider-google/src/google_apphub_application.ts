import { TerraformConfig, TerraformResource } from "tfs";
export interface BusinessOwners {
  display_name?: string;
  email: string;
}
export interface Criticality {
  type: string;
}
export interface DeveloperOwners {
  display_name?: string;
  email: string;
}
export interface Environment {
  type: string;
}
export interface OperatorOwners {
  display_name?: string;
  email: string;
}
export interface Attributes {
  business_owners: BusinessOwners;
  criticality: Criticality;
  developer_owners: DeveloperOwners;
  environment: Environment;
  operator_owners: OperatorOwners;
}
export interface Scope {
  type: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleApphubApplicationArgs {
  application_id: string;
  description?: string;
  display_name?: string;
  location: string;
  attributes: Attributes;
  scope: Scope;
  timeouts: Timeouts;
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