import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsDbProxyDefaultTargetGroupArgsConnectionPoolConfig {
  connection_borrow_timeout?: number;
  init_query?: string;
  max_connections_percent?: number;
  max_idle_connections_percent?: number;
  session_pinning_filters?: string[];
}
export interface AwsDbProxyDefaultTargetGroupArgsTimeouts {
  create?: string;
  update?: string;
}
export interface AwsDbProxyDefaultTargetGroupArgs {
  db_proxy_name: string;
  connection_pool_config: AwsDbProxyDefaultTargetGroupArgsConnectionPoolConfig;
  timeouts?: AwsDbProxyDefaultTargetGroupArgsTimeouts;
}
export class aws_db_proxy_default_target_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDbProxyDefaultTargetGroupArgs) {
    super(config, "resource", args, resourceName, "aws_db_proxy_default_target_group");
  }
}