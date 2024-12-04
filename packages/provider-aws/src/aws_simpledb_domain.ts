import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSimpledbDomainArgs {
  name: string;
}

export class aws_simpledb_domain extends TerraformResource {
  readonly id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsSimpledbDomainArgs) {
    super(config, "resource", args, resourceName, "aws_simpledb_domain");
  }
}
