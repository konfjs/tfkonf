import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsMedialiveInputSecurityGroupArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsMedialiveInputSecurityGroupArgsWhitelistRules {
  cidr: string;
}
export interface AwsMedialiveInputSecurityGroupArgs {
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsMedialiveInputSecurityGroupArgstimeouts;
  whitelist_rules: AwsMedialiveInputSecurityGroupArgsWhitelistRules;
}
export class aws_medialive_input_security_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly inputs!: string[];
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsMedialiveInputSecurityGroupArgs) {
    super(config, "resource", args, resourceName, "aws_medialive_input_security_group");
  }
}