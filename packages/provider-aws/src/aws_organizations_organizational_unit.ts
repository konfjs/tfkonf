import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsOrganizationsOrganizationalUnitArgs {
  name: string;
  parent_id: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_organizations_organizational_unit extends TerraformResource {
  readonly accounts!: any[];
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsOrganizationsOrganizationalUnitArgs) {
    super(config, "resource", args, resourceName, "aws_organizations_organizational_unit");
  }
}