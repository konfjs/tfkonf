import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsInternetGatewayArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsInternetGatewayArgs {
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsInternetGatewayArgsTimeouts;
}
export class aws_internet_gateway extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly owner_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsInternetGatewayArgs) {
    super(config, "resource", args, resourceName, "aws_internet_gateway");
  }
}