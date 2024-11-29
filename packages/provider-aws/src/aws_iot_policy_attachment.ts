import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIotPolicyAttachmentArgs {
  policy: string;
  target: string;
}
export class aws_iot_policy_attachment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIotPolicyAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_iot_policy_attachment");
  }
}