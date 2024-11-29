import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEksAccessEntryArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsEksAccessEntryArgs {
  cluster_name: string;
  principal_arn: string;
  tags?: {
    [key: string]: string;
  };
  type?: string;
  timeouts: AwsEksAccessEntryArgsTimeouts;
}
export class aws_eks_access_entry extends TerraformResource {
  readonly access_entry_arn!: string;
  readonly created_at!: string;
  readonly id?: string;
  readonly kubernetes_groups?: string[];
  readonly modified_at!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly user_name?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEksAccessEntryArgs) {
    super(config, "resource", args, resourceName, "aws_eks_access_entry");
  }
}