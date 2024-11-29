import { TerraformConfig, TerraformResource } from "tfs";
export interface Selector {
  labels?: {
    [key: string]: string;
  };
  namespace: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsEksFargateProfileArgs {
  cluster_name: string;
  fargate_profile_name: string;
  pod_execution_role_arn: string;
  subnet_ids?: string[];
  tags?: {
    [key: string]: string;
  };
  selector: Selector;
  timeouts: Timeouts;
}
export class aws_eks_fargate_profile extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEksFargateProfileArgs) {
    super(config, "resource", args, resourceName, "aws_eks_fargate_profile");
  }
}