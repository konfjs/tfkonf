import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsInternetGatewayAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsInternetGatewayAttachmentArgs {
  internet_gateway_id: string;
  vpc_id: string;
  timeouts: AwsInternetGatewayAttachmentArgsTimeouts;
}
export class aws_internet_gateway_attachment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsInternetGatewayAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_internet_gateway_attachment");
  }
}