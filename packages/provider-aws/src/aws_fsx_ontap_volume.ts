import { TerraformConfig, TerraformResource } from "tfs";
export interface AggregateConfiguration {}
export interface AutocommitPeriod {
  value?: number;
}
export interface DefaultRetention {
  value?: number;
}
export interface MaximumRetention {
  value?: number;
}
export interface MinimumRetention {
  value?: number;
}
export interface RetentionPeriod {
  default_retention: DefaultRetention;
  maximum_retention: MaximumRetention;
  minimum_retention: MinimumRetention;
}
export interface SnaplockConfiguration {
  audit_log_volume?: boolean;
  privileged_delete?: string;
  snaplock_type: string;
  volume_append_mode_enabled?: boolean;
  autocommit_period: AutocommitPeriod;
  retention_period: RetentionPeriod;
}
export interface TieringPolicy {}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsFsxOntapVolumeArgs {
  bypass_snaplock_enterprise_retention?: boolean;
  copy_tags_to_backups?: boolean;
  final_backup_tags?: {
    [key: string]: string;
  };
  junction_path?: string;
  name: string;
  skip_final_backup?: boolean;
  storage_efficiency_enabled?: boolean;
  storage_virtual_machine_id: string;
  tags?: {
    [key: string]: string;
  };
  volume_type?: string;
  aggregate_configuration: AggregateConfiguration;
  snaplock_configuration: SnaplockConfiguration;
  tiering_policy: TieringPolicy;
  timeouts: Timeouts;
}
export class aws_fsx_ontap_volume extends TerraformResource {
  readonly arn!: string;
  readonly file_system_id!: string;
  readonly flexcache_endpoint_type!: string;
  readonly id?: string;
  readonly ontap_volume_type?: string;
  readonly security_style?: string;
  readonly size_in_bytes?: string;
  readonly size_in_megabytes?: number;
  readonly snapshot_policy?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly uuid!: string;
  readonly volume_style?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsFsxOntapVolumeArgs) {
    super(config, "resource", args, resourceName, "aws_fsx_ontap_volume");
  }
}