import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEksPodIdentityAssociationArgs {
  cluster_name: string;
  namespace: string;
  role_arn: string;
  service_account: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_eks_pod_identity_association extends TerraformResource {
  readonly association_arn!: string;
  readonly association_id!: string;
  readonly id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEksPodIdentityAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_eks_pod_identity_association");
  }
}