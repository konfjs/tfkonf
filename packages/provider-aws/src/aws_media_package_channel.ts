import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsMediaPackageChannelArgs {
  channel_id: string;
  description?: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_media_package_channel extends TerraformResource {
  readonly arn!: string;
  readonly hls_ingest!: any[];
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsMediaPackageChannelArgs) {
    super(config, "resource", args, resourceName, "aws_media_package_channel");
  }
}