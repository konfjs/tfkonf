import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDirectoryServiceTrustArgs {
  conditional_forwarder_ip_addrs?: string[];
  directory_id: string;
  remote_domain_name: string;
  trust_direction: string;
  trust_password: string;
}
export class aws_directory_service_trust extends TerraformResource {
  readonly created_date_time!: string;
  readonly delete_associated_conditional_forwarder?: boolean;
  readonly id!: string;
  readonly last_updated_date_time!: string;
  readonly selective_auth?: string;
  readonly state_last_updated_date_time!: string;
  readonly trust_state!: string;
  readonly trust_state_reason!: string;
  readonly trust_type?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDirectoryServiceTrustArgs) {
    super(config, "resource", args, resourceName, "aws_directory_service_trust");
  }
}