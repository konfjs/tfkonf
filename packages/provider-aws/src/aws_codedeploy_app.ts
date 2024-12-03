import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCodedeployAppArgs {
  compute_platform?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_codedeploy_app extends TerraformResource {
  readonly application_id!: string;
  readonly arn!: string;
  readonly github_account_name!: string;
  readonly id?: string;
  readonly linked_to_github!: boolean;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodedeployAppArgs) {
    super(config, "resource", args, resourceName, "aws_codedeploy_app");
  }
}