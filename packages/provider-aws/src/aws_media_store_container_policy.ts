import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMediaStoreContainerPolicyArgs {
  container_name: string;
  policy: string;
}

export class aws_media_store_container_policy extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsMediaStoreContainerPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_media_store_container_policy");
  }
}
