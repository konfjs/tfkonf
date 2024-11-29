import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleApphubWorkloadArgsAttributesBusinessOwners {
  display_name?: string;
  email: string;
}
export interface GoogleApphubWorkloadArgsAttributesCriticality {
  type: string;
}
export interface GoogleApphubWorkloadArgsAttributesDeveloperOwners {
  display_name?: string;
  email: string;
}
export interface GoogleApphubWorkloadArgsAttributesEnvironment {
  type: string;
}
export interface GoogleApphubWorkloadArgsAttributesOperatorOwners {
  display_name?: string;
  email: string;
}
export interface GoogleApphubWorkloadArgsAttributes {
  business_owners: GoogleApphubWorkloadArgsAttributesBusinessOwners;
  criticality: GoogleApphubWorkloadArgsAttributesCriticality;
  developer_owners: GoogleApphubWorkloadArgsAttributesDeveloperOwners;
  environment: GoogleApphubWorkloadArgsAttributesEnvironment;
  operator_owners: GoogleApphubWorkloadArgsAttributesOperatorOwners;
}
export interface GoogleApphubWorkloadArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleApphubWorkloadArgs {
  application_id: string;
  description?: string;
  discovered_workload: string;
  display_name?: string;
  location: string;
  workload_id: string;
  attributes: GoogleApphubWorkloadArgsAttributes;
  timeouts: GoogleApphubWorkloadArgsTimeouts;
}
export class google_apphub_workload extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly state!: string;
  readonly uid!: string;
  readonly update_time!: string;
  readonly workload_properties!: any[];
  readonly workload_reference!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApphubWorkloadArgs) {
    super(config, "resource", args, resourceName, "google_apphub_workload");
  }
}