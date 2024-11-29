import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsApiGatewayRestApiArgsEndpointConfiguration {
  types: string[];
}
export interface AwsApiGatewayRestApiArgs {
  body?: string;
  fail_on_warnings?: boolean;
  name: string;
  parameters?: {
    [key: string]: string;
  };
  put_rest_api_mode?: string;
  tags?: {
    [key: string]: string;
  };
  endpoint_configuration: AwsApiGatewayRestApiArgsEndpointConfiguration;
}
export class aws_api_gateway_rest_api extends TerraformResource {
  readonly api_key_source?: string;
  readonly arn!: string;
  readonly binary_media_types?: string[];
  readonly created_date!: string;
  readonly description?: string;
  readonly disable_execute_api_endpoint?: boolean;
  readonly execution_arn!: string;
  readonly id?: string;
  readonly minimum_compression_size?: string;
  readonly policy?: string;
  readonly root_resource_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayRestApiArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_rest_api");
  }
}