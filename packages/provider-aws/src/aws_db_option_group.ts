import { TerraformConfig, TerraformResource } from "tfs";
export interface OptionSettings {
  name: string;
  value: string;
}
export interface Option {
  db_security_group_memberships?: string[];
  option_name: string;
  port?: number;
  version?: string;
  vpc_security_group_memberships?: string[];
  option_settings: OptionSettings;
}
export interface Timeouts {
  delete?: string;
}
export interface AwsDbOptionGroupArgs {
  engine_name: string;
  major_engine_version: string;
  option_group_description?: string;
  skip_destroy?: boolean;
  tags?: {
    [key: string]: string;
  };
  option: Option;
  timeouts: Timeouts;
}
export class aws_db_option_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDbOptionGroupArgs) {
    super(config, "resource", args, resourceName, "aws_db_option_group");
  }
}