import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRedshiftHsmConfigurationArgs {
  description: string;
  hsm_configuration_identifier: string;
  hsm_ip_address: string;
  hsm_partition_name: string;
  hsm_partition_password: string;
  hsm_server_public_certificate: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_redshift_hsm_configuration extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftHsmConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_hsm_configuration");
  }
}