import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDaxSubnetGroupArgs {
  description?: string;
  name: string;
  subnet_ids: string[];
}

export class aws_dax_subnet_group extends TerraformResource {
  readonly id?: string;
  readonly vpc_id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsDaxSubnetGroupArgs) {
    super(config, "resource", args, resourceName, "aws_dax_subnet_group");
  }
}
