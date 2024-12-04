import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApprunnerServiceArgsEncryptionConfiguration {
  kms_key: string;
}

export interface AwsApprunnerServiceArgsHealthCheckConfiguration {
  healthy_threshold?: number;
  interval?: number;
  path?: string;
  protocol?: string;
  timeout?: number;
  unhealthy_threshold?: number;
}

export interface AwsApprunnerServiceArgsInstanceConfiguration {
  cpu?: string;
  instance_role_arn?: string;
  memory?: string;
}

export interface AwsApprunnerServiceArgsNetworkConfigurationEgressConfiguration {
  vpc_connector_arn?: string;
}

export interface AwsApprunnerServiceArgsNetworkConfigurationIngressConfiguration {
  is_publicly_accessible?: boolean;
}

export interface AwsApprunnerServiceArgsNetworkConfiguration {
  ip_address_type?: string;
  egress_configuration: AwsApprunnerServiceArgsNetworkConfigurationEgressConfiguration;
  ingress_configuration: AwsApprunnerServiceArgsNetworkConfigurationIngressConfiguration;
}

export interface AwsApprunnerServiceArgsObservabilityConfiguration {
  observability_configuration_arn?: string;
  observability_enabled: boolean;
}

export interface AwsApprunnerServiceArgsSourceConfigurationAuthenticationConfiguration {
  access_role_arn?: string;
  connection_arn?: string;
}

export interface AwsApprunnerServiceArgsSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {
  build_command?: string;
  port?: string;
  runtime: string;
  runtime_environment_secrets?: { [key: string]: string };
  runtime_environment_variables?: { [key: string]: string };
  start_command?: string;
}

export interface AwsApprunnerServiceArgsSourceConfigurationCodeRepositoryCodeConfiguration {
  configuration_source: string;
  code_configuration_values: AwsApprunnerServiceArgsSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues;
}

export interface AwsApprunnerServiceArgsSourceConfigurationCodeRepositorySourceCodeVersion {
  type: string;
  value: string;
}

export interface AwsApprunnerServiceArgsSourceConfigurationCodeRepository {
  repository_url: string;
  code_configuration: AwsApprunnerServiceArgsSourceConfigurationCodeRepositoryCodeConfiguration;
  source_code_version: AwsApprunnerServiceArgsSourceConfigurationCodeRepositorySourceCodeVersion;
}

export interface AwsApprunnerServiceArgsSourceConfigurationImageRepositoryImageConfiguration {
  port?: string;
  runtime_environment_secrets?: { [key: string]: string };
  runtime_environment_variables?: { [key: string]: string };
  start_command?: string;
}

export interface AwsApprunnerServiceArgsSourceConfigurationImageRepository {
  image_identifier: string;
  image_repository_type: string;
  image_configuration: AwsApprunnerServiceArgsSourceConfigurationImageRepositoryImageConfiguration;
}

export interface AwsApprunnerServiceArgsSourceConfiguration {
  auto_deployments_enabled?: boolean;
  authentication_configuration: AwsApprunnerServiceArgsSourceConfigurationAuthenticationConfiguration;
  code_repository: AwsApprunnerServiceArgsSourceConfigurationCodeRepository;
  image_repository: AwsApprunnerServiceArgsSourceConfigurationImageRepository;
}

export interface AwsApprunnerServiceArgs {
  service_name: string;
  tags?: { [key: string]: string };
  encryption_configuration: AwsApprunnerServiceArgsEncryptionConfiguration;
  health_check_configuration: AwsApprunnerServiceArgsHealthCheckConfiguration;
  instance_configuration: AwsApprunnerServiceArgsInstanceConfiguration;
  network_configuration: AwsApprunnerServiceArgsNetworkConfiguration;
  observability_configuration: AwsApprunnerServiceArgsObservabilityConfiguration;
  source_configuration: AwsApprunnerServiceArgsSourceConfiguration;
}

export class aws_apprunner_service extends TerraformResource {
  readonly arn!: string;
  readonly auto_scaling_configuration_arn?: string;
  readonly id?: string;
  readonly service_id!: string;
  readonly service_url!: string;
  readonly status!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsApprunnerServiceArgs) {
    super(config, "resource", args, resourceName, "aws_apprunner_service");
  }
}
