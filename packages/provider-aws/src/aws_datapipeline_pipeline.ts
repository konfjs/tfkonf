import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDatapipelinePipelineArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_datapipeline_pipeline extends TerraformResource {
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDatapipelinePipelineArgs) {
    super(config, "resource", args, resourceName, "aws_datapipeline_pipeline");
  }
}