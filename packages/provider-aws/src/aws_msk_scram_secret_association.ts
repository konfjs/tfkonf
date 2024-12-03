import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsMskScramSecretAssociationArgs {
  cluster_arn: string;
  secret_arn_list: string[];
}
export class aws_msk_scram_secret_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsMskScramSecretAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_msk_scram_secret_association");
  }
}