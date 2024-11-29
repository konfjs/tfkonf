import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsLakeformationResourceArgs {
  arn: string;
  use_service_linked_role?: boolean;
}
export class aws_lakeformation_resource extends TerraformResource {
  readonly hybrid_access_enabled?: boolean;
  readonly id?: string;
  readonly last_modified!: string;
  readonly role_arn?: string;
  readonly with_federation?: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLakeformationResourceArgs) {
    super(config, "resource", args, resourceName, "aws_lakeformation_resource");
  }
}