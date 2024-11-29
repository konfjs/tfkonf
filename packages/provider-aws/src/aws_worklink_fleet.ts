import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsWorklinkFleetArgsIdentityProvider {
  saml_metadata: string;
  type: string;
}
export interface AwsWorklinkFleetArgsNetwork {
  security_group_ids: string[];
  subnet_ids: string[];
  vpc_id: string;
}
export interface AwsWorklinkFleetArgs {
  audit_stream_arn?: string;
  device_ca_certificate?: string;
  display_name?: string;
  name: string;
  optimize_for_end_user_location?: boolean;
  identity_provider: AwsWorklinkFleetArgsIdentityProvider;
  network: AwsWorklinkFleetArgsNetwork;
}
export class aws_worklink_fleet extends TerraformResource {
  readonly arn!: string;
  readonly company_code!: string;
  readonly created_time!: string;
  readonly id?: string;
  readonly last_updated_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWorklinkFleetArgs) {
    super(config, "resource", args, resourceName, "aws_worklink_fleet");
  }
}