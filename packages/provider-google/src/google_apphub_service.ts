import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleApphubServiceArgsattributesBusinessOwners {
  display_name?: string;
  email: string;
}
export interface GoogleApphubServiceArgsattributescriticality {
  type: string;
}
export interface GoogleApphubServiceArgsattributesDeveloperOwners {
  display_name?: string;
  email: string;
}
export interface GoogleApphubServiceArgsattributesenvironment {
  type: string;
}
export interface GoogleApphubServiceArgsattributesOperatorOwners {
  display_name?: string;
  email: string;
}
export interface GoogleApphubServiceArgsattributes {
  business_owners: GoogleApphubServiceArgsattributesBusinessOwners;
  criticality: GoogleApphubServiceArgsattributescriticality;
  developer_owners: GoogleApphubServiceArgsattributesDeveloperOwners;
  environment: GoogleApphubServiceArgsattributesenvironment;
  operator_owners: GoogleApphubServiceArgsattributesOperatorOwners;
}
export interface GoogleApphubServiceArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleApphubServiceArgs {
  application_id: string;
  description?: string;
  discovered_service: string;
  display_name?: string;
  location: string;
  service_id: string;
  attributes: GoogleApphubServiceArgsattributes;
  timeouts: GoogleApphubServiceArgstimeouts;
}
export class google_apphub_service extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly service_properties!: any[];
  readonly service_reference!: any[];
  readonly state!: string;
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApphubServiceArgs) {
    super(config, "resource", args, resourceName, "google_apphub_service");
  }
}