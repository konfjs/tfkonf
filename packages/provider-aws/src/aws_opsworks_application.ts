import { TerraformConfig, TerraformResource } from "tfs";
export interface AppSource {
  password?: string;
  revision?: string;
  ssh_key?: string;
  type: string;
  url?: string;
  username?: string;
}
export interface Environment {
  key: string;
  secure?: boolean;
  value: string;
}
export interface SslConfiguration {
  certificate: string;
  chain?: string;
  private_key: string;
}
export interface AwsOpsworksApplicationArgs {
  auto_bundle_on_deploy?: string;
  aws_flow_ruby_settings?: string;
  data_source_arn?: string;
  data_source_database_name?: string;
  data_source_type?: string;
  description?: string;
  document_root?: string;
  domains?: string[];
  enable_ssl?: boolean;
  name: string;
  rails_env?: string;
  stack_id: string;
  type: string;
  app_source: AppSource;
  environment: Environment;
  ssl_configuration: SslConfiguration;
}
export class aws_opsworks_application extends TerraformResource {
  readonly id?: string;
  readonly short_name?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsOpsworksApplicationArgs) {
    super(config, "resource", args, resourceName, "aws_opsworks_application");
  }
}