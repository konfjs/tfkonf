import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayClientCertificateArgs {
  description?: string;
  tags?: { [key: string]: string };
}

export class aws_api_gateway_client_certificate extends TerraformResource {
  readonly arn!: string;
  readonly created_date!: string;
  readonly expiration_date!: string;
  readonly id?: string;
  readonly pem_encoded_certificate!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayClientCertificateArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_client_certificate");
  }
}
