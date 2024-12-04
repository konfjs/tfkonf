import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElasticsearchDomainSamlOptionsArgsSamlOptionsIdp {
  entity_id: string;
  metadata_content: string;
}

export interface AwsElasticsearchDomainSamlOptionsArgsSamlOptions {
  enabled?: boolean;
  master_backend_role?: string;
  master_user_name?: string;
  roles_key?: string;
  session_timeout_minutes?: number;
  subject_key?: string;
  idp: AwsElasticsearchDomainSamlOptionsArgsSamlOptionsIdp;
}

export interface AwsElasticsearchDomainSamlOptionsArgsTimeouts {
  delete?: string;
  update?: string;
}

export interface AwsElasticsearchDomainSamlOptionsArgs {
  domain_name: string;
  saml_options: AwsElasticsearchDomainSamlOptionsArgsSamlOptions;
  timeouts?: AwsElasticsearchDomainSamlOptionsArgsTimeouts;
}

export class aws_elasticsearch_domain_saml_options extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsElasticsearchDomainSamlOptionsArgs) {
    super(config, "resource", args, resourceName, "aws_elasticsearch_domain_saml_options");
  }
}
