import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLakeformationLfTagArgs {
  key: string;
  values: string[];
}

export class aws_lakeformation_lf_tag extends TerraformResource {
  readonly catalog_id?: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsLakeformationLfTagArgs) {
    super(config, "resource", args, resourceName, "aws_lakeformation_lf_tag");
  }
}
