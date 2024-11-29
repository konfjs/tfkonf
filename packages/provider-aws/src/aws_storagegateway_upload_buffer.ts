import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsStoragegatewayUploadBufferArgs {
  gateway_arn: string;
}
export class aws_storagegateway_upload_buffer extends TerraformResource {
  readonly disk_id?: string;
  readonly disk_path?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsStoragegatewayUploadBufferArgs) {
    super(config, "resource", args, resourceName, "aws_storagegateway_upload_buffer");
  }
}