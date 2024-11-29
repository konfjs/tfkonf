import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEvidentlySegmentArgs {
  description?: string;
  name: string;
  pattern: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_evidently_segment extends TerraformResource {
  readonly arn!: string;
  readonly created_time!: string;
  readonly experiment_count!: number;
  readonly id?: string;
  readonly last_updated_time!: string;
  readonly launch_count!: number;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEvidentlySegmentArgs) {
    super(config, "resource", args, resourceName, "aws_evidently_segment");
  }
}