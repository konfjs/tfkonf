import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53KeySigningKeyArgs {
  hosted_zone_id: string;
  key_management_service_arn: string;
  name: string;
  status?: string;
}

export class aws_route53_key_signing_key extends TerraformResource {
  readonly digest_algorithm_mnemonic!: string;
  readonly digest_algorithm_type!: number;
  readonly digest_value!: string;
  readonly dnskey_record!: string;
  readonly ds_record!: string;
  readonly flag!: number;
  readonly id?: string;
  readonly key_tag!: number;
  readonly public_key!: string;
  readonly signing_algorithm_mnemonic!: string;
  readonly signing_algorithm_type!: number;

  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53KeySigningKeyArgs) {
    super(config, "resource", args, resourceName, "aws_route53_key_signing_key");
  }
}
