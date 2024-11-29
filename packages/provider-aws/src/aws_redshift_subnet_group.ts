import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRedshiftSubnetGroupArgs {
  description?: string;
  name: string;
  subnet_ids: string[];
  tags?: {
    [key: string]: string;
  };
}
export class aws_redshift_subnet_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftSubnetGroupArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_subnet_group");
  }
}