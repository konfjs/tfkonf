import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRoute53TrafficPolicyArgs {
  comment?: string;
  document: string;
  name: string;
}
export class aws_route53_traffic_policy extends TerraformResource {
  readonly id?: string;
  readonly type!: string;
  readonly version!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53TrafficPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_route53_traffic_policy");
  }
}