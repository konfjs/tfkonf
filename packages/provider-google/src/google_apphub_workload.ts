import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleApphubWorkloadArgsattributesBusinessOwners {
  display_name?: string;
  email: string;
}
export interface GoogleApphubWorkloadArgsattributescriticality {
  type: string;
}
export interface GoogleApphubWorkloadArgsattributesDeveloperOwners {
  display_name?: string;
  email: string;
}
export interface GoogleApphubWorkloadArgsattributesenvironment {
  type: string;
}
export interface GoogleApphubWorkloadArgsattributesOperatorOwners {
  display_name?: string;
  email: string;
}
export interface GoogleApphubWorkloadArgsattributes {
  business_owners: GoogleApphubWorkloadArgsattributesBusinessOwners;
  criticality: GoogleApphubWorkloadArgsattributescriticality;
  developer_owners: GoogleApphubWorkloadArgsattributesDeveloperOwners;
  environment: GoogleApphubWorkloadArgsattributesenvironment;
  operator_owners: GoogleApphubWorkloadArgsattributesOperatorOwners;
}
export interface GoogleApphubWorkloadArgstimeouts {
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
  attributes: GoogleApphubWorkloadArgsattributes;
  timeouts: GoogleApphubWorkloadArgstimeouts;
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