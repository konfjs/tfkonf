import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAthenaDataCatalogArgs {
  description: string;
  name: string;
  parameters: {
    [key: string]: string;
  };
  tags?: {
    [key: string]: string;
  };
  type: string;
}
export class aws_athena_data_catalog extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAthenaDataCatalogArgs) {
    super(config, "resource", args, resourceName, "aws_athena_data_catalog");
  }
}