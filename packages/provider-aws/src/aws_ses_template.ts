import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSesTemplateArgs {
  html?: string;
  name: string;
  subject?: string;
  text?: string;
}
export class aws_ses_template extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesTemplateArgs) {
    super(config, "resource", args, resourceName, "aws_ses_template");
  }
}