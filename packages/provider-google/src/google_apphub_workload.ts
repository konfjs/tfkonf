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
export interface Timeouts {
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
  attributes: Attributes;
  timeouts: Timeouts;
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