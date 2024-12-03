import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsTransferConnectorArgsAs2Config {
  compression: string;
  encryption_algorithm: string;
  local_profile_id: string;
  mdn_response: string;
  mdn_signing_algorithm?: string;
  message_subject?: string;
  partner_profile_id: string;
  signing_algorithm: string;
}
export interface AwsTransferConnectorArgsSftpConfig {
  trusted_host_keys?: string[];
  user_secret_id?: string;
}
export interface AwsTransferConnectorArgs {
  access_role: string;
  logging_role?: string;
  tags?: {
    [key: string]: string;
  };
  url: string;
  as2_config: AwsTransferConnectorArgsAs2Config;
  sftp_config: AwsTransferConnectorArgsSftpConfig;
}
export class aws_transfer_connector extends TerraformResource {
  readonly arn!: string;
  readonly connector_id!: string;
  readonly id?: string;
  readonly security_policy_name?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsTransferConnectorArgs) {
    super(config, "resource", args, resourceName, "aws_transfer_connector");
  }
}