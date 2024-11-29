import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIamOrganizationsFeaturesArgs {
  enabled_features: string[];
}
export class aws_iam_organizations_features extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamOrganizationsFeaturesArgs) {
    super(config, "resource", args, resourceName, "aws_iam_organizations_features");
  }
}