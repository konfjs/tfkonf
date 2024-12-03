import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsOpensearchserverlessSecurityConfigArgsSamlOptions {
  group_attribute?: string;
  metadata: string;
  user_attribute?: string;
}
export interface AwsOpensearchserverlessSecurityConfigArgs {
  description?: string;
  name: string;
  type: string;
  saml_options: AwsOpensearchserverlessSecurityConfigArgsSamlOptions;
}
export class aws_opensearchserverless_security_config extends TerraformResource {
  readonly config_version!: string;
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsOpensearchserverlessSecurityConfigArgs) {
    super(config, "resource", args, resourceName, "aws_opensearchserverless_security_config");
  }
}