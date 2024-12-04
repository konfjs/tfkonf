import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailDomainEntryArgs {
  domain_name: string;
  is_alias?: boolean;
  name: string;
  target: string;
  type: string;
}

export class aws_lightsail_domain_entry extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailDomainEntryArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_domain_entry");
  }
}
