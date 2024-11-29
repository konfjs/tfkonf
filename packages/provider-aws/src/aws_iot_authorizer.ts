import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIotAuthorizerArgs {
  authorizer_function_arn: string;
  enable_caching_for_http?: boolean;
  name: string;
  signing_disabled?: boolean;
  status?: string;
  tags?: {
    [key: string]: string;
  };
  token_key_name?: string;
  token_signing_public_keys?: {
    [key: string]: string;
  };
}
export class aws_iot_authorizer extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsIotAuthorizerArgs) {
    super(config, "resource", args, resourceName, "aws_iot_authorizer");
  }
}