import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailDomainArgs {
  domain_name: string;
}

export class aws_lightsail_domain extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailDomainArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_domain");
  }
}
