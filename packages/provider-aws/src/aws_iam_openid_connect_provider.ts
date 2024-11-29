import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIamOpenidConnectProviderArgs {
  client_id_list: string[];
  tags?: {
    [key: string]: string;
  };
  thumbprint_list: string[];
  url: string;
}
export class aws_iam_openid_connect_provider extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamOpenidConnectProviderArgs) {
    super(config, "resource", args, resourceName, "aws_iam_openid_connect_provider");
  }
}