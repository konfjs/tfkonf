import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsAppsyncApiCacheArgs {
  api_caching_behavior: string;
  api_id: string;
  at_rest_encryption_enabled?: boolean;
  transit_encryption_enabled?: boolean;
  ttl: number;
  type: string;
}
export class aws_appsync_api_cache extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppsyncApiCacheArgs) {
    super(config, "resource", args, resourceName, "aws_appsync_api_cache");
  }
}