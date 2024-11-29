import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSagemakerHumanTaskUiArgsUiTemplate {
  content?: string;
}
export interface AwsSagemakerHumanTaskUiArgs {
  human_task_ui_name: string;
  tags?: {
    [key: string]: string;
  };
  ui_template: AwsSagemakerHumanTaskUiArgsUiTemplate;
}
export class aws_sagemaker_human_task_ui extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerHumanTaskUiArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_human_task_ui");
  }
}