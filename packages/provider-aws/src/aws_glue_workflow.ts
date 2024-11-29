import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsGlueWorkflowArgs {
  default_run_properties?: {
    [key: string]: string;
  };
  description?: string;
  max_concurrent_runs?: number;
  name?: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_glue_workflow extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlueWorkflowArgs) {
    super(config, "resource", args, resourceName, "aws_glue_workflow");
  }
}