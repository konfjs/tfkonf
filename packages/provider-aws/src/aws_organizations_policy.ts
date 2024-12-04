import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOrganizationsPolicyArgs {
  content: string;
  description?: string;
  name: string;
  skip_destroy?: boolean;
  tags?: { [key: string]: string };
  type?: string;
}

export class aws_organizations_policy extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsOrganizationsPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_organizations_policy");
  }
}
