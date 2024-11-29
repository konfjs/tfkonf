import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSesv2DedicatedIpAssignmentArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsSesv2DedicatedIpAssignmentArgs {
  destination_pool_name: string;
  ip: string;
  timeouts: AwsSesv2DedicatedIpAssignmentArgsTimeouts;
}
export class aws_sesv2_dedicated_ip_assignment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesv2DedicatedIpAssignmentArgs) {
    super(config, "resource", args, resourceName, "aws_sesv2_dedicated_ip_assignment");
  }
}