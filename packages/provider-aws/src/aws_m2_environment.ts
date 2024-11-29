import { TerraformConfig, TerraformResource } from "tfs";
export interface HighAvailabilityConfig {
  desired_capacity: number;
}
export interface Efs {
  file_system_id: string;
  mount_point: string;
}
export interface Fsx {
  file_system_id: string;
  mount_point: string;
}
export interface StorageConfiguration {
  efs: Efs;
  fsx: Fsx;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsM2EnvironmentArgs {
  apply_changes_during_maintenance_window?: boolean;
  description?: string;
  engine_type: string;
  force_update?: boolean;
  instance_type: string;
  kms_key_id?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  high_availability_config: HighAvailabilityConfig;
  storage_configuration: StorageConfiguration;
  timeouts: Timeouts;
}
export class aws_m2_environment extends TerraformResource {
  readonly arn!: string;
  readonly engine_version?: string;
  readonly environment_id!: string;
  readonly id!: string;
  readonly load_balancer_arn!: string;
  readonly preferred_maintenance_window?: string;
  readonly publicly_accessible?: boolean;
  readonly security_group_ids?: string[];
  readonly subnet_ids?: string[];
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsM2EnvironmentArgs) {
    super(config, "resource", args, resourceName, "aws_m2_environment");
  }
}