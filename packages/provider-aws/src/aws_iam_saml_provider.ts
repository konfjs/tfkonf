import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsIamSamlProviderArgs {
  name: string;
  saml_metadata_document: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_iam_saml_provider extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly valid_until!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamSamlProviderArgs) {
    super(config, "resource", args, resourceName, "aws_iam_saml_provider");
  }
}