import { TerraformConfig, TerraformResource } from "tfs";
export interface PreProvisioningHook {
  payload_version?: string;
  target_arn: string;
}
export interface AwsIotProvisioningTemplateArgs {
  description?: string;
  enabled?: boolean;
  name: string;
  provisioning_role_arn: string;
  tags?: {
    [key: string]: string;
  };
  template_body: string;
  pre_provisioning_hook: PreProvisioningHook;
}
export class aws_iot_provisioning_template extends TerraformResource {
  readonly arn!: string;
  readonly default_version_id!: number;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly type?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIotProvisioningTemplateArgs) {
    super(config, "resource", args, resourceName, "aws_iot_provisioning_template");
  }
}