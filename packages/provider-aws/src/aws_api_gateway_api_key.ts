import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsApiGatewayApiKeyArgs {
  customer_id?: string;
  description?: string;
  enabled?: boolean;
  name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_api_gateway_api_key extends TerraformResource {
  readonly arn!: string;
  readonly created_date!: string;
  readonly id?: string;
  readonly last_updated_date!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly value?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayApiKeyArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_api_key");
  }
}