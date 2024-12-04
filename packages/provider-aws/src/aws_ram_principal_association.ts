import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRamPrincipalAssociationArgs {
  principal: string;
  resource_share_arn: string;
}

export class aws_ram_principal_association extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsRamPrincipalAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_ram_principal_association");
  }
}
