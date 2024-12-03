import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAppsyncApiKeyArgs {
  api_id: string;
  description?: string;
  expires?: string;
}
export class aws_appsync_api_key extends TerraformResource {
  readonly api_key_id!: string;
  readonly id?: string;
  readonly key!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppsyncApiKeyArgs) {
    super(config, "resource", args, resourceName, "aws_appsync_api_key");
  }
}