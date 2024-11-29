import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRoute53TrafficPolicyInstanceArgs {
  hosted_zone_id: string;
  name: string;
  traffic_policy_id: string;
  traffic_policy_version: number;
  ttl: number;
}
export class aws_route53_traffic_policy_instance extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53TrafficPolicyInstanceArgs) {
    super(config, "resource", args, resourceName, "aws_route53_traffic_policy_instance");
  }
}