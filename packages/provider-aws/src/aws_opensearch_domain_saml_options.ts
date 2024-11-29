import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsOpensearchDomainSamlOptionsArgsSamlOptionsidp {
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
  idp: AwsOpensearchDomainSamlOptionsArgsSamlOptionsidp;
}
export interface AwsOpensearchDomainSamlOptionsArgstimeouts {
  delete?: string;
  update?: string;
}
export interface AwsOpensearchDomainSamlOptionsArgs {
  domain_name: string;
  saml_options: AwsOpensearchDomainSamlOptionsArgsSamlOptions;
  timeouts: AwsOpensearchDomainSamlOptionsArgstimeouts;
}
export class aws_opensearch_domain_saml_options extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsOpensearchDomainSamlOptionsArgs) {
    super(config, "resource", args, resourceName, "aws_opensearch_domain_saml_options");
  }
}