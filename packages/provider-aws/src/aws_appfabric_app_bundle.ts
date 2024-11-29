import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAppfabricAppBundleArgs {
  customer_managed_key_arn?: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_appfabric_app_bundle extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppfabricAppBundleArgs) {
    super(config, "resource", args, resourceName, "aws_appfabric_app_bundle");
  }
}