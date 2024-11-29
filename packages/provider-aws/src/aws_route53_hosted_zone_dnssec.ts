import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRoute53HostedZoneDnssecArgs {
  hosted_zone_id: string;
  signing_status?: string;
}
export class aws_route53_hosted_zone_dnssec extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53HostedZoneDnssecArgs) {
    super(config, "resource", args, resourceName, "aws_route53_hosted_zone_dnssec");
  }
}