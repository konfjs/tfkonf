import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsStoragegatewayCacheArgs {
  disk_id: string;
  gateway_arn: string;
}

export class aws_storagegateway_cache extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsStoragegatewayCacheArgs) {
    super(config, "resource", args, resourceName, "aws_storagegateway_cache");
  }
}
