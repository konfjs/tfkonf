import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOrganizationsPolicyAttachmentArgs {
  policy_id: string;
  skip_destroy?: boolean;
  target_id: string;
}

export class aws_organizations_policy_attachment extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsOrganizationsPolicyAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_organizations_policy_attachment");
  }
}
