import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsQuicksightGroupArgs {
  description?: string;
  group_name: string;
  namespace?: string;
}
export class aws_quicksight_group extends TerraformResource {
  readonly arn!: string;
  readonly aws_account_id?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsQuicksightGroupArgs) {
    super(config, "resource", args, resourceName, "aws_quicksight_group");
  }
}