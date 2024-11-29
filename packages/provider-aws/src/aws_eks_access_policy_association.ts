import { TerraformConfig, TerraformResource } from "tfs";
export interface AccessScope {
  namespaces?: string[];
  type: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsEksAccessPolicyAssociationArgs {
  cluster_name: string;
  policy_arn: string;
  principal_arn: string;
  access_scope: AccessScope;
  timeouts: Timeouts;
}
export class aws_eks_access_policy_association extends TerraformResource {
  readonly associated_at!: string;
  readonly id?: string;
  readonly modified_at!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEksAccessPolicyAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_eks_access_policy_association");
  }
}