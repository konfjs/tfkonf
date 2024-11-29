import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsAppsyncTypeArgs {
  api_id: string;
  definition: string;
  format: string;
}
export class aws_appsync_type extends TerraformResource {
  readonly arn!: string;
  readonly description!: string;
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppsyncTypeArgs) {
    super(config, "resource", args, resourceName, "aws_appsync_type");
  }
}