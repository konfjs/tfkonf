import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsCloudhsmV2ClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsCloudhsmV2ClusterArgs {
  hsm_type: string;
  source_backup_identifier?: string;
  subnet_ids: string[];
  tags?: {
    [key: string]: string;
  };
  timeouts?: AwsCloudhsmV2ClusterArgsTimeouts;
}
export class aws_cloudhsm_v2_cluster extends TerraformResource {
  readonly cluster_certificates!: any[];
  readonly cluster_id!: string;
  readonly cluster_state!: string;
  readonly id?: string;
  readonly mode?: string;
  readonly security_group_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudhsmV2ClusterArgs) {
    super(config, "resource", args, resourceName, "aws_cloudhsm_v2_cluster");
  }
}