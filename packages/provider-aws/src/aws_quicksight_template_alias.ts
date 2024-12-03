import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsQuicksightTemplateAliasArgs {
  alias_name: string;
  template_id: string;
  template_version_number: number;
}
export class aws_quicksight_template_alias extends TerraformResource {
  readonly arn!: string;
  readonly aws_account_id?: string;
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsQuicksightTemplateAliasArgs) {
    super(config, "resource", args, resourceName, "aws_quicksight_template_alias");
  }
}