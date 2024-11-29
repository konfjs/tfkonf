import { TerraformConfig, TerraformResource } from "tfs";
export interface DeltaSyncConfig {
  base_table_ttl?: number;
  delta_sync_table_name: string;
  delta_sync_table_ttl?: number;
}
export interface DynamodbConfig {
  table_name: string;
  use_caller_credentials?: boolean;
  versioned?: boolean;
  delta_sync_config: DeltaSyncConfig;
}
export interface ElasticsearchConfig {
  endpoint: string;
}
export interface EventBridgeConfig {
  event_bus_arn: string;
}
export interface AwsIamConfig {
  signing_region?: string;
  signing_service_name?: string;
}
export interface AuthorizationConfig {
  authorization_type?: string;
  aws_iam_config: AwsIamConfig;
}
export interface HttpConfig {
  endpoint: string;
  authorization_config: AuthorizationConfig;
}
export interface LambdaConfig {
  function_arn: string;
}
export interface OpensearchserviceConfig {
  endpoint: string;
}
export interface HttpEndpointConfig {
  aws_secret_store_arn: string;
  database_name?: string;
  db_cluster_identifier: string;
  schema?: string;
}
export interface RelationalDatabaseConfig {
  source_type?: string;
  http_endpoint_config: HttpEndpointConfig;
}
export interface AwsAppsyncDatasourceArgs {
  api_id: string;
  description?: string;
  name: string;
  service_role_arn?: string;
  type: string;
  dynamodb_config: DynamodbConfig;
  elasticsearch_config: ElasticsearchConfig;
  event_bridge_config: EventBridgeConfig;
  http_config: HttpConfig;
  lambda_config: LambdaConfig;
  opensearchservice_config: OpensearchserviceConfig;
  relational_database_config: RelationalDatabaseConfig;
}
export class aws_appsync_datasource extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppsyncDatasourceArgs) {
    super(config, "resource", args, resourceName, "aws_appsync_datasource");
  }
}