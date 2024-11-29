import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsOrganizationsResourcePolicyArgs {
  content: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_organizations_resource_policy extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsOrganizationsResourcePolicyArgs) {
    super(config, "resource", args, resourceName, "aws_organizations_resource_policy");
  }
}