import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFsxOntapVolumeArgsAggregateConfiguration {
}

export interface AwsFsxOntapVolumeArgsSnaplockConfigurationAutocommitPeriod {
  value?: number;
}

export interface AwsFsxOntapVolumeArgsSnaplockConfigurationRetentionPeriodDefaultRetention {
  value?: number;
}

export interface AwsFsxOntapVolumeArgsSnaplockConfigurationRetentionPeriodMaximumRetention {
  value?: number;
}

export interface AwsFsxOntapVolumeArgsSnaplockConfigurationRetentionPeriodMinimumRetention {
  value?: number;
}

export interface AwsFsxOntapVolumeArgsSnaplockConfigurationRetentionPeriod {
  default_retention: AwsFsxOntapVolumeArgsSnaplockConfigurationRetentionPeriodDefaultRetention;
  maximum_retention: AwsFsxOntapVolumeArgsSnaplockConfigurationRetentionPeriodMaximumRetention;
  minimum_retention: AwsFsxOntapVolumeArgsSnaplockConfigurationRetentionPeriodMinimumRetention;
}

export interface AwsFsxOntapVolumeArgsSnaplockConfiguration {
  audit_log_volume?: boolean;
  privileged_delete?: string;
  snaplock_type: string;
  volume_append_mode_enabled?: boolean;
  autocommit_period: AwsFsxOntapVolumeArgsSnaplockConfigurationAutocommitPeriod;
  retention_period: AwsFsxOntapVolumeArgsSnaplockConfigurationRetentionPeriod;
}

export interface AwsFsxOntapVolumeArgsTieringPolicy {
}

export interface AwsFsxOntapVolumeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsFsxOntapVolumeArgs {
  bypass_snaplock_enterprise_retention?: boolean;
  copy_tags_to_backups?: boolean;
  final_backup_tags?: { [key: string]: string };
  junction_path?: string;
  name: string;
  skip_final_backup?: boolean;
  storage_efficiency_enabled?: boolean;
  storage_virtual_machine_id: string;
  tags?: { [key: string]: string };
  volume_type?: string;
  aggregate_configuration: AwsFsxOntapVolumeArgsAggregateConfiguration;
  snaplock_configuration: AwsFsxOntapVolumeArgsSnaplockConfiguration;
  tiering_policy: AwsFsxOntapVolumeArgsTieringPolicy;
  timeouts?: AwsFsxOntapVolumeArgsTimeouts;
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
  readonly tags_all?: { [key: string]: string };
  readonly uuid!: string;
  readonly volume_style?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsFsxOntapVolumeArgs) {
    super(config, "resource", args, resourceName, "aws_fsx_ontap_volume");
  }
}
