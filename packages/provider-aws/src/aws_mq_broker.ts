import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMqBrokerArgsConfiguration {
}

export interface AwsMqBrokerArgsEncryptionOptions {
  use_aws_owned_key?: boolean;
}

export interface AwsMqBrokerArgsLdapServerMetadata {
  hosts?: string[];
  role_base?: string;
  role_name?: string;
  role_search_matching?: string;
  role_search_subtree?: boolean;
  service_account_password?: string;
  service_account_username?: string;
  user_base?: string;
  user_role_name?: string;
  user_search_matching?: string;
  user_search_subtree?: boolean;
}

export interface AwsMqBrokerArgsLogs {
  audit?: string;
  general?: boolean;
}

export interface AwsMqBrokerArgsMaintenanceWindowStartTime {
  day_of_week: string;
  time_of_day: string;
  time_zone: string;
}

export interface AwsMqBrokerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsMqBrokerArgsUser {
  console_access?: boolean;
  groups?: string[];
  password: string;
  replication_user?: boolean;
  username: string;
}

export interface AwsMqBrokerArgs {
  apply_immediately?: boolean;
  auto_minor_version_upgrade?: boolean;
  broker_name: string;
  data_replication_primary_broker_arn?: string;
  deployment_mode?: string;
  engine_type: string;
  engine_version: string;
  host_instance_type: string;
  publicly_accessible?: boolean;
  security_groups?: string[];
  tags?: { [key: string]: string };
  configuration: AwsMqBrokerArgsConfiguration;
  encryption_options: AwsMqBrokerArgsEncryptionOptions;
  ldap_server_metadata: AwsMqBrokerArgsLdapServerMetadata;
  logs: AwsMqBrokerArgsLogs;
  maintenance_window_start_time: AwsMqBrokerArgsMaintenanceWindowStartTime;
  timeouts?: AwsMqBrokerArgsTimeouts;
  user: AwsMqBrokerArgsUser;
}

export class aws_mq_broker extends TerraformResource {
  readonly arn!: string;
  readonly authentication_strategy?: string;
  readonly data_replication_mode?: string;
  readonly id?: string;
  readonly instances!: any[];
  readonly pending_data_replication_mode!: string;
  readonly storage_type?: string;
  readonly subnet_ids?: string[];
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsMqBrokerArgs) {
    super(config, "resource", args, resourceName, "aws_mq_broker");
  }
}
