import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRamResourceAssociationArgs {
  resource_arn: string;
  resource_share_arn: string;
}

export class aws_ram_resource_association extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsRamResourceAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_ram_resource_association");
  }
}
