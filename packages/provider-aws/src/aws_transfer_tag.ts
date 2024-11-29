import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsTransferTagArgs {
  key: string;
  resource_arn: string;
  value: string;
}
export class aws_transfer_tag extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsTransferTagArgs) {
    super(config, "resource", args, resourceName, "aws_transfer_tag");
  }
}