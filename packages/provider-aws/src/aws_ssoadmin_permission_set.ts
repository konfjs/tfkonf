import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSsoadminPermissionSetArgsTimeouts {
  update?: string;
}
export interface AwsSsoadminPermissionSetArgs {
  description?: string;
  instance_arn: string;
  name: string;
  relay_state?: string;
  session_duration?: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsSsoadminPermissionSetArgsTimeouts;
}
export class aws_ssoadmin_permission_set extends TerraformResource {
  readonly arn!: string;
  readonly created_date!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsoadminPermissionSetArgs) {
    super(config, "resource", args, resourceName, "aws_ssoadmin_permission_set");
  }
}