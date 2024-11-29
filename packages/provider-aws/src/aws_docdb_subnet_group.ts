import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDocdbSubnetGroupArgs {
  description?: string;
  subnet_ids: string[];
  tags?: {
    [key: string]: string;
  };
}
export class aws_docdb_subnet_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDocdbSubnetGroupArgs) {
    super(config, "resource", args, resourceName, "aws_docdb_subnet_group");
  }
}