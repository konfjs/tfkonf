import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsOpensearchDomainSamlOptionsArgsSamlOptionsIdp {
  entity_id: string;
  metadata_content: string;
}
export interface AwsOpensearchDomainSamlOptionsArgsSamlOptions {
  enabled?: boolean;
  master_backend_role?: string;
  master_user_name?: string;
  roles_key?: string;
  session_timeout_minutes?: number;
  subject_key?: string;
  idp: AwsOpensearchDomainSamlOptionsArgsSamlOptionsIdp;
}
export interface AwsOpensearchDomainSamlOptionsArgsTimeouts {
  delete?: string;
  update?: string;
}
export interface AwsOpensearchDomainSamlOptionsArgs {
  domain_name: string;
  saml_options: AwsOpensearchDomainSamlOptionsArgsSamlOptions;
  timeouts?: AwsOpensearchDomainSamlOptionsArgsTimeouts;
}
export class aws_opensearch_domain_saml_options extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsOpensearchDomainSamlOptionsArgs) {
    super(config, "resource", args, resourceName, "aws_opensearch_domain_saml_options");
  }
}