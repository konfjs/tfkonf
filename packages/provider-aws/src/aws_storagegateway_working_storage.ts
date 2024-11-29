import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsStoragegatewayWorkingStorageArgs {
  disk_id: string;
  gateway_arn: string;
}
export class aws_storagegateway_working_storage extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsStoragegatewayWorkingStorageArgs) {
    super(config, "resource", args, resourceName, "aws_storagegateway_working_storage");
  }
}