import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApphubServiceArgsAttributesBusinessOwners {
  display_name?: string;
  email: string;
}

export interface GoogleApphubServiceArgsAttributesCriticality {
  type: string;
}

export interface GoogleApphubServiceArgsAttributesDeveloperOwners {
  display_name?: string;
  email: string;
}

export interface GoogleApphubServiceArgsAttributesEnvironment {
  type: string;
}

export interface GoogleApphubServiceArgsAttributesOperatorOwners {
  display_name?: string;
  email: string;
}

export interface GoogleApphubServiceArgsAttributes {
  business_owners: GoogleApphubServiceArgsAttributesBusinessOwners;
  criticality: GoogleApphubServiceArgsAttributesCriticality;
  developer_owners: GoogleApphubServiceArgsAttributesDeveloperOwners;
  environment: GoogleApphubServiceArgsAttributesEnvironment;
  operator_owners: GoogleApphubServiceArgsAttributesOperatorOwners;
}

export interface GoogleApphubServiceArgsTimeouts {
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
  attributes: GoogleApphubServiceArgsAttributes;
  timeouts?: GoogleApphubServiceArgsTimeouts;
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
