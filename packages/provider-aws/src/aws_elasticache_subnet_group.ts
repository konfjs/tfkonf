import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElasticacheSubnetGroupArgs {
  description?: string;
  name: string;
  subnet_ids: string[];
  tags?: { [key: string]: string };
}

export class aws_elasticache_subnet_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };
  readonly vpc_id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsElasticacheSubnetGroupArgs) {
    super(config, "resource", args, resourceName, "aws_elasticache_subnet_group");
  }
}
