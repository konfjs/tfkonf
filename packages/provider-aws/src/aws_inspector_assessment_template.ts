import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsInspectorAssessmentTemplateArgsEventSubscription {
  event: string;
  topic_arn: string;
}

export interface AwsInspectorAssessmentTemplateArgs {
  duration: number;
  name: string;
  rules_package_arns: string[];
  tags?: { [key: string]: string };
  target_arn: string;
  event_subscription: AwsInspectorAssessmentTemplateArgsEventSubscription;
}

export class aws_inspector_assessment_template extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsInspectorAssessmentTemplateArgs) {
    super(config, "resource", args, resourceName, "aws_inspector_assessment_template");
  }
}
