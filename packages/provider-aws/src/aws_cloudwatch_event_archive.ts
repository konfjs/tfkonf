import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCloudwatchEventArchiveArgs {
  description?: string;
  event_pattern?: string;
  event_source_arn: string;
  name: string;
  retention_days?: number;
}
export class aws_cloudwatch_event_archive extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchEventArchiveArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_event_archive");
  }
}