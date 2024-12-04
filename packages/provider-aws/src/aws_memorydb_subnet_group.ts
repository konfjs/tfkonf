import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMemorydbSubnetGroupArgs {
  description?: string;
  subnet_ids: string[];
  tags?: { [key: string]: string };
}

export class aws_memorydb_subnet_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: { [key: string]: string };
  readonly vpc_id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsMemorydbSubnetGroupArgs) {
    super(config, "resource", args, resourceName, "aws_memorydb_subnet_group");
  }
}
