import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAppconfigConfigurationProfileArgsvalidator {
  content?: string;
  type: string;
}
export interface AwsAppconfigConfigurationProfileArgs {
  application_id: string;
  description?: string;
  kms_key_identifier?: string;
  location_uri: string;
  name: string;
  retrieval_role_arn?: string;
  tags?: {
    [key: string]: string;
  };
  type?: string;
  validator: AwsAppconfigConfigurationProfileArgsvalidator;
}
export class aws_appconfig_configuration_profile extends TerraformResource {
  readonly arn!: string;
  readonly configuration_profile_id!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppconfigConfigurationProfileArgs) {
    super(config, "resource", args, resourceName, "aws_appconfig_configuration_profile");
  }
}