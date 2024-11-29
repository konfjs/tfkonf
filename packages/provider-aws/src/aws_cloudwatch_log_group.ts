import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCloudwatchLogGroupArgs {
  kms_key_id?: string;
  retention_in_days?: number;
  skip_destroy?: boolean;
  tags?: {
    [key: string]: string;
  };
}
export class aws_cloudwatch_log_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly log_group_class?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchLogGroupArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_log_group");
  }
}