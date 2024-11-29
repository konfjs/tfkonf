import { TerraformConfig, TerraformResource } from "tfs";
export interface EncryptionConfiguration {
  kms_key: string;
}
export interface HealthCheckConfiguration {
  healthy_threshold?: number;
  interval?: number;
  path?: string;
  protocol?: string;
  timeout?: number;
  unhealthy_threshold?: number;
}
export interface InstanceConfiguration {
  cpu?: string;
  instance_role_arn?: string;
  memory?: string;
}
export interface EgressConfiguration {
  vpc_connector_arn?: string;
}
export interface IngressConfiguration {
  is_publicly_accessible?: boolean;
}
export interface NetworkConfiguration {
  ip_address_type?: string;
  egress_configuration: EgressConfiguration;
  ingress_configuration: IngressConfiguration;
}
export interface ObservabilityConfiguration {
  observability_configuration_arn?: string;
  observability_enabled: boolean;
}
export interface AuthenticationConfiguration {
  access_role_arn?: string;
  connection_arn?: string;
}
export interface CodeConfigurationValues {
  build_command?: string;
  port?: string;
  runtime: string;
  runtime_environment_secrets?: {
    [key: string]: string;
  };
  runtime_environment_variables?: {
    [key: string]: string;
  };
  start_command?: string;
}
export interface CodeConfiguration {
  configuration_source: string;
  code_configuration_values: CodeConfigurationValues;
}
export interface SourceCodeVersion {
  type: string;
  value: string;
}
export interface CodeRepository {
  repository_url: string;
  code_configuration: CodeConfiguration;
  source_code_version: SourceCodeVersion;
}
export interface ImageConfiguration {
  port?: string;
  runtime_environment_secrets?: {
    [key: string]: string;
  };
  runtime_environment_variables?: {
    [key: string]: string;
  };
  start_command?: string;
}
export interface ImageRepository {
  image_identifier: string;
  image_repository_type: string;
  image_configuration: ImageConfiguration;
}
export interface SourceConfiguration {
  auto_deployments_enabled?: boolean;
  authentication_configuration: AuthenticationConfiguration;
  code_repository: CodeRepository;
  image_repository: ImageRepository;
}
export interface AwsApprunnerServiceArgs {
  service_name: string;
  tags?: {
    [key: string]: string;
  };
  encryption_configuration: EncryptionConfiguration;
  health_check_configuration: HealthCheckConfiguration;
  instance_configuration: InstanceConfiguration;
  network_configuration: NetworkConfiguration;
  observability_configuration: ObservabilityConfiguration;
  source_configuration: SourceConfiguration;
}
export class aws_apprunner_service extends TerraformResource {
  readonly arn!: string;
  readonly auto_scaling_configuration_arn?: string;
  readonly id?: string;
  readonly service_id!: string;
  readonly service_url!: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsApprunnerServiceArgs) {
    super(config, "resource", args, resourceName, "aws_apprunner_service");
  }
}