import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsDbSubnetGroupArgs {
  description?: string;
  subnet_ids: string[];
  tags?: {
    [key: string]: string;
  };
}
export class aws_db_subnet_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly supported_network_types!: string[];
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDbSubnetGroupArgs) {
    super(config, "resource", args, resourceName, "aws_db_subnet_group");
  }
}