import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAmplifyWebhookArgs {
  app_id: string;
  branch_name: string;
  description?: string;
}
export class aws_amplify_webhook extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly url!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAmplifyWebhookArgs) {
    super(config, "resource", args, resourceName, "aws_amplify_webhook");
  }
}