import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsMskClusterPolicyArgs {
  cluster_arn: string;
  policy: string;
}
export class aws_msk_cluster_policy extends TerraformResource {
  readonly current_version!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsMskClusterPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_msk_cluster_policy");
  }
}