import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsMediaStoreContainerArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_media_store_container extends TerraformResource {
  readonly arn!: string;
  readonly endpoint!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsMediaStoreContainerArgs) {
    super(config, "resource", args, resourceName, "aws_media_store_container");
  }
}