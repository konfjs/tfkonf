import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRoute53domainsDelegationSignerRecordArgsSigningAttributes {
  algorithm: number;
  flags: number;
  public_key: string;
}
export interface AwsRoute53domainsDelegationSignerRecordArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsRoute53domainsDelegationSignerRecordArgs {
  domain_name: string;
  signing_attributes: AwsRoute53domainsDelegationSignerRecordArgsSigningAttributes;
  timeouts: AwsRoute53domainsDelegationSignerRecordArgstimeouts;
}
export class aws_route53domains_delegation_signer_record extends TerraformResource {
  readonly dnssec_key_id!: string;
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53domainsDelegationSignerRecordArgs) {
    super(config, "resource", args, resourceName, "aws_route53domains_delegation_signer_record");
  }
}