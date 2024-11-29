import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRolesanywhereProfileArgs {
  enabled?: boolean;
  managed_policy_arns?: string[];
  name: string;
  require_instance_properties?: boolean;
  role_arns?: string[];
  session_policy?: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_rolesanywhere_profile extends TerraformResource {
  readonly arn!: string;
  readonly duration_seconds?: number;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRolesanywhereProfileArgs) {
    super(config, "resource", args, resourceName, "aws_rolesanywhere_profile");
  }
}