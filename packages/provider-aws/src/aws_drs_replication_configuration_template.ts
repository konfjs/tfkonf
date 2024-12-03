import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsDrsReplicationConfigurationTemplateArgsPitPolicy {
  enabled?: boolean;
  interval: number;
  retention_duration: number;
  rule_id?: number;
  units: string;
}
export interface AwsDrsReplicationConfigurationTemplateArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsDrsReplicationConfigurationTemplateArgs {
  associate_default_security_group: boolean;
  bandwidth_throttling: number;
  create_public_ip: boolean;
  data_plane_routing: string;
  default_large_staging_disk_type: string;
  ebs_encryption: string;
  ebs_encryption_key_arn?: string;
  replication_server_instance_type: string;
  replication_servers_security_groups_ids: string[];
  staging_area_subnet_id: string;
  staging_area_tags: {
    [key: string]: string;
  };
  tags?: {
    [key: string]: string;
  };
  use_dedicated_replication_server: boolean;
  pit_policy: AwsDrsReplicationConfigurationTemplateArgsPitPolicy;
  timeouts?: AwsDrsReplicationConfigurationTemplateArgsTimeouts;
}
export class aws_drs_replication_configuration_template extends TerraformResource {
  readonly arn!: string;
  readonly auto_replicate_new_disks?: boolean;
  readonly id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDrsReplicationConfigurationTemplateArgs) {
    super(config, "resource", args, resourceName, "aws_drs_replication_configuration_template");
  }
}