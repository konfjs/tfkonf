import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSsmResourceDataSyncArgsS3Destination {
  bucket_name: string;
  kms_key_arn?: string;
  prefix?: string;
  region: string;
  sync_format?: string;
}
export interface AwsSsmResourceDataSyncArgs {
  name: string;
  s3_destination: AwsSsmResourceDataSyncArgsS3Destination;
}
export class aws_ssm_resource_data_sync extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsmResourceDataSyncArgs) {
    super(config, "resource", args, resourceName, "aws_ssm_resource_data_sync");
  }
}