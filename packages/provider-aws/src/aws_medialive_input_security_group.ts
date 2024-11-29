import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface WhitelistRules {
  cidr: string;
}
export interface AwsMedialiveInputSecurityGroupArgs {
  tags?: {
    [key: string]: string;
  };
  timeouts: Timeouts;
  whitelist_rules: WhitelistRules;
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