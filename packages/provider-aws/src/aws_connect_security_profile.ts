import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConnectSecurityProfileArgs {
  description?: string;
  instance_id: string;
  name: string;
  permissions?: string[];
  tags?: { [key: string]: string };
}

export class aws_connect_security_profile extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly organization_resource_id!: string;
  readonly security_profile_id!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsConnectSecurityProfileArgs) {
    super(config, "resource", args, resourceName, "aws_connect_security_profile");
  }
}
