import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsAppstreamFleetArgsComputeCapacity {
  desired_instances?: number;
  desired_sessions?: number;
}
export interface AwsAppstreamFleetArgsDomainJoinInfo {}
export interface AwsAppstreamFleetArgsVpcConfig {}
export interface AwsAppstreamFleetArgs {
  idle_disconnect_timeout_in_seconds?: number;
  instance_type: string;
  max_sessions_per_instance?: number;
  name: string;
  tags?: {
    [key: string]: string;
  };
  compute_capacity: AwsAppstreamFleetArgsComputeCapacity;
  domain_join_info: AwsAppstreamFleetArgsDomainJoinInfo;
  vpc_config: AwsAppstreamFleetArgsVpcConfig;
}
export class aws_appstream_fleet extends TerraformResource {
  readonly arn!: string;
  readonly created_time!: string;
  readonly description?: string;
  readonly disconnect_timeout_in_seconds?: number;
  readonly display_name?: string;
  readonly enable_default_internet_access?: boolean;
  readonly fleet_type?: string;
  readonly iam_role_arn?: string;
  readonly id?: string;
  readonly image_arn?: string;
  readonly image_name?: string;
  readonly max_user_duration_in_seconds?: number;
  readonly state!: string;
  readonly stream_view?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppstreamFleetArgs) {
    super(config, "resource", args, resourceName, "aws_appstream_fleet");
  }
}