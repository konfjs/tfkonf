import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsConnectUserArgsIdentityInfo {
  email?: string;
  first_name?: string;
  last_name?: string;
}
export interface AwsConnectUserArgsPhoneConfig {
  after_contact_work_time_limit?: number;
  auto_accept?: boolean;
  desk_phone_number?: string;
  phone_type: string;
}
export interface AwsConnectUserArgs {
  hierarchy_group_id?: string;
  instance_id: string;
  name: string;
  password?: string;
  routing_profile_id: string;
  security_profile_ids: string[];
  tags?: {
    [key: string]: string;
  };
  identity_info: AwsConnectUserArgsIdentityInfo;
  phone_config: AwsConnectUserArgsPhoneConfig;
}
export class aws_connect_user extends TerraformResource {
  readonly arn!: string;
  readonly directory_user_id?: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly user_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsConnectUserArgs) {
    super(config, "resource", args, resourceName, "aws_connect_user");
  }
}