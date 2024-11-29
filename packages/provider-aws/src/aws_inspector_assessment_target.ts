import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsInspectorAssessmentTargetArgs {
  name: string;
  resource_group_arn?: string;
}
export class aws_inspector_assessment_target extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsInspectorAssessmentTargetArgs) {
    super(config, "resource", args, resourceName, "aws_inspector_assessment_target");
  }
}