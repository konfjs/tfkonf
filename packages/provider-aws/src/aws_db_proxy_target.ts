import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDbProxyTargetArgs {
  db_cluster_identifier?: string;
  db_instance_identifier?: string;
  db_proxy_name: string;
  target_group_name: string;
}

export class aws_db_proxy_target extends TerraformResource {
  readonly endpoint!: string;
  readonly id?: string;
  readonly port!: number;
  readonly rds_resource_id!: string;
  readonly target_arn!: string;
  readonly tracked_cluster_id!: string;
  readonly type!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsDbProxyTargetArgs) {
    super(config, "resource", args, resourceName, "aws_db_proxy_target");
  }
}
