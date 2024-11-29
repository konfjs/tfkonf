import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEksAddonArgsPodIdentityAssociation {
  role_arn: string;
  service_account: string;
}
export interface AwsEksAddonArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsEksAddonArgs {
  addon_name: string;
  cluster_name: string;
  preserve?: boolean;
  resolve_conflicts?: string;
  resolve_conflicts_on_create?: string;
  resolve_conflicts_on_update?: string;
  service_account_role_arn?: string;
  tags?: {
    [key: string]: string;
  };
  pod_identity_association: AwsEksAddonArgsPodIdentityAssociation;
  timeouts: AwsEksAddonArgsTimeouts;
}
export class aws_eks_addon extends TerraformResource {
  readonly addon_version?: string;
  readonly arn!: string;
  readonly configuration_values?: string;
  readonly created_at!: string;
  readonly id?: string;
  readonly modified_at!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEksAddonArgs) {
    super(config, "resource", args, resourceName, "aws_eks_addon");
  }
}