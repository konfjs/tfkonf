import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEmrInstanceGroupArgsEbsConfig {
  iops?: number;
  size: number;
  type: string;
  volumes_per_instance?: number;
}
export interface AwsEmrInstanceGroupArgs {
  autoscaling_policy?: string;
  bid_price?: string;
  cluster_id: string;
  configurations_json?: string;
  ebs_optimized?: boolean;
  instance_type: string;
  name?: string;
  ebs_config: AwsEmrInstanceGroupArgsEbsConfig;
}
export class aws_emr_instance_group extends TerraformResource {
  readonly id?: string;
  readonly instance_count?: number;
  readonly running_instance_count!: number;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEmrInstanceGroupArgs) {
    super(config, "resource", args, resourceName, "aws_emr_instance_group");
  }
}